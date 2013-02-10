Ember.View.reopen
  instrumentDetails: (details) ->
    parentId = Ember.get(this, 'parentView').get('elementId') if Ember.get(this, 'parentView')
    id = Ember.get(this, 'elementId')
    details['id'] = id
    details['parent_id'] = parentId
    return details


EmberjsI18n.Instrumentation = {
  stack: {},
  subscribe: (event) ->
    Em.subscribe event,
      before:(name, timestamp, payload) ->
        return timestamp
      after: (name, timestamp, payload, start_timestamp) ->
        console.log(name, payload, timestamp - start_timestamp)
}
