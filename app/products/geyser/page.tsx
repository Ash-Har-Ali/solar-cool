import ProductPage from "../components/ProductPage";

const GeyserPage: React.FC = () => {
  return (
    <ProductPage
      category="waterGeyser"
      title="Water Geyser"
      bannerImageDesktop="/images/GeyserBanner.webp"
      bannerImageMobile="/images/GeyserBannerPhone.webp"
    />
  );
};

export default GeyserPage;
