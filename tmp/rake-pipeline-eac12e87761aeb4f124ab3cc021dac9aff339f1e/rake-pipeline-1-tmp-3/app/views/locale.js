(function() {

  this.EmberjsI18n.reopen({
    LocaleSwitcherView: Em.View.extend({
      isView: true,
      tagName: 'li',
      key: null,
      label: null,
      mouseEnter: function() {
        return EmberjsI18n.setLocale(this.key);
      },
      valueForRender: function() {
        return "<a>" + I18n.t("locales." + this.key) + "</a>";
      },
      render: function(buffer) {
        return buffer.push(this.valueForRender());
      }
    })
  });

}).call(this);
