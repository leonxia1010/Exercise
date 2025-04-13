export default function removeSpecialChars(string) {
  return string.replace(/[^A-Za-z0-9\-\s]/g, '');
}
