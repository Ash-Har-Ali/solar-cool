import { Gallery } from '../types';  
import Image from 'next/image';


interface GalleryPageProps {
  galleries: Gallery[];  // Add the type annotation here
}

const GalleryPage = ({ galleries }: GalleryPageProps) => {
  return (
    <div className="py-10 mx-auto max-w-screen-xl px-4">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {galleries.map((gallery) => (
          <div key={gallery._id} className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              width={600}
              height={600}
              src={gallery.mainImage.asset.url}
              alt={gallery.mainImage.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
