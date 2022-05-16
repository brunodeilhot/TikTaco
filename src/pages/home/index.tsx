import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import ActionButtons from "../../components/ActionButtons";
import useViewHeight from "../../hooks/useViewHeight";
import { IRecipePreview } from "../../models/recipe";
import Recipe from "./Recipe";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  updateFollowActRec,
  updateDiscovActRec,
  followAddRecipes,
  updateActiveFeed,
  discovAddRecipes,
} from "../../store/feedSlice";
import FeedTabs from "../../components/FeedTabs";
import { updateDialogStatus } from "../../store/loginDialogSlice";
import Loading from "../../components/Loading";
import services from "../../services";
import NoFollows from "../../components/NoFollows";
import { updateUser } from "../../store/userSlice";

const Home = () => {
  const { feedRecipes, findUserByEmail } = services;
  const [isLoading, setLoading] = useState(false);
  const viewHeight = useViewHeight();
  const feed = useAppSelector((state) => state.feed.activeFeed);
  const followActiveRecipe = useAppSelector(
    (state) => state.feed.followActiveRecipe
  );
  const discovActiveRecipe = useAppSelector(
    (state) => state.feed.discovActiveRecipe
  );
  const recipes = useAppSelector((state) =>
    feed === 0 ? state.feed.followRecipes : state.feed.discovRecipes
  );

  const dispatch = useAppDispatch();

  const isLoggedIn = true;
  const userEmail = "maria@fakemail.com";

  useEffect(() => {
    findUserByEmail(userEmail).then((response) => {
      if (typeof response === "string") return;
      dispatch(updateUser(response))
    })
  }, [dispatch, findUserByEmail])

  useEffect(() => {
    setLoading(true);

    feedRecipes().then((response) => {
      if (typeof response === "string") return;
      dispatch(discovAddRecipes(response));
    });

    feedRecipes(10, "626675d1c2ee3c90b785c9e0")
      .then((response) => {
        if (typeof response === "string") return;
        dispatch(followAddRecipes(response));
      })
      .finally(() => setLoading(false));
  }, [dispatch, feedRecipes]);

  const changeFeed = (_event: React.SyntheticEvent, newFeed: number) => {
    if (newFeed === 0 && !isLoggedIn) {
      dispatch(updateDialogStatus(true));
      return;
    }
    dispatch(updateActiveFeed(newFeed));
  };

  if (isLoading) return <Loading />;

  return (
    <Grid container>
      <FeedTabs feed={feed} changeFeed={changeFeed} />

      {recipes.length === 0 && feed === 0 && <NoFollows />}

      {recipes.length > 0 && (
        <Swiper
          style={{ width: "100%" }}
          height={viewHeight}
          modules={[Keyboard]}
          direction={"vertical"}
          keyboard={{
            enabled: true,
          }}
          onRealIndexChange={(swiper) => {
            setTimeout(() => {
              dispatch(
                feed === 0
                  ? updateFollowActRec(swiper.activeIndex)
                  : updateDiscovActRec(swiper.activeIndex)
              );
            }, 100);
          }}
          initialSlide={feed === 0 ? followActiveRecipe : discovActiveRecipe}
          observer
          onObserverUpdate={(swiper) => {
            feed === 0
              ? swiper.slideTo(followActiveRecipe, 0, true)
              : swiper.slideTo(discovActiveRecipe, 0, true);
          }}
        >
          {recipes.map((recipe: IRecipePreview) => (
            <SwiperSlide key={recipe._id}>
              <Recipe recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <ActionButtons />
    </Grid>
  );
};

export default Home;
