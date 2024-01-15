import React from 'react';
import svg1 from '../asset/svg1.png';
import google from '../asset/google.png';
import facebook from '../asset/facebook.png';

const Signup = () => {
    return (
        <div className='container-fluid pt-2' style={{ backgroundColor: "#F7F5F9" }}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-lg-7 text-start pe-2'>
                        <div className='title mb-4'>
                            <h2 className='login-tittle'><i>Explore your <span className='hobby'>hobby</span> or <span className='passion'>passion</span></i></h2>
                        </div>
                        <div className='para1 mb-2'>
                            <small className='login-para'>
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                            </small>
                        </div>
                        <div className='para2 mb-3 '>
                            <small className='login-para'>
                                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                            </small>
                        </div>
                        <div className='svg-img mt-4'>
                            <img className='img-fluid pt-5' src={svg1} alt='svg1' />
                        </div>
                    </div>
                    <div className='col-lg-5 signup-form text-start'>
                        <div className='btn-section mb-3'>
                            <button className='btn sign-btn' >Sign in</button>
                            <button className='btn join-btn'>Join in</button>
                        </div>
                        <div className='btn-google'>
                            <img src={google} alt='google' className='google' />
                            <button className="btn btn-lg btn-block btn-outline-secondary mb-2 w-100 signupwith text-between" type="submit"> Continue with Google</button>

                        </div>

                        <div className='btn-google'>
                            <img src={facebook} alt='facebook' className='google' />
                            <button className="btn btn-lg btn-block btn-outline-secondary mb-2 w-100 signupwith" type="submit">Continue with facebook</button>
                        </div>

                        <div className='py-2'>
                            <hr data-content='and' className="hr-text" />
                        </div>
                        <form className='pt-4'>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Email" />
                            </div>
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-outline-secondary btn-lg w-100 btn-continue">Continue</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
