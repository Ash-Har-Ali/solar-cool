import ProductsGrid from "./ProductsGrid";

const PopularProducts: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[560px] ">
      <div className="absolute inset-0 bg-[#e7e7e7]" />
      <div className="absolute left-1/2 top-[50px] transform -translate-x-1/2 text-center text-[#000000] text-[34px] font-semibold font-['Montserrat'] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-8">
        Popular Products
      </div>
      <div className="absolute left-1/2 top-[180px] transform -translate-x-1/2 flex flex-col items-center space-y-6">
        <div className="text-white/60 text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-bold font-['Montserrat']">
          Explore
        </div>
      </div>
      <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-full">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default PopularProducts;