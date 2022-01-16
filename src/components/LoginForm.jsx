import React, { useState } from 'react'

const LoginForm = ({loginAPIToken, error}) => {

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler =  e => {
        e.preventDefault();

        loginAPIToken(details)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 vh-100 d-flex align-items-center justify-content-center">
                    <form className="col-12 col-lg-4 border p-3 rounded bg-white" onSubmit={submitHandler}>
                        <h2 className='text-center mb-3'>Welcome</h2>
                        <p className="m-0 text-center pb-3">Please enter login information</p>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        </div>
                        <div className="form-floating mb-3 pb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        </div>

                        {error !== "" ? 
                            <div className="alert alert-danger text-center p-0" role="alert">
                            {error}
                            </div>
                        : ""
                        }
                    
                        <div className="row p-0 m-0 pt-3 d-flex justify-content-center align-content-center">
                            <button type="submit" className="btn btn-warning text-dark fw-bold">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
           
    )
}

export default LoginForm
