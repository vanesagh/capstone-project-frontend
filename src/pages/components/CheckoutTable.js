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


const TAX_RATE = 0.07;


function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CheckoutTableComponent({ itemsList, setItemsList }) {
    console.log(itemsList);
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
                            <TableCell align="right">{item.price}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
