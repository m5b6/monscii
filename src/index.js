import { generateHeroText } from "./parseFont.js";

export class Monscii {
  static stylesInjected = false;
  animationFrameId = null;
  lastFrameTime = 0;

  constructor() {
    if (!Monscii.stylesInjected) {
      this.injectStyles();
      Monscii.stylesInjected = true;
    }
  }

  async convertImageToASCII(imageSrc, options = {}) {
    const {
      width = 200,
      targetElement = document.body,
      charSet = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjfti;:,`'. ",
      sensitivity = 1.0,
      hero = "",
      pixelsPerChar = 1,
    } = options;

    try {
      const img = await this.loadImage(imageSrc);
      const canvas = this.createCanvas(
        img.width,
        img.height,
        width * pixelsPerChar
      );
      const imageData = this.getImageDataFromCanvas(canvas, img);

      const asciiElement = await this.createASCIIArt(
        imageData,
        charSet,
        sensitivity,
        hero,
        pixelsPerChar
      );
      targetElement.appendChild(asciiElement);
    } catch (error) {
      console.error("Error converting image to ASCII:", error);
      throw error;
    }
  }

  async convertVideoToASCII(videoSrc, options = {}) {
    const {
      width = 200,
      targetElement = document.body,
      charSet = "@%#*+=-:. ",
      sensitivity = 1.0,
      fps = 30,
      playbackSpeed = 1,
      hero = "",
      pixelsPerChar = 1,
    } = options;

    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "Anonymous";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playbackRate = playbackSpeed;

    await new Promise((resolve, reject) => {
      video.onloadedmetadata = resolve;
      video.onerror = () => reject(new Error("Failed to load the video"));
    });

    const canvas = this.createCanvas(
      video.videoWidth,
      video.videoHeight,
      width * pixelsPerChar
    );
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get canvas context");

    const asciiElement = document.createElement("div");
    asciiElement.className = "monscii-art";
    targetElement.appendChild(asciiElement);

    const frameInterval = 1000 / fps;

    const renderFrame = (currentTime) => {
      if (video.paused || video.ended) return;

      if (currentTime - this.lastFrameTime >= frameInterval) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const asciiString = this.generateASCIIString(
          imageData,
          charSet,
          sensitivity,
          hero,
          pixelsPerChar
        );
        asciiElement.innerHTML = asciiString;
        this.lastFrameTime = currentTime;
      }

      this.animationFrameId = requestAnimationFrame(renderFrame);
    };

    video.play();
    this.animationFrameId = requestAnimationFrame(renderFrame);

    video.onpause = () => {
      if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    };

    video.onended = () => {
      if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    };
  }

  injectStyles() {
    const style = document.createElement("style");
    style.id = "monscii-styles";
    style.textContent = `
      .monscii-art {
        font-family: monospace;
        font-size: 5px;
        line-height: 5px;
        color: #fff;
        background-color: #000;
        margin: 0;
        padding: 0;
        user-select: none;
        white-space: pre;
        display: block;
        letter-spacing: 0px;
      }
    `;
    document.head.appendChild(style);
  }



  async loadImage(imageSrc) {
    const img = new Image();
    img.crossOrigin = "Anonymous";

    if (imageSrc instanceof File) {
      img.src = await this.readFileAsDataURL(imageSrc);
    } else {
      img.src = imageSrc;
    }

    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Failed to load the image"));
    });
  }

  readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Failed to read the file"));
      reader.readAsDataURL(file);
    });
  }

  createCanvas(originalWidth, originalHeight, targetWidth) {
    const canvas = document.createElement("canvas");
    const aspectRatio = originalHeight / originalWidth;
    canvas.width = targetWidth;
    canvas.height = targetWidth * aspectRatio;
    return canvas;
  }

  getImageDataFromCanvas(canvas, image) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get canvas context");
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  async createASCIIArt(imageData, charSet, sensitivity, hero, pixelsPerChar) {
    const asciiString = this.generateASCIIString(
      imageData,
      charSet,
      sensitivity,
      hero,
      pixelsPerChar
    );

    const asciiElement = document.createElement("div");
    asciiElement.className = "monscii-art";
    asciiElement.innerHTML = asciiString;

    return asciiElement;
  }

  generateASCIIString(
    imageData,
    charSet,
    sensitivity,
    heroText,
    pixelsPerChar
  ) {
    const { width, height, data } = imageData;
    const asciiWidth = Math.floor(width / pixelsPerChar);
    const asciiHeight = Math.floor(height / pixelsPerChar);

    const asciiLines = [];

    for (let y = 0; y < asciiHeight; y++) {
      let line = "";
      for (let x = 0; x < asciiWidth; x++) {
        let asciiChar = this.getAsciiCharForBlock(
          x,
          y,
          width,
          height,
          data,
          charSet,
          sensitivity,
          pixelsPerChar
        );
        line += asciiChar;
      }
      asciiLines.push(line);
    }

    if (heroText) {
      const heroArt = generateHeroText(heroText);
      const heroLines = heroArt.split("\n");

      const startY = Math.floor((asciiLines.length - heroLines.length) / 2);

      for (let i = 0; i < heroLines.length; i++) {
        const asciiIndex = startY + i;
        if (asciiIndex >= 0 && asciiIndex < asciiLines.length) {
          const lineLength = asciiLines[asciiIndex].length;
          const heroLine = heroLines[i];
          const startX = Math.floor((lineLength - heroLine.length) / 2);

          const updatedLine =
            asciiLines[asciiIndex].substring(0, startX) +
            heroLine +
            asciiLines[asciiIndex].substring(startX + heroLine.length);
          asciiLines[asciiIndex] = updatedLine;
        }
      }
    }

    return asciiLines.join("<br>");
  }

  getAsciiCharForBlock(
    blockX,
    blockY,
    width,
    height,
    data,
    charSet,
    sensitivity,
    pixelsPerChar
  ) {
    let totalBrightness = 0;
    const pixelCount = pixelsPerChar * pixelsPerChar;

    for (let y = 0; y < pixelsPerChar; y++) {
      for (let x = 0; x < pixelsPerChar; x++) {
        const pixelX = blockX * pixelsPerChar + x;
        const pixelY = blockY * pixelsPerChar + y;

        if (pixelX < width && pixelY < height) {
          const offset = (pixelY * width + pixelX) * 4;
          const r = data[offset];
          const g = data[offset + 1];
          const b = data[offset + 2];
          totalBrightness += this.calculateBrightness(r, g, b);
        }
      }
    }

    const averageBrightness = totalBrightness / pixelCount;
    const adjustedBrightness = this.adjustBrightness(
      averageBrightness,
      sensitivity
    );
    return this.mapBrightnessToChar(adjustedBrightness, charSet);
  }

  calculateBrightness(r, g, b) {
    // Using the Rec. 709 standard for luminance
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  adjustBrightness(brightness, sensitivity) {
    const factor = sensitivity;
    brightness = (brightness - 128) * factor + 128;
    brightness = Math.max(0, Math.min(255, brightness));
    return brightness;
  }

  mapBrightnessToChar(brightness, charSet) {
    const numChars = charSet.length;
    const charIndex = Math.floor((brightness / 255) * (numChars - 1));
    return charSet.charAt(numChars - charIndex - 1); // Reverse for correct mapping
  }
}

export { Monscii as default };
