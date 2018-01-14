import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let Band = EmberObject.extend({
  name: '',
});

export default Route.extend({
  model: function () {
    let ledZeppelin = Band.create({name: 'Led Zeppelin'});
    let pearlJam = Band.create({name: 'Pearl Jam'});
    let fooFighters = Band.create({name: 'Foo Fighters'});

    return [ledZeppelin, pearlJam, fooFighters];
  }
});
