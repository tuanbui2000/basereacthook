import ColletionSlider from "./ColletionSlider";
import Slider from "react-slick";
import DisplayAllItem from "./DisplayItem";
import ProductDetail from "./ProductDetail";
import Shipping from "./Shipping";
import PreservationPolicy from "./PreservationPolicy";
import ReturnRefund from "./ReturnRefurn";

const HomePage = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
        autoplay: true,
        dots: true,
        // arrows: true,

    }

    const homeposterStyle = {

        width: "100%",
        height: "80vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }
    const collectionStyle = {
        height: "80vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: "10px"
    }

    const images = [
        { alt: 'Sample', src: 'https://source.unsplash.com/random' },
        { alt: 'Sample', src: 'https://source.unsplash.com/random' },
        { alt: 'Sample', src: 'https://source.unsplash.com/random' },
        { alt: 'Sample', src: 'https://source.unsplash.com/random' },
        { alt: 'Sample', src: 'https://source.unsplash.com/random' },
    ];



    const sliderItem = images.map((item, index) => {
        return (
            <div className="red text-start" key={index}>
                <img src={item.src} style={homeposterStyle} alt={item.alt} />
            </div>

        )
    })
    return (
        <>
            <div className="container-fluid g-0 red">

                <Slider {...settings}>

                    {sliderItem}

                </Slider>





                {/* home container */}
                <div className="  container g-0 red">
                    {/* title collection  */}

                    <div className="title red text-center m-4 h3 fw-bold"> COLLECTION OF TUNS</div>
                    <div className=" colection row g-0 gap-3 my-3  red">
                        <div className="col red text-center" style={collectionStyle} ></div>
                        <div className="col red text-center" style={collectionStyle} ></div>
                        <div className="col red text-center" style={collectionStyle} ></div>


                    </div>
                    {/* collection  */}
                    <div className=" colection row g-0 gap-3  red">
                        <div className="col m-3 red "  >
                            <div className="image red m-3 text-center" style={collectionStyle} ></div>
                            <div>
                                <div className="title h2 red">tên collection</div>
                                <button className="see-more-btn red btn btn-secondary">see more</button>
                            </div>
                        </div>
                        <div className="col m-3 red " >
                            <div>

                                <div className="title h2 red">colletion name</div>
                                <button className="see-more-btn red btn btn-secondary">see more</button>
                            </div>
                            <div className="image red m-3 text-center" style={collectionStyle} ></div>
                        </div>


                    </div>
                    <ColletionSlider title={"New Collection"} desciption={"some description about this collection. eg: more beautifull than your ex GF "} />
                    <ColletionSlider title={"New Collection1"} desciption={"some description about this collection. eg: more beautifull than your ex GF "} />
                    <ColletionSlider title={"New Collection2"} desciption={"some description about this collection. eg: more beautifull than your ex GF "} />
                    <ColletionSlider title={"New Collection3"} desciption={"some description about this collection. eg: more beautifull than your ex GF "} />




                </div>
            </div >

            <DisplayAllItem />
            <ProductDetail />
            <Shipping />
            <PreservationPolicy />
            <ReturnRefund />
        </>
    )

}
export default HomePage;