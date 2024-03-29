import {Header} from "./Header";
import {Footer} from "./Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RightSideBar} from "./RightSideBar";
import ('font-awesome/css/font-awesome.min.css');
export function Home(){
    return(
        <>
            <Header/>
            <OwlCarousel className="welcome-post-sliders owl-carousel owl-theme"
                         items={4} loop autoplay margin={10}
                         responsive={{
                             0: {
                                 items: 1
                             },
                             600: {
                                 items: 2
                             },
                             1000: {
                                 items: 4
                             }
                         }}>
                <div className="welcome-single-slide">
                    <img src="/img/bg-img/slide-1.jpg" alt=""/>
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">
                                <a href="#">May 19, 2017</a>
                                <a href="#">5 Comment</a>
                            </div>
                            <a href="#">
                                <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                            </a>
                        </div>
                </div>

                <div className="welcome-single-slide">
                    <img src="/img/bg-img/slide-2.jpg" alt=""/>
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">
                                <a href="#">May 19, 2017</a>
                                <a href="#">5 Comment</a>
                            </div>
                            <a href="#">
                                <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                            </a>
                        </div>
                </div>

                <div className="welcome-single-slide">
                    <img src="/img/bg-img/slide-3.jpg" alt=""/>
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">
                                <a href="#">May 19, 2017</a>
                                <a href="#">5 Comment</a>
                            </div>
                            <a href="#">
                                <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                            </a>
                        </div>
                </div>

                <div className="welcome-single-slide">
                    <img src="/img/bg-img/slide-4.jpg" alt=""/>
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">
                                <a href="#">May 19, 2017</a>
                                <a href="#">5 Comment</a>
                            </div>
                            <a href="#">
                                <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                            </a>
                        </div>
                </div>

                <div className="welcome-single-slide">
                    <img src="/img/bg-img/slide-4.jpg" alt=""/>
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">
                                <a href="#">May 19, 2017</a>
                                <a href="#">5 Comment</a>
                            </div>
                            <a href="#">
                                <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                            </a>
                        </div>
                </div>
            </OwlCarousel>

            <section className="categories_area clearfix" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src="/img/catagory-img/1.jpg" alt=""/>
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Food</h5>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="/img/catagory-img/2.jpg" alt=""/>
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Cooking</h5>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="/img/catagory-img/3.jpg" alt=""/>
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Life Style</h5>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_area section_padding_0_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">

                                <div className="col-12">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".2s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/1.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h2 className="post-headline">Boil The Kettle And Make A Cup Of Tea Folks, This Is Going To Be A Big One!</h2>
                                            </a>
                                            <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".4s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/2.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".6s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/3.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">The Top Breakfast And Brunch Spots In Hove, Brighton</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".8s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/4.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">The 10 Best Pubs In The Lake District, Cumbria</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-post wow fadeInUp" data-wow-delay="1s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/5.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">The 10 Best Brunch Spots In Newcastle, England</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/6.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">The 10 Best Bars By The Seaside In Blackpool, UK</h4>
                                            </a>
                                            <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".4s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/7.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">How To Get a Narcissist to Feel Empathy</h4>
                                            </a>
                                            <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".6s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/8.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">Bristol's 10 Amazing Weekend Brunches And Late Breakfasts</h4>
                                            </a>
                                            <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".8s">
                                        <div className="post-thumb">
                                            <img src="/img/blog-img/9.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">10 Of The Best Places To Eat In Liverpool, England</h4>
                                            </a>
                                            <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <RightSideBar/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}