Dir['./config/**/*.rb'].each { |f| require f }
Dir['./lib/**/*.rb'].each { |f| require f }

require 'browser'
require 'useragent'
require 'haml'
require 'sinatra'

get '/' do
  haml :index
end

get '/mocha' do
  haml :mocha
end

get '/browser' do
  @browser = Browser.new(:ua => request.env['HTTP_USER_AGENT'])
  @user_agent = UserAgent.parse(request.env['HTTP_USER_AGENT'])
  puts request.env['HTTP_USER_AGENT']
  haml :browser
end

# Copy the next line into spec/spec_helper.rb
# require File.expand_path('app', File.dirname(File.dirname(__FILE__)))
