import ProductPage from "../components/ProductPage";
import banner from "../../../public/images/banner-ac.svg"; // Television banner image

const TelevisionPage: React.FC = () => {
  return <ProductPage category="television" bannerImage={banner} />;
};

export default TelevisionPage;
