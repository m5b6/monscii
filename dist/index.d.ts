import { ASCIIOptions, ASCIIConverter } from "./types";
export declare class Monscii implements ASCIIConverter {
    private static stylesInjected;
    private animationFrameId;
    private lastFrameTime;
    constructor();
    convertImageToASCII(imageSrc: string | File, options?: ASCIIOptions): Promise<void>;
    convertVideoToASCII(videoSrc: string, options?: ASCIIOptions): Promise<void>;
    private injectStyles;
    private loadImage;
    private readFileAsDataURL;
    private createCanvas;
    private getImageDataFromCanvas;
    private createASCIIArt;
    private generateASCIIString;
    private calculateBrightness;
    private adjustBrightness;
    private mapBrightnessToChar;
}
export default Monscii;
