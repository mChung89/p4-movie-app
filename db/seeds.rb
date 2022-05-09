puts "Seeding data...."

response = RestClient.get "https://api.themoviedb.org/3/movie/now_playing?api_key=#{ENV["API_KEY"]}&language=en-US&page=1"
movie_hash = JSON.parse(response)

# genreRes = RestClient.get "https://api.themoviedb.org/3/genre/movie/list?api_key=#{ENV["API_KEY"]}&language=en-US"

# genre_hash = JSON.parse(genreRes)


movie_hash["results"].each do |movie|
    puts movie
    Movie.create!(
        title: movie['title'], 
        release_date: movie['release_date'], 
        description: movie['overview'], 
        rating: movie['vote_average'], 
        image: movie['poster_path'],
        movie_id: movie['id']
    )
end
# puts "genre_hash"
# puts genre_hash


# genre_hash['genres'].each do |genre|
#     puts genre
#     Genre.create!(
#         name: genre['name'],
#         name_id: genre['id']
#     )
# end

puts "Seeding complete!"