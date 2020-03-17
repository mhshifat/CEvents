import { model } from "mongoose";
import { IEvent, userSchema } from "./schema";

export const Event = model<IEvent>("Event", userSchema);
