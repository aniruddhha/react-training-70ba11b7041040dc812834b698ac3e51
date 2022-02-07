import { useState } from "react"


export function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)
    const onRememberChange = e => setRemember(e.target.checked)

    const onFormSubmit = e => {
        e.preventDefault()

        console.log(e)
        const obj = { email, password, remember }
        console.log(obj)
    }

    return (
        <form className='container' onSubmit={onFormSubmit}>
            <div className="mb-3">
                <label className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={onEmailChange}
                />

                <div className="form-text">
                    We'll never share your email with anyone else.
                </div>
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
                />
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