import Content from "./content"; // API FUNCTIONS

import api from "../../../utils/__api__/furniture-2";
const items = [
  {id:1, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
  {id:2, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
  {id:3, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
  {id:4, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
  {id:5, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
  {id:6, title:'Shirts', thumbnail:'/assets/images/icons/shirt.svg', slug:'furniture'},
];


export default async function Section4() {
  // const products = await api.getTrendingProducts();
  return <Content products={items} />;
}

