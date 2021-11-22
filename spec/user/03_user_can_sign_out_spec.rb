require 'rails_helper'

feature "user is able to" do
  let!(:test_user) {User.create!(email: "testuser@mail.com", password: "password", username: "test_user_1", first_name: "user", last_name: "name", zip_code: "01234")}

  scenario "sign out" do
    visit "/"
    click_link "Sign In"
    fill_in "Email", with: test_user.email
    fill_in "Password", with: test_user.password
    click_button "Log in"

    click_link "Sign Out"

    expect(page).to have_content("Signed out successfully")
  end
end
