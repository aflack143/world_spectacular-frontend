# World Spectacular (React-frontend)

[Link for Frontend React Repository](https://github.com/aflack143/world_spectacular_frontend)
[Link for Backend Django Repository](https://github.com/aflack143/world_spectacular_backend)


Resources: 
[Refreshing page when only /:abbr changes](https://stackoverflow.com/questions/64223938/react-link-doesnt-refresh-page-automatically)
[Changing title bar icon](https://www.geeksforgeeks.org/how-to-add-icon-logo-in-title-bar-using-html/)

[Auth0](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Calling-an-API)

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