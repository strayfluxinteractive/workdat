require 'test_helper'

# Test the google login process
class GoogleLoginTest < ActionDispatch::IntegrationTest
  # Omniauth
  OmniAuth.config.test_mode = true
  OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new(
      provider: 'google_oauth2',
      uid: '12345',
      info: {
        name: 'John Doe'
      },
      credentials: {
        token: 'token',
        expires_at: 1_354_920_555
      }
  )
  test 'google_signin' do
    get_via_redirect '/auth/google_oauth2', nil, 'omniauth.auth' => OmniAuth.config.mock_auth[:google_oauth2]
    assert_response :success
    assert_select '#username', 'John Doe'
  end
end
