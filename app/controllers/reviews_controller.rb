class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        reviews = Review.create!(review_params)
        render json: reviews
    end

    private
    def review_params
        params.permit(:user_id, :movie_id, :review)
    end
end
