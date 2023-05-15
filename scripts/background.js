const links = [
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/index.js', 
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/weather.js',
    'https://raw.githubusercontent.com/Azalurg/homepage/main/script/bookmarks.js',
    'https://raw.githubusercontent.com/Azalurg/Crypta/master/src/tools/vigenereBeispiel.py',
    'https://raw.githubusercontent.com/Azalurg/yt-mp3/main/script.py',
    'https://raw.githubusercontent.com/Azalurg-Uni-Projects/003-java-freeMarket/main/Market/game/Game.java'
];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const shuffledLinks = shuffle(links)

// randomly select delay
const delay = Math.floor(Math.random() * 100)+10;

// fetch the links and read the text
function print(link, counter, power) {
    fetch(shuffledLinks[link])
        .then(response => response.text())
        .then(text => {
            // read text char by char and pass to html with 0.5s delay for a char
            let i = 0
            for (i; i < text.length; i++) {
                let char = text[i];
                if (text[i] == '\n') char = '<br>';

                setTimeout(() => {
                    document.querySelector('#background').innerHTML += char;
                }, delay * (i+counter) * power);
            }
            return i
        })
        .then((i) =>{
            if(link > 0){
                print(link - 1, power == 0 ? 1 : i+counter, 1)
            }
        })
}

print(shuffledLinks.length-1, 0, 0)
