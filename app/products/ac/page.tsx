import ProductPage from "../components/ProductPage";

const AcPage: React.FC = () => {
  return (
    <ProductPage
      category="airConditioner"
      title="Air Conditioner"
      bannerImageDesktop="/images/AcBanner.webp"
      bannerImageMobile="/images/AcBannerPhone.webp"
    />
  );
};

export default AcPage;
