
import { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


const Cart = (props) => {




    let listProducts = props.listProducts
    const style = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",

    }
    console.log(props);
    useEffect(() => {
        const { setCartCurrentCount } = props;
        setCartCurrentCount(listProducts.length);
    }, [listProducts, props.setCartCurrentCount]);


    let navigate = useNavigate();


    const payment = () => {
        navigate(`/payment`);
        props.cartCheck()
    }




    let total = 0;

    listProducts.forEach(item => {
        total += item.price * item.quantity;
    });



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
                <OffcanvasBody className='d-flex flex-column justify-content-between pb-3'>



                    <div>

                        {listProducts && listProducts.length > 0 ? listProducts.map((item, index) => {
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
                                                    <Button outline color="dark" onClick={() => props.setQuantity(index, item.quantity > 1 ? item.quantity - 1 : item.quantity)} disabled={item.quantity <= 1}>
                                                        -
                                                    </Button>
                                                    <Button outline color="dark" style={{ pointerEvents: "none", fontWeight: "600" }}>
                                                        {item.quantity}
                                                    </Button>

                                                    <Button outline color="dark" onClick={() => props.setQuantity(index, item.quantity + 1)}   >
                                                        +
                                                    </Button>
                                                </ButtonGroup>
                                            </div>

                                        </div>
                                        <div className='col-6 text-end red '>
                                            <div className=' text-danger h6 red pe-3'> ${item.price}</div>
                                            <Button className='red py-0 px-1 ' color='dark' onClick={() => props.removeItemFromCart(item.id)}> remove</Button>
                                        </div>

                                    </div>
                                </div>


                            )
                        })
                            : <span> There is no item in cart</span>
                        }
                    </div>
                    <div >

                        {listProducts.length > 0 &&

                            <div className="cart-footer">
                                <hr />
                                <div className="clearfix">
                                    <div className="cart__subtotal d-flex justify-content-between ">
                                        <div className="cart__col-6">Tổng tiền:</div>
                                        <div className="text-right cart__totle fw-bold">
                                            <span style={{ color: "red" }} className="total-price ">${total}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__btn-proceed-checkout-dt text-center">
                                    <button type="button" onClick={() => payment()} className="border border-dark btn btn-dark cart__btn-proceed-checkout"  >Thanh toán</button>
                                </div>
                            </div>
                        }
                    </div>

                </OffcanvasBody>


            </Offcanvas>
        </>
    )
}

const mapStateToProps = (state) => {
    return { listProducts: state.products }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (productId) => dispatch({ type: "DELETE_ITEM_CART", payload: { productId } }),
        setQuantity: (index, quantity) => dispatch({ type: "UPDATE_ITEM_CART", payload: { index, quantity } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);   