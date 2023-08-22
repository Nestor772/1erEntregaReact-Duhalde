import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <nav>
      <h3>Comercio Electronico</h3>
      <div>
        <button>Celulares</button>
        <button>Notebooks</button>
        <button>Televisores</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
