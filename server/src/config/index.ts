import "dotenv/config";

const { MONGODB_URI, PORT } = process.env;

interface IConfig {
  APP: {
    port: string | number;
  };
  DB: {
    uri: string;
  };
}

export const config: IConfig = {
  APP: {
    port: PORT || 5000
  },
  DB: {
    uri: MONGODB_URI || "mongodb://localhost:27017/demo"
  }
};
