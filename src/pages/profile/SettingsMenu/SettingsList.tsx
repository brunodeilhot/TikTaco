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
import ThemeButton from "./ThemeButton";

const SettingsList = () => {
  const { logout } = useAuth0();
  const desktop = false;
  const desktopLg = false;

  const navList = [
    {
      name: "Logout",
      icon: <LogoutRounded color="secondary" />,
      link: "logout",
      mobile: true,
      desktop: true,
    },
  ];

  const filteredNavList = navList.filter((item) =>
    desktop ? item.desktop === true : item.mobile === true
  );

  return (
    <List
      dense={desktop && !desktopLg}
      sx={{ display: desktop ? "flex" : "initial" }}
    >
      {filteredNavList.map((item) => (
        <ListItem
          divider={!desktop}
          disablePadding
          key={item.name}
          sx={{ width: desktop ? "fit-content" : "100%" }}
        >
          {item.link !== "logout" ? (
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{ width: "100%", paddingX: desktop && !desktopLg ? 1 : 2 }}
            >
              {item.icon === null ? null : (
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              )}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ color: "secondary", align: "right" }}
              />
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={() => logout({ returnTo: window.location.origin })}
              sx={{ width: "100%", paddingX: desktop && !desktopLg ? 1 : 2 }}
            >
              {item.icon === null ? null : (
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              )}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ color: "secondary", align: "right" }}
              />
            </ListItemButton>
          )}
        </ListItem>
      ))}
      {desktop && (
        <ListItem
          disablePadding
          sx={{ width: "fit-content", marginLeft: desktopLg ? 5 : 2.5 }}
        >
          <ThemeButton />
        </ListItem>
      )}
    </List>
  );
};

export default SettingsList;
