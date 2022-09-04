import { useAuth0 } from "@auth0/auth0-react";
import { LogoutRounded } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { loginAsGuest } from "../../../store/loginDialogSlice";

const SettingsList = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, logout } = useAuth0();
  const isGuest = useAppSelector((state) => state.loginDialog.guest);

  const handleGuestLogout = () => dispatch(loginAsGuest(false));

  const fontColor = "#383A47";

  const navList = [
    {
      name: "Logout",
      icon: <LogoutRounded sx={{ color: fontColor }} />,
      link: "logout",
    },
  ];

  return (
    <List>
      {navList.map((item) => (
        <ListItem
          divider
          disablePadding
          key={item.name}
          sx={{ width: "100%", borderColor: fontColor }}
        >
          {item.link !== "logout" ? (
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{ width: "100%", paddingX: 2 }}
            >
              {item.icon === null ? null : (
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              )}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ color: fontColor, align: "right" }}
              />
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={() => {
                isAuthenticated &&
                  logout({ returnTo: process.env.REACT_APP_HOSTNAME });
                isGuest && handleGuestLogout();
              }}
              sx={{ width: "100%", paddingX: 2 }}
            >
              {item.icon === null ? null : (
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              )}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  align: "right",
                  sx: { color: fontColor },
                }}
              />
            </ListItemButton>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default SettingsList;
