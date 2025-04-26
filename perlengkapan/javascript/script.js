// nentuin item mana yang mau di kasih efek
const navbarItems = document.querySelectorAll('.navbar li');

navbarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // nge adain blur buat item yang lagi ngga dihover 
        navbarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('blur');
            }
        });
    });

    // buat ngilangin blur pas ngga dihover
    item.addEventListener('mouseleave', () => {
        navbarItems.forEach(otherItem => {
            otherItem.classList.remove('blur');
        });
    });
});






// Function to Sort Mountains
function sortMountains() {
    const criteria = document.getElementById('sorting-dropdown').value;
    const mountains = document.querySelectorAll('.mountain-item');
    const mountainsArray = Array.from(mountains);

    let sortedMountains;

    if (criteria === 'height') {
        sortedMountains = mountainsArray.sort((a, b) => {
            const heightA = parseInt(a.getAttribute('data-height'));
            const heightB = parseInt(b.getAttribute('data-height'));
            return heightB - heightA;
        });
    } else if (criteria === 'activity') {
        sortedMountains = mountainsArray.sort((a, b) => {
            return a.getAttribute('data-activity').localeCompare(b.getAttribute('data-activity'));
        });
    } else if (criteria === 'difficulty') {
        const difficultyLevels = {
            'Mudah': 1,
            'Tingkat Menengah': 2,
            'Sulit': 3
        };

        sortedMountains = mountainsArray.sort((a, b) => {
            const difficultyA = a.getAttribute('data-difficulty').trim();
            const difficultyB = b.getAttribute('data-difficulty').trim();
            return difficultyLevels[difficultyA] - difficultyLevels[difficultyB];
        });
    }

    // Clear the current list and append sorted items
    const mountainList = document.getElementById('mountain-list');
    mountainList.innerHTML = '';

    sortedMountains.forEach(mountain => {
        mountainList.appendChild(mountain);
    });
}

// Function to save a mountain to the "rencana" page
function saveMountain(mountainName) {
    alert(mountainName + ' disimpan ke rencana!'); // Example action: show a message
    // Add your code to store data in a more persistent manner, e.g., localStorage, database, etc.
}

// Set the default sorting to "height" when the page loads
document.addEventListener('DOMContentLoaded', () => {
    sortMountains();
});

