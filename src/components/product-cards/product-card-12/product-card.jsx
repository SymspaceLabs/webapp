import Link from "next/link";
import Rating from "@mui/material/Rating"; // GLOBAL CUSTOM COMPONENTS

import { H6 } from "../../../components/Typography";
import LazyImage from "../../../components/LazyImage";
import { FlexBox } from "../../../components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "../../../lib"; // STYLED COMPONENTS

import { PriceText } from "./styles"; // CUSTOM DATA MODEL

// ==============================================================
export default function ProductCard12({
  product
}) {
  const {
    slug,
    title,
    thumbnail,
    // price,
    // discount,
    // rating
  } = product || {};
  return <Link href={`/products/${slug}`}>
      <FlexBox sx={{ py:5 }} bgcolor="#353535" borderRadius={3} alignItems="center" flexDirection="column" justifyContent="center" height="calc(100% - 74px)">
        <LazyImage alt={title} width={10} height={10} sx={{ width:'40px', height:'40px'}} src={thumbnail} />
        <H6 sx={{ color:'#fff' }}>{title}</H6>
      </FlexBox>
      {/* 
      <div>
        <Rating readOnly value={rating} size="small" precision={0.5} />
        <H6 fontSize={17} fontWeight={700}>
          {title}
        </H6>

        <PriceText>
          {discount ? <span className="base-price">{currency(price)}</span> : null}
          {calculateDiscount(price, discount)}
        </PriceText>
      </div>
      */}
    </Link>;
}