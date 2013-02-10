(function() {

  Ember.View.reopen({
    instrumentDetails: function(details) {
      var id, parentId;
      if (Ember.get(this, 'parentView')) {
        parentId = Ember.get(this, 'parentView').get('elementId');
      }
      id = Ember.get(this, 'elementId');
      details['id'] = id;
      details['parent_id'] = parentId;
      return details;
    }
  });

  EmberjsI18n.Instrumentation = {
    stack: {},
    subscribe: function(event) {
      return Em.subscribe(event, {
        before: function(name, timestamp, payload) {
          return timestamp;
        },
        after: function(name, timestamp, payload, start_timestamp) {
          return console.log(name, payload, timestamp - start_timestamp);
        }
      });
    }
  };

}).call(this);
