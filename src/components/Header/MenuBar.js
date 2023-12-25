
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

const MenuBar = (props) => {


    let isOffcanvasOpen = props.isOffcanvasOpen

    return (
        <>
            <Offcanvas
                isOpen={isOffcanvasOpen}
                toggle={() => props.noRefCheck()}
            >
                <OffcanvasHeader toggle={() => props.noRefCheck()}>
                    Offcanvas
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        This is the Offcanvas body.
                    </strong>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}
export default MenuBar;