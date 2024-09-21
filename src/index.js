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
      width = 100,
      targetElement = document.body,
      charSet = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjfti;:,`'. ",
      sensitivity = 1.0,
      hero = "",
      pixelsPerChar = 1,
      color = true, // Add color option, default is true
    } = options;

    try {
      const img = await this.loadImage(imageSrc);
      const canvas = this.createCanvas(
        img.width,
        img.height,
        width * pixelsPerChar
      );
      const imageData = this.getImageDataFromCanvas(canvas, img);

      // Create a container to hold both ASCII art and hero text
      const container = document.createElement("div");
      container.style.position = "relative";
      container.style.display = "inline-block";

      let asciiElement;

      if (color) {
        asciiElement = await this.createColorASCIIArt(
          imageData,
          charSet,
          sensitivity,
          pixelsPerChar
        );
      } else {
        asciiElement = await this.createASCIIArt(
          imageData,
          charSet,
          sensitivity,
          pixelsPerChar
        );
      }

      container.appendChild(asciiElement);

      if (hero) {
        const heroElement = this.createHeroElement(
          hero,
          canvas.width,
          canvas.height
        );
        container.appendChild(heroElement);
      }

      targetElement.appendChild(container);
    } catch (error) {
      console.error("Error converting image to ASCII:", error);
      throw error;
    }
  }

  async convertVideoToASCII(videoSrc, options = {}) {
    const {
      width = 50,
      targetElement = document.body,
      charSet = "@%#*+=-:. ",
      sensitivity = 1.0,
      fps = 30,
      playbackSpeed = 1,
      hero = "",
      pixelsPerChar = 1,
      color = true, // Add color option, default is true
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

    // Create a container to hold both ASCII art and hero text
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";

    if (color) {
      // Use canvas for colored ASCII art
      const asciiCanvas = document.createElement("canvas");
      const asciiWidth = Math.floor(canvas.width / pixelsPerChar);
      const asciiHeight = Math.floor(canvas.height / pixelsPerChar);
      const charWidth = 6;
      const charHeight = 12;
      asciiCanvas.width = asciiWidth * charWidth;
      asciiCanvas.height = asciiHeight * charHeight;
      asciiCanvas.className = "monscii-art";
      const asciiContext = asciiCanvas.getContext("2d");
      asciiContext.font = `${charHeight}px monospace`;
      asciiContext.textAlign = "left";
      asciiContext.textBaseline = "top";

      container.appendChild(asciiCanvas);

      if (hero) {
        const heroElement = this.createHeroElement(
          hero,
          asciiCanvas.width,
          asciiCanvas.height
        );
        container.appendChild(heroElement);
      }

      targetElement.appendChild(container);

      const frameInterval = 1000 / fps;

      const renderFrame = (currentTime) => {
        if (video.paused || video.ended) {
          return;
        }

        if (currentTime - this.lastFrameTime >= frameInterval) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );
          asciiContext.clearRect(0, 0, asciiCanvas.width, asciiCanvas.height);
          this.generateASCIIArtOnCanvas(
            imageData,
            asciiContext,
            charSet,
            sensitivity,
            pixelsPerChar
          );
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
    } else {
      // Use plain text elements for black and white ASCII art
      const asciiElement = document.createElement("div");
      asciiElement.className = "monscii-art";
      asciiElement.style.fontFamily = "monospace";
      asciiElement.style.whiteSpace = "pre";
      asciiElement.style.lineHeight = "6px";
      asciiElement.style.fontSize = "6px";
      asciiElement.style.color = "#fff";
      asciiElement.style.backgroundColor = "black";

      container.appendChild(asciiElement);

      if (hero) {
        const heroElement = this.createHeroElement(
          hero,
          canvas.width,
          canvas.height
        );
        container.appendChild(heroElement);
      }

      targetElement.appendChild(container);

      const frameInterval = 1000 / fps;

      const renderFrame = (currentTime) => {
        if (video.paused || video.ended) {
          return;
        }

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
            "", // Hero text is handled separately
            pixelsPerChar
          );
          asciiElement.textContent = asciiString;
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
  }

  injectStyles() {
    const style = document.createElement("style");
    style.id = "monscii-styles";
    style.textContent = `
      .monscii-art {
        background-color: transparent;
        margin: 0;
        padding: 0;
        user-select: none;
        display: block;
        font-family: monospace;
        white-space: pre;
        line-height: 6px;
        font-size: 6px;
      }
      .monscii-hero {
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: 900;
        transform: translate(-50%, -50%);
        font-family: monospace;
        backdrop-filter: blur(1px); 
        white-space: pre;
        pointer-events: none;
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

  async createASCIIArt(imageData, charSet, sensitivity, pixelsPerChar) {
    const asciiString = this.generateASCIIString(
      imageData,
      charSet,
      sensitivity,
      "", // Hero text is handled separately
      pixelsPerChar
    );

    const asciiElement = document.createElement("div");
    asciiElement.className = "monscii-art";
    asciiElement.textContent = asciiString; // Use textContent to preserve formatting

    return asciiElement;
  }

  async createColorASCIIArt(imageData, charSet, sensitivity, pixelsPerChar) {
    const { width, height } = imageData;
    const asciiWidth = Math.floor(width / pixelsPerChar);
    const asciiHeight = Math.floor(height / pixelsPerChar);
    const charWidth = 6; // Adjust based on desired character size
    const charHeight = 12; // Adjust based on desired character size

    const asciiCanvas = document.createElement("canvas");
    asciiCanvas.width = asciiWidth * charWidth;
    asciiCanvas.height = asciiHeight * charHeight;
    asciiCanvas.className = "monscii-art";

    const context = asciiCanvas.getContext("2d");
    context.font = `${charHeight}px monospace`;
    context.textAlign = "left";
    context.textBaseline = "top";

    this.generateASCIIArtOnCanvas(
      imageData,
      context,
      charSet,
      sensitivity,
      pixelsPerChar
    );

    return asciiCanvas;
  }

  generateASCIIArtOnCanvas(
    imageData,
    context,
    charSet,
    sensitivity,
    pixelsPerChar
  ) {
    const { width, height, data } = imageData;
    const asciiWidth = Math.floor(width / pixelsPerChar);
    const asciiHeight = Math.floor(height / pixelsPerChar);
    const charWidth = 6;
    const charHeight = 12;

    for (let y = 0; y < asciiHeight; y++) {
      for (let x = 0; x < asciiWidth; x++) {
        const { asciiChar, color } = this.getAsciiCharAndColorForBlock(
          x,
          y,
          width,
          height,
          data,
          charSet,
          sensitivity,
          pixelsPerChar
        );
        context.fillStyle = color;
        context.fillText(asciiChar, x * charWidth, y * charHeight);
      }
    }
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

    // Hero text is handled separately
    return asciiLines.join("\n");
  }

  createHeroElement(heroText, containerWidth, containerHeight) {
    const heroElement = document.createElement("div");
    heroElement.className = "monscii-hero";
    heroElement.textContent = generateHeroText(heroText);

    return heroElement;
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

  getAsciiCharAndColorForBlock(
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
    let totalR = 0;
    let totalG = 0;
    let totalB = 0;
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
          totalR += r;
          totalG += g;
          totalB += b;
        }
      }
    }

    const averageBrightness = totalBrightness / pixelCount;
    const adjustedBrightness = this.adjustBrightness(
      averageBrightness,
      sensitivity
    );
    const asciiChar = this.mapBrightnessToChar(adjustedBrightness, charSet);

    const avgR = Math.round(totalR / pixelCount);
    const avgG = Math.round(totalG / pixelCount);
    const avgB = Math.round(totalB / pixelCount);
    const color = `rgb(${avgR}, ${avgG}, ${avgB})`;

    return { asciiChar, color };
  }

  calculateBrightness(r, g, b) {
    // Using the Rec. 709 standard for luminance
    return 0.2126 * r + 0.8152 * g + 0.0722 * b;
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
