minispade.register('instrumentation', "(function() {(function() {\n\n  Ember.View.reopen({\n    instrumentDetails: function(details) {\n      var id, parentId;\n      if (Ember.get(this, 'parentView')) {\n        parentId = Ember.get(this, 'parentView').get('elementId');\n      }\n      id = Ember.get(this, 'elementId');\n      details['id'] = id;\n      details['parent_id'] = parentId;\n      return details;\n    }\n  });\n\n  EmberjsI18n.Instrumentation = {\n    stack: {},\n    subscribe: function(event) {\n      return Em.subscribe(event, {\n        before: function(name, timestamp, payload) {\n          return timestamp;\n        },\n        after: function(name, timestamp, payload, start_timestamp) {\n          return console.log(name, payload, timestamp - start_timestamp);\n        }\n      });\n    }\n  };\n\n}).call(this);\n\n})();\n//@ sourceURL=instrumentation");