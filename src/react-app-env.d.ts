/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'stage';
        readonly SERVER_URL: string;
        readonly REACT_APP_GOOGLE_OAUTH_CLIENT_ID: string;
        readonly REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET: string;
    }
}
