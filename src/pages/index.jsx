import { Suspense } from "@/utils";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const Search = lazy(() => import("./search/Search"));
const Saved = lazy(() => import("./saved/Saved"));
const SingleMovie = lazy(()=> import("./single-movie/SingleMovie"));

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/movies",
          element: (
            <Suspense>
              <Movies />
            </Suspense>
          ),
        },
        {
          path: "/search/movie",
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/saved",
          element: (
            <Suspense>
              <Saved />
            </Suspense>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <Suspense>
              <SingleMovie />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default MainRouters;
