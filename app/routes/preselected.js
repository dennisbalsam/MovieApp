import Route from '@ember/routing/route';
import movies from '../models/movies';
export default Route.extend({
    model() {
        return this.store.query('movies', {
          s: 'Thor',
          type: 'movie' 
        });
      }
});
