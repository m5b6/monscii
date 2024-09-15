export interface ASCIIOptions {
    width?: number;
    targetElement?: HTMLElement;
    color?: boolean;
    charSet?: string;
}
export interface ASCIIConverter {
    convertImageToASCII(imageSrc: string | File, options?: ASCIIOptions): Promise<void>;
}
