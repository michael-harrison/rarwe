import Route from '@ember/routing/route';

export default Route.extend({
  model: function () {
    return this.modelFor('bands.band');
  },
  actions: {
    willTransition: function (transition) {
      let controller = this.get('controller');
      let leave;

      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
