export function getSimpleFont(): { [key: string]: string[] } {
  const font: { [key: string]: string[] } = {
    A: ["  __  ", " /  \\ ", "/ /\\ \\", "\\ \\_/ /", " \\___/ "],
    B: [" ____ ", "| __ )", "|  _ \\", "| |_) |", "|____/"],
    C: ["  ___ ", " / __|", "| |   ", "| |__ ", " \\___|"],
    D: [" ____ ", "|  _ \\", "| | | |", "| |_| |", "|____/"],
    E: [" _____", "| ____|", "|  _|", "| |___", "|_____|"],
    F: [" _____", "|  ___|", "| |_   ", "|  _|", "|_|   "],
    G: ["  ____", " / ___|", "| |  _", "| |_| |", " \\____|"],
    H: [" _   _", "| | | |", "| |_| |", "|  _  |", "|_| |_|"],
    I: [" ___", "|_ _|", " | |", " | |", "|___|"],
    J: ["     _", "    | |", " _  | |", "| |_| |", " \\___/"],
    K: [" _  __", "| |/ /", "| ' / ", "| . \\ ", "|_|\\_\\"],
    L: [" _    ", "| |   ", "| |   ", "| |___", "|_____|"],
    M: [" __  __", "|  \\/  |", "| |\\/| |", "| |  | |", "|_|  |_|"],
    N: [" _   _", "| \\ | |", "|  \\| |", "| |\\  |", "|_| \\_|"],
    O: ["  ___  ", " / _ \\ ", "| | | |", "| |_| |", " \\___/ "],
    P: [" ____ ", "|  _ \\", "| |_) |", "|  __/", "|_|   "],
    Q: ["  ___  ", " / _ \\ ", "| | | |", "| |_| |", " \\__\\_\\"],
    R: [" ____ ", "|  _ \\", "| |_) |", "|  _ < ", "|_| \\_\\"],
    S: [" ____ ", "/ ___|", "\\___ \\", " ___) |", "|____/ "],
    T: [" _____", "|_   _|", "  | |  ", "  | |  ", "  |_|  "],
    U: [" _   _", "| | | |", "| | | |", "| |_| |", " \\___/ "],
    V: ["__     __", "\\ \\   / /", " \\ \\ / / ", "  \\ V /  ", "   \\_/   "],
    W: [
      "__        __",
      "\\ \\      / /",
      " \\ \\ /\\ / / ",
      "  \\ V  V /  ",
      "   \\_/\\_/   ",
    ],
    X: ["__  __", "\\ \\/ /", " >  < ", "/_/\\_\\", "      "],
    Y: ["__   __", "\\ \\ / /", " \\ V / ", "  | |  ", "  |_|  "],
    Z: [" _____", "|__  /", "  / / ", " / /_", "/____|"],
    " ": ["  ", "  ", "  ", "  ", "  "],
  };
  return font;
}

export function generateHeroText(text: string, maxWidth: number): string[] {
  console.log("Generating hero text for:", text);
  console.log("Generating hero text for:", text);
  console.log("Generating hero text for:", text);
  console.log("Generating hero text for:", text);
  const font = getSimpleFont();
  const lines: string[] = [];

  const fontHeight = Object.values(font)[0].length;

  for (let i = 0; i < fontHeight; i++) {
    lines[i] = "";
  }

  for (const char of text.toUpperCase()) {
    const charLines = font[char] || font[" "];
    for (let i = 0; i < fontHeight; i++) {
      lines[i] += charLines[i];
    }
  }

  console.log("Generated hero lines:", lines);

  return lines.map((line) => {
    if (line.length > maxWidth) {
      return line.substring(0, maxWidth);
    } else {
      return line.padEnd(maxWidth, " ");
    }
  });
}
