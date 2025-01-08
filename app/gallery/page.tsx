import { sanityFetch } from "@/sanity/lib/fetch";
import { galleryQuery } from "@/sanity/lib/queries";  
import GalleryPage from "../components/Gallery";
import { Gallery } from "../types";  
export default async function Home() {
  // Fetch gallery data from Sanity
  const galleries: Gallery[] = await sanityFetch({ query: galleryQuery });

  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4">
      <GalleryPage galleries={galleries} />
    </main>
  );
}
