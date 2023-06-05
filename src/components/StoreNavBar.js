
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Tooltip from '@mui/material/Tooltip';
import { green, pink } from '@mui/material/colors';
import { useRouter } from "next/router";

export default function StoreNavBar({ itemsList }) {
    const router = useRouter();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Repostería Ángeles
                    </Typography>
                    <Avatar sx={{ bgcolor: green[500] }}>{itemsList.length}</Avatar>
                    <Tooltip title="Ir a la caja ">
                        <IconButton onClick={() => router.push("/checkout")}>
                            <Avatar sx={{ bgcolor: pink[500] }}>
                                <ShoppingCartCheckoutIcon />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}