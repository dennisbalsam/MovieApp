import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    keyForAttribute(key) {
      return key;
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
      
      console.log(payload.Search)
      delete payload.Search;
      return this._super(...arguments);
    }
  });