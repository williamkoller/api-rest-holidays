type EnvironmentType = {
  nodeEnv: string;
  appUrl: string;
  port: number;
  mongoUri: string;
};

export const envs = (): EnvironmentType => {
  return {
    nodeEnv: process.env.NODE_ENV,
    appUrl: process.env.APP_URL,
    port: Number(process.env.PORT),
    mongoUri: process.env.MONGODB_URI
  };
};

export default {
  folderPath: '.env',
};
