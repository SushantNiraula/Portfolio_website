// Array of titles you want to type out
const textArray = [
    "Electronics & Comm. Engineer", 
    "Robotics Enthusiast", 
    "Systems Developer"
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.querySelector(".typing-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/// --- RANDOM BACKGROUND ICON SPAWNER ---

const bgContainer = document.getElementById('animated-bg');
const totalIcons = 63; // Updated to 63 images

function spawnIcon() {
    // 1. Create a new image element
    const img = document.createElement('img');
    
    // 2. Pick a random number between 1 and 63
    const randomIconNum = Math.floor(Math.random() * totalIcons) + 1;
    
    // 3. UPDATED PATH: Pointing to the new 'assets' folder!
    img.src = `assets/${randomIconNum}.png`; 
    img.className = 'floating-icon';

    // 4. UPDATED SPREAD: Now spanning from 0% to 100% of the screen width/height
    // This fixes the "clumping in the center" issue.
    const randomX = Math.floor(Math.random() * 100); 
    const randomY = Math.floor(Math.random() * 100); 
    
    img.style.left = `${randomX}vw`;
    img.style.top = `${randomY}vh`;

    // 5. Randomize the size (between 30px and 70px)
    const randomSize = Math.floor(Math.random() * 40) + 30; 
    img.style.width = `${randomSize}px`;

    // 6. Put the image inside our background container
    bgContainer.appendChild(img);

    // 7. Delete the image from the HTML after 10 seconds (matches the CSS animation)
    setTimeout(() => {
        img.remove();
    }, 10000); 
}

// Start the sequence when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // UPDATED TO 8: Spawn the first 8 icons immediately, staggered slightly
    for(let i = 0; i < 10; i++) {
        setTimeout(spawnIcon, i * 1250); 
    }

    // THE MATH: If each icon lives for 10 seconds (10000ms), and we want 8 on screen at all times...
    // 10000 divided by 8 equals 1250. 
    // So, we spawn a new icon every 1.25 seconds!
    setInterval(spawnIcon, 1250);
});