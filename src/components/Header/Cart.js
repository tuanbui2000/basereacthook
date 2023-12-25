
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
const Cart = (props) => {


    let isOffcartOpen = props.isOffcartOpen;


    return (
        <>
            <Offcanvas
                isOpen={isOffcartOpen}
                toggle={() => props.cartCheck()}
                direction="end"
            >
                <OffcanvasHeader toggle={() => props.cartCheck()}>
                    cart
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        This is the cart body.
                    </strong>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}
export default Cart;