import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BusinessesList from "./components/BusinessesList/BusinessesList";
import Home from "./components/Home/Home";
import LayoutSidebar from "./components/Layouts/LayoutSidebar/LayoutSidebar";
import Modal from "./components/Ui/Modal/Modal";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Modal /> */}
      <LayoutSidebar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/businesses/:slug" component={BusinessesList} />
          <Route component={NotFound} />
        </Switch>
      </LayoutSidebar>
    </Router>
  );
}

export default App;
