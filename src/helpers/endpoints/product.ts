import { endpoint } from "helpers/endpoints";

export const product ={
    createProducts: () => `${endpoint.baseUrl}/product`,
    listProducts: () => `${endpoint.baseUrl}/product`,
    productById: (id: string) => `${endpoint.baseUrl}/product/${id}`,
};