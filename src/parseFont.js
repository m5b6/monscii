import { fontData } from "./fontData.js";

export function parseFigletFont() {
  const lines = fontData.split("\n");
  const headerLine = lines[0];
  const headerSplit = headerLine.split(" ");

  const hardBlank = headerSplit[0].charAt(headerSplit[0].length - 1);
  const height = parseInt(headerSplit[1]);
  const commentLines = parseInt(headerSplit[5]);

  let currentLine = 1 + commentLines;

  const letters = {};

  const charCodes = [];
  for (let i = 32; i <= 126; i++) {
    charCodes.push(i);
  }

  const getCharacterLines = () => {
    const charLines = [];
    for (let h = 0; h < height; h++) {
      if (currentLine >= lines.length) {
        throw new Error("Unexpected end of font data.");
      }

      let line = lines[currentLine];
      currentLine++;

      const hardBlankRegex = new RegExp(`\\${hardBlank}`, "g");
      line = line.replace(hardBlankRegex, " ");

      const endmark = line[line.length - 1];

      const endmarkRegex = new RegExp(`(${endmark}){1,2}$`);
      line = line.replace(endmarkRegex, "");

      charLines.push(line);
    }
    return charLines;
  };

  for (const charCode of charCodes) {
    const char = String.fromCharCode(charCode);
    letters[char] = getCharacterLines();
  }

  return { letters, height };
}

export function generateHeroText(text) {
  const { letters, height } = parseFigletFont();

  const textLines = [];

  const fallback = [
    "  ___   ",
    " / _ \\  ",
    "| | | | ",
    "| | | | ",
    "| |_| | ",
    " \\___/  ",
    "         ",
    "         ",
    "         ",
    "         ",
    "         ",
  ];

  for (let i = 0; i < height; i++) {
    let line = "";
    for (const char of text.toUpperCase()) {
      const asciiChar = letters[char] || fallback;
      line += asciiChar[i] || " ".repeat(fallback[0].length);
    }
    textLines.push(line);
  }

  return textLines.join("\n");
} 