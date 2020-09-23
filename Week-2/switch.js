let favoriteMovie = "star wars";
let moviePhrase;

switch (true) {
    case (favoriteMovie === "jaws"):
        moviePhrase = "You're gonna need a bigger boat";
        break;
    case (favoriteMovie === "the shining"):
        moviePhrase = "All work and no play makes Jack a dull boy.";
        break;
    case (favoriteMovie === "star wars"):
        moviePhrase = "Do. Or do not. There is no try.";
        break;
    case (favoriteMovie === "forrest gump"):
        moviePhrase = "Life was like a box of chocolates.";
        break;
    case (favoriteMovie === "back to the future"):
        moviePhrase = "Where we're going, we don't need roads.";
        break;
    default:
        moviePhrase = "Great movie choice!";
}

console.log(moviePhrase);