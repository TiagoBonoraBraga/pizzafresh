import { endpoint } from "helpers/endpoints";

export const product ={
    createproduct: () => `${endpoint.baseUrl}/product`,
    listProduct: () => `${endpoint.baseUrl}/product`,
    productById: (id: string) => `${endpoint.baseUrl}/product/${id}`,
};