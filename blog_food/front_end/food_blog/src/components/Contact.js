import {Header} from "./Header";
import {Footer} from "./Footer";

export function Contact(){
    return(
        <>
            <Header/>
            <div className="breadcumb-area" style={{backgroundImage: "url(img/bg-img/breadcumb.jpg);"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Liên hệ chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true"></i>Trang chủ</a></li>
                                    <li className="breadcrumb-item" aria-current="page">Liên hệ chúng tôi</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-area section_padding_80">
                <div className="container">
                    <div className="contact-info-area section_padding_80_50">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="single-contact-info mb-30 text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <h4>France</h4>
                                    <p>40 Baria Sreet 133/2 NewYork City, US <br/> Email: info.contact@gmail.com <br/> Phone: 123-456-7890</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="single-contact-info mb-30 text-center wow fadeInUp" data-wow-delay="0.6s">
                                    <h4>United States</h4>
                                    <p>40 Baria Sreet 133/2 NewYork City, US <br/> Email: info.contact@gmail.com <br/> Phone: 123-456-7890</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="single-contact-info mb-30 text-center wow fadeInUp" data-wow-delay="0.9s">
                                    <h4>Viet Nam</h4>
                                    <p>40 Baria Sreet 133/2 NewYork City, US <br/> Email: info.contact@gmail.com <br/> Phone: 123-456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-area">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <img src={"/img/bg-img/contact.jpg"} alt=""/>
                            </div>
                            <div className="col-12 col-md-7 item">
                                <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
                                    <h2 className="contact-form-title mb-30">If You Have Any Question Contact Me Today !</h2>
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="contact-name" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="contact-email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="contact-website" placeholder="Website"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn contact-btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}