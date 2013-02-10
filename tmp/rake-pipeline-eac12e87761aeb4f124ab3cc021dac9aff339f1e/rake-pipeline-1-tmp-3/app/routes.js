(function() {

  EmberjsI18n.Router = Em.Router.extend();

  EmberjsI18n.Router.map(function() {
    this.resource('todos');
    return this.resource('todo', {
      path: '/todos/:todo_id'
    });
  });

  EmberjsI18n.TodosRoute = Em.Route.extend({
    model: function() {
      return EmberjsI18n.Todo.all();
    }
  });

  EmberjsI18n.TodoRoute = Em.Route.extend();

}).call(this);
