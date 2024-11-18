// const container = document.querySelector(".container");
// const refreshBtn = document.querySelector(".refresh-btn");
// const maxpaletteBoxes = 32;

// const generateplette = () => {
//     container.innerHTML = "";
//     for (let i = 0; i < maxpaletteBoxes; i++) {
//         let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
//         randomHex = `#${randomHex.padStart(6, "0")}`;

//         const color = document.createElement("li");
//         color.classList.add("color");
//         color.innerHTML = `<div class="rect-box" style="background:${randomHex} width:100px; hight:100px;"></div>
//                            <span class="hex-value">${randomHex} </span>`;
//         color.addEventListener("click", () => CopyColor(color, randomHex));
//         container.appendChild(color);
//     }

// }
// generateplette();

// const copycolor = (elem, hexVal) => {
//     const colorElement = elem.querySelector(".hex-value");
//     navigator.clipboard.writeText(hexVal).them(() => {
//         colorElement.innerText = "copied";
//         setTimeout(() => colorElement.innerText = hexVal, 1000);
//     }).catch(() => alert("Failed  to copy the color code! "))
// }

// refreshBtn.addEventListener("click", generateplette);







const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 14;

const generatePalette = () => {
    container.innerHTML = ""; // Clear the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // Generate a random hex color
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`; // Ensure it's 6 characters

        // Create a list item element for each color
        const color = document.createElement("li");
        color.classList.add("color");

        // Set the inner HTML to display the color as a block
        color.innerHTML = `
        <div style="border-radius: 10px;  border: 10px solid #fff;">
            <div class="rect-box" style="background:${randomHex};  width: 100px; height: 100px; "></div>
            <p style="background: #fff; font-size: 21px;">${randomHex}<p/>
        </div>
        `;

        // Add click event to copy the color when clicked
        color.addEventListener("click", () => copyColor(color, randomHex));

        // Append the color block to the container
        container.appendChild(color);
    }
};
generatePalette();

const copycolor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).them(() => {
        colorElement.innerText = "copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed  to copy the color code! "))
}

// Add event listener to the refresh button
refreshBtn.addEventListener("click", generatePalette);

 //setInterval(generatePalette,10000)  