import ColletionSlider from "./ColletionSlider";
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

import { useState } from 'react';

const HomePage = () => {

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
    const items = [
        {
            src: 'https://source.unsplash.com/random',
            altText: 'Slide 1',

        },
        {
            src: 'https://picsum.photos/id/456/1200/400',
            altText: 'Slide 2',

        },
        {
            src: 'https://picsum.photos/id/678/1200/400',
            altText: 'Slide 3',

        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} style={homeposterStyle} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <>


            <div className="container-fluid g-0 red">
                <Carousel activeIndex={activeIndex} next={next} previous={previous} enableTouch={true}                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                </Carousel>



                {/* home container */}
                <div className="  container g-0 red">
                    {/* title collection  */}

                    <div className="title red text-center m-4"> Title</div>
                    <div className=" colection row g-0 gap-3 my-3  red">
                        <div className="col red text-center" style={collectionStyle} ></div>
                        <div className="col red text-center" style={collectionStyle} ></div>
                        <div className="col red text-center" style={collectionStyle} ></div>


                    </div>
                    {/* collection  */}
                    <div className=" colection row g-0 gap-3  red">
                        <div className="col red "  >
                            <div className="image red text-center" style={collectionStyle} ></div>
                            <div>
                                <div className="title h2 red">tên collection</div>
                                <button className="see-more-btn red btn btn-secondary">see more</button>
                            </div>
                        </div>
                        <div className="col red " >
                            <div>

                                <div className="title h2 red">colletion name</div>
                                <button className="see-more-btn red btn btn-secondary">see more</button>
                            </div>
                            <div className="image red text-center" style={collectionStyle} ></div>
                        </div>


                    </div>
                    <ColletionSlider />
                    <ColletionSlider />
                    <ColletionSlider />
                    <ColletionSlider />




                </div>
            </div>



        </>
    )

}
export default HomePage;