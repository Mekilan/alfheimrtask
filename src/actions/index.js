import Api from "./../api/common";
export const PRO_LIST = "PRO_LIST";

export const getProductList = (querystring) => async (dispatch) => {
  const response = await Api.post(querystring);
  dispatch({ type: PRO_LIST, payload: response.data.products });
};
