import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function CustomerOrderForm({ itemsList, setItemsList }) {
    const router = useRouter();
    const defaultValues = {
        name: "",
        street: "",
        number: "",
        colonia: "",
        zipCode: "",
        orderList: itemsList,
    };

    const customerOrderFormSchema = yup.object().shape({
        name: yup.string().required('Campo obligatorio.Escribe tu nombre.'),
        street: yup.string().required('Campo obligatorio.Escribe la calle.'),
        number: yup.string().required('Campo obligatorio.Escribe el numero.'),
        colonia: yup.string().required('Campo obligatorio.Escribe la colonia.'),
        zipCode: yup.string().required('Campo obligatorio.Escribe el código postal.'),
        number: yup.string().required('Campo obligatorio.Escribe el numero.'),
        orderList: yup.array().min(1, "Al menos debes pedir un producto.").required(),

    });



    const { control, watch, reset, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(customerOrderFormSchema),
        mode: 'all',
    });




    const onSubmit = data => {
        setValue("orderList", itemsList,
            { shouldValidate: true, })

        console.log(data)
        reset();
        setItemsList([]);
        router.push("/");


    }

    return (
        <form
            id='customerOrder-form'



        >
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={10}>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Nombre Completo'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Controller
                        control={control}
                        name='street'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Calle'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        control={control}
                        name='number'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Número'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Controller
                        control={control}
                        name='colonia'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Colonia'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        control={control}
                        name='zipCode'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='C.P.'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <p>{errors.orderList?.message}</p>
                </Grid>
                <Grid
                    item sx={12}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleSubmit(onSubmit)}
                    >
                        Ordenar pedido
                    </Button>

                </Grid>
            </Grid>
        </form >
    );

};