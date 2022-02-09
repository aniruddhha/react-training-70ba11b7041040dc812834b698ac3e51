import { Link } from "react-router-dom"
import img from '../assets/bg-left.png'
import './signin.css'

export function SignIn() {
    return (
        <div className="container vh-100">
            <div className="row mt-5 bg-primary">
                <div className="col d-flex justify-content-center">
                    <h4 className="text-white"> Bill Payment App </h4>
                </div>
            </div>
            <div className="row m-3">
                <div className="col-9 d-flex justify-content-center">
                    <img src={img}></img>
                </div>
                <div className="col-3 align-self-center">
                    <form>
                        <div className="d-flex justify-content-between mb-2">
                            <h5 className="text-muted">🛒 Sign In</h5>
                            <select >
                                <option value='customer'>Customer</option>
                                <option value='vendor'>Vendor</option>
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="User ID" />

                            <label className="text-muted">👤 User ID</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password" />

                            <label className="text-muted">🔐 Password</label>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <Link to=''> Registration </Link>

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