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
    const [progress, setProgress] = useState(0)

    const handleCheckboxChange = () => {
        setIsShiptobuyer(!isShiptobuyer)
    }

    const shippingMethod = [
        { htmlFor: "shippingMethod", id: 1, name: "Giao hàng nhanh", note: 100, checked: 'false' },
        { htmlFor: "shippingMethod", id: 2, name: "Giao hàng tiết kiệm", note: 200, checked: 'false' },
        { htmlFor: "shippingMethod", id: 3, name: "Giao hàng cho vui", note: 300, checked: 'false' }
    ]
    const paymentMethod = [
        { htmlFor: "paymentMethod", id: 6, name: "Thanh toán khi giao hàng (COD)", note: 400, checked: 'false' },
        { htmlFor: "paymentMethod", id: 5, name: "Chuyển khoản", note: 500, checked: 'false' },
        { htmlFor: "paymentMethod", id: 4, name: "MOMO", note: 500, checked: 'false' }
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
                                        <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name={item.htmlFor} id={item.htmlFor + item.id} />
                                        <label className="form-check-label ms-3" htmlFor={item.htmlFor + item.id}  >
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
                setProgress(33.33)

            } else {

                setIsPaymentMethod(false)
                setProgress(66.66)
            }
        } else {
            toast.error("please fill out all fields");
        }
    }
    const toBackward = () => {

        if (isShipping === true && isPaymentMethod === false) {
            setIsPaymentMethod(true)
            setProgress(33.33)

        } else if (isShipping === true && isPaymentMethod === true) {
            setIsShipping(false)
            setProgress(0)
        } else {
            navigate(`/cartlist`);
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


                        <div className=" mx-3 mt-5 p-3 red position-relative " >

                            {/* <Progress
                                animated
                                color="primary"
                                value={25}
                            /> */}

                            <div className="progress mb-3" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "2px" }}>
                                <div className="progress-bar bg-dark " style={{ width: progress + "%" }}></div>
                            </div>
                            <span

                                className="position-absolute  start-0 text-dark text-center bg-white px-1"
                                style={{ top: "-13px", transform: "translateX(-50%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-checklist " viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg>
                                <br />
                                <span className="policy">thông tin</span>
                            </span>
                            <span
                                className={progress >= 33.33 ? "position-absolute   text-dark text-center bg-white px-1" : "position-absolute   text-body-tertiary text-center bg-white px-1"}
                                style={{ top: "-13px", left: "33.33%", transform: "translateX(-50%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg><br />
                                <span >vận chuyển</span></span>
                            <span className={progress >= 66.66 ? "position-absolute   text-dark text-center bg-white px-1" : "position-absolute   text-body-tertiary text-center bg-white px-1"} style={{ top: "-13px", left: "66.66%", transform: "translateX(-50%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg><br />
                                <span >thanh toán</span></span>

                            <span className="position-absolute  start-100  text-body-tertiary  text-center bg-white px-1  " style={{ top: "-13px", transform: "translateX(-50%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg><br />
                                <span >done</span></span>


                        </div>

                        {isShipping === false ?
                            <div className="mt-1">

                                <div className=" mb-2 mt-3 red  fw-bold" ><h4>  thông tin khách hàng</h4> </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="email" value={paymentInfo.email} onChange={(event) => handleOnchangeInfo("email", event.target.value)} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
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



                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={paymentInfo.note} onChange={(event) => handleOnchangeInfo("note", event.target.value)}></textarea>
                                    <label htmlFor="floatingTextarea">Ghi chú</label>
                                </div>



                            </div>
                            :
                            <>

                                <div className="border border-secondary rounded mt-4 p-3">
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
                            <span className="col-2 policy text-primary   red" onClick={() => toBackward()} >&lt;{isShipping === false ? " giỏ hàng" : "return"}</span>
                            <button className="col-5 btn btn-primary red btn-dark" onClick={() => toForeWard()}>

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
            </div >

        </>
    )
}
export default Payment;