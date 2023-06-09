import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Crew = lazy(() => import("components/Crew"));
const Reviews = lazy(() => import("components/Reviews"));
const PageNotFound = lazy(() => import("components/PageNotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="crew" element={<Crew />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
