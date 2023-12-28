
import { useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Accordion, AccordionItem, AccordionBody, AccordionHeader } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const MenuBar = (props) => {
    let isOffcanvasOpen = props.isOffcanvasOpen

    const [open, setOpen] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };



    let navigate = useNavigate();



    const handleOnclick = (link) => {
        navigate(`${link}`);
    }



    return (
        <>
            <Offcanvas
                isOpen={isOffcanvasOpen}
                toggle={() => props.noRefCheck()}
            >
                <OffcanvasHeader toggle={() => props.noRefCheck()}>
                    Menu bar nè
                </OffcanvasHeader>
                <OffcanvasBody >

                    <Accordion flush open={open} toggle={toggle}>
                        <AccordionItem >

                            <div className='accordion-body  ' onClick={() => handleOnclick('/home')}>
                                Home </div>

                        </AccordionItem>
                        <AccordionItem >
                            <AccordionHeader targetId="1">sản phẩm </AccordionHeader>
                            <AccordionBody accordionId="1" onClick={() => handleOnclick("/all-item")}>
                                skirt
                            </AccordionBody>
                            <AccordionBody accordionId="1" onClick={() => handleOnclick("/all-item")}>
                                pants
                            </AccordionBody>
                            <AccordionBody accordionId="1" onClick={() => handleOnclick("/all-item")}>
                                sock
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">collection</AccordionHeader>
                            <AccordionBody accordionId="2" onClick={() => handleOnclick("/all-item")}>
                                Xuân hè
                            </AccordionBody>
                            <AccordionBody accordionId="2" onClick={() => handleOnclick("/all-item")}>
                                Thu đông 2023
                            </AccordionBody>
                            <AccordionBody accordionId="2" onClick={() => handleOnclick("/all-item")}>
                                Thu đông 2024
                            </AccordionBody>
                            <AccordionBody accordionId="2" onClick={() => handleOnclick("/all-item")}>
                                Thu đông 2025
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="3">Help</AccordionHeader>
                            <AccordionBody accordionId="3" onClick={() => handleOnclick("/preventation-policy")}>
                                Hướng dẫn bảo quản
                            </AccordionBody>
                            <AccordionBody accordionId="3" onClick={() => handleOnclick("/return-refund-policy")}>
                                Chính sách đổi trả
                            </AccordionBody>
                            <AccordionBody accordionId="3" onClick={() => handleOnclick("/shipping-policy")}>
                                vận chuyển
                            </AccordionBody>
                        </AccordionItem>

                    </Accordion>

                </OffcanvasBody>
            </Offcanvas >
        </>
    )
}
export default MenuBar;