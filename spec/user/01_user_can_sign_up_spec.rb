require 'rails_helper'

feature 'user is able to' do

  let!(:test_user) {User.create!(email: "testuser@mail.com", password: "password", username: "test_user_1", first_name: "user", last_name: "name", zip_code: "01234")}

  scenario 'click sign up' do
    visit "/"

    click_link "Sign Up"

    expect(page).to have_content("Sign up")
  end

  scenario 'is able to sign up' do
    visit new_user_registration_path

    fill_in 'Email' , with: "test@mail.com"
    fill_in 'Password' , with: "password"
    fill_in 'Password confirmation' , with: "password"
    fill_in 'Username' , with: "username"
    fill_in 'First Name' , with: "Frank"
    fill_in 'Last Name' , with: "Thomas"
    fill_in 'Zip Code' , with: "02134"

    click_button "Sign up"

    expect(page).to have_content("signed up successfully")
  end

  scenario 'is unable to sign up with bad info' do
    visit new_user_registration_path

    click_button "Sign up"

    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Password can't be blank")
    expect(page).to have_content("First name can't be blank")
    expect(page).to have_content("Last name can't be blank")
    expect(page).to have_content("Zip code can't be blank")
  end

  scenario 'is unable to sign in with duplicate info' do

    visit "/"

    click_link "Sign Up"

    fill_in 'Username' , with: test_user.username
    fill_in 'Password' , with: "password"
    fill_in 'Password confirmation' , with: "password"
    fill_in 'Email' , with: test_user.email
    fill_in 'First Name' , with: "New"
    fill_in 'Last Name' , with: "User"
    fill_in 'Zip Code' , with: test_user.zip_code

    click_button "Sign up"

    expect(page).to have_content("Username has already been taken")
    expect(page).to have_content("Email has already been taken")
  end

end