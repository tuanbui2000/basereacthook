
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Accordion, AccordionItem, AccordionBody, AccordionHeader } from 'reactstrap';

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
                            <div className='accordion-body '   >Home</div>
                        </AccordionItem>
                        <AccordionItem >
                            <AccordionHeader targetId="1">sản phẩm </AccordionHeader>
                            <AccordionBody accordionId="1">
                                skirt
                            </AccordionBody>
                            <AccordionBody accordionId="1">
                                pants
                            </AccordionBody>
                            <AccordionBody accordionId="1">
                                sock
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">collection</AccordionHeader>
                            <AccordionBody accordionId="2">
                                Xuân hè
                            </AccordionBody>
                            <AccordionBody accordionId="2">
                                Thu đông 2023
                            </AccordionBody>
                            <AccordionBody accordionId="2">
                                Thu đông 2024
                            </AccordionBody>
                            <AccordionBody accordionId="2">
                                Thu đông 2025
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="3">Help</AccordionHeader>
                            <AccordionBody accordionId="3">
                                Chính sách bảo quản
                            </AccordionBody>
                            <AccordionBody accordionId="3">
                                Chính sách đổi trả
                            </AccordionBody>
                            <AccordionBody accordionId="3">
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