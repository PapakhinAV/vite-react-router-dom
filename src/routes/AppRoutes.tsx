import { Routes, Route } from 'react-router-dom';
import {Page as About} from "../pages/about/index.page";
import {Page as Home} from "../pages/home/index.page";
import {Page} from "../pages/index/index.page";
import {FC} from "react";


const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
