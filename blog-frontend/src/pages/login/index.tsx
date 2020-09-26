import React from 'react'
import { login } from '../../api/module/system'
import { setLocal } from '../../utils/local'
import './index.scss'
interface LoginState {
    username: string,
    password: string
}
class Login extends React.Component<any, LoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        // const events = ['handleInputUsername', 'handleInputUsername', 'handleLogin']
        // events.forEach((event: any) => {
        //     this[event] = this[event].bind(this)
        // })
        this.handleInputUsername = this.handleInputUsername.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleInputUsername(event: any) {
        this.setState({username: event.target.value})

    }
    handleInputPassword(event: any) {
        this.setState({password: event.target.value})
    }
    handleLogin() {
        login({username: this.state.username, password: this.state.password}).then((data: any) => {
            setLocal('token', data.access_token)
        })
    }
    render():any {
        return (
            <div className="login-page">
            <div className="login-windows">
                <div className="user-name input-bottom">
                    <label className="input-wrapper">
                        <input className="input" name="username" value={this.state.username} type="text" placeholder="username" onChange={this.handleInputUsername}/>
                    </label>
                </div>
                <div className="pass-word">
                    <label className="input-wrapper input-bottom">
                        <input className="input" name="password" value={this.state.password} type="password" placeholder="password" onChange={this.handleInputPassword}/>
                    </label>
                </div>
                <button className="login-btn" type="submit" onClick={this.handleLogin} >登录</button>
            </div>
        </div>
        )
    }
}
export default Login