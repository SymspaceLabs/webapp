
// import IndexPageView from "../pages-sections/landing/page-view";
import FurnitureTwoPageView from "../pages-sections/furniture-2/page-view";
import ShopLayout3 from "../components/layouts/shop-layout-3";

export const metadata = {
  title: "Symspace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default function IndexPage() {
  // return <IndexPageView />;


  return (
    <ShopLayout3>
      <FurnitureTwoPageView />
    </ShopLayout3>
  )


}