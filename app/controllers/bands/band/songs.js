import {computed} from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  noSongs: computed('model.songs.[]', function () {
    return this.get('model.songs.length') === 0;
  }),
  actions: {
    updateRating: function (params) {
      let song = params.item, rating = params.rating;

      song.set('rating', rating);
    }
  }
});
