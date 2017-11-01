require 'test_helper'

class PaintingControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get painting_new_url
    assert_response :success
  end

end
