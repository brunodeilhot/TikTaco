import { useEffect } from "react";
import { useAppDispatch } from "./index";
import services from "../services";
import { discovAddRecipes, followAddRecipes } from "../store/feedSlice";
import { updateStoredUser } from "../store/userSlice";

const useUpdateMeta= (userEmail: string, userId: string, toggle?: boolean): void => {
  const dispatch = useAppDispatch();
  const { findUserByEmail, feedRecipes } = services;

  useEffect(() => {
    findUserByEmail(userEmail).then((response) => {
      if (typeof response === "string") return;
      dispatch(updateStoredUser(response));
    });
  }, [dispatch, findUserByEmail, userEmail, toggle]);

  useEffect(() => {

    feedRecipes().then((response) => {
      if (typeof response === "string") return;
      dispatch(discovAddRecipes(response));
    });

    feedRecipes(10, userId)
      .then((response) => {
        if (typeof response === "string") return;
        dispatch(followAddRecipes(response));
      })
  }, [dispatch, feedRecipes, toggle, userId]);

};

export default useUpdateMeta;
