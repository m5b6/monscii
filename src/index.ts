import { ASCIIOptions, ASCIIConverter } from "./types";

export class Monscii implements ASCIIConverter {
  private static stylesInjected = false;
  private animationFrameId: number | null = null;

  constructor() {
    if (!Monscii.stylesInjected) {
      this.injectStyles();
      Monscii.stylesInjected = true;
    }
  }

  async convertImageToASCII(
    imageSrc: string | File,
    options: ASCIIOptions = {}
  ): Promise<void> {
    const {
      width = 100,
      targetElement = document.body,
      charSet = " .,:;i1tfLCG08@",
    } = options;

    try {
      const img = await this.loadImage(imageSrc);
      const canvas = this.createCanvas(img.width, img.height, width);
      const imageData = this.getImageDataFromCanvas(canvas, img);

      const asciiElement = this.createASCIIArt(imageData, charSet);
      targetElement.appendChild(asciiElement);
    } catch (error) {
      console.error("Error converting image to ASCII:", error);
      throw error;
    }
  }

  async convertVideoToASCII(
    videoSrc: string,
    options: ASCIIOptions = {}
  ): Promise<void> {
    const {
      width = 100,
      targetElement = document.body,
      charSet = " .,:;i1tfLCG08@",
    } = options;

    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "Anonymous";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    // Wait for the video metadata to be loaded
    await new Promise<void>((resolve, reject) => {
      video.onloadedmetadata = () => {
        resolve();
      };
      video.onerror = () => {
        reject(new Error("Failed to load the video"));
      };
    });

    const canvas = this.createCanvas(
      video.videoWidth,
      video.videoHeight,
      width
    );
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get canvas context");
    }

    const asciiElement = document.createElement("div");
    asciiElement.className = "monscii-art";
    targetElement.appendChild(asciiElement);

    const renderFrame = () => {
      if (video.paused || video.ended) {
        return;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const asciiString = this.generateASCIIString(imageData, charSet);
      asciiElement.innerHTML = asciiString;

      this.animationFrameId = requestAnimationFrame(renderFrame);
    };

    video.play();
    renderFrame();

    // Handle video pause and end
    video.onpause = () => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    };

    video.onended = () => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    };
  }

  private injectStyles(): void {
    const style = document.createElement("style");
    style.id = "monscii-styles";
    style.textContent = `
      .monscii-art {
        font-family: monospace;
        font-size: 7px;
        line-height: 5px;
        color: #fff;
        background-color: #000;
        margin: 0;
        padding: 0;
        user-select: none;
        white-space: pre;
        display: block;
      }
    `;
    document.head.appendChild(style);
  }

  private async loadImage(imageSrc: string | File): Promise<HTMLImageElement> {
    const img = new Image();
    img.crossOrigin = "Anonymous";

    if (imageSrc instanceof File) {
      img.src = await this.readFileAsDataURL(imageSrc);
    } else {
      img.src = imageSrc;
    }

    return new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Failed to load the image"));
    });
  }

  private readFileAsDataURL(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read the file"));
      reader.readAsDataURL(file);
    });
  }

  private createCanvas(
    originalWidth: number,
    originalHeight: number,
    targetWidth: number
  ): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    const aspectRatio = originalHeight / originalWidth;
    canvas.width = targetWidth;
    canvas.height = targetWidth * aspectRatio;
    return canvas;
  }

  private getImageDataFromCanvas(
    canvas: HTMLCanvasElement,
    image: HTMLImageElement
  ): ImageData {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get canvas context");
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  private createASCIIArt(imageData: ImageData, charSet: string): HTMLElement {
    const asciiString = this.generateASCIIString(imageData, charSet);

    const asciiElement = document.createElement("div");
    asciiElement.className = "monscii-art";
    asciiElement.innerHTML = asciiString;

    return asciiElement;
  }

  private generateASCIIString(imageData: ImageData, charSet: string): string {
    const { width, height, data } = imageData;

    let asciiString = "";

    for (let y = 0; y < height; y++) {
      let line = "";
      for (let x = 0; x < width; x++) {
        const offset = (y * width + x) * 4;
        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const brightness = this.calculateBrightness(r, g, b);
        const asciiChar = this.mapBrightnessToChar(brightness, charSet);
        line += asciiChar;
      }
      asciiString += line + "<br>";
    }

    return asciiString;
  }

  private calculateBrightness(r: number, g: number, b: number): number {
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  private mapBrightnessToChar(brightness: number, charSet: string): string {
    const charIndex = Math.floor(((charSet.length - 1) * brightness) / 255);
    return charSet.charAt(charIndex);
  }
}

export default Monscii;
