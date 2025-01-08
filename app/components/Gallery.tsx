import { client } from '@/sanity/lib/client';
import { Gallery } from '../types'; // Adjust path if needed
import { galleryQuery } from '@/sanity/lib/queries';
import Image from 'next/image'; // Import the Image component

export async function getStaticProps() {
  const galleries: Gallery[] = await client.fetch(galleryQuery); // Explicitly type the fetched data

  return {
    props: {
      galleries,
    },
  };
}

interface GalleryPageProps {
  galleries: Gallery[]; // Add the type annotation here
}

const GalleryPage = ({ galleries }: GalleryPageProps) => {
    
  return (
    <div className="py-10 mx-auto grid grid-cols-1">
      <h1>Gallery</h1>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleries.map((gallery) => (
          <div key={gallery._id}>
            <Image
              className="w-90 object-fill rounded-lg"
              width={600}
              height={600}
              src={gallery.mainImage.asset.url}
              alt={gallery.mainImage.alt}
              priority // Optionally prioritize loading for above-the-fold images
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
