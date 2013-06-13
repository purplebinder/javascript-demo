Dir['./config/**/*.rb'].each { |f| require f }
Dir['./lib/**/*.rb'].each { |f| require f }

require 'sinatra'

get '/' do
  haml :index
end

get '/mocha' do
  haml :mocha
end

# Copy the next line into spec/spec_helper.rb
# require File.expand_path('app', File.dirname(File.dirname(__FILE__)))
