require 'test_helper'

class ApplicationHelperTest < ActionController::TestCase
  test "full title helper" do
    assert_equal full_title, "WorkDat"
    assert_equal full_title("About"), "About | WorkDat"
  end

end