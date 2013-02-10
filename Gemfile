ruby '1.9.3' rescue nil

source :rubygems

group :assets do
  gem 'rake-pipeline',  github: 'livingsocial/rake-pipeline'
  gem 'rake-pipeline-web-filters', github: 'wycats/rake-pipeline-web-filters'
  gem 'rake-pipeline-i18n-filters'

  gem 'coffee-script'
  gem 'compass'
  gem 'tilt'
  gem 'uglifier'
end

group :development, :test do
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-shell'
  gem 'rake'
  gem 'localeapp'
  gem 'handlebars'
  gem 'localeapp-handlebars_i18n'

  # for ember-data
  gem 'colored'
end
