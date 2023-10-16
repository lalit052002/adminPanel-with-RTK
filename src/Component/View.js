import React, { useEffect } from 'react'

import { useParams,Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../reducers/userSlice';
 

const View = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
  

    useEffect(() => {
        dispatch(getUser(id));

    }, [id])

    return (
        <>
            <section className="vh-100 " style={{ backgroundColor: "black" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-4">

                            <div className="card" style={{ borderRadius: '15px' }}>
                  
                  
                  <Link to='/home'>  <button type="button" className="btn-close h-5 w-5 font-semibold border border-black text-black" aria-label="Close" ><h1>X</h1></button> </Link>
 
                                <div className="card-body text-center">
                                    <div className="mt-3 mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                                            className="rounded-circle img-fluid" style={{ width: '100px' ,textAlign:'center' }} />
                                    </div>
                                    <h4 className="mb-2">{user.name}</h4>
                                    <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                                        href="#!">{user.email}</a></p>
                                    <div className="mb-4 pb-2">
                                        <button type="button" className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-facebook-f fa-lg"></i>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-skype fa-lg"></i>
                                        </button>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-rounded btn-lg bg-cyan-300">
                                        Message now
                                    </button>
                                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                        <div>
                                            <p className="mb-2 h5">8471</p>
                                            <p className="text-muted mb-0">Wallets Balance</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-2 h5">8512</p>
                                            <p className="text-muted mb-0">Income amounts</p>
                                        </div>
                                        <div>
                                            <p className="mb-2 h5">4751</p>
                                            <p className="text-muted mb-0">Total Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default View
