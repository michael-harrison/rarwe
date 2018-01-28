import {computed} from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  songCreationStarted: false,
  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function () {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  actions: {
    enableSongCreation: function () {
      this.set('songCreationStarted', true);
    },
    updateRating: function (params) {
      let song = params.item, rating = params.rating;

      song.set('rating', rating);
    }
  }
});
