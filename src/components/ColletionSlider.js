import Slider from "react-slick";
import { Card, CardBody } from "reactstrap";

const ColletionSlider = () => {




    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: true,
        autoplay: true,
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
            <div className="red text-start" >
                <Card color="primary" outline className="mx-1"   >
                    <div style={collectionStyle}></div>
                    <CardBody>
                        <div className="red ">cost</div>
                        <div className="red">name</div>
                        <div className="red">color</div>
                    </CardBody>
                </Card>
            </div>

        )
    })





    return (

        <>


            <div>
                {/* new collection title */}
                <div className="red text-center">
                    <h2> New collection</h2>
                    <p> some description</p>
                </div>
                {/* new collection body */}
                <div className="red text-center ">
                    <div className=" red">
                        <Slider {...settings}>

                            {sliderItem}

                        </Slider>



                    </div>
                    <div className="red"> see more</div>
                </div>
            </div>

        </>
    )


}
export default ColletionSlider;
