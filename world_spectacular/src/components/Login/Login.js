import './Login.css';
import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                username:"",
                password:""
            }
        }
    }

  handleOnChange = (event) => {
    this.setState(prevState => ({
        data: {
            ...prevState.data,
            [event.target.name]: event.target.value
        }
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('User Logging In')
    axios.post("http://localhost:8000/api-auth/login/", this.state.data)
    .then(resp => {
        this.props.history.push(`/profile/${resp.data.user.id}`)
    })
    .catch(err => {
        console.log(err)
    })
  }

  render() {
    return (
      <>
        <form>
          <input type='username' placeholder='username'/>
          <input type='password' placeholder= 'password'/>
          <input type='submit' value='Login' />
        </form>
      </>
    );
  }
}

export default Login;