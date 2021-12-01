import React from "react";
import Cheese from "../img/BaseCheese.png";
import Base from "../img/PizzaBase.png";
import Olive from "../img/Olive.png";
import Pineapple from "../img/Pineapple.png";
import Mushroom from "../img/Mushroom.png";
import Basil from "../img/Basil.png";
import Tomato from "../img/Tomato.png";
import { motion } from "framer-motion/dist/es/index";
import { useNavigate } from "react-router-dom";

export default function Customize({ ingredients, setIngredients }) {
  let navigate = useNavigate();
  const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              y: ingredients["cheese"] ? 100 : -100,
              opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="ingredients"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            inital={{ opacity: 0 }}
            animate={{
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%"></img>{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div transition={{ duration: 1 }} className="">
            <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>{" "}
        </div>
      </div>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button
          onClick={() => navigate("/checkout")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>{" "}
      </div>
    </div>
  );
}
