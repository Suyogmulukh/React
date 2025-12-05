import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Useref from "./hooks/UseRef/Useref.jsx";
import Render from "./hooks/UseRef/Render.jsx";
import UseRef2 from "./hooks/UseRef/UseRef2.jsx";
import TodoHome from "./Todo_LIsts/TodoHome.jsx";
import MainPage from "./hooks/useContexts/MainPage.jsx";
import ProductList from "./hooks/Cards/ProductLists.jsx";
import Cart from "./hooks/Cards/CartPage.jsx";
import FetchApi from "./hooks/FetchApi/fetchApi.jsx";
import FetchApiAsync from "./hooks/FetchApi/FetchApiAscyn.jsx";
import AxiosApi from "./hooks/FetchApi/AxiosApi.jsx";
import CardApi from "./hooks/FetchApi/CardApi.jsx";
import ProductPage from "./hooks/product/ProductPage.jsx";
import UseMeno from "./hooks/UseMemo/UseMeno.jsx";
import Form from "./formHandeling/Form.jsx";
import CardWeb from "./CardWeb/CardWeb.jsx";
import ProductDetails from "./CardWeb/ProductDetails.jsx";
import Counter from "./hooks/UseReducer/Counter.jsx";
import CounterObject from "./hooks/UseReducer/CounterObject.jsx";

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Useref /> */}
      {/* <Render />
      <UseRef2 /> */}
      {/* <TodoHome /> */}
      {/* <MainPage /> */}
      {/* <div style={{ display: "flex"}}>
      <ProductList />
        <Cart />
      </div> */}
      
      {/* <FetchApi /> */}
      {/* <FetchApiAsync /> */}
      {/* <AxiosApi/> */}
      {/* <CardApi /> */}
      {/* <ProductPage /> */}

      {/* <UseMeno /> */}

      {/* <Form /> */}

      {/* <Routes>
      <Route path="/" element={<CardWeb />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes> */}
      
      {/* <Counter /> */}

      <CounterObject />
      
    </div>
  );
};

export default App;
