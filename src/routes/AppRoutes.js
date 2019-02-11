import Profile from "../components/Profile/Profile";
import Post from "../components/Post/Post";

const appRoutes = [
  {
    path: "/",
    component: Profile,
  },
  {
    path: "/p/:id",
    component: Post,
  }
];

export default appRoutes;
