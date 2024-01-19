import { Button, ButtonGroup } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const CartItem = (state) => {


    let listProducts = state.listProducts

    const style = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        aspectRatio: "9 / 16"

    }


    let navigate = useNavigate();

    const Navigator = (URL) => {
        navigate(`/${URL}`);
    }

    let total = 0;

    listProducts.forEach(item => {
        total += item.price * item.quantity;
    });






    return (

        <>
            <div className="container red ">
                <div className="row red my-3">


                    <div className="col-8 red">
                        <div className="h3  red">Cart </div>
                        {listProducts.map((item, index) => {

                            return (
                                <div key={index}>
                                    <div className="item-list red row my-3">
                                        <div className="col-3 red" >  <div style={style}></div></div>
                                        <div className="col-9 red pt-5 ">
                                            <div className=" red fw-semibold"> {item.name} - {item.size}/{item.color} </div>
                                            <div className=" red d-flex justify-content-between my-1">
                                                <span>Thương hiệu: {item.brand}</span>
                                                <span className="text-danger fw-bold">${item.price}</span>
                                                <span>
                                                    <ButtonGroup size='sm'>
                                                        <Button outline color="dark" onClick={() => state.setQuantity(index, item.quantity > 1 ? item.quantity - 1 : item.quantity)} disabled={item.quantity <= 1}>
                                                            -
                                                        </Button>
                                                        <Button outline color="dark" style={{ pointerEvents: "none", fontWeight: "600" }}>
                                                            {item.quantity}
                                                        </Button>

                                                        <Button outline color="dark" onClick={() => state.setQuantity(index, item.quantity + 1)}   >
                                                            +
                                                        </Button>
                                                    </ButtonGroup>
                                                </span>

                                            </div>
                                            <div className=" red " ><span className=" text-danger policy" onClick={() => state.removeItemFromCart(item.id)}> Remove</span></div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        <hr />
                        {listProducts.length > 0 ?
                            <>

                                <div className="row red my-3">
                                    <div className="col-4 red "><span className="policy" onClick={() => navigate(`/home`)}> &lt; Tiếp tục mua hàng</span></div>



                                    <div className=" col-8  justify-content-center red row g-0">
                                        <div className=" col-8  text-center  red ">

                                            <div className="red d-flex justify-content-between ">
                                                <span> tạm tính</span>
                                                <span> $123</span>
                                            </div>
                                            <div className="red d-flex justify-content-between mb-3">
                                                <span className="text-dark fw-bold"> Total</span>
                                                <span className="text-danger fw-bold">${total} </span>
                                            </div>
                                            <Button className="btn-dark" onClick={() => Navigator("payment")}  > tính xiền</Button>

                                        </div>
                                    </div>


                                </div>
                            </> :
                            <>
                                <div className="row red my-3 text-center">
                                    There is no item in your cart

                                    <div >  <button className="btn btn-dark" onClick={() => Navigator()}>go to home</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>


                    <div className="col-4 red">

                        <div className="red border border-secondary p-3">
                            <h6>
                                Dịch vụ khách hàng
                            </h6>
                            <div>Bạn cần sự hỗ trợ từ chúng tôi? Hãy liên hệ ngay </div>
                            <div> +84123456789 </div>
                            <div>Chúng tôi trên Facebook </div>
                            <div> Liên hệ</div>
                        </div>
                        <div className="red border border-secondary p-3">

                            <h6>
                                Mua sắm cùng Tún
                            </h6>

                            <div> Sản phẩm đẹp, thân thiện với môi trường</div>
                            <div>Không lo về giá</div>
                            <div><span>Miễn phí vận chuyển</span></div>
                            <span>cho đơn hàng từ 5.000.000 VNĐ</span>


                        </div>

                    </div>


                </div>


            </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);   