(function() {

  this.EmberjsI18n.reopen({
    LocaleSelectorView: Em.View.extend({
      templateName: 'locale_selector',
      classNames: ['locale_selector'],
      click: function(evt) {
        return $('.locale_selector').slideToggle();
      },
      LocaleLinksView: Em.CollectionView.extend({
        tagName: 'ul',
        content: EmberjsI18n.locales,
        itemViewClass: Em.View.extend({
          templateName: 'locale_link',
          mouseEnter: function() {
            return EmberjsI18n.setLocale(this.content.key);
          }
        })
      })
    })
  });

}).call(this);
