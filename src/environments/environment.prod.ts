import { AppConfig } from "src/app/config/app-config";

export const environment = {
  production: true,
  baseURI: 'http://ec2-3-139-59-21.us-east-2.compute.amazonaws.com/api/v1/',
  endpoints: AppConfig.endpoints
};
