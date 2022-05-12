class MoviesController < ApplicationController
    def index

    end

    def create
        movie = Movie.find_by(title: params[:title])
        if movie
            render json: movie
        else
            movie = Movie.create!(movie_params)
            render json: movie, status: :ok
        end
    end
end
