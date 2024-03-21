import OwlCarousel from "react-owl-carousel";

export function Footer(){
    return(
        <>
            <OwlCarousel className="instargram_area owl-carousel section_padding_100_0 clearfix" id="portfolio"
                         items={6} loop autoplay
                         responsive={{
                             0: {
                                 items: 2
                             },
                             600: {
                                 items: 4
                             },
                             1000: {
                                 items: 6
                             }
                         }}>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/1.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/2.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/3.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/4.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/5.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/6.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/1.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instagram_gallery_item">
                    <img src="/img/instagram-img/2.jpg" alt=""/>
                    <div className="hover_overlay">
                        <div className="yummy-table">
                            <div className="yummy-table-cell">
                                <div className="follow-me text-center">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
            <div className="social_icon_area clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-social-area d-flex">
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i><span>facebook</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i><span>GOOGLE+</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i><span>linkedin</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i><span>VIMEO</span></a>
                                </div>
                                <div className="single-icon">
                                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i><span>YOUTUBE</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer_area">
                <footer className="text-center text-lg-start bg-body-tertiary text-muted footer_area">
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>Theo dõi chúng tôi
                                    </h6>
                                    <p>
                                        “Chúng tôi tin rằng tất cả mọi người đều xứng đáng được thưởng thức
                                        những món ăn ngon nhất, bữa tiệc tuyệt vời nhất, và căn bếp tốt nhất cho
                                        cuộc sống khỏe mạnh và chất lượng mỗi ngày”.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Sản phẩm
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Hữu ích
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Mẹo bếp núc</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Sách nấu ăn</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Liên hệ</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                                    <p> 81 Tôn Đức Thắng, Đà Nẵng</p>
                                    <p>
                                        minhthuandtu@gmail.com
                                    </p>
                                    <p>01 234 567 88</p>
                                    <p>https://www.facebook.com/noel-food</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
                        © 2024 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">NoelFood.com</a>
                    </div>
                </footer>
            </footer>
        </>
    )
}