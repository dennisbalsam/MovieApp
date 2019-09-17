import Component from '@ember/component';

export default Component.extend({
    actions: {
        getInput: function()
        {
            let movieTitle = this.movieTitle;
            this.movieSearch(movieTitle);
        }
    }
});
