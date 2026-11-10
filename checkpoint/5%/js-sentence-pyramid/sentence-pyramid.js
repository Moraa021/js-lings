// Exercise: sentence-pyramid
// Function that prints a pyramid of words from a sentence, adding one word per line
function sentencePyramid(sentence) {
  // Split the sentence by spaces into an array of individual words
  const words = sentence.split(" ");
  // For each word at index i, slice the words from 0 to i + 1, join them with a space, and print with console.log
  words.forEach((_, i) => console.log(words.slice(0, i + 1).join(" ")));
}
