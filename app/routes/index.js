import Route from '@ember/routing/route';
import movies from '../models/movies';

export default Route.extend({
  movieName: 'Lion King',
  toggleList:function() {
    document.getElementById("appear").style.display = "block";
  },
  newRecord:function()
  {
     //store the data from movie searched
     this.store.query('movies', {
      s: this.movieName
    });
  },
  actions:{

    getInput:function(name) {
      //set the movie name to be input
       this.movieName = name;
      //display the movies
       this.newRecord();
    }
  },
  model() {
    return this.store.query('movies', {
      s: this.movieName
    });
  }
  
});