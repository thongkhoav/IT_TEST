const groupAnagramFn = (array: string[]) => {
  // Map to store the sorted string as key and the anagrams as value
  const map = new Map();
  for (const str of array) {
    // Sort the string to create a general word and store as a key
    // Example: "eat", "tea", "ate" will all be sorted to "aet" and "aet" will be the key
    const sorted = str.split("").sort().join("");
    if (map.has(sorted)) {
      // If the key already exists, push the anagram to the value array
      map.get(sorted).push(str);
    } else {
      // If the key doesn't exist, create a new key value pair
      map.set(sorted, [str]);
    }
  }
  // Convert the map values to array
  return Array.from(map.values());
};

const testGroupAnagram = () => {
  // Test cases
  const testCases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    ["team", "meat", "we", "are", "ear", "era"],
  ];
  console.log("Group anagrams:");

  testCases.forEach((testCase) => {
    console.log("Input:", testCase);
    console.log("Output:", groupAnagramFn(testCase));
  });
};
testGroupAnagram();
