// query selector variables here 👇

const posterImage = document.querySelector('.poster-img');
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');
const showRandomButton = document.querySelector('.show-random');
const makeOwnPosterButton = document.querySelector('.show-form');
const showSavedPostersButton = document.querySelector('.show-saved');
const backToMainButton = document.querySelector('.back-to-main');
const ToMainButtonUnmotivational = document.querySelector('.to-main-unmotivational');
const savePosterButton = document.querySelector('.save-poster');
const showMainButton = document.querySelector('.show-main');
const mainPosterSection = document.querySelector('.main-poster');
const formSection = document.querySelector('.poster-form');
const savedPostersSection = document.querySelector('.saved-posters');
const savedPostersGrid = document.querySelector('.saved-posters-grid');
const posterForm = document.querySelector('.poster-form form'); 
const unmotivationalPostersSection = document.querySelector('.unmotivational-posters');
const UnmotivationalButton = document.querySelector('.show-unmotivational');
const backToMainUnmotivational = document.querySelector('.back-to-main');
const showUnmotivationalButton = document.querySelector('.show-unmotivational');
var savedPosters = [];
var currentPoster = null;  

// Arrays of image URLs, titles, and quotes
var images = [
  "./assets/bees.jpg", "./assets/bridge.jpg", "./assets/butterfly.jpg", 
  "./assets/cliff.jpg", "./assets/elephant.jpg", "./assets/flock.jpg", 
  "./assets/fox.jpg", "./assets/frog.jpg", "./assets/horse.jpg", 
  "./assets/lion.jpg", "./assets/mountain.jpg", "./assets/pier.jpg", 
  "./assets/puffins.jpg", "./assets/pug.jpg", "./assets/runner.jpg", 
  "./assets/squirrel.jpg", "./assets/tiger.jpg", "./assets/turtle.jpg"
];

var titles = [
  "determination", "success", "inspiration", "perspiration", "grit", 
  "empathy", "feelings", "hope", "believe", "try", "conviction", 
  "accomplishment", "achievement", "ambition", "clarity", "challenge", 
  "commitment", "confidence", "action", "courage", "focus", "breathe", 
  "gratitude", "imagination", "kindness", "mindfulness", "knowledge", 
  "opportunity", "passion", "patience", "practice", "smile", "trust", 
  "understanding", "wisdom"
];

var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.", 
  "The one who has confidence gains the confidence of others.", 
  "Act as if what you do makes a difference. It does.", 
  "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
  "Never bend your head. Always hold it high. Look the world straight in the eye.", 
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.", 
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.", 
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  "Limit your 'always' and your 'nevers.'", 
  "You are never too old to set another goal or to dream a new dream.", 
  "Try to be a rainbow in someone else's cloud.", 
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.", 
  "Sometimes you will never know the value of a moment, until it becomes a memory.", 
  "The most wasted of days is one without laughter.", 
  "You must do the things you think you cannot do.", 
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.", 
  "Happiness often sneaks in through a door you didn't know you left open.", 
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", 
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.", 
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.", 
  "If I cannot do great things, I can do small things in a great way.", 
  "Don't wait. The time will never be just right.", 
  "With the right kind of coaching and determination you can accomplish anything.", 
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.", 
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

// Functions go here 👇

// Random index generator function (given)
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to create a poster (given)
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
}

// Function to display a poster (given)
function displayPoster(poster) {
  posterImage.src = poster.imageURL;  
  posterTitle.textContent = poster.title;  
  posterQuote.textContent = poster.quote; 
}

// Function to display a random poster (uses getRandomIndex function to get a random index in each array then uses createPoster function to put the indexs together to ake a random poster then uses the display poster to put the poster on the DOM)
function displayRandomPoster() {
  const randomImageIndex = getRandomIndex(images);
  const randomTitleIndex = getRandomIndex(titles);
  const randomQuoteIndex = getRandomIndex(quotes);

  const randomPoster = createPoster(images[randomImageIndex], titles[randomTitleIndex], quotes[randomQuoteIndex]);

  displayPoster(randomPoster);
}

// Function to switch views between different section by taking the page to the css file and usinf none as the syle.display will hide it until whatever sections is called and then it will use black to take up the page fully
function switchView(viewedPage) {
  var sections = [mainPosterSection, formSection, savedPostersSection, unmotivationalPostersSection];
  sections.forEach(section => {
    section.style.display = 'none'; 
  });

  viewedPage.style.display = 'block';  
}

