import { useState } from "react";

const CartItem = () => {

    const defaultList = [
        { name: "vay", size: "S", color: "red", brand: "tun brand", price: "123", quantity: 1 },
        { name: "skirt", size: "M", color: "blue", brand: "tun brand", price: "23", quantity: 3 },
        { name: "dress", size: "L", color: "white", brand: "tun brand", price: "3423", quantity: 2 },
        { name: "jean", size: "XL", color: "redrum", brand: "tun brand", price: "123", quantity: 4 },
    ]

    const [itemList, setItemList] = useState(defaultList)



    return (

        <>
            <div className="container red ">
                <div className="row red ">


                    <div className="col-8 red">
                        <div className="h3  red">Cart </div>
                        {itemList.map((item, index) => {

                            return (
                                <>
                                    <div className="item-list red row my-3">
                                        <div className="col-3 red"> image here</div>
                                        <div className="col-9 red  ">
                                            <div className=" red"> {item.name} /{item.size}/{item.color} </div>
                                            <div className=" red d-flex justify-content-between">
                                                <span>Thương hiệu: {item.brand}</span>
                                                <span>${item.price}</span>
                                                <span>- {item.quantity} +</span>

                                            </div>
                                            <div className=" red"> delete button</div>

                                        </div>
                                    </div>
                                </>
                            )
                        })}


                        <hr />
                        <div className="text-center">
                            <div>tạm tính </div>
                            <div>tổng</div>
                            <div> tính xiền</div>
                        </div>


                    </div>



                    <div className="col-4 red"> paymentMethod</div>


                </div>


            </div>


        </>
    )
}
export default CartItem;   