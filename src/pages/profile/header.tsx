import { Grid, Typography } from "@mui/material"


const Header = () =>  {

    return (
        <Grid container item>
            <Grid container item>
                <Grid item>
                    <Typography variant="h1" component="h5">{}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header