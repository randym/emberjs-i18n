minispade.register('views/header', "(function() {(function() {\n\n  this.EmberjsI18n.reopen({\n    HeaderView: Em.View.extend({\n      templateName: 'header',\n      classNames: ['header', 'navbar', 'navbar-inverse', 'navbar-fixed-top'],\n      click: function() {\n        return $(\".locale_selector\").slideToggle();\n      }\n    })\n  });\n\n}).call(this);\n\n})();\n//@ sourceURL=views/header");