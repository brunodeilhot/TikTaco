import { CopyrightRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Logo from "../../../assets/Logo.svg"

const About = () => {
    // const { desktop } = useSelector((state) => state.mediaqueries);
    const desktop = false;
  
    // Font and Icon colors change based on return value of the mediaquery
    const fontColor = desktop ? "text.primary" : "secondary.main";
    const iconColor = desktop ? "primary" : "secondary";
  
    return (
      <Grid
        container
        height="100%"
        width="fit-content"
        flexDirection="column"
        justifyContent="flex-end"
        m={2.5}
        color={fontColor}
      >
        {!desktop && (
          <Grid container flexDirection="column">
            <Box
              component="img"
              height={35}
              width={52}
              src={Logo}
              alt="whatsinmypantry smiling taco logo"
            />
            <Typography variant="h5" component="h2" paddingY={1}>
              about
            </Typography>
          </Grid>
        )}
        <Typography variant="body2" component="p" pb={1}>
          TikTaco is a social media for the culinary lovers inspired by the well known app TikTok.
        </Typography>
        <Typography variant="body2" component="p">
          This web app was created as a final project for a FullStack Web Developer course.
        </Typography>
        <Box component="footer" mt={4}>
          <Grid container>
            <IconButton
              href="https://www.linkedin.com/in/brunodeilhot/"
              target="_blank"
            >
              <LinkedIn color={iconColor} fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/brunodeilhot" target="_blank">
              <GitHub color={iconColor} sx={{ fontSize: 35 }} />
            </IconButton>
          </Grid>
          <Typography
            variant="body2"
            component="p"
            display="flex"
            alignItems="center"
          >
            TikTaco by Bruno Deilhot
            <CopyrightRounded fontSize="small" sx={{ marginX: 0.5 }} />
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Grid>
    );
  };
  
  export default About;