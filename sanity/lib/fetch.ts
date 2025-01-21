import "server-only";
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const { isEnabled: isDraftMode } = draftMode();
  const isDevelopment = process.env.NODE_ENV === "development";

  // Ensure token is available when in draft mode
  if (isDraftMode && !token) {
    throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required.");
  }

  // Default pagination params, limiting the amount of data fetched in each request
  const paginationParams = {
    skip: params.skip || 0,
    limit: params.limit || 100, // Adjust limit to balance data fetching speed
    ...params,
  };

  // Log data only in development mode (disable logging in production for speed)
  if (isDevelopment) {
    console.log("Params sent to Sanity:", paginationParams);
    console.log("Query sent to Sanity:", query);
  }

  try {
    const response = await client
      .withConfig({
        useCdn: !isDevelopment && !isDraftMode, // CDN for production (cache) and local for development
      })
      .fetch<QueryResponse>(query, paginationParams, {
        cache: isDevelopment || isDraftMode ? undefined : "force-cache", // Ensures cache is used in prod
        ...(isDraftMode && {
          token,
          perspective: "previewDrafts", // For draft data fetching
        }),
        next: {
          ...(isDraftMode && { revalidate: 30 }), // Revalidate draft content frequently
          tags,
        },
      });

    // Log the data only in development mode
    if (isDevelopment) {
      console.log("Fetched Data:", response);
    }

    // Validate response to ensure required fields are present
    if (!response || typeof response !== "object") {
      throw new Error("Invalid response format from Sanity.");
    }

    return response;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Failed to fetch data from Sanity.");
  }
}
