import { PostPage } from "./components/PostPage/PostPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
