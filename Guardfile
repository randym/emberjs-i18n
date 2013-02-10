group :js do
  guard :shell do
    watch %r{^assets/scripts(?!spec).*(coffee|js|yml|handlebars)$} do
      # rebuild frontend app when change any *.js, *.handlebars, *.yml
      UI.info 'Start build process'
      `bundle exec rakep`
      UI.info 'End build process'
      message = $?.success? ? 'The build was done successfully' : 'The build is failed'
    end
  end
end

group :styles do
  guard :shell do
    watch %r{^assets/styles(?!vendor).*(sass|css|scss)$} do
      # rebuild frontend app when change any *.sass, *.css, *.scss
      UI.info 'Start build process'
      `bundle exec rakep`
      UI.info 'End build process'
      message = $?.success? ? 'The build was done successfully' : 'The build is failed'
    end
  end
end
