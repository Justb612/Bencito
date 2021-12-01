import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Customize from "./Components/Customize";
import Checkout from "./Components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  console.log("");
  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route
            path="/checkout"
            element={<Checkout ingredients={ingredients} />}
          />
          <Route
            path="/"
            element={
              <Customize
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
