class MoviesController < ApplicationController
    def index
       
        user = User.find_by(id: session[:user_id])
       
        render json: user.movies.uniq, status: :ok
    end

    def create
        movies = Movie.create!(movie_params)
        render json: movies
    end

    private

    def movie_params
        params.permit(:title, :release_date, :description, :rating, :image)
    end
end
