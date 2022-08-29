import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`http://animekart.herokuapp.com/api/products`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
