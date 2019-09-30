import DS from 'ember-data';
const {Model} = DS;

//define the model with the variables we desire
export default Model.extend({
  Title: DS.attr('string'),
  Year: DS.attr('string'),
  imdbID: DS.attr('string'),
  Type: DS.attr('string'),
  Poster: DS.attr('string'),
  Rated: DS.attr('string'),
  Released: DS.attr('string'),
  Director: DS.attr('string'),
  imdbRating: DS.attr('number'),
  Production: DS.attr('string'),
  Genre: DS.attr('string'),
  Plot: DS.attr('string')
});