# fakeOS

# fakeOS

Fundamental Single Page Application that simulates a Windows XP Desktop.

Components :

Page shows Desktop icons like My Documents, Recycle Bin , Windows Media Explorer. It also has a start icon at the bottom left of the page that users can click. Once clicked, start menu shows up containing the same icons on the desktop.

Desktop icons are clickable. Once clicked a modal pops up showing different top 10 tracks of a music artist fetch from an Spotify using its API.

Page also shows current time at the bottom right.

Tech Stack :

HTML 5 to render the page
SCSS / CSS - to give some styling on the rendered elements
Javascript - to provide functionalities of the elements.
Git - for version control and tracking of changes
Trello - to manage workflow and track task.

Challenges :

1. API allows request data for a certain period of time using a token. Token expires after an hour - I have yet to figure out how to incorporate it in my code.
   To run file please - run curl.txt on terminal , copy access token and paste it on fetch.js's token variable.

2. When a modal is open, The name of the icon is shown at the modal header however when another Icon is clicked, it overlaps with the previous icon name. Previous icon does not go away.
3. Further styling needs to be done.
4. Clock is stuck with current time. SetInterval has yet to be added to run the time.
