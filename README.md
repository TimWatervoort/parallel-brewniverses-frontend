# Parallel Brewniverses
A beverage-rating site where any keyword can be a channel.

## Using the site
When you first visit the site, you are redirected to __'/all'__. This is a collection of all posts published on the site, regardless of their channels, or __'brewniverses'__.

#### Signing up / Logging in

To sign up, either navigate to __'/signup'__ or click the __Sign Up__ button on the navbar.

Once you have signed up, you are automatically redirected to the login page. If you already have an account, you can either navigate to __'/login'__ or click the __'Log In'__ button on the navbar.

Note that you are still able to view posts, channels, and profiles without logging in. You will, however, be unable to vote on posts, subscribe to channels, or make your own posts.

#### Brewniverses
To visit a __brewniverse__, click any of the channel badges on the bottom of a post. You will be directed to a similar-looking page, but the only posts shown are those who share that tag.

To subscribe to a __brewniverse__, click the __'+'__ button next to the channel's name. If you are already subscribed and would like to unsubscribe, the button will show a __'-'__ icon instead, and clicking it will unsubscribe you from the channel.

To view all posts from your subscriptions, navigate to __'/home'__ or click the __'My Brewniverses'__ button on the navbar.

#### Viewing Posts
To view a single post, click the __'view'__ button on the footer of the post.

To upvote or downvote a post, click the up and down arrows next to the post's score.

#### Viewing Profiles
To view the profile of a post's author, click the username after the words __'Reviewed by:'__ on the bottom of the post (on the post's page).

To view your profile, either navigate to __'/user'__, or click the __'My Profile'__ button on the navbar.

#### Adding / editing posts
To add a new post, either navigate to __'/addpost'__, or click the __'New Review'__ button on the navbar. Fill out the required fields and click __'Submit'__. If the post was successful, you will be redirected to the post's page.

To edit your post, go to the post's page and click the __'Edit'__ button. Make whatever edits you would like (ensure you separate channel names with commas), and click the __'Submit'__ button.

To delete a post, visit your profile and click the __'Delete'__ button next to the post at the bottom of the page.

#### Logging out
To log out, click the __'Log Out'__ button on your profile page.

## Available Routes

#### /
Will redirect to /all by default.

#### /all
Will show all posts from all channels.

#### /home
Shows all posts from user's subscribed channels.

#### /post/:id
Expands a post and shows all its content.

#### /brewniverse/:channel
Will show all posts from the specified channel.

#### /login
Shows the login page.

#### /signup
Shows the signup page.

#### /user
Shows the user's profile.
