// JavaScript code to handle pagination and section switching
const sections = document.querySelectorAll('.section');
const prevButtons = document.querySelectorAll('[id^="prev"]');
const nextButtons = document.querySelectorAll('[id^="next"]');

for (let i = 0; i < prevButtons.length; i++) {
    prevButtons[i].addEventListener('click', () => changePage(i, -1));
    nextButtons[i].addEventListener('click', () => changePage(i, 1));
}

function changePage(sectionIndex, step) {
    const currentSection = sections[sectionIndex];
    const pageCount = 17; // Adjust this value based on your actual content
    let currentPage = parseInt(currentSection.innerText.split(' ')[1]);
    currentPage += step;

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > pageCount) {
        currentPage = pageCount;
    }

    currentSection.innerText = `Page ${currentPage} of ${pageCount}`;
}
