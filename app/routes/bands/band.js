import {isEmpty} from '@ember/utils';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function (params) {
    let bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug); // params.slug is now 'pearl-jam'
  },
  afterModel: function (band) {
    let description = band.get('description');
    if (isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
  }
});
