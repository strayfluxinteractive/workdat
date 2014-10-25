require 'test_helper'

# Tests for the page controller
class PagesControllerTest < ActionController::TestCase
  test 'should get home' do
    get :home
    assert_response :success
    assert_select 'title', 'WorkDat'
    assert_select '.footer', '© Winky Productions 2014'
  end
end
