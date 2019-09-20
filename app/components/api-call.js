import Component from '@ember/component';

export default Component.extend({
    actions: {
            getMovie: function(movieTitle)
            {

            //define API requests links
            let dataRequest = 'http://www.omdbapi.com/?i=tt3896198&apikey=3113189e&t=';
        
            fetch(dataRequest + encodeURI(movieTitle))
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                this.addMovie(data);
            })
        }
    }
});
