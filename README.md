
# Monscii

[![npm version](https://img.shields.io/npm/v/monscii.svg)](https://www.npmjs.com/package/monscii)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- VIDEO  --> 
<img src="./monscii.mp4" width="500">

**Monscii** lets media speak. lightweight library that converts videos and images into ASCII in the web.

**Why?**, to place cool art in the web. Inspired by [midjourney's homepage](https://www.midjourney.com/).


## Installation

```
npm install monscii
```

*or just include the script from [unpkg](https://unpkg.com/monscii/dist/monscii.umd.js)*


## Usage

```javascript

const monscii = new Monscii();

// For videos
monscii.convertVideoToASCII("video.mp4", {
  width: 250,
  targetElement: document.getElementById("art"),
  sensitivity: 0.5,
  color: true,
  hero: "Dream in color - Regina Belle",
  charSet: "%#*+=-:.
});

// For images
monscii.convertImageToASCII("image.jpg", {
  width: 100,
  color: false
});
```


## Options

- `width`: Output width (default: 100)
- `targetElement`: DOM element to append output (default: document.body)
- `sensitivity`: Brightness sensitivity (default: 1.0)
- `color`: Enable color output (default: true). Disable for *much faster* black and white rendering.
- `hero`: Overlay text (optional)
- `fps`: Frames per second for video (default: 30)
- `playbackSpeed`: Video playback speed (default: 1)
- `charSet`: Character set (Not required)
