export interface ASCIIOptions {
    width?: number;
    targetElement?: HTMLElement;
    charSet?: string;
    sensitivity?: number;
    fps?: number;
    playbackSpeed?: number;
}
export interface ASCIIConverter {
    convertImageToASCII(imageSrc: string | File, options?: ASCIIOptions): Promise<void>;
}
