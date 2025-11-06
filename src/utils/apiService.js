import API from "./api";
import endpoints from "./endpoint";

export const productList = () => {
  API.get(endpoints.PRODUCT.LIST);
};

export const productCreate = (data) => {
  API.post(endpoints.PRODUCT.CREATE, data);
};

export const productUpdate = (id, data) => {
  API.put(endpoints.PRODUCT.UPDATE(id), data);
};

export const productDelete = (id) => {
  API.delete(endpoints.PRODUCT.DELETE(id));
};
