import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { join } from "path";

export const typeDefs = mergeTypes(fileLoader(join(__dirname, "**/*.graphql")));
export const resolvers = mergeResolvers(fileLoader(join(__dirname, "**/*.ts")));
