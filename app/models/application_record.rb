class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
# rescue_from ActiveRecord::RecordInvalid, with: :invalid_record



# def invalid_record(invalid)
# render json: {errors: invalid.record.errors.full_messages}
# end

end
