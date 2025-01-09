import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

// Use the write token from environment variables
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_WRITE_TOKEN, // Securely load the token
});
