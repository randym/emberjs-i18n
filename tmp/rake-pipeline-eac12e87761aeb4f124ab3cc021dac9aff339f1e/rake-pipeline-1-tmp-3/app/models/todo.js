(function() {

  EmberjsI18n.Todo = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    complete: DS.attr('boolean'),
    due_date: DS.attr('date')
  });

  EmberjsI18n.Todo.FIXTURES = [
    {
      id: 1,
      title: 'Specify the tools',
      description: 'We need to add a number of gems to our Gemfile to get started.',
      complete: false,
      due_date: '2013-02-11'
    }
  ];

}).call(this);
