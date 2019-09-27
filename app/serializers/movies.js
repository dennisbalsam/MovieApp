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
                Year: item.Year,
                Type: item.Type,
                Poster: item.Poster
              };
              delete item.Title;
              delete item.Year;
              delete item.Type;
              delete item.Poster;
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
                Year: payload.Year,
                Type: payload.Type,
                Poster: payload.Poster
              }
            })
          }
      return this._super(...arguments);
    }
  });