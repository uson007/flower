import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useState, createContext, useContext, useReducer } from "react";
import { db } from "../firebase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const productCollectionRef = collection(db, "product");

  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }

  async function readProduct() {
    let data = await getDocs(productCollectionRef);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  }

  //! PAGINATION

  //! PAGINATION

  const values = {
    addProduct,
    readProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
