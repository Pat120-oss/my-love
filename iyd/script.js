// Get the buttons and result message element
const openSurpriseButton = document.getElementById("openSurpriseButton");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resultMessage = document.getElementById("result");
const resultText = document.querySelector(".result-text");
const questionBox = document.getElementById("question-box");
const surpriseBox = document.getElementById("surprise-box");
const gifLeft = document.getElementById("gif-left");
const gifRight = document.getElementById("gif-right");

// Handle the "openSurpriseButton" click
openSurpriseButton.addEventListener("click", function () {
    surpriseBox.style.display = "none"; // Hide the "Open Surprise" box
    questionBox.style.display = "block"; // Show the question box
    setTimeout(() => {
        questionBox.style.opacity = 1; // Fade in the question box with animation
    }, 200);
});

// Handle the "yesButton" click
yesButton.addEventListener("click", function () {
    resultMessage.style.display = "flex"; // Show the result message with GIFs
    resultText.textContent = "เย้! เป็นแฟนกันแล้วนะ";
    gifLeft.src = "https://media.giphy.com/media/3o6fJ1oTj6Zqz5Y7NE/giphy.gif"; // GIF สำหรับ "เป็น"
    gifRight.src = "https://media.giphy.com/media/3o6fJ1oTj6Zqz5Y7NE/giphy.gif"; // ใช้ GIF เดียวกันหรือเลือกอีกอัน
    yesButton.disabled = true; // Disable the "Yes" button
    noButton.disabled = true; // Disable the "No" button
});

// Handle the "noButton" click with mouse movement behavior
let noButtonClickCount = 0;
noButton.addEventListener("mouseover", function () {
    if (noButtonClickCount < 3) {
        noButton.style.transform = "translateX(" + (Math.random() * 100 - 50) + "px) translateY(" + (Math.random() * 100 - 50) + "px)";
    }
});

noButton.addEventListener("click", function () {
    noButtonClickCount++;
    // เมื่อคลิกครั้งแรก
    if (noButtonClickCount === 1) {
        resultText.textContent = "ไม่เป็นจริงๆหรอ";
        resultMessage.style.display = "flex"; // แสดงข้อความ
    }
    // เมื่อคลิกครั้งที่สอง
    else if (noButtonClickCount === 2) {
        resultText.textContent = "เขาจะร้องแล้วนะ";
    }
    // เมื่อคลิกครั้งที่สาม
    else if (noButtonClickCount === 3) {
        resultText.textContent = "เขาร้องแล้วนะ";
    }
});
