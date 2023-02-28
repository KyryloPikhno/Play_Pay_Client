import {Route, Routes, Navigate} from "react-router-dom";
import {useEffect} from "react";

import {MainLayout} from "./layouts";
import {AccountPage, HomePage} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import icon from './images/favicon.ico';


function App() {
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'/table'}/>}/>
        <Route path={'/home'} element={<HomePage/>}/>
        <Route path={'/table'} element={<AccountPage/>}/>
      </Route>
    </Routes>
)}

export default App;

