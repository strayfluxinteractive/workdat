require 'test_helper'

# Test the google login process
class GoogleLoginTest < ActionDispatch::IntegrationTest
  # This rigs omniauth to return mock information in test
  def setup
    @user = users(:one)
    OmniAuth.config.test_mode = true
    OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new(
        provider: @user.provider, uid: @user.uid,
        info: { name: @user.name },
        credentials: {
          token: @user.oauth_token,
          expires_at: @user.oauth_expires_at })
  end

  test 'google_signin' do
    get_via_redirect signin_path, nil, 'omniauth.auth' => OmniAuth.config.mock_auth[:google_oauth2]
    assert_response :success
    assert_select '#username', @user.name
    assert_equal session[:user_id], @user.id
  end

  test 'google_signout' do
    get_via_redirect signout_path
    assert_response :success
    assert_equal session[:user_id], nil
  end
end