// Function that takes the array of unmotivation posters and uses the createposters function to make an array of poster objects)
function cleanData() {
  return unmotivationalPosters.map(poster => {
    return createPoster(poster.img_url, poster.name, poster.description);
  });
}

// selects .unmotivational-posters-grid from html and clears it with the inner html then calls cleandata to have the array of umotivational posters the uses the crateElement function to make a bunch of divs for each poster, then uses miniposter from css to make the format of the posters in the miniposter format and then uses appendchild to add the miniposter div to the innerhtml
function displayUnmotivationalPosters() {
  const unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid');
  unmotivationalPostersGrid.innerHTML = ''; 

  const posters = cleanData(); 
  posters.forEach(poster => {
    const miniPoster = document.createElement('div');
    miniPoster.classList.add('mini-posters-unmotivational');
    miniPoster.innerHTML = `
      <img src="${poster.imageURL}" alt="${poster.title}">
      <h3>${poster.title}</h3>
      <p>${poster.quote}</p>
    `;
    miniPoster.addEventListener('dblclick', () => deleteUnmotivationalPoster(poster.imageURL));

    unmotivationalPostersGrid.appendChild(miniPoster);
  });
}

function deleteUnmotivationalPoster(posterId) {
  unmotivationalPosters = unmotivationalPosters.filter(poster => poster.img_url !== posterId);
  displayUnmotivationalPosters();
}

// when the page loads displayrandomposter is called with the switchview function that is ste the the mainposter page
window.addEventListener('load', () => {
  displayRandomPoster();
  switchView(mainPosterSection);
});

// call the displayrandomposter when button clicked
showRandomButton.addEventListener('click', displayRandomPoster);

// switches view to the form page
makeOwnPosterButton.addEventListener('click', () => {
  switchView(formSection);  
});

// switchview to saved posterpage when button clicked
showSavedPostersButton.addEventListener('click', () => {
  switchView(savedPostersSection);  
});

// switchview to mainpostersection when button clicked
backToMainButton.addEventListener('click', () => {
  switchView(mainPosterSection);  
});

// switchesview to mainposter page when button is clicked
ToMainButtonUnmotivational.addEventListener('click', () => {
  switchView(mainPosterSection);
});

// switchview to mainpostersection when button clicked
showMainButton.addEventListener('click', () => {
  switchView(mainPosterSection);  
});

// makes two varibales one for new posters and already saved posters and uses .some to see if the already saved poster matches another poster already in the array and if it doesnt it pushes that poster into the array 
savePosterButton.addEventListener('click', () => {
  const poster = {
    imageURL: posterImage.src,
    title: posterTitle.textContent,
    quote: posterQuote.textContent
  };

  const posterAlreadySaved = savedPosters.some(savedPoster => 
    savedPoster.imageURL === poster.imageURL &&
    savedPoster.title === poster.title &&
    savedPoster.quote === poster.quote
  );

  if (!posterAlreadySaved) {
    savedPosters.push(poster);

  // Add saved poster to the grid
  const savedPosterElement = document.createElement('div');
  savedPosterElement.classList.add('saved-poster-item');  
  savedPosterElement.innerHTML = `
    <div class="first-mini-poster">
      <img src="${poster.imageURL}" alt="Saved Poster">
      <h2>${poster.title}</h2>
      <p>${poster.quote}</p>
    </div>
  `;
  savedPostersGrid.appendChild(savedPosterElement);
  } 
});

// shwichesview to the savedposter page whan button is claicked
showSavedPostersButton.addEventListener('click', () => {
  switchView(savedPostersSection);  
});

posterForm.addEventListener('submit', (event) => {
  event.preventDefault();  

  const imageURL = document.querySelector('#poster-image-url').value;
  const title = document.querySelector('#poster-title').value;
  const quote = document.querySelector('#poster-quote').value;

  currentPoster = createPoster(imageURL, title, quote);

  images.push(imageURL);  
  titles.push(title);  
  quotes.push(quote);  

  displayPoster(currentPoster);

  switchView(mainPosterSection);
});

showUnmotivationalButton.addEventListener('click', () => {
  displayUnmotivationalPosters();  
  switchView(unmotivationalPostersSection);  
});



