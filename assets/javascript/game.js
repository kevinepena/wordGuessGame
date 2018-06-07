var wordsList = [
    "Affenpinscher",
    "Afghan Hound",
    "Airedale Terrier",
    "Akita Inu",
    "Alaskan Malamute",
    "American Coonhound",
    "American Eskimo Dog",
    "American Foxhound",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Anatolian Shepherd Dog",
    "Australian Cattle",
    "Australian Shepherd",
    "Australian Terrier",
    "Azawakh",
    "Basenji",
    "Basset Hound",
    "Beagle",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Belgian Laekenois",
    "Belgian Malinois",
    "Belgian Sheepdog",
    "Belgian Tervuren",
    "Bergamasco",
    "Bernese Mountain Dog",
    "Bichon Frisé",
    "Biewer Terrier",
    "Black Russian Terrier",
    "Bloodhound",
    "Bluetick Coonhound",
    "Boerboel",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Boxer",
    "Briard",
    "Brittany",
    "Brussels Griffon",
    "Bull Terrier",
    "Bulldog",
    "Bullmastiff",
    "Cairn Terrier",
    "Canaan Dog",
    "Cane Corso",
    "Cardigan Welsh Corgi",
    "Cavalier King Charles",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Chihuahua",
    "Chinese Crested",
    "Chinook",
    "Chow Chow",
    "Clumber Spaniel",
    "Cocker Spaniel",
    "Collie",
    "Curly-Coated Retriever",
    "Dachshund",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Doberman Pinscher",
    "Dogo Argentino",
    "English Bulldog",
    "English Foxhound",
    "English Pointer",
    "English Setter",
    "English Toy Spaniel",
    "Entlebucher Mountain Dog",
    "Field Spaniel",
    "Fila Brasileiro",
    "Finnish Lapphund",
    "Finnish Spitz",
    "Flat Coated Retriever",
    "French Bulldog",
    "German Pinscher",
    "German Shepherd",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Goldendoodle",
    "Gordon Setter",
    "Great Dane",
    "Great Pyrenees",
    "Greyhound",
    "Harrier",
    "Havana Silk Dog",
    "Havanese",
    "Ibizan Hound",
    "Icelandic Sheepdog",
    "Irish Setter",
    "Irish Terrier",
    "Irish Water Spaniel",
    "Irish Wolfhound",
    "Italian Greyhound",
    "Jack Russell Terrier",
    "Japanese Chin",
    "Keeshond",
    "Kerry Blue Terrier",
    "Komondor",
    "Kuvasz",
    "Labradoodle",
    "Labrador Retriever",
    "Lakeland Terrier",
    "Lhasa Apso",
    "Lowchen",
    "Maltese",
    "Manchester Terrier",
    "Mastiff",
    "Miniature Bull Terrier",
    "Miniature Pinscher",
    "Miniature Schnauzer",
    "Neapolitan Mastiff",
    "Newfoundland",
    "Norfolk Terrier",
    "Norwegian Buhund",
    "Norwegian Elkhound",
    "Norwegian Lundehund",
    "Norwich Terrier",
    "Nova Scotia Duck Tolling",
    "Old English Sheepdog",
    "Otterhound",
    "Papillon",
    "Parson Russell Terrier",
    "Pekingese",
    "Pembroke Welsh Corgi",
    "Peruvian Inca Orchid",
    "Pharaoh Hound",
    "Plott Hound",
    "Polish Lowland",
    "Pomeranian",
    "Poodle",
    "Portuguese Podengo Pequeno",
    "Portuguese Water Dog",
    "Pug",
    "Puli",
    "Pumi",
    "Pyrenean Shepherd",
    "Rat Terrier",
    "Redbone Coonhound",
    "Rhodesian Ridgeback",
    "Rottweiler",
    "Saint Bernard",
    "Saluki",
    "Samoyed",
    "Schipperke",
    "Scottish Deerhound",
    "Scottish Terrier",
    "Sealyham Terrier",
    "Shetland Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Siberian Husky",
    "Silky Terrier",
    "Skye Terrier",
    "Sloughi",
    "Smooth Fox Terrier",
    "Soft Coated Wheaten Terrier",
    "Spinone Italiano",
    "Springer Spaniel",
    "Staffordshire Bull Terrier",
    "Standard Schnauzer",
    "Sussex Spaniel",
    "Swedish Vallhund",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Toy Fox Terrier",
    "Vizsla",
    "Weimaraner",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "Whippet",
    "Wire Fox Terrier",
    "Wirehaired Vizsla",
    "Xoloitzcuintli",
    "Yorkshire Terrier"
];

// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Its how we we will start and restart the game.

function startGame() {
  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution is chosen randomly from wordList.
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");
  // We count the number of letters in the word.

  numBlanks = lettersInChosenWord.length;

  // We print the solution in console (for testing).
  // console.log(chosenWord);

  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];
  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    if (lettersInChosenWord[i] === " ") {
      blanksAndSuccesses.push(" ");
    } else {
    blanksAndSuccesses.push("_");
    }

  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);


  // Reprints the guessesLeft to 9
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");

  // Clears the wrong guesses from the previous round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// It's where we will do all of the comparisons for matches.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word.
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j].toLowerCase() === letter.toLowerCase()) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }
    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");
  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If we have gotten all the letters to match the solution...
  if (lettersInChosenWord.toString().toLowerCase() === blanksAndSuccesses.toString().toLowerCase()) {
    // ..add to the win counter & give the user an alert.
    winCounter++;
    alert("You win!");

    // Update the win counter in the HTML & restart the game.
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  // If we've run out of guesses..
  else if (numGuesses === 0) {
    // Add to the loss counter.
    lossCounter++;
    // Give the user an alert.
    alert("You lose");

    // Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = lossCounter;
    // Restart the game.
    startGame();
  }

}

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};
