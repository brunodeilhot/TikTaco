import { Avatar, Grid, IconButton } from "@mui/material";
import ProfileFollow from "../../../icons/ProfileFollow";

interface Props {
    handleClickAvatar: () => void;
    handleClickFollow: () => void;
    username: string;
    picture: string;
    avatarPath: string;
}

const ProfileBt: React.FC<Props> = ({handleClickAvatar, username, picture, avatarPath, handleClickFollow}) => (
    <Grid item position="relative" mb={2}>
    <IconButton onClick={handleClickAvatar}>
      <Avatar
        alt={username}
        src={`${avatarPath}/${picture}`}
        sx={{ width: 66, height: 66, border: "3px solid #FFF" }}
      />
    </IconButton>
    <IconButton
      onClick={handleClickFollow}
      sx={{ position: "absolute", padding: 0, bottom: 0, left: 31 }}
    >
      <ProfileFollow viewBox="0 0 16 16" fontSize="small" />
    </IconButton>
  </Grid>
)

export default ProfileBt;