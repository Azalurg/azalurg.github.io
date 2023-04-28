const links = [
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/index.js', 
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/weather.js',
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/bookmarks.js'
];

// randomly select a link from the array
const randomLink = links[Math.floor(Math.random() * links.length)];

// randomly select delay
const delay = Math.floor(Math.random() * 150) + 10;

// fetch the link and read the text
fetch(randomLink)
    .then(response => response.text())
    .then(text => {
        // read text char by char and pass to html with 0.5s delay for a char
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (text[i] == '\n') char = '<br>';

            setTimeout(() => {
                document.querySelector('.background').innerHTML += char;
            }, delay * i);
        }
    })