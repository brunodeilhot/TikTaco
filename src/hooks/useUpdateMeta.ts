import { useEffect } from "react";
import { useAppDispatch } from ".";
import services from "../services";
import { discovAddRecipes, followAddRecipes } from "../store/feedSlice";
import { updateUser } from "../store/userSlice";

const useUpdateMeta= (userEmail: string, userId: string, toggle?: boolean): void => {
  const dispatch = useAppDispatch();
  const { findUserByEmail, feedRecipes } = services;

  useEffect(() => {
    findUserByEmail(userEmail).then((response) => {
      if (typeof response === "string") return;
      dispatch(updateUser(response));
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
