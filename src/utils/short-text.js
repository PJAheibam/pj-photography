export function shortText(text) {
  if (typeof text === "string") {
    return text.slice(0, 100).concat("...");
    // if (text.length > 100) return text.slice(0, 100).join("...");
    // else return text;
  } else return null;
}
