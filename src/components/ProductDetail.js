import ColletionSlider from "./ColletionSlider";
import { Button, ButtonGroup, Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import { useState } from "react";

const ProductDetail = () => {
    const [open, setOpen] = useState('1');
    const [color, setColor] = useState([
        { abb: "R", color: " #dc3545" },
        { abb: "G", color: "#198754" },
        { abb: "B", color: "#0d6efd" }
    ])
    const [CSelected, setCSelected] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [sSelected, setSSelected] = useState(null);
    const [size, setSize] = useState([{ abb: "S" }, { abb: "M" }, { abb: "L" }]);
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    let sizeItem = size.map((item, index) => {
        return (
            <Button className='me-1' outline onClick={() => setSSelected(item.abb)} active={sSelected === item.abb}>
                {item.abb}
            </Button>
        )
    })


    const colorItem = color.map((item, index) => {
        return (
            <Button className='me-1' outline onClick={() => setCSelected(item.abb)} active={CSelected === item.abb} style={CSelected === item.abb ? { background: item.color, color: "white" } : {}}>
                {item.abb}
            </Button>
        )
    })


    let Picimage = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",


    }
    let miniPicimage = {
        marginTop: "10px",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100px",
        height: "100px",


    }



    return (
        <>


            <div className="container red g-0  my-3">
                <div className="row red g-0">

                    <div className="col-1  g-0 red my-3">
                        <div className=" red " style={miniPicimage}> </div>
                        <div className=" red " style={miniPicimage}> </div>
                        <div className=" red " style={miniPicimage}> </div>
                        <div className=" red " style={miniPicimage}> </div>
                        <div className=" red " style={miniPicimage}> </div>


                    </div>
                    <div className="col-5 red p-2" ><div className="red " style={Picimage}></div></div>
                    <div className="col-6 red p-2">
                        <div className="red display-5 ">  <em> vendor </em></div>
                        <div className="red h1 "> product name </div>
                        <div className="red text-danger  h3"> $169</div>
                        <div className="red h6"> size</div>
                        <div className="red ">

                            {sizeItem}

                        </div>
                        <div className="red h6 "> color</div>
                        <div className="red ">
                            {colorItem}
                        </div>
                        <div className="red my-3 ">
                            <ButtonGroup >
                                <Button outline color="dark" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} disabled={quantity <= 1}>
                                    -
                                </Button>
                                <Button outline color="dark" disabled={true} active>
                                    {quantity}
                                </Button>
                                <Button outline color="dark" onClick={() => setQuantity(quantity + 1)}   >
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

                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.


                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.     <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.     <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
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