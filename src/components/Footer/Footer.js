import "./footer.scss"
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const featureStyle =
        "  col-3 red  row gx-0"
    const size = "50"
    const sizeMedia = '30'
    const LogoSrc = "https://source.unsplash.com/random"
    const footerLogoStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px'
    }


    let navigate = useNavigate();

    const handleOnclick = (link) => {
        navigate(`${link}`);
    }



    return (
        <><div className="container-fluid gx-0">
            <div className="received"></div>

            <div className="container gx-0" >
                <div className="feature-container gx-0 container my-3">

                    <div className="search-features row gx-0 red">
                        <div className={featureStyle}>

                            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className=" col-3 bi bi-phone-vibrate" viewBox="0 0 16 16">
                                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
                            </svg>
                            <div className="col-9 red">
                                <div className="red fw-bold">Hotline</div>
                                <div className="red"> +84 385 927 489</div>
                            </div>
                        </div>
                        <div className={featureStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className=" col-3 bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                            <div className="col-9 red">
                                <div className="red fw-bold">Miễn phí vận chuyển</div>
                                <div className="red"> Cho đơn hàng trên 5.000.000đ</div>
                            </div>
                        </div>
                        <div className={featureStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="col-3 bi bi-gift" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                            </svg>
                            <div className="col-9 red">
                                <div className="red fw-bold">Quà tặng</div>
                                <div className="red"> Nhiều quà tặng và ưu đãi hấp dẫn</div>
                            </div>
                        </div>
                        <div className={featureStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className=" col-3 bi bi-cash-coin" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                            </svg>
                            <div className="col-9 red">
                                <div className="red fw-bold">Thanh toán bảo mật</div>
                                <div className="red"> Chúng tôi chấp nhận các loại thẻ</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" mt-3 row gx-0 red ">
                    <div className="about col-4 red ">
                        <div className="title-logo red fw-bold text-center  " > <Link to={"/home"} >
                            <img style={footerLogoStyle} className="App-logo " src={LogoSrc} alt="logo" />
                        </Link>

                        </div>
                        <div className="description red" >Thương hiệu thiết kế thời trang Tún với phong cách sang trọng, tinh tế cùng nàng diện từ công sở đến các buổi tiệc sang trọng. — Elegant and trendy women's fashion boutique in Saigon District</div>
                        <div className="social-media row gx-0 red p-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeMedia} height={sizeMedia} fill="currentColor" className="red icon-fb col-2 bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeMedia} height={sizeMedia} fill="currentColor" className=" red icon_insta col-2 bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeMedia} height={sizeMedia} fill="currentColor" className="red  icon-youtube col-2 bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeMedia} height={sizeMedia} fill="currentColor" className=" red icon-tweet col-2  bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                            </svg>
                            <div className="col-4"></div>
                        </div>
                    </div>
                    <div className="services col-4 red ps-3">
                        <div className="service-title red fw-bold pt-3 row g-0 p-2 ">Dịch vụ khách hàng</div>
                        <div onClick={() => handleOnclick('/preventation-policy')} className=" red col policy p-2 " style={{ cursor: "pointer", width: "fit-content" }} >
                            Hướng dẫn bảo quản sản phẩm</div>
                        <div onClick={() => handleOnclick('/shipping-policy')} className=" red col p-2 policy " style={{ cursor: "pointer", width: "fit-content" }}>
                            Chính sách vận chuyển
                        </div>
                        <div onClick={() => handleOnclick('/return-refund-policy')} className=" red col p-2 policy " style={{ cursor: "pointer", width: "fit-content" }}>
                            Chính sách đổi trả
                        </div>

                    </div>
                    <div className="contact col-4 red ">
                        <div className="contact-title red fw-bold pt-3 p-2">Liên hệ với chúng tôi</div>
                        <div className="contact-address red p-2"><span className="fw-bold">Địa chỉ: </span> <a style={{ textDecoration: "none" }} href="https://maps.app.goo.gl/JNbbHgsMtuS4Hgkx8" target="_blank" title="open in googlemap">345 Võ Văn Tần, Phường 05, Quận 3, Hồ Chí Minh</a>
                        </div>
                        <div className="contact-email red p-2">
                            <span className="fw-bold">Email: </span><a style={{ textDecoration: "none" }} href="mailto:tuanbui2122@gmail.com" title="mail to tuanbui2122@gmail.com">Tuanbui2122@gmail.com</a>
                        </div>
                        <div className="contact-phone red p-2">
                            <span className="fw-bold">Điện thoại: </span><a style={{ textDecoration: "none" }} href="tel:+8474531589" title="call 8474531589">+8474531589</a>
                        </div>
                    </div>
                </div>
            </div >

            <div className="copyright pt-1 mt-5">
                © Bản quyền thuộc về tún Official | Cung cấp bởi Tún
            </div>


        </div >

        </>
    )
}
export default Footer;
