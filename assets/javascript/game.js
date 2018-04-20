var words = [
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
    "Black &amp; Tan Coonhound",
    "Black Russian Terrier",
    "Bloodhound",
    "Bluetick Coonhound",
    "Boerboel",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Bouvier des Flandres",
    "Boxer",
    "Briard",
    "Brittany",
    "Brussels Griffon",
    "Bull Terrier",
    "Bulldog - American",
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
    "Chinese Shar-Pei",
    "Chinook",
    "Chow Chow",
    "Cirneco dell'Etna",
    "Clumber Spaniel",
    "Cocker Spaniel - American",
    "Cocker Spaniel - English",
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
    "German Shorthaired Pointer",
    "German Wirehaired Pointer",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Goldendoodle",
    "Gordon Setter",
    "Great Dane",
    "Great Pyrenees",
    "Greater Swiss Mountain Dog",
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
    "Petit Basset Griffon Vendéen",
    "Pharaoh Hound",
    "Plott Hound",
    "Polish Lowland",
    "Pomeranian",
    "Poodle - Standard",
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
    "Springer Spaniel - English",
    "Staffordshire Bull Terrier",
    "Standard Schnauzer",
    "Sussex Spaniel",
    "Swedish Vallhund",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Toy Fox Terrier",
    "Treeing Walker Coonhound",
    "Vizsla",
    "Weimaraner",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "West Highland White Terrier",
    "Whippet",
    "Wire Fox Terrier",
    "Wirehaired Pointing Griffon",
    "Wirehaired Vizsla",
    "Xoloitzcuintli",
    "Yorkshire Terrier"
];

var guesses = [];
var underScores = [];
var j = 0;
var y;
var x = Math.floor(Math.random() * words.length);
var numGuesses = 0;
//var justLet = /^[a-zA-Z]+$/i;
var justLet =  /[>< \/!a-zA-Z]/

//var fullUnder = " "
var indWord = [];
var userGuess;
var maxScore = 6;
var indexes = [];
var spaceIndex = 0;


// when key is pressed 
/* document.onkeyup = function (event) {

    userGuess = event.key
    if ((userGuess.match(justLet))) {
        guesses.push(userGuess)
    }
} */



// puts letters of random word into index
function wordIndex(ranNum) {
    for (var i = 0; i < words[ranNum].length; i++) {
        var letter;
        letter = words[ranNum].charAt(i)

        if (letter.match(" ")) {
            spaceIndex++
        } else
            indWord.push(letter)
    }
    return letter
}

wordIndex(x)

// gets the number of " _ " in a word and put them in array
function getUnders(ranNum) {
    for (var i = 0; i < ((words[ranNum].length) - spaceIndex); i++) {
        var underScore = "_ ";
        underScores.push(underScore);
    }
}

getUnders(x)

//listens for keypress
document.addEventListener("keyup", function () {
    userGuess = event.key
    var upGuess = userGuess.toUpperCase();
    if ((userGuess.match(justLet))) {
        guesses.push(upGuess)
        numGuesses++
    }   else if(userGuess != indWord) {
        maxScore--
        console.log(maxScore)
        document.getElementById("score").innerHTML = maxScore;
    }
    document.getElementById("score").innerHTML = maxScore;
    document.getElementById("guesses").innerHTML = guesses.join(", ");

    // gets index for letters
    function getAllIndexes(arr, val) {
        var i = -1;

        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
    }
    getAllIndexes(indWord, userGuess);
    getAllIndexes(indWord, upGuess);
   

    function multValues(ranW) {
        for (var i = 0; i < indexes.length; i++) {
            underScores[indexes[i]] = underScores[indexes[i]].replace("_ ", userGuess);
            document.getElementById("underscores").innerHTML = underScores.join(" ");
        }
    }
    indexes.forEach(multValues);

    //var goodLet = indWord.indexOf(userGuess)

    /* indWord.forEach(function wordIndex(ranNum) {
        if (userGuess === ranNum) {
            underScores[goodLet] = underScores[goodLet].replace("_ ", userGuess);
            document.getElementById("underscores").innerHTML = underScores.join(" ");
        } 
    }); */
}, false);



var html =
    //"<p>Word: " 
    //"<p>Guesses: "

    document.getElementById("underscores").innerHTML = underScores.join(" ");


//document.querySelector("#game").innerHTML = html; 
