import { Link } from "react-router-dom"
import img from '../assets/bg-left.png'
import './signin.css'

import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export function SignIn() {

    const navigate = useNavigate()
    const [creds, setCreds] = useState({ type: '', userId: '', password: '' })

    const onUserTypeChanged = e => setCreds({ ...creds, type: e.target.value })
    const onUserIdChanged = e => setCreds({ ...creds, userId: e.target.value })
    const onPasswordChanged = e => setCreds({ ...creds, password: e.target.value })

    const condRegLink = () => creds.type === 'customer' ? (
        <Link to='custreg'> Registration </Link>
    ) : (
        <Link to='vendreg'> Registration </Link>
    )

    const onSubmitLogin = e => {
        e.preventDefault()

        console.log(creds)

        const dto = { ...creds }
        delete dto.type

        fetch('http://localhost:8080/user/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(dto)
        }).then( response => response.json() ).then(resDto => {
            if(resDto.bdy) {
                navigate('/dashboard')
            }
        })
    }

    return (
        <div className="container">
            <div className="row mt-5 bg-primary">
                <div className="col d-flex justify-content-center">
                    <h4 className="text-white"> Bill Payment App </h4>
                </div>
            </div>
            <div className="row m-3 box">
                <div className="bg-info col-9 d-flex justify-content-center">
                </div>
                <div className="col-3 align-self-center">
                    <form onSubmit={onSubmitLogin}>
                        <div className="d-flex justify-content-between mb-2">
                            <h5 className="text-muted">🛒 Sign In</h5>
                            <select onChange={onUserTypeChanged} value={creds.type}>
                                <option value='customer'>Customer</option>
                                <option value='vendor'>Vendor</option>
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="User ID"
                                value={creds.userId}
                                onChange={onUserIdChanged}
                            />

                            <label className="text-muted">👤 User ID</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={creds.password}
                                onChange={onPasswordChanged}
                            />

                            <label className="text-muted">🔐 Password</label>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            {condRegLink()}

                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}