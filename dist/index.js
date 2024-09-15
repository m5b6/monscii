var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Monscii {
    constructor() {
        if (!Monscii.stylesInjected) {
            this.injectStyles();
            Monscii.stylesInjected = true;
        }
    }
    convertImageToASCII(imageSrc, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { width = 100, targetElement = document.body, charSet = " .,:;i1tfLCG08@", } = options;
            try {
                const img = yield this.loadImage(imageSrc);
                const canvas = this.createCanvas(img, width);
                const imageData = this.getImageDataFromCanvas(canvas, img);
                const asciiElement = this.createASCIIArt(imageData, charSet);
                targetElement.appendChild(asciiElement);
            }
            catch (error) {
                console.error("Error converting image to ASCII:", error);
                throw error;
            }
        });
    }
    injectStyles() {
        const style = document.createElement("style");
        style.id = "monscii-styles";
        style.textContent = `
      .monscii-art {
        font-family:  monospace !important;
        font-size: 7px;
        line-height: 7px;
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
    loadImage(imageSrc) {
        return __awaiter(this, void 0, void 0, function* () {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            if (imageSrc instanceof File) {
                img.src = yield this.readFileAsDataURL(imageSrc);
            }
            else {
                img.src = imageSrc;
            }
            return new Promise((resolve, reject) => {
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error("Failed to load the image"));
            });
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
    createCanvas(image, width) {
        const canvas = document.createElement("canvas");
        const aspectRatio = image.height / image.width;
        canvas.width = width;
        canvas.height = width * aspectRatio;
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
    createASCIIArt(imageData, charSet) {
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
        const asciiElement = document.createElement("td");
        asciiElement.className = "monscii-art";
        asciiElement.innerHTML = asciiString;
        return asciiElement;
    }
    calculateBrightness(r, g, b) {
        return 0.299 * r + 0.587 * g + 0.114 * b;
    }
    mapBrightnessToChar(brightness, charSet) {
        const charIndex = Math.floor(((charSet.length - 1) * brightness) / 255);
        return charSet.charAt(charIndex);
    }
}
Monscii.stylesInjected = false;
export default Monscii;
