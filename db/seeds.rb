puts "Seeding data...."

response = RestClient.get "https://api.themoviedb.org/3/movie/now_playing?api_key=#{ENV["API_KEY"]}&language=en-US&page=1"
movie_hash = JSON.parse(response)

movie_hash["results"].each do |movie|
    puts movie
    Movie.create(
        title: movie['title'], 
        release_date: movie['release_date'], 
        description: movie['overview'], 
        rating: movie['vote_average'], 
        image: movie['poster_path'])
end

puts "Seeding complete!"