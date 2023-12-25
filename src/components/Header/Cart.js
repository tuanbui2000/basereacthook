
import { useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup, Button } from 'reactstrap';



const Cart = (props) => {
    const [cartItem, setCartItem] = useState([
        { name: "item1", price: "100", color: " red", size: " M" },
        { name: "item2", price: "100", color: " red", size: " M" },
        { name: "item3", price: "100", color: " red", size: " M" },
        { name: "item4", price: "100", color: " red", size: " M" },
    ])
    const [quantity, setQuantity] = useState(1);


    const style = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",


    }



    const displayCartItem = cartItem.map((item, index) => {
        return (
            <div className=' red row mb-3' key={index} >

                <div className='col-3 red'>
                    <div style={style}></div>
                </div>

                <div className='col-9 red row g-0 ps-2'>
                    <div className='red col-12 h6'> {item.name} </div>
                    <div className='col-6' > <div>quantity</div>
                        <div>
                            <ButtonGroup size='sm'>
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
                        </div>

                    </div>
                    <div className='col-6 text-end red '>
                        <div className=' text-danger h6 red pe-3'> {item.price}</div>
                        <div className='red pe-1'> remove</div>
                    </div>

                </div>
            </div>
        )
    })



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

                    {displayCartItem}


                </OffcanvasBody>


            </Offcanvas>
        </>
    )
}
export default Cart;