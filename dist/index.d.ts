import { ASCIIOptions, ASCIIConverter } from "./types";
export declare class Monscii implements ASCIIConverter {
    private static stylesInjected;
    constructor();
    convertImageToASCII(imageSrc: string | File, options?: ASCIIOptions): Promise<void>;
    private injectStyles;
    private loadImage;
    private readFileAsDataURL;
    private createCanvas;
    private getImageDataFromCanvas;
    private createASCIIArt;
    private calculateBrightness;
    private mapBrightnessToChar;
}
export default Monscii;
