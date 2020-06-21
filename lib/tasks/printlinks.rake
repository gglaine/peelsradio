
require 'open-uri'
require 'nokogiri'

namespace :mytasks do
  desc "This take does something useful!"
  task :printlinks do
    html_file = open("https://davestrickson.blogspot.com/2020/05/john-peel-sessions.html")
    doc = Nokogiri::HTML(html_file)
    sessions = doc.css('font>a').each do |session|
      band = session.text.match(/^[^\-]*/)
      year = session.text.match(/\d{4}/)
      yt_url = session['href'].to_s
      link = yt_url

      File.open("urls.txt", "a") {
        |f| f.write "#{yt_url}\n"
      }

    end
  end
end
