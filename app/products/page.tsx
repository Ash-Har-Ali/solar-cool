import { client } from "@/sanity/lib/client";
import { productCategoriesQuery } from "@/sanity/lib/queries"; // Import Sanity query
import ProductCategories from "../components/productCategories"; // React component
import { SanityDocument } from "@sanity/client";

const ProductsPage = async () => {
  // Fetch categories using the Sanity client
  const categories: SanityDocument[] = await client.fetch(productCategoriesQuery);

  return (
    <div>
      <ProductCategories categories={categories} />
    </div>
  );
};

export default ProductsPage;
