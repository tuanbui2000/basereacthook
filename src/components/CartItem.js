import { Button, ButtonGroup } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CartItem = () => {


    const defaultList = [
        { id: 1, name: "vay", size: "S", color: "red", brand: "tún brand", price: "123", quantity: 1 },
        { id: 2, name: "skirt", size: "M", color: "blue", brand: "tún brand", price: "23", quantity: 3 },
        { id: 3, name: "dress", size: "L", color: "white", brand: "tún brand", price: "3423", quantity: 2 },
        { id: 4, name: "jean", size: "XL", color: "redrum", brand: "tún brand", price: "123", quantity: 4 },
    ]

    const style = {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        aspectRatio: "9 / 16"

    }

    const [itemList, setItemList] = useState(defaultList)
    let navigate = useNavigate();

    const payment = () => {
        navigate(`/payment`);
    }
    const setQuantity = (index, quantity) => {
        let toSetArray = [...itemList];
        toSetArray[index].quantity = quantity;
        setItemList(toSetArray);
    }
    let total = 0;

    itemList.forEach(item => {
        total += item.price * item.quantity;
    });




    const removeItemFromCart = (idToDelete) => {
        const newArray = itemList.filter(item => item.id !== idToDelete)

        setItemList(newArray)
    }
    return (

        <>
            <div className="container red ">
                <div className="row red ">


                    <div className="col-8 red">
                        <div className="h3  red">Cart </div>
                        {itemList.map((item, index) => {

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
                                                        <Button outline color="dark" onClick={() => setQuantity(index, item.quantity > 1 ? item.quantity - 1 : item.quantity)} disabled={item.quantity <= 1}>
                                                            -
                                                        </Button>
                                                        <Button outline color="dark" style={{ pointerEvents: "none", fontWeight: "600" }}>
                                                            {item.quantity}
                                                        </Button>

                                                        <Button outline color="dark" onClick={() => setQuantity(index, item.quantity + 1)}   >
                                                            +
                                                        </Button>
                                                    </ButtonGroup>
                                                </span>

                                            </div>
                                            <div className=" red " ><span className=" text-danger policy" onClick={() => removeItemFromCart(item.id)}> Remove</span></div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        <hr />


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
                                    <Button className="btn-dark" onClick={() => payment()}  > tính xiền</Button>

                                </div>
                            </div>


                        </div>

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
                                Mua sắm cùng Larmes
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
export default CartItem;   