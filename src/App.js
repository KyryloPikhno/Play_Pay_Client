import {Route,Routes} from "react-router-dom";
import {MainLayout} from "./layouts";

import {AccountPage, HomePage} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/home'} element={<HomePage/>}/>
        <Route path={'/table'} element={<AccountPage/>}/>
      </Route>
    </Routes>
)}

export default App;

