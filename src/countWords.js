export default function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}
