import { Model } from "mongoose";
import { Event } from "./Event";
import { IEvent } from "./Event/schema";

export interface IModels {
  Event: Model<IEvent, {}>;
}

export const models: IModels = {
  Event
};
