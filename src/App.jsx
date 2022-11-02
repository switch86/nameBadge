import './App.css'
import React from "react"
import Badge from "./components/Badge"

function App() {
  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthLoc: "",
    food: "",
    about: ""
  })
  
  function handleChange(event) {
    event.preventDefault()
    const {name, value} = event.target
    setCurrentUser(user => {
      return {
        ...user, 
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUsers(prevUsers => {
      return [
        ...prevUsers, 
        currentUser
      ]
      }
    )
    setCurrentUser({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthLoc: "",
      food: "",
      about: ""
    })
  }



  let badgeHTML = users.map(user => {
    return (
      <Badge 
        {...user} />
    )
  })
  console.log(currentUser)
  console.log(users)
  console.log(badgeHTML)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input required
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            onChange={handleChange}
            value={currentUser.firstName}>
        </input>
        <input required
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            onChange={handleChange}
            value={currentUser.lastName}>
        </input>
        <input required
            type="email" 
            name="email" 
            placeholder="E-mail Address" 
            onChange={handleChange}
            value={currentUser.email}>
        </input>
        <input required
            type="text" 
            name="food" 
            placeholder="Favorite Food" 
            onChange={handleChange}
            value={currentUser.food}>
        </input>
        <input required
            type="text" 
            name="about" 
            placeholder="Tell us about yourself" 
            onChange={handleChange}
            value={currentUser.about}>
        </input>
        <input required
            type="text" 
            name="birthLoc" 
            placeholder="Birth Place" 
            onChange={handleChange}
            value={currentUser.birthLoc}>
        </input>
        <input required
            type="phone" 
            name="phone" 
            placeholder="Phone Number" 
            onChange={handleChange}
            value={currentUser.phone}>
        </input>
        <button>Submit</button>
      </form>
      {badgeHTML}
    </div>
  )
}

export default App
