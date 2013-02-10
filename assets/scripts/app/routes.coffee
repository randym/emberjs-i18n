EmberjsI18n.Router = Em.Router.extend()

EmberjsI18n.Router.map ->
   this.resource('todos')
   this.resource('todo', { path: '/todos/:todo_id' })


EmberjsI18n.TodosRoute = Em.Route.extend
  model: ->
    EmberjsI18n.Todo.all()

EmberjsI18n.TodoRoute = Em.Route.extend()
