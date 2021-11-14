import { PostPage } from "./components/PostPage/PostPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SinglePost } from "./components/Posts/SinglePost/SinglePost";

import "antd/dist/antd.css";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:id">
          <SinglePost />
        </Route>
        <Route path="/posts">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
