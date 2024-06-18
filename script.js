// // Get references to the navBar options and main div
// const option1 = document.getElementById('option1');
// const option2 = document.getElementById('option2');
// const mainDiv = document.getElementById('main');

// // Function to load content from an external file
// function loadContent(file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             mainDiv.innerHTML = data;
//         })
//         .catch(error => {
//             mainDiv.innerHTML = '<p>Error loading content.</p>';
//             console.error('Error:', error);
//         });
// }

// // Add event listeners to navBar options
// option1.addEventListener('click', function(event) {
//     event.preventDefault();
//     loadContent('option1.html');
// });

// option2.addEventListener('click', function(event) {
//     event.preventDefault();
//     loadContent('option2.html');
// });

// Get references to the navBar options and main div
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const mainDiv = document.getElementById('main');

// Function to load content from an external file
function loadContent(file, scriptFile) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            mainDiv.innerHTML = data;
            if (scriptFile) {
                loadScript(scriptFile);
            }
        })
        .catch(error => {
            mainDiv.innerHTML = '<p>Error loading content.</p>';
            console.error('Error:', error);
        });
}

// Function to load and execute an external script file
function loadScript(scriptFile) {
    const script = document.createElement('script');
    script.src = scriptFile;
    script.onload = function() {
        console.log(`${scriptFile} loaded successfully.`);
    };
    document.body.appendChild(script);
}

// Add event listeners to navBar options
option1.addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('option1.html', 'option1.js');
});

option2.addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('option2.html', null); // No script for option 2 in this example
});

