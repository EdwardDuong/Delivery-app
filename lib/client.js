import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "xg1ofid2",
  dataset: "production",
  apiVersion: "2022-07-31",
  token:
    "skWelv5Uxpm4KAQyHN219mS741HNbga7jPv6TKVWVJynURGjpUtP6pVFmWC0ivUKls8eK6xJcz8PICOrZVAXUiVW3zthstp4lhNiaCIr4B2JeRnXvXtZX21lEQKqmTIQspRnxWkaNfJQ9O73cj0Z3iG7QAHOcMWkGzq23gGCUoIV9NJwvC2P",
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
