import { useReducer, useMemo } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const makeNewItems = (items, item) => {
  const targetIdx = items.findIndex((prevItem) => prevItem.id === item.id);
  if (targetIdx === -1) return [...items, item];
  const newArray = [...items];
  newArray[targetIdx].amount += item.amount;
  return newArray;
};

const cartReducer = (state, action) => {
  let updatedTotalAmount;
  switch (action.type) {
    case "ADD_ITEM":
      updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: makeNewItems(state.items, action.payload),
        totalAmount: updatedTotalAmount,
      };
    case "DELETE_ITEM":
      const deletedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      updatedTotalAmount =
        state.totalAmount - state.items[deletedItemIndex].price;
      if (state.items[deletedItemIndex].amount > 1) {
        const newItems = [...state.items];
        const newItem = { ...newItems[deletedItemIndex] };
        newItem.amount -= 1;
        newItems[deletedItemIndex] = newItem;
        return {
          items: newItems,
          totalAmount: updatedTotalAmount,
        };
      }
      return {
        items: state.items.filter((item) => item.id !== action.payload),
        totalAmount: updatedTotalAmount,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "DELETE_ITEM", payload: id });
  };

  const cartContext = useMemo(
    () => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem,
      removeItem,
    }),
    [cartState]
  );
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
