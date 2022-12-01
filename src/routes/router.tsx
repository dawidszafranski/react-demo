import { createBrowserRouter, RouteObject } from "react-router-dom";
import { getPosts } from "../api/posts";
import { GlobalLayout } from "../components/GlobalLayout";
import AuthorizedPage from "./AuthorizedPage";
import { CreatePage } from "./CreatePage";
import { ListPage } from "./ListPage";
import { LoginPage } from "./LoginPage";
import { MainPage } from "./MainPage";
import { UnauthorizedPage } from "./UnauthorizedPage";

const authorizedRoutes: RouteObject[] = [
  {
    path: "/articles",
    element: <AuthorizedPage />,
    children: [
      {
        path: "/articles",
        element: <ListPage />,
        loader: getPosts,
      },
      {
        path: "/articles/create",
        element: <CreatePage />,
      },
    ],
  },
];

const unauthorizedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [...unauthorizedRoutes, ...authorizedRoutes],
  },
]);
