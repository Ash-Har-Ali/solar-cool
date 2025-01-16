import { Gallery } from '../types';
import Image from 'next/image';
import banner from '../../public/images/banner3.png';

interface GalleryPageProps {
  galleries: Gallery[];  // Add the type annotation here
}

const GalleryPage = ({ galleries }: GalleryPageProps) => {
  return (
    <div className="py-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Banner Section */}
      <div className="relative mb-12">
      <Image
          src={banner}
          alt="Banner"
          className={` w-full object-cover`}
        />
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          <h1>Gallery</h1>
        </div>
      </div>

      {/* Title Section */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12 tracking-wide transition-all duration-500 transform hover:scale-105">
        Explore Our Stunning Collection of Art
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {galleries.map((gallery) => (
          <div
            key={gallery._id}
            className="group flex justify-center overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Image with Hover Effect */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                width={600}
                height={600}
                src={gallery.mainImage.asset.url}
                alt={gallery.mainImage.alt}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
