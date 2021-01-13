class Movie {
    constructor(channelName) {
        this.channelName = channelName;
        this.movies = ["Major Pain", "Life", "Avengers", "Terminator"];
    }
    description() {
        alert(`We have a total of ${this.movies.length} movies, here at ${this.channelName}`)
    }
}

class Channel {
    constructor(name) {
        this.name = name;
        this.favorites = [];
    }
    start() {
        let selection = this.showCatalogue();
        while (selection !== "") {
            switch (selection) {
                case "add":
                    this.addFavorite();
                    break;
                case "delete":
                    this.deleteFavorite();
                    break;
                case "show":
                    alert(this.favorites);
                    break;
                case "description":
                    this.MovieDescription();
                    break;
            }
            selection = this.showCatalogue();
        }
    }

    addFavorite() {
        let user = prompt("What movie do you want to add to favorites?");
        let movieList = new Movie();
        if (movieList.movies.indexOf(user) > -1) {
            this.favorites.push(user);
        }
    }

    deleteFavorite() {
        let user = prompt("What movie would you like to delete from favorites?");
        for (let i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] === user) {
                this.favorites.splice(i);
            }
        }
    }
    MovieDescription() {
        console.log("It hit my method")
        let x = new Movie(this.name);
        x.description();
    }

    showCatalogue() {
        return prompt(`Welcome to your Favorites! What do you want to do?
        1) add Favorites
        2) delete Favorites
        3) show Favorites
        4) description of channel`)
    }


}

let Disney = new Channel("Disney");
Disney.start();
