import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought"; // CUSTOM DATA MODEL
import Section5 from "../section-5";
// ==============================================================
export default function ProductDetailsPageView(props) {
  return <Container className="mt-2 mb-2">
      <ProductIntro product={props.product} />
      <ProductTabs />
      <Section5 /> {/* BEST SELLER PRODUCTS */}
      {/* <FrequentlyBought products={props.frequentlyBought} /> */}
      {/* <AvailableShops />
      <RelatedProducts products={props.relatedProducts} /> */}
    </Container>;
}