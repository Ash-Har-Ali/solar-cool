import ProductPage from "../components/ProductPage";

const WashingMachinePage: React.FC = () => {
  return (
    <ProductPage
      category="washingMachine"
      title="Washing Machine"
      bannerImageDesktop="/images/WashingMachineBanner.webp"
      bannerImageMobile="/images/WashingMachineBannerPhone.webp"
    />
  );
};

export default WashingMachinePage;
