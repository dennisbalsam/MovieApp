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
        //store response if it is a single item
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
                Genre: payload.Genre,
                Plot: payload.Plot
              }
            })
          
      return this._super(...arguments);
    }
  });