# World Spectacular (React-frontend)

[Link for Frontend React Repository](https://github.com/aflack143/world_spectacular_frontend)
[Link for Backend Django Repository](https://github.com/aflack143/world_spectacular_backend)


## Description:
An application that allows a user to search for countrys in multiple search methods, providing demographic pages for each country. Available photo galley, and user profile after logging in from an email authentication program (Auth0)

## Brief Example:
<img src='https://user-images.githubusercontent.com/80013194/125968907-83ad6a01-0303-46ef-98dc-3474bd582081.png' width="400">
<img src='https://user-images.githubusercontent.com/80013194/125969194-a1b47b69-e60b-4b39-90d9-7d72b2a3ee4b.png' width="400">


## Getting Started:
Project planning and deciding on creating my own models or using an API. I found a country information API and decided to use the API and create my own model for extra country information.

![image](https://user-images.githubusercontent.com/80013194/125977010-b49943c4-808b-4c6e-84e7-05affab5b9ea.png)

## Features:
**_Bronze_**:
* Import Countries API
* Render each Country with data
* User login with authentication

**_Silver_**:
* Search option of countries from API
* Create Model with extra country information
* Added page for display of all pictures for each Country

**_Gold / Future Enhancement_**:
* Display Country info with links to Country page from Visted & Dream Visit list
* User add pictures to country, with admin approval
* Add Holidays by country [Holiday API](https://date.nager.at/)


**_Key notes_**:<br>
The React frontend has many imports (Django, Auth0, RestCountries API). Getting each of these to connect (and talk to each other) was interesting, I obtained a "key" from Auth0 to create the Django User table.

## Technologies Used (backend):
  React, Auth0, Axios, React-audio-player, React-router-dom <br>
  
**API**:
*  https://restcountries.eu/
*  https://auth0.com/

### Sources: 
[Refreshing page when only /:abbr changes](https://stackoverflow.com/questions/64223938/react-link-doesnt-refresh-page-automatically)

[Changing title bar icon](https://www.geeksforgeeks.org/how-to-add-icon-logo-in-title-bar-using-html/)

[Auth0](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Calling-an-API)<br>
![image](https://user-images.githubusercontent.com/80013194/125971569-7e57216e-058f-4481-8454-7e713ce9a166.png)


[Creating Hamburger](https://www.youtube.com/watch?v=dIyVTjJAkLw)
```js
// This is a video for vanilla JS, you can modify the addEventListeners to be onClick methods:
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuBtn, setMenuBtn] = useState('menu-btn')
  const [navBar, setNavBar] = useState('hide')

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      setMenuBtn('menu-btn')
      setNavBar('hide')
    } else {
      setMenuBtn('menu-btn open')
      setNavBar('display')
    }
  }
````
