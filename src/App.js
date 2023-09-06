import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
      />
    </div>
  );
};

export default App;
