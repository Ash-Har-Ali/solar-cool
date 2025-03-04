import ProductPage from "../components/ProductPage";

const CoolerPage: React.FC = () => {
  return (
    <ProductPage
      category="cooler"
      title="Air Cooler"
      bannerImageDesktop="/images/CoolerBanner.webp"
      bannerImageMobile="/images/CoolerBannerPhone.webp"
    />
  );
};

export default CoolerPage;
