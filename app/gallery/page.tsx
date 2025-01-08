import { sanityFetch } from "@/sanity/lib/fetch";
import { galleryQuery } from "@/sanity/lib/queries";  // Make sure you have a query for galleries
import GalleryPage from "../components/Gallery";
import { Gallery } from "../types";  // Assuming you have defined a Gallery type

export default async function Home() {
  // Fetch gallery data from Sanity
  const galleries: Gallery[] = await sanityFetch({ query: galleryQuery });

  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4">
      <GalleryPage galleries={galleries} />
    </main>
  );
}
