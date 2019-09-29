import DS from 'ember-data';

//structure the JSON response into the format we need to then store in the model
export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    keyForAttribute(key) {
      return key;
    },
    modelNameFromPayloadKey(modelName) { 
      return modelName;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      //storing response if the response is an array
        if(payload.Search){
            payload.data = payload.Search;
            payload.data.forEach(item => {
              item.type = primaryModelClass.modelName; //'movies'
              item.attributes = {
                Title: item.Title,
                Type: item.Type,
                Poster: item.Poster,
                Rated: item.Rated,
                Released: item.Released,
                Director: item.Director,
                imdbRating: item.imdbRating,
                Production: item.Production,
                Genre: item.Genre
                };
              delete item.Title;
              delete item.Type;
              delete item.Poster;
              delete item.Rated;
              delete item.Released;
              delete item.Director;
              delete item.imdbRating;
              delete item.Production;
              delete item.Genre;
          });
          
          delete payload.Search;
        }
        //store response if it is a single item
        else {
            payload.data = [];
            payload.data.push( {
              type: primaryModelClass.modelName,
              imdbID: payload.imdbID,
              attributes:{
                Title: payload.Title,
                Type: payload.Type,
                Poster: payload.Poster,
                Rated: payload.Rated,
                Released: payload.Released,
                Director: payload.Director,
                imdbRating: payload.imdbRating,
                Production: payload.Production,
                Genre: payload.Genre
              }
            })
          }
      return this._super(...arguments);
    }
  });