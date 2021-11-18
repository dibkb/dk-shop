import { products } from "../../products";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ITEMS = "ADD_ITEMS";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

const initialState = {
  items: products,
  addedItems: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {


    case ADD_TO_CART:
      let payload = parseInt(action.payload);
      let addedItem = state.items.find((item) => item.id === payload);
      let existed_item = state.addedItems.find((item) => payload === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case INCREASE_ITEM:
      let itemToIncrease = state.items.find(
        (item) => item.id === parseInt(action.payload)
      );
      itemToIncrease.quantity += 1;

      let otherItemsIncrease = state.addedItems.filter(
        (item) => item.id !== itemToIncrease.id
      );

      let totalPrice = state.addedItems.reduce(function (acc, obj) {
        return acc + parseInt(obj.price) * parseInt(obj.quantity);
      }, 0);

      return {
        ...state,
        addedItems: [itemToIncrease, ...otherItemsIncrease],
        total: totalPrice,
      };

    case DECREASE_ITEM:
      let itemToDecrease = state.items.find(
        (item) => item.id === parseInt(action.payload)
      );

      if (itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;

        let otherItemsDecrease = state.addedItems.filter(
          (item) => item.id !== itemToDecrease.id
        );

        let decreaseTotal = state.addedItems.reduce(function (acc, obj) {
          return acc + parseInt(obj.price) * parseInt(obj.quantity);
        }, 0);
        // let newTotalDecrease = otherItemsDecreaseTotal + itemToDecrease.price;
        // console.log(newTotalDecrease);

        return {
          ...state,
          addedItems: [itemToDecrease, ...otherItemsDecrease],
          total: decreaseTotal,
        };
      } else {
        return state;
      }
    case DELETE_ITEM:
      let newListItems = state.addedItems.filter(
        (item) => item.id !== parseInt(action.payload)
      );
      let totalDelPrice = newListItems.reduce(function (acc, obj) {
        return acc + parseInt(obj.price) * parseInt(obj.quantity);
      }, 0);
      return {
        ...state,
        addedItems: [...newListItems],
        total: totalDelPrice,
      };

    default:
      return state;
  }
}
