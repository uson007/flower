import React from "react";
import { Routes, Route } from "react-router-dom";
import Basket from "../components/basket/Basket";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/basket",
      element: <Basket />,
      id: 1,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
