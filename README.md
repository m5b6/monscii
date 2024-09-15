
# Monscii

[![npm version](https://img.shields.io/npm/v/monscii.svg)](https://www.npmjs.com/package/monscii)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Monscii** is a lightweight JavaScript library that converts images and videos into ASCII art directly in the browser. Only dependency is typescript. Contributions are welcome.


## Usage

**Image to ascii:**

    import Monscii from 'monscii';

    const converter = new Monscii();
    const imageSrc = 'path/to/your/image.jpg';
    const targetElement = document.getElementById('ascii-art');

    converter.convertImageToASCII(imageSrc, {
      width: 100,
      targetElement,
      charSet: ' .,:;i1tfLCG08@',
    }).catch(error => {
      console.error('Error converting image to ASCII:', error);
    });


**Video to ascii:**

    import Monscii from 'monscii';

    const converter = new Monscii();
    const videoSrc = 'path/to/your/video.mp4';
    const targetElement = document.getElementById('ascii-video');

    converter.convertVideoToASCII(videoSrc, {
      width: 80,
      targetElement,
      charSet: ' .,:;i1tfLCG08@',
    }).catch(error => {
      console.error('Error converting video to ASCII:', error);
    });

## Options

Both `convertImageToASCII` and `convertVideoToASCII` methods accept an `options` object with the following properties:

- **`width`** (`number`): The width of the ASCII art in characters. Defaults to `100`.
- **`targetElement`** (`HTMLElement`): The DOM element where the ASCII art will be rendered. Defaults to `document.body`.
- **`charSet`** (`string`): A string of characters used for ASCII mapping. Characters are mapped from darkest to lightest. Defaults to `' .,:;i1tfLCG08@'`.

## API Reference

### Monscii Class

#### **convertImageToASCII**

Converts an image to ASCII art and appends it to the specified target element.

**Syntax:**

    convertImageToASCII(
      imageSrc: string | File,
      options?: ASCIIOptions
    ): Promise<void>

**Parameters:**

- `imageSrc`: The source of the image. Can be a URL or a `File` object.
- `options`: An optional object containing conversion options.

**Returns:**

- A `Promise` that resolves when the conversion is complete.

**Example:**

    converter.convertImageToASCII('image.jpg', {
      width: 120,
      targetElement: document.getElementById('ascii-art'),
    });

#### **convertVideoToASCII**

Converts a video to ASCII art and streams it in real-time to the specified target element.

**Syntax:**

    convertVideoToASCII(
      videoSrc: string,
      options?: ASCIIOptions
    ): Promise<void>

**Parameters:**

- `videoSrc`: The source of the video as a URL.
- `options`: An optional object containing conversion options.

**Returns:**

- A `Promise` that resolves when the video starts playing.

**Example:**

    converter.convertVideoToASCII('video.mp4', {
      width: 80,
      targetElement: document.getElementById('ascii-video'),
    });





