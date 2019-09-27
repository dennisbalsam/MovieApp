import Route from '@ember/routing/route';
import movies from '../models/movies';

export default Route.extend({
  movieName: 'Avengers',
  toggleList:function() {
    document.getElementById("appear").style.animation = "3s fadeIn forwards";
    document.getElementById("appear").style.animationDelay = "5s";
    document.getElementById("search-submit").style.display = "none";
  },
  newRecord:function()
  {
     //store the data from movie searched
     this.store.query('movies', {
      s: this.movieName
    });
    this.refresh();
    
  },
  actions:{

    getInput:function(name) {
      //set the movie name to be input
       this.movieName = name;
      //display the movies
       this.newRecord();
       this.toggleList();
    }
  },
  model() {
    return this.store.query('movies', {
      t: this.movieName
    });
  }
  
});