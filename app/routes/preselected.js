import Route from '@ember/routing/route';
import movies from '../models/movies';
export default Route.extend({
  actions:{
    showDetails:function()
    {
      document.getElementById("movie-details").style.display = "inline";
    }
  },
    model() {
        return this.store.query('movies', {
          s: 'Spider-Man',
          type: 'movie' 
        });
      }
});
