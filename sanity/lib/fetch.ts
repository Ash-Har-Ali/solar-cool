import "server-only";
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const draftModeStatus = draftMode();
  const isDraftMode = draftModeStatus.isEnabled;

  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  // Explicit pagination with defaults for skip and limit
  const paginationParams = {
    skip: params.skip || 0,
    limit: params.limit || 700,  // You can adjust the limit if needed
    ...params,
  };

  console.log("Params sent to Sanity:", paginationParams); // Log the params
  console.log("Query sent to Sanity:", query); // Log the query

  try {
    const response = await client
      .withConfig({ useCdn: !isDevelopment && !isDraftMode })
      .fetch<QueryResponse>(query, paginationParams, {
        cache: isDevelopment || isDraftMode ? undefined : "force-cache",
        ...(isDraftMode && {
          token: token,
          perspective: "previewDrafts",
        }),
        next: {
          ...(isDraftMode && { revalidate: 30 }),
          tags,
        },
      });

    console.log("Fetched Data:", response); // Log the data fetched from Sanity

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
