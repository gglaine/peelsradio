# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
require 'nokogiri'

html_file = open("https://davestrickson.blogspot.com/2020/05/john-peel-sessions.html")
doc = Nokogiri::HTML(html_file)
sessions = doc.css('font>a').each do |session|
  band = session.text.match(/^[^\-]*/)
  year = session.text.match(/\d{4}/)
  yt_url = session['href'].to_s
  link = yt_url

  session = Session.create( band: band, year: year, link: link )

end
