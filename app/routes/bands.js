import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let Band = EmberObject.extend({
  name: '',
});

let Song = EmberObject.extend({
  title: '',
  rating: 0,
  band: ''
});

export default Route.extend({
  model: function () {
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    let daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    let ledZeppelin = Band.create({name: 'Led Zeppelin', songs: [blackDog]});
    let pearlJam = Band.create({name: 'Pearl Jam', songs: [yellowLedbetter, daughter]});
    let fooFighters = Band.create({name: 'Foo Fighters', songs: [pretender]});

    return [ledZeppelin, pearlJam, fooFighters];
  }
});
