// types.ts
import { TypedObject } from "@portabletext/types";

// Interface for a Post object
export interface PostType {
  title: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  authorName?: string;
  publishedAt: string;
  body: TypedObject[]; // PortableText blocks
}


// types.ts or gallery-types.ts (or in the same file, depending on your structure)
export interface Gallery {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
}
