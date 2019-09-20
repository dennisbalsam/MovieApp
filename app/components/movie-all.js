import Component from '@ember/component';
//import { A } from '@ember/array';
//import EmberObject from '@ember/object';

/*
//Creating an object containing a movie list
const Movie = EmberObject.extend({
    movieList: A(),
  });

//Create an object to use to add movies to list
let movie = Movie.create({
    addItem(name) {
      this.movieList.pushObject(name);
    }
});
*/


export default Component.extend({
   actions : {
    //add movie action
    addMovie:function(data) {
        console.clear();
        console.log(data);
        //adds movie to the list of movies
        this.set('model.movieData', data);
    }
   }
});




