class HomeController < ApplicationController

    #require 'net/http'
    #uri = URI('https://api.rescuegroups.org/rest/?key=uAHKSd7E&type=orgs')
    #req = Net::HTTP.get(uri)
    #puts req #show result


    require 'open-uri'
    require 'json'
    def create
        doc = Nokogiri::XML(open("https://api.rescuegroups.org/rest/?key=uAHKSd7E&type=orgs?"))
        JSON.generate({:response => "hello World"})
        #puts "got it"
        #200
    end




end
