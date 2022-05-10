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
} from "../../store/feedSlice";
import FeedTabs from "../../components/FeedTabs";

const Home = () => {
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

  useEffect(() => {
    dispatch(
      followAddRecipes([
        {
          _id: "1",
          title: "Recipe 1",
          picture: "123456.png",
          meta: { likes: ["50"] },
        },
        {
          _id: "2",
          title: "Recipe 2",
          picture: "22222.png",
          meta: { likes: ["88"] },
        },
        {
          _id: "3",
          title: "Recipe 3",
          picture: "123456.png",
          meta: { likes: ["50"] },
        },
        {
          _id: "4",
          title: "Recipe 4",
          picture: "22222.png",
          meta: { likes: ["88"] },
        },
        {
          _id: "5",
          title: "Recipe 5",
          picture: "123456.png",
          meta: { likes: ["50"] },
        },
        {
          _id: "6",
          title: "Recipe 6",
          picture: "22222.png",
          meta: { likes: ["88"] },
        },
        {
          _id: "7",
          title: "Recipe 7",
          picture: "123456.png",
          meta: { likes: ["50"] },
        },
        {
          _id: "8",
          title: "Recipe 8",
          picture: "22222.png",
          meta: { likes: ["88"] },
        },
      ])
    );
  }, [dispatch]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  const changeFeed = (_event: React.SyntheticEvent, newFeed: number) => {
    dispatch(updateActiveFeed(newFeed));
  };

  return (
    <Grid container>
      <FeedTabs feed={feed} changeFeed={changeFeed} />

      <Swiper
        style={{ width: "100%" }}
        height={viewHeight}
        modules={[Keyboard]}
        direction={"vertical"}
        keyboard={{
          enabled: true,
        }}
        onActiveIndexChange={(swiper) =>
          dispatch(
            feed === 0
              ? updateFollowActRec(swiper.activeIndex)
              : updateDiscovActRec(swiper.activeIndex)
          )
        }
        initialSlide={feed === 0 ? followActiveRecipe : discovActiveRecipe}
      >
        {recipes.map((recipe: IRecipePreview) => (
          <SwiperSlide key={recipe._id}>
            <Recipe recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ActionButtons />
    </Grid>
  );
};

export default Home;
