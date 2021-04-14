import { ReactElement, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";

export default function AppRoutes(): ReactElement {
  return (
    <Suspense fallback={<LoadingModules />}>
      <div>
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}

function LoadingModules(): ReactElement {
  return <div>Loading...</div>;
}
