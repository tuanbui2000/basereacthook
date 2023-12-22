import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Card, CardBody } from "reactstrap";

const ColletionSlider = (props) => {




    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: true,
        // autoplay: true,
        arrows: true,



    };
    const collectionStyle = {
        height: "50vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: "10px",

    }

    const images = [
        { alt: 'Sample', src: 'https://picsum.photos/300/200' },
        { alt: 'Sample', src: 'https://picsum.photos/300/200' },
        { alt: 'Sample', src: 'https://picsum.photos/300/200' },
        { alt: 'Sample', src: 'https://picsum.photos/300/200' },
        { alt: 'Sample', src: 'https://picsum.photos/300/200' },
    ];






    const sliderItem = images.map((item, index) => {
        return (
            <div className="red text-start" key={index}>
                <Link to={"/detail-item"} style={{ textDecoration: "none" }}>
                    <Card className="mx-1"   >
                        <div style={collectionStyle}></div>
                        <CardBody>
                            <div className="red " style={{ display: "flex", justifyContent: "space-between" }}>
                                <span className="text-danger fw-bold">$cost</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" /></svg>
                                </span>
                            </div>
                            <div className="red h5 fw-semibold">name</div>
                            <div className="red">color</div>
                        </CardBody>
                    </Card>
                </Link>
            </div>

        )
    })



    return (

        <>


            <div>
                {/* new collection title */}
                <div className="red text-center">
                    <h2> {props.title}</h2>
                    <p ><em>  {props.desciption}</em></p>
                </div>
                {/* new collection body */}
                <div className="red text-center ">
                    <div className=" red">
                        <Slider {...settings}>

                            {sliderItem}

                        </Slider>


                    </div>
                    <Link to={"/all-item"} className="red btn btn-secondary mt-2 mb-3 btn-sm"> see more</Link>
                </div>
            </div>

        </>
    )


}
export default ColletionSlider;
