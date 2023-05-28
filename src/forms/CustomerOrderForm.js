import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, TextField } from '@mui/material';

export default function CustomerOrderForm({ }) {
    const defaultValues = {
        name: "",
        street: "",
        number: "",
        colonia: "",
        zipCode: "",
        orderList: [],
    };

    const customerOrderFormSchema = yup.object().shape({
        name: yup.string().required('Campo obligatorio.Escribe tu nombre.'),
        street: yup.string().required('Campo obligatorio.Escribe la calle.'),
        number: yup.string().required('Campo obligatorio.Escribe el numero.'),
        colonia: yup.string().required('Campo obligatorio.Escribe la colonia.'),
        zipCode: yup.string().required('Campo obligatorio.Escribe el código postal.'),
        number: yup.string().required('Campo obligatorio.Escribe el numero.'),
        orderList: yup.array().min(1, "Debes arreglar al menos un item a la lista.")

    });
    const { control } = useForm({
        defaultValues,
        resolver: yupResolver(customerOrderFormSchema),
        mode: 'all',
    });

    return (
        <form>
            <Grid container spacing={2}>
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

            </Grid>
        </form >
    );

};