import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';

import post from './schemas/post';
import gallery from './schemas/gallery';
import user from './schemas/user';
// import products from './schemas/products';
import ac from './schemas/ac';
import productCategory from './schemas/product-category';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, gallery, user, productCategory, ac],
};
