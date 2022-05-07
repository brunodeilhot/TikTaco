import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import ActionButtons from "../../components/ActionButtons";
import useViewHeight from "../../hooks/useViewHeight";
import { IRecipePreview } from "../../models/recipe";
import Recipe from "./Recipe";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateActiveRecipe } from "../../store/followingFeedSlice";
import FeedTabs from "../../components/FeedTabs";

const Home = () => {
  const [recipes, setRecipes] = useState<IRecipePreview[]>([]);
  const [feed, setFeed] = useState<number>(1);
  const viewHeight = useViewHeight();
  const activeRecipe = useAppSelector(
    (state) => state.followingFeed.activeRecipe
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRecipes([
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
    ]);
  }, []);

  const changeFeed = (_event: React.SyntheticEvent, newFeed: number) => {
    setFeed(newFeed);
  };

  return (
    <div>
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
            dispatch(updateActiveRecipe(swiper.activeIndex))
          }
          initialSlide={activeRecipe}
        >
          {recipes.map((recipe: IRecipePreview) => (
            <SwiperSlide key={recipe._id}>
              <Recipe recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>

        <ActionButtons />
      </Grid>
    </div>
  );
};

export default Home;
