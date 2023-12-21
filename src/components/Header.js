import "./header.scss"
import { BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { useState } from 'react';
import MenuBar from "./MenuBar";
import Cart from "./Cart";

const Header = (props) => {
    const sizeIcon = '30'
    const logoStyle = {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
    }
    const headerLogoSrc = "https://source.unsplash.com/random"
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isOffcartOpen, setIsOffcartOpen] = useState(false);
    const noRefCheck = () => {
        // Do something when the offcanvas is toggled
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };
    const cartCheck = () => {
        // Do something when the offcanvas is toggled
        setIsOffcartOpen(!isOffcartOpen);
    };

    return (
        <>
            <div
                className={props.isHomePage === true ? "container-fluid sticky-top  bs-tertiary-bg red shadow" :
                    "container-fluid  bs-tertiary-bg red shadow"

                }
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>

                <div className="container ">
                    <div className="row  align-items-center">

                        <div className="  col text-start red " onClick={() => noRefCheck()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg></div>
                        <div className=" col text-center red  ">
                            <img className="App-logo " style={logoStyle} src={headerLogoSrc} alt="logo"></img>
                        </div>
                        <div className=" col text-end red ">
                            <span className="  search red me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />

                                </svg>

                            </span>
                            <span className="cart red  position-relative  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} onClick={() => cartCheck()} fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>

                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    9

                                    <span className="visually-hidden">cart</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}


            {props && props.isHomePage === false &&
                <div className='container-fluid red bg-body-secondary'>

                    <div className='container red  g-0'>
                        <Breadcrumb listTag="div" className='mdsfasdf-2'>
                            <BreadcrumbItem href="/" tag="a" >
                                Home
                            </BreadcrumbItem>
                            <BreadcrumbItem href="#" tag="a"        >
                                Library
                            </BreadcrumbItem>
                            <BreadcrumbItem href="#" tag="a"        >
                                Data
                            </BreadcrumbItem>
                            <BreadcrumbItem active tag="span"     >
                                tên product
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            }

            <MenuBar isOffcanvasOpen={isOffcanvasOpen}
                noRefCheck={noRefCheck} />
            <Cart
                isOffcartOpen={isOffcartOpen}
                cartCheck={cartCheck} />




        </>
    )
}
export default Header;