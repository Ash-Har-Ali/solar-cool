export interface Gallery {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
}
