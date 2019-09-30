import Route from '@ember/routing/route';
import movies from '../models/movies';

export default Route.extend({
  movieName: 'Avengers',
  displayselected: false,
  toggleList:function() {
    document.getElementById("sometext").style.display = "none";
    document.getElementById("preselected").style.display = "none";
    //display functions to control animations
    document.getElementById("loader").style.display = "block";
    document.getElementById("appear").style.display = "block";
    document.getElementById("appear").style.animation = "3s fadeIn forwards";
    document.getElementById("appear").style.animationDelay = "4.1s";
    document.getElementById("search-submit").style.display = "none";
    setTimeout(function(){ document.getElementById("loader").style.display = "none"; }, 4000);
  },
  newRecord:function()
  {
    //refreshes the model hook
   this.refresh(); 
  },
  actions:{
    newSearch: function()
    {
      document.getElementById("appear").style.display = "none";
      document.getElementById("search-submit").style.display = "block";
    },
    getInput:function(name) {
        
      //set the movie name to be input
       this.movieName = name;
      //display the movies
       this.newRecord();
       this.toggleList();
    },
    showDetails:function()
    {
      //display additional data
      document.getElementById("movie-details").style.display = "inline";
    }
  },
  model() {
      return this.store.query('movies', {
        t: this.movieName
      });
  }
  
});