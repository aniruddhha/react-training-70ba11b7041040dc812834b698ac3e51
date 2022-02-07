import { useState } from "react"
import { ErrorMessage } from './error-msg'


export function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)
    const onRememberChange = e => setRemember(e.target.checked)

    const onFormSubmit = e => {
        e.preventDefault()
        const obj = { email, password, remember }
        console.log(obj)
    }

    const isEmailEntered = () => email.length > 0
    const isPasswordEntered = () => password.length > 8
    const isEmailValid = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const formCommonClasess = `container mt-3 border `
    const formClass = formCommonClasess + (
        (isEmailEntered() && isPasswordEntered() && isEmailValid()) ?
            `border-primary` :
            `border-danger`
    )

    return (
        <form onSubmit={onFormSubmit} className={formClass}>
            <div className="mb-3">
                <label className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={onEmailChange}
                    required
                />
                <ErrorMessage isError={!isEmailEntered()} msg='❌ Email is mandetory' />
                <ErrorMessage isError={!isEmailValid()} msg='❌ Wrong Email Pattern' />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={onPasswordChange}
                    required
                />
                <ErrorMessage isError={!isPasswordEntered()} msg='❌ Password is mandetory' />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={remember}
                    onChange={onRememberChange}
                />
                <label className="form-check-label">
                    Check me out
                </label>
            </div>
            <button
                type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}