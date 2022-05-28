import { Grid } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper";
import ActionButtons from "../../components/ActionButtons";
import useViewHeight from "../../hooks/useViewHeight";
import { IRecipePreview } from "../../models/recipe";
import Recipe from "./Recipe";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  updateFollowActRec,
  updateDiscovActRec,
  updateActiveFeed,
} from "../../store/feedSlice";
import FeedTabs from "../../components/FeedTabs";
import { updateDialogStatus } from "../../store/loginDialogSlice";
import Loading from "../../components/Loading";
import NoFollows from "../../components/NoFollows";
import useUpdateMeta from "../../hooks/useUpdateMeta";
import useLoading from "../../hooks/useLoading";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PublicProfile from "./PublicProfile";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, halfAuth } = useAuth();

  isAuthenticated && halfAuth && navigate("/create-profile");

  const userEmail = user && user.email;

  const [toggle, setToggle] = useState(false);
  useUpdateMeta(userEmail, toggle);

  const { viewHeight } = useViewHeight();

  const feed = useAppSelector((state) => state.feed.activeFeed);
  const followActiveRecipe = useAppSelector(
    (state) => state.feed.discovActiveRecipe
  );
  const discovActiveRecipe = useAppSelector(
    (state) => state.feed.discovActiveRecipe
  );
  const recipes = useAppSelector((state) =>
    feed === 0 ? state.feed.followRecipes : state.feed.discovRecipes
  );

  const isLoadingFeed = useLoading(recipes.length);

  /**
   * Function responsible for changing between discover and following feed
   */
  const changeFeed = (_event: React.SyntheticEvent, newFeed: number) => {
    if (newFeed === 0 && !isAuthenticated) {
      dispatch(updateDialogStatus(true));
      return;
    }
    dispatch(updateActiveFeed(newFeed));
  };

  /**
   * Function and state management of public profile drawer
   */
  const [publicProfile, setPublicProfile] = useState<boolean>(false);
  const [publicUser, setPublicUser] = useState<string>();

  const returnToHome = (event: React.SyntheticEvent, id?: string) => {
    setPublicProfile(!publicProfile);
    id && setPublicUser(id);
  };

  if (isLoadingFeed && feed === 1) return <Loading />;

  return (
    <Grid container>
      <FeedTabs feed={feed} changeFeed={changeFeed} />

      {recipes.length === 0 && feed === 0 && <NoFollows />}

      {recipes.length > 0 && (
        <Swiper
          style={{ width: "100%" }}
          height={viewHeight}
          modules={[Keyboard, Mousewheel]}
          direction={"vertical"}
          keyboard
          mousewheel
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
              <Recipe
                recipe={recipe}
                setToggle={setToggle}
                returnToHome={returnToHome}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <PublicProfile
        returnToHome={returnToHome}
        publicProfile={publicProfile}
        publicUser={publicUser}
      />
      <ActionButtons />
    </Grid>
  );
};

export default Home;
