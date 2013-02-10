# This is a locale bound view.
#
# The content is pulled from our i18n-js locale info and rendered to the
# page when the view is inserted.
#
# We also hookup observers on the Application's locale property so that
# when it is changed translations are automatically reloaded.
I18nBoundView = Ember.View.extend Ember._Metamorph, {

  templateName: 'i18nBoundView'

  key: null,

  valueDidChange: ->
    return if this.morph.isRemoved()
    this.morph.html(this.valueForRender())

  valueForRender: ->
    safe I18n.t(this.key)

  init: ->
    this._super()
    EmberjsI18n.addObserver('locale', this, 'valueDidChange')

  didInsertElement: ->
    this.valueDidChange()

  destroy: ->
    EmberjsI8n.removeObserver('locale', this, 'valueDidChange')
    this._super()

  render: (buffer) ->
    buffer.push(this.valueForRender())
}

# Just a simple helper to render safe handlebars content
safe = (content) ->
  new Handlebars.SafeString(content)

# This is our localization helper that creates an I18nBoundView
# and appends it to the current view.
Ember.Handlebars.registerHelper 't', (key, options) ->
  view = options.data.view
  bindView = view.createChildView(I18nBoundView, { key: key })
  view.appendChild(bindView)
  false
