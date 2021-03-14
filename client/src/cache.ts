import { InMemoryCache, Reference } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        categories: {
          keyArgs: false,
          merge(existing, incoming) {
            let categories: Reference[] = [];
            if (existing && existing.categories) {
              categories = categories.concat(existing.categories);
            }
            if (incoming && incoming.categories) {
              categories = categories.concat(incoming.categories);
            }
            return {
              ...incoming,
              categories,
            };
          },
        },
      },
    },
  },
});
