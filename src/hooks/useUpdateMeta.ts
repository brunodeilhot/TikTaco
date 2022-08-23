import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./index";
import services from "../services";
import { discovAddRecipes, followAddRecipes } from "../store/feedSlice";
import { updateStoredUser } from "../store/userSlice";

const useUpdateMeta = (
  userEmail: string | undefined,
  toggle?: boolean
): { setLimit: React.Dispatch<React.SetStateAction<number>> } => {
  const dispatch = useAppDispatch();
  const { findUserByEmail, feedRecipes } = services;
  const userId = useAppSelector((state) => state.user.user._id);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    userEmail &&
      findUserByEmail(userEmail).then((response) => {
        if (typeof response === "string") return;
        dispatch(updateStoredUser(response));
      });
  }, [dispatch, findUserByEmail, userEmail, toggle]);

  useEffect(() => {
    feedRecipes(limit).then((response) => {
      if (typeof response === "string") return;
      dispatch(discovAddRecipes(response));
    });

    feedRecipes(limit, userId).then((response) => {
      if (typeof response === "string") return;
      dispatch(followAddRecipes(response));
    });
  }, [dispatch, feedRecipes, limit, toggle, userId]);

  return { setLimit };
};

export default useUpdateMeta;
