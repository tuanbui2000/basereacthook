
import { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";


const Cart = (props) => {


    let FakecartItem = [
        { id: 1, name: "item1", price: "100", color: " red", size: " M" },
        { id: 2, name: "item2", price: "100", color: " red", size: " M" },
        { id: 3, name: "item3", price: "100", color: " red", size: " M" },
        { id: 4, name: "item4", price: "100", color: " red", size: " M" },
    ]


    const [cartItem, setCartItem] = useState(FakecartItem)
    const [quantity, setQuantity] = useState(1);


    const style = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",

    }
    useEffect(() => {
        const { setCartCurrentCount } = props;
        setCartCurrentCount(cartItem.length);
    }, [cartItem, props.setCartCurrentCount]);


    let navigate = useNavigate();


    const payment = () => {
        navigate(`/Payment`);
        props.cartCheck()
    }

    const displayCartItem = cartItem.map((item, index) => {
        return (
            <div className=' red row mb-3' key={item.id} >

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
                        <Button className='red py-0 px-1 ' color='dark' onClick={() => removeItemFromCart(item.id)}> remove</Button>
                    </div>

                </div>
            </div>







        )
    })

    const removeItemFromCart = (idToDelete) => {
        const newArray = cartItem.filter(item => item.id !== idToDelete)

        setCartItem(newArray)
    }

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



                    <div className="cart-footer">
                        <hr />
                        <div className="clearfix">
                            <div className="cart__subtotal d-flex justify-content-between ">
                                <div className="cart__col-6">Tổng tiền:</div>
                                <div className="text-right cart__totle fw-bold">
                                    <span style={{ color: "red" }} className="total-price ">$667,92</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart__btn-proceed-checkout-dt text-center">
                            <button type="button" onClick={() => payment()} className="border border-dark btn btn-dark cart__btn-proceed-checkout"  >Thanh toán</button>
                        </div>
                    </div>

                </OffcanvasBody>


            </Offcanvas>
        </>
    )
}
export default Cart;