class MoviesController < ApplicationController
    def index
       
        user = User.find_by(id: session[:user_id])
        render json: user.movies.uniq, status: :ok

        # if user.movies.length == 0
        #     render json: {error:"This watchlist is empty"}
        # else 
        #     render json: user.movies.uniq, status: :ok
        # end
        
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

    private

    def movie_params
        params.permit(:title, :release_date, :description, :rating, :image)
    end
end
