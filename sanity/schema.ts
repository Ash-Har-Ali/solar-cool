import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import user from "./schemas/user";
import products from "./schemas/products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, products, user]
};
