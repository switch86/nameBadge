import './App.css'
import React from "react"
import Badge from "./components/Badge"


const colorsArray = ["tan", "red", "white", "grey",  "olive", "cyan", "turquoise", "pink"]

function App() {
  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthLoc: "",
    food: "",
    about: "",
    color: "tan",
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
    console.log(currentUser)
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
      about: "",
      color: "tan"
    })
  }



  let badgeHTML = users.map((user, index) => {
    return (
      <Badge  
      {...user}
      key={index} />
      )
    })
    let optionsHTML = colorsArray.map((color, index) => {
      return (
        <option key={index} value={color}>{color}</option>
    )})

  return (
    <div className="App">
      <h1 className="Header">Create Your Own Name Badge</h1>
      <form style={{background: currentUser.color}} onSubmit={handleSubmit}>
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
              <select name="color" value={currentUser.color} id="ddlViewBy" onChange={handleChange}>
                {optionsHTML}
              </select> 
        <button>Submit</button>
      </form>
      {badgeHTML}
    </div>
  )
}

export default App
