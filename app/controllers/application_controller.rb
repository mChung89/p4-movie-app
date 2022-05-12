class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid,with: :render_invalid

  private
  
  def render_not_found
    render json:{errors: "#{controller_name.classify} not found"},status: :not_found
  end

  def render_invalid(error_obj)
    render json:{errors: error_obj.record.errors.full_messages},status: :unprocessable_entity
  end
  
  def movie_params
    params.permit(:title, :release_date, :description, :rating, :image, :imdb)
  end

  def review_params
    params.permit(:user_id, :movie_id, :review, :rating, :id)
  end

end
