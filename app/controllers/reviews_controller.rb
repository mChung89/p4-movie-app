class ReviewsController < ApplicationController
    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.reviews, status: :ok
        else
            render json: {error: "Nothing in watchlist!"},status: :not_found
        end
    end
    
    def show
        movie = Movie.find_by(imdb: params[:id])
        render json: movie.reviews, status: :ok
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        movie = review.movie
        render json: movie, status: 202
    end

    def create
        movie = Movie.find_by(title: params[:title])
        user = User.find_by(id: params[:user_id])
        if movie
            review = Review.create!(user_id: params[:user_id], movie_id: movie.id)
            render json: review, status: :ok
        else
            movie = Movie.create!(movie_params)
            review = Review.create!(user_id: params[:user_id], movie_id: movie.id)
            render json: movie, status: :ok
        end
    end
end
