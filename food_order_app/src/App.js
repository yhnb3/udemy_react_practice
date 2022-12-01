import { Header, Meals, Cart } from "components";
import { useState } from "react";
import CartProvider from "store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const closeCart = () => {
    setIsCartShown(false);
  };
  const showCart = () => {
    setIsCartShown(true);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onClick={closeCart} />}
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
