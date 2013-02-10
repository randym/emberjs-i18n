@EmberjsI18n.reopen
  HeaderView: Em.View.extend
    templateName: 'header'
    classNames: ['header', 'navbar', 'navbar-inverse', 'navbar-fixed-top']
    click: ->
      $(".locale_selector").slideToggle()
