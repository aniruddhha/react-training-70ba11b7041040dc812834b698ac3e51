import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function CustomerRegistration() {

    const initialState = {
        firstName: '',
        lastName: '',
        mobile: '',
        address: '',
        password: '',
        gender: ''
    }
    const navigate = useNavigate()

    const [sts , setSts] = useState('fail')

    const [customer, setCustomer] = useState(initialState)

    const onChangeFirstName = e => setCustomer({ ...customer, firstName: e.target.value })
    const onChangeLastName = e => setCustomer({ ...customer, lastName: e.target.value })
    const onChangeMobile = e => setCustomer({ ...customer, mobile: e.target.value })
    const onChangeAddress = e => setCustomer({ ...customer, address: e.target.value })
    const onChangePassword = e => setCustomer({ ...customer, password: e.target.value })
    const onChangeGender = e => setCustomer({ ...customer, gender: e.target.value })

    const onCustomerSubmit = e => {
        e.preventDefault()

        console.log(customer)

        const user = { ...customer }
        delete user.gender

        const customerDto = { user, gender: Number.parseInt(customer.gender) }
        console.log(customerDto)

        fetch('http://localhost:8080/customer', {
            method: 'POST',
            body: JSON.stringify(customerDto),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(dto => {
            setSts(dto.sts)
            setCustomer(initialState)
            navigate('..')
        })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h5> Customer Registration </h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {sts === 'success' ? <p className="alert alert-success text-center" > Customer Saved Successfully </p> : ''}
                </div>
            </div>
            <form className="row g-3" onSubmit={onCustomerSubmit}>
                <div className="col-md-4">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" value={customer.firstName} onChange={onChangeFirstName} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={customer.lastName} onChange={onChangeLastName} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Gender</label>
                    <select className="form-select" onChange={onChangeGender} value={customer.gender}>
                        <option defaultValue={0}>Choose...</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Other</option>
                    </select>
                </div>

                <div className="col-4">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" value={customer.mobile} onChange={onChangeMobile} />
                </div>

                <div className="col-4">
                    <label className="form-label">Address </label>
                    <input type="text" className="form-control" placeholder="Apartment, studio, or floor" value={customer.address} onChange={onChangeAddress} />
                </div>


                <div className="col-md-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={customer.password} onChange={onChangePassword} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}