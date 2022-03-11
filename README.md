# ASTRO WATCHLIST

Built for amateurs astronomers, the app is an easy way to browse what’s in the Messier catalogue and create your own watch list.
You can add object you've seen or you want to see, to help you plan your next field trip.
You can also add other object to your account but if you want to climb the leader board, only Messier objects count!

---

## PROJECT LINK

[Astro Watchlist](https://astro-watchlist.netlify.app/)

---

## BUILT WITH

- React.js
- Axios
- Bootstrap
- Deployed on Netlify

---

## COMPONENT AND PAGE STRUCTURE

### Pages

- Homepage
- Sign up
- Log in
- ObjectList
- SingleObject
- Profile
- AddEvent
- AddEventFromCatalogue
- EditEvent
- ErrorPage

### Components

- Navbar
- ButtonLink
- PictureOfTheDay
- LeaderBoard
- SearchBar
- ObjectListFilters
- ObjectCard
- Footer
- CommentCard
- CommentForm
- EventCard
- EventForm
- EditEventForm

### Protected Routes

- isAnon
- isPrivate

---

## WIREFRAMES

![guest](https://user-images.githubusercontent.com/52048170/157739797-fbc02e99-4a3c-4934-8946-ba478a8ea021.PNG)
![loggedin](https://user-images.githubusercontent.com/52048170/157739810-d51b0a02-bac3-4af8-904f-8fdbad37c48c.PNG)

---

## USER STORIES

**ALL VISITORS**

• **As** a guest **I’d like** to see a space picture on the homepage **So** I can be intrigued on what I can see.

• **As** a guest **I’d like** to see a list of objects  **So** I can browse and get info.

• **As** a guest **I’d like** to see specific object details **So** I can get a better understanding on what I want to watch

• **As** a guest **I’d like** to be able to search the list of objects **So** I find more quickly what I’m looking for.

• **As** a guest **I’d like** to be able to filter the list of objects **So** I can see only the object I’m interested in.

• **As** a guest **I’d like** to see other users comments on the object **So** I can see people’s opinions.

• **As** a guest **I want** to be able to create an account **So** I can save object in my watch list.

• **As** a guest **I want** to be told if there is something wrong in my sign up form **So** I update my details.

• **As** a guest **I want** to be able to login **So** I can access my account

• **As** a guest **I want** to be able told if my credentials are incorrct **So** I can check and re-submit them.

• **As** a guest **I want** to be able to see the leaders board **So** I can see other users are using the site

**LOGGED IN USERS**

• **As** a registered user of this app **I want to** be able to save a list of objects I’ve seen **So** I can rkeep track of them and store my comments.

• **As** a registered user of this app **I want to** be able to save a list of of objects I want to see **So** I can plan what to look for next time I observe the sky.

• **As** a registered user of this app **I want to** be able see the list of my saved objects **So** I can check it.

• **As** a registered user of this app **I want to** be able to edit a saved object in my list **So** I can update the details and my observation.

• **As** a registered user of this app **I want to** be able to delete an object from my list **So** I keep the list correctly updated.

• **As** a registered user of this app **I want to** be able to leave a comment on the object in the catalogue **So** I can share my opinion with the community.

• **As** a registered user of this app **I want to** be able to filter my list of objects **So** I can see only the objects I’m interested in.

• **As** a registered user of this app **I want to** be sure my profile page is not accessible to other user **So** I can safely use the app.

## COMING UP NEXT

- Add picture to the user events
- Add filters for the events in the account
- Edit and Delete comments
- Add more catalogues i.e. planets, constellations
- Be able to see other comments made by the same user

---

## RESOURCES

### Technology

[React](https://reactjs.org/)
[Axios](https://www.npmjs.com/package/axios)
[Bootstrap](https://getbootstrap.com/)  
[Netlify](https://www.netlify.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Content

[NASA Picture of the Day Api](https://api.nasa.gov/) and [API docs](https://github.com/nasa/apod-api)  
[Messier catalogue data](https://lguerriero.opendatasoft.com/pages/home/)  
[Messier catalogue difficulty level rating](https://www.nexstarsite.com/OddsNEnds/MessierDifficultyRatings.htm)
