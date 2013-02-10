namespace :ember do
  desc 'update ember'
  task :update do
    updates = { 'ember.js' => 'ember.js', 'ember-data.js' => 'data' }
    updates.each do |k, v|
      if File.exists?("tmp/#{k}")
        system "cd tmp/#{k}; git fetch origin; git reset --hard origin/master"
      else
        system "git clone https://github.com/emberjs/#{v}.git tmp/#{k}"
      end

      system "cd tmp/#{k}; bundle update"
      system "cd tmp/#{k}; rake dist"
      system "cp tmp/#{k}/dist/#{k} assets/scripts/vendor/#{k}"
    end
  end

  #  task :update do
  #if File.exists?('tmp/ember.js')
  #system 'cd tmp/ember.js; git fetch origin; git reset --hard origin/master'
  #else
  #system 'git clone https://github.com/emberjs/ember.js.git tmp/ember.js'
  #end

  #system 'cd tmp/ember.js; bundle update'
  #system 'cd tmp/ember.js; rake dist'
  #system 'cp tmp/ember.js/dist/ember.js assets/scripts/vendor/ember.js'

  #if File.exists?('tmp/ember-data.js')
  #system 'cd tmp/ember-data.js; git fetch origin; git reset --hard origin/master'
  #else
  #system 'git clone https://github.com/emberjs/data.git tmp/ember-data.js'
  #end

  #system 'cd tmp/ember-data.js; bundle update'
  #system 'cd tmp/ember-data.js; rake dist'
  #system 'cp tmp/ember-data.js/dist/ember.js assets/scripts/vendor/ember-data.js'
  #end
end
