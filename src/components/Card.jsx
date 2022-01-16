import React, { useContext } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeContext';

const Card = ({person}) => {

    const {darkMode} = useContext(DarkThemeContext)
    const {first_name, last_name, email, avatar,id} = person

    return (
                <div className="col-12 col-lg-4 mt-3">
                    <div className={darkMode ? "card mb-3 card-dark border" : "card mb-3"}>
                        <div className="row g-0">
                            <div className="col-md-4 pt-4 pt-lg-0 d-flex align-items-center justify-content-center pe-lg-0">
                            <img src={avatar} className="img-fluid rounded-start px-2 rounded" alt="person" />
                            </div>
                            <div className="col-md-8 ps-lg-0">
                                <div className="card-body ps-lg-0">
                                    <div className="d-flex">
                                        <h6 className='pe-2 text-muted m-0'>No.</h6>
                                        <h6 className="card-title m-0">{`${id}`}</h6>
                                    </div>
                                    <div className="d-flex">
                                        <p className='pe-2 text-muted'>Name:</p>
                                        <h5 className="card-title">{`${first_name}`}</h5>
                                    </div>
                                    <div className="d-flex">
                                        <p className='pe-2 text-muted'>Last Name:</p>
                                        <h6 className="card-text">{`${last_name}`}</h6>
                                    </div>
                                    <div className='d-flex d-lg-block'>
                                        <p className='m-0 pe-2 text-muted'>E-mail:</p>                  
                                        <p className="card-text">{`${email}`}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
    )
}

export default Card
