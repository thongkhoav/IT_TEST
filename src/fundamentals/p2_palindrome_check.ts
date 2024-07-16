function normalizeString(rawStr: string) {
  return rawStr
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
function isPalindrome(s: string) {
  // Normalize the input string
  const normalizedInputStr = normalizeString(s);

  // Remove non-alphanumeric characters and convert to lowercase
  const filteredString = normalizedInputStr
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  // Reverse the filtered string
  const reversedString = filteredString.split("").reverse().join("");

  // Check if the filtered string is equal to the reversed string
  return filteredString === reversedString;
}

const testPalindrome = () => {
  // Test cases
  const testCases = [
    "A man, a plan, a canal, Panamá",
    "Able was I ere I saw Elba",
    "Một đêm say asmed tộm",
    "Hello, World!",
  ];
  console.log("Check if the following strings are palindromes:");
  testCases.forEach((testCase) => {
    console.log(`"${testCase}": ${isPalindrome(testCase) ? "Yes" : "No"}`);
  });
};
testPalindrome();
