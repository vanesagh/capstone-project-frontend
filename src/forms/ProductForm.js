import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, TextField } from '@mui/material';

export default function ProductForm({ onSubmit, editValues }) {
    const defaultValues = {
        name: "",
        imageUrl: "",
        description: "",
        price: "",
    };

    const productFormSchema = yup.object().shape({
        name: yup.string().required('Campo obligatorio.Escribe el nombre del producto.'),
        imageUrl: yup.string().required('Campo obligatorio.Escribe la liga de la imagen.'),
        description: yup.string().required('Campo obligatorio.Escribe la descripción del producto.'),
        price: yup.string().required('Campo obligatorio.Escribe el precio del producto.'),


    });
    const { control, watch, reset, handleSubmit } = useForm({
        defaultValues: editValues || defaultValues,
        resolver: yupResolver(productFormSchema),
        mode: 'all',
    });

    return (
        <form
            id='product-form'
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '24px' }}

        >
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Nombre del producto'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={10}>
                    <Controller
                        control={control}
                        name='description'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Descripción'
                                variant='outlined'
                                fullWidth
                                multiline
                                minRows={2}
                                maxRows={3}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Controller
                        control={control}
                        name='imageUrl'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Liga a la imagen'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={10}>
                    <Controller
                        control={control}
                        name='price'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Precio'
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