import ProductPage from "../components/ProductPage";
import banner from "../../../public/images/banner-products.webp";

const TelevisionPage: React.FC = () => {
  return <ProductPage category="airconditioner" bannerImage={banner} />;
};

export default TelevisionPage;
