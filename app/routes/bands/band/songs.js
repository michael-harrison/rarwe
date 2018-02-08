import Route from '@ember/routing/route';
import Song from 'rarwe/models/song';

export default Route.extend({
  model: function () {
    return this.modelFor('bands.band');
  },
  resetController: function (controller) {
    controller.set('songCreationStarted', false);
  },
  actions: {
    didTransition: function () {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }, createSong: function () {
      let controller = this.get('controller');
      let band = this.modelFor('bands.band');
      let title = controller.get('title');
      let song = Song.create({title: title, band: band});
      band.get('songs').pushObject(song);
      controller.set('title', '');
    }
  }
});
