import {Header} from "./Header";
import {Footer} from "./Footer";
export function ListBlog(){
    return(
        <>
            <Header/>
            <div className="breadcumb-area" style={{backgroundImage: "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Công thức nấu ăn</h2>
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
                                    <li className="breadcrumb-item" aria-current="page">Công thức</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.2s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.3s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.4s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.5s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.6s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.7s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.8s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="0.9s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="1s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="1.1s">
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

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-post wow fadeInUp" data-wow-delay="1.2s">
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
                            <div className="pagination-area d-sm-flex mt-15">
                                <nav aria-label="#">
                                    <ul className="pagination">
                                        <li className="page-item active">
                                            <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="page-status">
                                    <p>Page 1 of 60 results</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}