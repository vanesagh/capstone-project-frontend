import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip, IconButton, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, pink } from '@mui/material/colors';

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function total(items) {
    return items.map((item) => item.price).reduce((sum, i) => sum + i, 0);
}


export default function CheckoutTableComponent({ itemsList, setItemsList }) {
    console.log(itemsList);
    const invoiceTotal = total(itemsList);
    console.log(invoiceTotal);
    const handleRemoveItem = (productIndex) => {
        const items = itemsList;
        console.log(productIndex);
        if (items.length > 0) {
            setItemsList(items.filter((item, index) => index !== productIndex));
        }
    };
    return (
        <TableContainer
            component={Paper}
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Detalle
                        </TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Descripción</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="center">Eliminar</TableCell>
                        <TableCell align="right">Suma</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itemsList.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell></TableCell>
                            <TableCell align="right"> <Tooltip title="Eliminar item">
                                <IconButton onClick={() => { handleRemoveItem(index) }}>
                                    <Avatar sx={{ bgcolor: pink[500] }}>
                                        <DeleteIcon fontSize='small' />
                                    </Avatar>
                                </IconButton>
                            </Tooltip></TableCell>

                            <TableCell align="right">{item.price} MXP</TableCell>
                        </TableRow>
                    ))}



                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>

                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
