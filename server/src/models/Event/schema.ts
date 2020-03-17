import { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  createdAt: string;
  updatedAt: string;
}

export const userSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    eventDate: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
