import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Payment = () => {
    const defaultPaymentInfo = {
        name: '',
        email: '',
        PhoneNumber: '',
        Address: '',
        DeliveryMethod: '',
        PaymentMethod: '',
        note: '',
    }
    const [isShiptobuyer, setIsShiptobuyer] = useState(false);
    const [isShipping, setIsShipping] = useState(false);
    const [isPaymentMethod, setIsPaymentMethod] = useState(true);
    const [paymentInfo, setPaymentInfo] = useState(defaultPaymentInfo)

    const handleCheckboxChange = () => {
        setIsShiptobuyer(!isShiptobuyer)
    }

    const shippingMethod = [
        { for: "shippingMethod", id: 1, name: "Giao hàng nhanh", note: 100, checked: 'false' },
        { for: "shippingMethod", id: 2, name: "Giao hàng tiết kiệm", note: 200, checked: 'false' },
        { for: "shippingMethod", id: 3, name: "Giao hàng cho vui", note: 300, checked: 'false' }
    ]
    const paymentMethod = [
        { for: "paymentMethod", id: 6, name: "Thanh toán khi giao hàng (COD)", note: 400, checked: 'false' },
        { for: "paymentMethod", id: 5, name: "Chuyển khoản", note: 500, checked: 'false' },
        { for: "paymentMethod", id: 4, name: "MOMO", note: 500, checked: 'false' }
    ]
    let navigate = useNavigate();



    const displayMethod = (name, listMethod) => {
        return (
            <>
                <h4> {name} </h4>
                {
                    listMethod.map((item, index) => {
                        return (

                            <div key={index} >

                                <div className="  form-control form-check  border border-secondary mt-3 d-flex justify-content-between" >
                                    <span>
                                        <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name={item.for} id={item.for + item.id} />
                                        <label className="form-check-label ms-3" htmlFor={item.for + item.id}  >
                                            {item.name}
                                        </label>
                                    </span>
                                    <span className="text-danger fw-bold">
                                        ${item.note}
                                    </span>
                                </div>
                            </div>
                        )


                    })
                }

            </>
        )
    }
    const toForeWard = () => {
        if (true) {

            if (isShipping === false) {
                setIsShipping(true)


            } else {

                setIsPaymentMethod(false)
            }
        } else {
            toast.error("please fill out all fields");
        }
    }
    const toBackward = () => {

        if (isShipping === true && isPaymentMethod === false) {
            setIsPaymentMethod(true)

        } else if (isShipping === true && isPaymentMethod === true) {
            setIsShipping(false)
        } else {
            navigate(`/cartItem`);
        }


    }
    const handleOnchangeInfo = (field, input) => {
        let tempArr = { ...paymentInfo }
        tempArr[field] = input;
        setPaymentInfo(tempArr)
    }

    const handleOnchangeShipping = () => {

    }




    const validateEmail = (email) => {
        let regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

        return (regex.test(email))

    };
    return (
        <>


            <div className="container red ">
                <div className="row p-3 red " >
                    <div className="col-7 px-6  red ">
                        <div className="logo red text-center"><h1>LOGO</h1></div>
                        <div className=" mb-2 red" > Giỏ hàng -Thông tin-Vận chuyển-Thanh toán </div>
                        {isShipping === false ?
                            <>

                                <div className=" mb-2 red  fw-bold" ><h4>  thông tin khách hàng</h4> </div>

                                <input className="form-control mb-2 red" type="text" placeholder="email" aria-label="default input example" value={paymentInfo.email} onChange={(event) => handleOnchangeInfo("email", event.target.value)} />
                                <input className="form-control mb-2 red" type="text" placeholder="tên" aria-label="default input example" value={paymentInfo.name} onChange={(event) => handleOnchangeInfo("name", event.target.value)} />
                                <input className="form-control mb-2 red" type="text" placeholder="sdt" aria-label="default input example" value={paymentInfo.PhoneNumber} onChange={(event) => handleOnchangeInfo("PhoneNumber", event.target.value)} />
                                <input className="form-control mb-2 red" type="text" placeholder="địa chỉ" aria-label="default input example" value={paymentInfo.Address} onChange={(event) => handleOnchangeInfo("Address", event.target.value)} />

                                <div className=" mb-2 red">

                                    <input id="isShiptoOther" type="checkbox"
                                        onChange={() => handleCheckboxChange()}

                                    /> Giao hàng đến địa chỉ khác
                                </div>
                                <div className="input-group m-6 red">

                                </div>

                                {isShiptobuyer === true &&
                                    <div className="mt-3">

                                        <div className=" mb-2 red  fw-bold" ><h4>  thông tin người nhận</h4> </div>
                                        <input className="form-control mb-2 red" type="text" placeholder="email" aria-label="default input example" />
                                        <input className="form-control mb-2 red" type="text" placeholder="tên" aria-label="default input example" />
                                        <input className="form-control mb-2 red" type="text" placeholder="sdt" aria-label="default input example" />
                                        <input className="form-control mb-2 red" type="text" placeholder="địa chỉ" aria-label="default input example" />


                                    </div>
                                }


                                <div className="input-group mb-2 red">

                                    <textarea className="form-control red" aria-label="With textarea" value={paymentInfo.note} onChange={(event) => handleOnchangeInfo("note", event.target.value)}></textarea>
                                </div>

                            </>
                            :
                            <>

                                <div className="border border-secondary rounded  p-3">
                                    <div className="fw-bold"> {paymentInfo.name} </div>
                                    <div> {paymentInfo.email} </div>
                                    <div> {paymentInfo.PhoneNumber} </div>
                                    <div> {paymentInfo.Address} </div>
                                    <div> {paymentInfo.note} </div>

                                    {isPaymentMethod === false &&
                                        <>
                                            <hr />
                                            <div className="red d-flex justify-content-between">
                                                <span>Phương thức vận chuyển</span>
                                                <span >Thay đổi </span>


                                            </div>

                                            <div>Giao hàng tận nơi · $25,000.00</div>
                                        </>
                                    }
                                </div>
                                {isPaymentMethod === true ?

                                    <div className="red">
                                        {displayMethod("vận chuyển", shippingMethod)}
                                    </div>
                                    :
                                    <div className="red">
                                        {displayMethod("Thanh toán", paymentMethod)}
                                    </div>
                                }



                            </>
                        }




                        <div className="row d-flex justify-content-between my-3 red">
                            <button className="col-2 btn btn-primary red" onClick={() => toBackward()} >{isShipping === false ? "giỏ hàng" : "return"}</button>
                            <button className="col-5 btn btn-primary red" onClick={() => toForeWard()}>

                                {isShipping === false ? "tới phương thức vận chuyển" :
                                    isPaymentMethod === true ? "tới phương thức thanh toán" : "Chi tiết đơn hàng"}
                            </button>

                        </div>

                    </div>
                    <div className="col-5 red">
                        <h1 className="red"> đơn hàng (n sản phẩm)</h1>
                        <hr />
                        <div className="red"> sản phẩm </div>
                        <div className="red"> sản phẩm </div>
                        <div className="red"> sản phẩm </div>
                        <div className="red"> sản phẩm </div>
                        <hr />
                        <div className="red d-flex justify-content-between">
                            <span>  mã giảm giá </span> <span>áp dụng </span></div>
                        <hr />

                        <div className="red  d-flex justify-content-between">
                            <span>        giá sản phẩm</span> <span>tiền </span></div>
                        <br />
                        <div className="red d-flex justify-content-between">
                            <span>        phí vận chuyển</span> <span>tiền </span></div>
                        <hr />
                        <div className="red">
                            <div className="red">tổng cộng</div>
                            <div className="red">100$</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Payment;