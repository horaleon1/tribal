import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Businesses from "./components/Business/Business";
import Home from "./components/Home/Home";
import LayoutSidebar from "./components/Layouts/LayoutSidebar/LayoutSidebar";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutSidebar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/business/:business" component={Businesses} />
          <Route component={NotFound} />
        </Switch>
      </LayoutSidebar>
    </Router>
  );
}

export default App;
