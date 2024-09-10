const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const guideButton = document.getElementById("guide-btn");
const guide = document.getElementById("guide");

const userCheckPalindrome = () => {
  // Check for empty user input
  if (!textInput.value) {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(textInput.value)) {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`
  } else {
    result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`
  }
  result.classList.remove("hidden");
}

const isPalindrome = (str) => {
  console.log("Raw input: " + str);
  const strClean = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log("Cleaned input: " + strClean);
  // split, reverse, join string to check for palindrome
  return strClean === strClean.split("").reverse().join("");
}

const showGuide = () => {
  guide.classList.remove("hidden");
  guideButton.classList.add("hidden");
}

const hideGuide = () => {
  guideButton.classList.remove("hidden");
  guide.classList.add("hidden");
}

checkButton.addEventListener("click", userCheckPalindrome);
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    userCheckPalindrome();
  }
});

guideButton.addEventListener("click", showGuide);
guide.addEventListener("click", hideGuide);