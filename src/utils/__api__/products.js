import { cache } from "react";
import axios from "../../utils/axiosInstance";
// get all product slug
const getSlugs = cache(async () => {
  const response = await axios.get("/api/products/slug-list");
  return response.data;
}); // get product based on slug

const getProduct = cache(async () => {
  try {
    const response = await axios.get("http://localhost:3000/products/");
    return response.data;
  } catch (error) {
    console.log("Error Fetching Product => ", error);
  }
});

const getProductBySlug = cache(async slug => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${slug}`);
    console.log("Response Value => ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error Fetching Product by slug => ", error);
  }
    
});
// const getProduct = cache(async slug => {
//   const response = await axios.get("/api/products/slug", {
//     params: {
//       slug
//     }
//   });
//   return response.data;
// }); // search products

const searchProducts = cache(async (name, category) => {
  const response = await axios.get("/api/products/search", {
    params: {
      name,
      category
    }
  });
  console.log(response.data);
  return response.data;
});
export default {
  getSlugs,
  getProduct,
  searchProducts,
  getProductBySlug
};