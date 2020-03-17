import { PubSub } from "graphql-yoga";
import { IModels } from "../models";

export interface IContext {
  models: IModels;
  pubsub: PubSub;
}
