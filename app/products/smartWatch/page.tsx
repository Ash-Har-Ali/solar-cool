import ProductPage from "../components/ProductPage";

const SmartWatchPage: React.FC = () => {
  return (
    <ProductPage
      category="smartWatch"
      title="Smart Watch"
      bannerImageDesktop="/images/WatchBanner.webp"
      bannerImageMobile="/images/WatchBannerphone.webp"
    />
  );
};

export default SmartWatchPage;
