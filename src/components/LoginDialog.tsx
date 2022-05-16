import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateDialogStatus } from "../store/loginDialogSlice";


const LoginDialog: React.FC = () => {
  const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.loginDialog.open);

    const handleClose = () => {
        dispatch(updateDialogStatus(false))
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="login-dialog-title">
            <DialogTitle id="login-dialog-title">
                Login or Sign Up
            </DialogTitle>
            <DialogActions>
                <Button variant="outlined" autoFocus>Login</Button>
                <Button variant="outlined">Sign Up</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog;