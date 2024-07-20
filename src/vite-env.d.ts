/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_FB_APIKEY: string;
    readonly VITE_FB_AUTHDOMAIN: string;
    readonly VITE_FB_PROJECTID: string;
    readonly VITE_FB_STORAGEBUCKET: string;
    readonly VITE_FB_MESSAGINGSENDERID: string;
    readonly VITE_FB_APPID: string;
    readonly VITE_FB_MEASUREMENTID: string;
    // Add more environment variables as needed.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }