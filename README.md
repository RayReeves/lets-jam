# lets-jam

Let's Jam! is an application that helps musicians find musicians to make music with. It is created with a React on Rails stack, and allows users to search based on which instrument they would like to work with. Once a user finds a fellow musician who matches their criteria, they can send a direct message to that user with messaging through Websockets brought to life with Rails Action Cable.

# How To Use

Lets-Jam! utilizes a database managed through PostgeSQL on the Rails back-end. The easiest way to view the application's functions is by visiting the application in production at 

https://lets-jam-together.herokuapp.com/

To test functions such as the profile editing, search, and messaging functions, a user can log in using two pre-set default users. The user details are as follows:

Default1 email: default1@lets-jam.com password: Password
Default2 email: default2@lets-jam.com password: Password

From the user home page, a user can search for other users by checking boxes of instruments they would like to search for and clicking "Search User". From there a collection of users that match the criteria will appear, which are links to that user's personal profile page.
Once on a user's profile page, on the right-hand side is a button "Let's Jam!" Selecting that will open a direct-message chat with this user, which can be accessed later by both users upon log in through the "Inbox" button in the navigation bar.

# Contributions

If desired, a user is welcome to create a new account throught "Sign-Up" link on the home page. The basic requirements for creating an account are laid out on that page, and adding instruments to a profile from the "Personalize Your Profile" link will make your account searchable.

# TODO List

The next future feature to be implemented will be to utilize a Maps API that will allow users to be searched based on geological location from the location ZIP code they currently have on their profile. Once that has been completed, adding the ability for a user to include links to YouTube videos or a SoundCloud account, along with more specific search parameters will be the next steps.