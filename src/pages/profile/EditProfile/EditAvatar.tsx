import { Avatar, Grid, Typography } from "@mui/material";
import { avatarPath } from "../../../env";

interface Props {
    picture: string;
}

const EditAvatar: React.FC<Props> = ({picture}) => {
  return (
    <Grid container item flexDirection="column" flexWrap="nowrap" alignItems="center">
        <Avatar
        alt="edit avatar"
          src={`${avatarPath}/${picture}`}
          sx={{
            width: 90,
            height: 90,
            border: "3px solid",
            borderColor: "primary.main",
          }}
        />
    <Typography pt={1}>
          Change picture
    </Typography>
    </Grid>
  );
};

export default EditAvatar;
