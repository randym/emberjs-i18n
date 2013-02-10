@EmberjsI18n = Em.Application.create Em.Evented,

  locales: [ {key: 'en', label: 'English'},
             {key: 'ja', label: '日本語'} ]

  setLocale: (locale) ->
    I18n.locale = locale
    EmberjsI18n.set('locale', locale)

require 'app'
