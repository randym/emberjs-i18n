(function() {

  this.EmberjsI18n.reopen({
    HeaderView: Em.View.extend({
      templateName: 'header',
      classNames: ['header', 'navbar', 'navbar-inverse', 'navbar-fixed-top'],
      click: function() {
        return $(".locale_selector").slideToggle();
      }
    })
  });

}).call(this);
