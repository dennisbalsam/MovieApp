import Route from '@ember/routing/route';
import movies from '../models/movies';

export default Route.extend({
  movieName: 'Avengers',
  displayselected: false,
  toggleList:function() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("appear").style.animation = "3s fadeIn forwards";
    document.getElementById("appear").style.animationDelay = "5.1s";
    document.getElementById("search-submit").style.display = "none";
    setTimeout(function(){ document.getElementById("loader").style.display = "none"; }, 5000);
  },
  newRecord:function()
  {
   this.refresh(); 
  },
  actions:{

    getInput:function(name) {
        
      //set the movie name to be input
       this.movieName = name;
      //display the movies
       this.newRecord();
       this.toggleList();
    },
    showDetails:function()
    {
      document.getElementById("movie-details").style.display = "inline";
    }
  },
  model() {
      return this.store.query('movies', {
        t: this.movieName
      });
  }
  
});