import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid' style={{ background: "#F7FDFF", height: "20rem" }}>
            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <span className="fw-bold">Hobbycue</span>

                            <ul className="list-unstyled mt-3">
                                <li className='nav-item'>
                                    <a href="#!" className="text-body nav-link">About us</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Our services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Work with us</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">FAQ</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Contact us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <span className="fw-bold">How Do I</span>

                            <ul className="list-unstyled mt-3">
                                <li>
                                    <a href="#!" className="text-body nav-link">Sign Up</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Add a Listing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Claim Listing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Post a Query</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Add a Blog Post</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Qther Queries</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <span className="fw-bold ">Quick Links</span>

                            <ul className="list-unstyled mt-3">
                                <li>
                                    <a href="#!" className="text-body nav-link">Listing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Blog Posts</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Shop / Store</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-body nav-link">Cummunity</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <span className="fw-bold">Social Media</span>
                            <div className="footer_social_area d-flex justify-content-between mt-3">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="bi bi-facebook me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="bi bi-pinterest me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i className="bi bi-instagram me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="bi bi-twitter me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="bi bi-youtube me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="bi bi-telegram me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="bi bi-envelope-fill me-2"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="bi bi-google"></i></a>
                            </div>
                            <div className="input d-flex my-4">
                                <input className="form-control footer-searchBox border-secondary " style={{ width: "18rem" }} type="search" placeholder="search" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary btn-invite" type="button">
                                        invite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center p-3" style={{ background: "#F7F5F9" }}>
                    <small>
                        © Purple Cues Private Limited
                    </small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
