import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from "react-router-dom";
export function Header() {
    return (
        <>
            {/*<div id="preloader">*/}
            {/*    <div className="yummy-load"></div>*/}
            {/*</div>*/}

            <div className="top_header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6">
                            <div className="top_social_bar">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <Link to={"/login"}>Đăng nhập</Link>
                                    </div>
                                    <div className="register">
                                        <a href="#">Đăng kí</a>
                                    </div>
                                </div>
                                <div className="search_button search-hidden-form">
                                    <form action="#" method="get" className="d-flex">
                                        <input type="search" name="search" id="search-anything"
                                               placeholder="Nhập tên món ăn"/>
                                        <button className="bg-white border-0" style={{marginTop:"7px",marginLeft:"5px"}}>
                                            <i className="fa fa-search" style={{fontSize:"24px"}}></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <header className="header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo_area text-center">
                                <Link to={"/"} className="yummy-logo">Noel Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                    <ul className="navbar-nav" id="yummy-nav">
                                        <li className="nav-item">
                                            <NavLink to={"/"} className="nav-link">Trang chủ</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={"/blog"} className="nav-link">Công thức nấu ăn</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Dụng cụ bếp</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Mẹo bếp núc</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sách nấu ăn</a>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={"/contact"} className="nav-link">Liên hệ</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}