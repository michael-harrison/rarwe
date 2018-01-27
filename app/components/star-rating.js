import {computed} from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,

  stars: computed('rating', 'maxRating', function () {
    let fullStars = this.starRange(1, this.get('rating'), 'full');
    let emptyStars = this.starRange(this.get('rating') + 1, this.get('maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange: function (start, end, type) {
    let starsData = [];
    for (let i = start; i <= end; i++) {
      starsData.push({rating: i, full: type === 'full'});
    }
    return starsData;
  }
});
