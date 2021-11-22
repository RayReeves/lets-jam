require 'rails_helper'

feature "user" do

  let!(:test_user) {User.create!(email: "testuser@mail.com", password: "password", username: "test_user_1", first_name: "user", last_name: "name", zip_code: "01234")}

  scenario 'is able to sign in with valid info' do
    visit "/"
    click_link "Sign In"

    fill_in "Email", with: test_user.email
    fill_in "Password", with: test_user.password

    click_button "Log in"
    expect(page).to have_content("Signed in successfully")
  end

  scenario "is unable to sign in with invalid info" do
    visit "/"
    click_link "Sign In"
    click_button "Log in"

    expect(page).to have_content("Invalid Email or password")
  end

end