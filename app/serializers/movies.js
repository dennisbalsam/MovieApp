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
      payload.data = payload.Search;
      payload.data.forEach(item => {
        item.type = primaryModelClass.modelName; //'movies'
        item.attributes = {
          Title: item.Title,
          Year: item.Year,
          Type: item.Type,
          Poster: item.Poster
        };
        console.log(item.attributes);
        delete item.Title;
        delete item.Year;
        delete item.Type;
        delete item.Poster;
      });
      
      delete payload.Search;
      return this._super(...arguments);
    }
  });