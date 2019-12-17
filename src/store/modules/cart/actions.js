export function addtoCartRequest(id) {
  return {
    type: "@cart/ADD_REQUEST",
    id
  };
}

export function addtoCartSucess(product) {
  return {
    type: "@cart/ADD_SUCESS",
    product
  };
}

export function removefromCart(id) {
  return {
    type: "@cart/REMOVE",
    id
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    id,
    amount
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    id,
    amount
  };
}
