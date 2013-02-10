(function() {
  var I18nBoundView, safe;

  I18nBoundView = Ember.View.extend(Ember._Metamorph, {
    templateName: 'i18nBoundView',
    key: null,
    valueDidChange: function() {
      if (this.morph.isRemoved()) {
        return;
      }
      return this.morph.html(this.valueForRender());
    },
    valueForRender: function() {
      return safe(I18n.t(this.key));
    },
    init: function() {
      this._super();
      return EmberjsI18n.addObserver('locale', this, 'valueDidChange');
    },
    didInsertElement: function() {
      return this.valueDidChange();
    },
    destroy: function() {
      EmberjsI8n.removeObserver('locale', this, 'valueDidChange');
      return this._super();
    },
    render: function(buffer) {
      return buffer.push(this.valueForRender());
    }
  });

  safe = function(content) {
    return new Handlebars.SafeString(content);
  };

  Ember.Handlebars.registerHelper('t', function(key, options) {
    var bindView, view;
    view = options.data.view;
    bindView = view.createChildView(I18nBoundView, {
      key: key
    });
    view.appendChild(bindView);
    return false;
  });

}).call(this);
