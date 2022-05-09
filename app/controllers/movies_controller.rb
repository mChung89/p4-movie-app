class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies, status: :ok
    end

    def create
        movies = Movie.create!(movie_params)
    end

    private

    def movie_params
        params.permit(:title, :release_date, :description, :rating, :image)
    end
end
