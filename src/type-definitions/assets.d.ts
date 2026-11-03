declare module "*.css";
declare module "*.woff";
declare module "*.svg";
declare module "*.wasm";
declare module "*.wasm?url" {
    const url: string;
    export default url;
}
