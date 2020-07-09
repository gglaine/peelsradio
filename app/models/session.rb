class Session < ApplicationRecord
  acts_as_taggable_on :tags
  acts_as_favoritable
end
