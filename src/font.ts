export default function getSimpleFont(): { [key: string]: string[] } {
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
