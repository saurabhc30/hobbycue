import React from 'react';
import Audio from '../asset/Audio.png';
import svg2 from '../asset/svg2.png';
import Author from '../asset/author.jpg';

const Home = () => {
    return (
        <>

            <div className='container my-5'>
                <div className='row py-4'>
                    <div className="col-lg-6 mb-3">
                        <div className="card card1 py-2">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-people-fill me-3"></i> People</h5>
                                <p className="card-text card-para">Find a teacher, coach, or expert for your hobby interest in <br /> your locality.  Find a partner, teammate, accompanist or <br /> collaborator.</p>
                                <button className="btn btn-outline-secondary p-2 card-btn">Connect</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="card card2 py-2">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-geo-alt-fill me-3"></i> Place</h5>
                                <p className="card-text card-para">Find a class, school, playground, auditorium, studio, shop <br /> or an event venue.  Book a slot at venues that allow<br /> booking through hobbycue.</p>
                                <button className="btn btn-outline-secondary p-2 card-btn">Meet up</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="card card3 py-2">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-basket3-fill me-3"></i> Product</h5>
                                <p className="card-text card-para">Find equipment or supplies required for your hobby.  Buy,<br /> rent or borrow from shops, online stores or from <br />community members.</p>
                                <button className="btn btn-outline-secondary p-2 card-btn">Got it</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="card card4 py-2">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-calendar2-check-fill me-3"></i> Program</h5>
                                <p className="card-text card-para">Find events, meetups and workshops related to your<br /> hobby.  Register or buy tickets online.</p><br />
                                <button className="btn btn-outline-secondary p-2 card-btn">Attend</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' conatainer-fluid d-flex justify-content-center align-items-center' style={{ background: "#d4fcfa", height: "30rem" }}>
                <div className='container'>
                    <div>
                        <div className="card p-2">
                            <div className="card-body my-3">
                                <h5 className="card-title"><i className="bi bi-plus-circle-fill me-3"></i> Add your own</h5>
                                <p className="card-text card-para">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page.</p><br />
                                <button className="btn btn-outline-secondary p-2 card-btn">Add now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' conatainer-fluid d-flex justify-content-center align-items-center' style={{ height: "40rem" }}>
                <div className='container'>
                    <div>
                        <div className="card p-2" style={{ background: "#F7F5F9" }}>
                            <div className="card-body my-3">
                                <h5 className="card-title"><i className="bi bi-quote pe-3"></i> Testimonials</h5>
                                <p className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p><br />
                                <div className='quotes '>
                                    <div className='col-lg-8 text-end'>
                                        <img src={Audio} alt='' className='img-fluid audioTrack' />
                                    </div>
                                    <div className='author-div col-lg-4 ps-5'>
                                        <div className='avatar me-3'>
                                            <img src={Author} alt='author' className='avatar rounded-circle' style={{ width: "4rem" }} />
                                        </div>
                                        <div className='author-name'>
                                            <h5 className='name'>Shubha Nagarajan</h5>
                                            <small className='bio'>Classical Dancer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid d-flex justify-content-center align-items-center' style={{ background: "#F7FDFF", height: "40rem" }}>
                <div className='container'>
                    <div>
                        <div className=''>
                            <h2 className='py-3'><i>Your <span className='passion'>Hobby</span>, Your <span className='hobby'>Community...</span></i></h2>
                            <buton className='btn btn-secondary btn-started'>Get Started</buton>
                        </div>
                        <div className='svg2 pt-5'>
                            <img src={svg2} alt='svg' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
