import API from "./api";

const endpoints = {
  PRODUCT: {
    LIST: "product/list/",
    CREATE: "product/create/",
    UPDATE: (id) => `product/update/${id}/`,
    DELETE: (id) => `product/delete/${id}/`,
  },
};

export default endpoints;
