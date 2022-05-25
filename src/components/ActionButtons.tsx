import {
  AddBoxRounded,
  HomeRounded,
  NotificationsRounded,
  PersonRounded,
  SearchRounded,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import AlertRoundedOutlined from "../icons/AlertRoundedOutlined";
import HomeRoundedOutlined from "../icons/HomeRoundedOutlined";
import PersonRoundedOutlined from "../icons/PersonRoundedOutlined";
import SearchRoundedOutlined from "../icons/SearchRoundedOutlined";
import { updateDialogStatus } from "../store/loginDialogSlice";

const ActionButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = true;
  const iconColor = "#FAFAFA";
  const actionBtList = [
    {
      name: "Home",
      icon: <HomeRoundedOutlined sx={{ color: iconColor }} />,
      iconSelected: <HomeRounded fontSize="large" sx={{ color: iconColor }} />,
      link: "/",
    },
    {
      name: "Search",
      icon: <SearchRoundedOutlined sx={{ color: iconColor }} />,
      iconSelected: (
        <SearchRounded fontSize="large" sx={{ color: iconColor }} />
      ),
      link: "/search",
    },
    {
      name: "Create",
      icon: <AddBoxRounded sx={{ fontSize: "40px", color: iconColor }} />,
      iconSelected: (
        <AddBoxRounded sx={{ fontSize: "40px", color: iconColor }} />
      ),
      link: "/create",
    },
    {
      name: "Notifications",
      icon: <AlertRoundedOutlined sx={{ color: iconColor }} />,
      iconSelected: (
        <NotificationsRounded fontSize="large" sx={{ color: iconColor }} />
      ),
      link: "/notifications",
    },
    {
      name: "Profile",
      icon: <PersonRoundedOutlined sx={{ color: iconColor }} />,
      iconSelected: (
        <PersonRounded fontSize="large" sx={{ color: iconColor }} />
      ),
      link: "/profile",
    },
  ];

  // check if the current path matches any path in the action button list
  const location = useLocation();
  const path = location.pathname;
  // const actionButtons = actionBtList.map((button) => button.link).indexOf(path);

  // manages the active state of individual action button
  const [active, setActive] = useState(path);

  useEffect(() => {
    setActive(path);
  }, [path]);

  const handlePathChange = (_e: React.SyntheticEvent, value: string) => {
    if (!isLoggedIn && value !== "/") dispatch(updateDialogStatus(true));
    if (isLoggedIn) setActive(value);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={active}
        onChange={handlePathChange}
        sx={{ backgroundColor: "secondary.main" }}
      >
        {actionBtList.map((button) => (
          <BottomNavigationAction
            key={button.name}
            icon={active === button.link ? button.iconSelected : button.icon}
            component={Link}
            to={!isLoggedIn ? "/" : button.link}
            value={button.link}
            sx={{
              "&.Mui-selected": { paddingTop: 0 },
              padding: 0,
              minWidth: (100 / actionBtList.length).toString() + "%",
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default ActionButtons;
