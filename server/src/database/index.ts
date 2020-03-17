import { connect } from "mongoose";
import { config } from "../config";

export const CBD = (uri?: string) =>
  connect(uri || config.DB.uri, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
