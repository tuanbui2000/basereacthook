import ColletionSlider from "./ColletionSlider";
import { Button, ButtonGroup, Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import { useState } from "react";

const ProductDetail = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };





    return (
        <>


            <div className="container red g-0  my-3">
                <div className="row red g-0">

                    <div className="col-1 row g-0 red my-3">
                        <div className="col-12 red ">small picture</div>
                        <div className="col-12 red ">small picture</div>
                        <div className="col-12 red ">small picture</div>
                        <div className="col-12 red ">small picture</div>
                        <div className="col-12 red ">small picture</div>
                    </div>
                    <div className="col-5 red">large picture</div>
                    <div className="col-6 red">
                        <div className="red "> vendor</div>
                        <div className="red"> product name</div>
                        <div className="red "> price</div>
                        <div className="red "> size</div>
                        <div className="red ">
                            {/* <ButtonGroup> */}
                            <Button color="primary" outline  >
                                S
                            </Button>
                            <Button color="primary" outline    >
                                M
                            </Button>
                            <Button
                                color="primary" outline   >
                                L
                            </Button>
                            {/* </ButtonGroup> */}
                        </div>
                        <div className="red "> color</div>
                        <div className="red ">
                            <Button color="primary" outline  >
                                red
                            </Button>
                            <Button color="primary" outline    >
                                Blue
                            </Button>
                            <Button
                                color="primary" outline   >
                                White
                            </Button>
                        </div>
                        <div className="red my-3 ">
                            <ButtonGroup>
                                <Button color="primary" outline  >
                                    -
                                </Button>
                                <Button color="primary" outline    >
                                    1
                                </Button>
                                <Button
                                    color="primary" outline   >
                                    +
                                </Button>
                            </ButtonGroup>
                            <Button className="ms-3 btn-dark"
                                color="white" outline   >
                                Add to cart
                            </Button>

                        </div>

                        <div>
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1">product description</AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <strong>Chưa có cl gì cả</strong>

                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">brand description</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <strong>Chưa có cl gì cả</strong>

                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">Return and refund</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <strong>Chưa có cl gì cả</strong>

                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="4">storage instructions</AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <strong>Chưa có cl gì cả</strong>

                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>



                    </div>

                </div>
                <div className="container red g-0">
                    <ColletionSlider title={" Relate Products"}
                        desciption={"some description about this collection. eg: more beautifull than your ex GF "} />
                </div>
                <div className="container red g-0">
                    <ColletionSlider title={" history browser"}
                        desciption={"look back what you seen"}
                    />
                </div>

            </div>





        </>
    )
}
export default ProductDetail;