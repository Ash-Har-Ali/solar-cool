import ProductPage from "../components/ProductPage";

const TelevisionPage: React.FC = () => {
  return (
    <ProductPage
      category="television"
      title="Television"
      bannerImageDesktop="/images/TvBanner.webp"
      bannerImageMobile="/images/TvBannerPhone.webp"
    />
  );
};

export default TelevisionPage;
