function isPalindrome(word) {
  // Write your algorithm hereconsole.log(isPalindrome("racecar")); // true
  function isPalindrome(str) {
    // Remove any non-letter characters and convert to lowercase
    str = str.replace(/[^a-z]/g, '').toLowerCase();
    
    // Compare the reversed string to the original string
    return str === str.split('').reverse().join('');
  }


}
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-letter characters
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode herefunction isPalindrome(str) {
  
}

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(isPalindrome("madam")); // true

// Test case 2
console.log(isPalindrome("robot")); // false

// Test case 3 (with spaces and uppercase characters)
console.log(isPalindrome("A man a plan a canal Panama")); // true

// Test case 4 (with spaces and uppercase characters)
console.log(isPalindrome("Was it a car or a cat I saw")); // true

// Additional test case 1
console.log(isPalindrome("racecar")); // true

// Additional test case 2
console.log(isPalindrome("Hello, world!")); // false

// Additional test case 3
console.log(isPalindrome("")); // true (empty string)

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;