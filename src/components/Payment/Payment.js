import { useState } from "react";

const Payment = () => {
    const [isShiptobuyer, setIsShiptobuyer] = useState(true);
    const [isShipping, setIsShipping] = useState(true);
    const [isPaymentMethod, setIsPaymentMethod] = useState(false);


    const handleCheckboxChange = () => {
        setIsShiptobuyer(!isShiptobuyer)
    }

    const shippingMethod = [
        { for: "shippingMethod", id: 1, name: "Phương thức vận chuyển 1", note: 100 },
        { for: "shippingMethod", id: 2, name: "Phương thức vận chuyển 2", note: 100 },
        { for: "shippingMethod", id: 3, name: "Phương thức vận chuyển 3", note: 100 },
    ]
    const paymentMethod = [
        { for: "paymentMethod", id: 1, name: "Phương thức thanh toán 1", note: 100 },
        { for: "paymentMethod", id: 2, name: "Phương thức thanh toán 2", note: 100 },
    ]


    const displayMethod = (name, listMethod) => {
        return (
            <>
                <h4> {name} </h4>
                {
                    listMethod.map((item, index) => {
                        <div className="  form-control form-check  border border-secondary mt-3 d-flex justify-content-between" for={index} >
                            <span>

                                <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name={item.for} id={item.id} />
                                <label className="form-check-label ms-3" htmlFor={item.id}  >
                                    {item.name}
                                </label>
                            </span>
                            <span>
                                {item.note}
                            </span>
                        </div>


                    })
                }

            </>
        )
    }

    return (
        <>

            <div className="container red ">
                <div className="row p-3 red " >


                    <div className="col-7 px-6  red ">
                        {isPaymentMethod === true && <>
                            <div className="logo red text-center"><h1>LOGO</h1></div>
                            <div className=" mb-2 red" > cần 3 bước với icon cụ thể </div>
                            <div className=" mb-2 red  fw-bold" ><h4>  thông tin khách hàng</h4> </div>

                            <input className="form-control mb-2 red" type="text" placeholder="email" aria-label="default input example" />
                            <input className="form-control mb-2 red" type="text" placeholder="tên" aria-label="default input example" />
                            <input className="form-control mb-2 red" type="text" placeholder="sdt" aria-label="default input example" />
                            <input className="form-control mb-2 red" type="text" placeholder="địa chỉ" aria-label="default input example" />

                            <div className="row  red d-flex justify-content-center mb-2" >

                                <div className="col-auto red">
                                    <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                </div>
                                <div className="col-auto red ">
                                    <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                </div>
                                <div className="col-auto red">
                                    <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                </div>

                            </div>
                            <div className=" mb-2 red">

                                <input id="isShiptoOther" type="checkbox"
                                    onChange={() => handleCheckboxChange()}

                                /> Giao hàng đến địa chỉ khác
                            </div>
                            <div className="input-group m-6 red">

                            </div>

                            {isShiptobuyer === false &&
                                <div className="mt-3">

                                    <div className=" mb-2 red  fw-bold" ><h4>  thông tin người nhận</h4> </div>
                                    <input className="form-control mb-2 red" type="text" placeholder="email" aria-label="default input example" />
                                    <input className="form-control mb-2 red" type="text" placeholder="tên" aria-label="default input example" />
                                    <input className="form-control mb-2 red" type="text" placeholder="sdt" aria-label="default input example" />
                                    <input className="form-control mb-2 red" type="text" placeholder="địa chỉ" aria-label="default input example" />

                                    <div className="row  red d-flex justify-content-center mb-2" >

                                        <div className="col-auto red">
                                            <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                        </div>
                                        <div className="col-auto red ">
                                            <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                        </div>
                                        <div className="col-auto red">
                                            <input type="password" className="form-control red" aria-describedby="passwordHelpInline" />
                                        </div>

                                    </div>



                                </div>
                            }


                            <div className="input-group mb-2 red">

                                <textarea className="form-control red" aria-label="With textarea"></textarea>
                            </div>
                            <div className="row d-flex justify-content-between mb-2 red">
                                <button className="col-1 btn btn-primary red">return</button>
                                <button className="col-5 btn btn-primary red">tới phương thức vận chuyển</button>

                            </div>
                        </>
                        }
                        {isShipping === true &&

                            <div>
                                <hr />
                                <div className="border border-secondary rounded  p-3">
                                    <div> thông tin nhận hàng</div>
                                    <div> tên </div>
                                    <div> email </div>
                                    <div> Sdt </div>
                                    <div> địa chỉ </div>
                                    <div> ghi chú nếu có </div>
                                    <hr />
                                    <div className="red d-flex justify-content-between">
                                        <span>Phương thức vận chuyển</span>
                                        <span >Thay đổi </span>


                                    </div>
                                    <div>Giao hàng tận nơi · $25,000.00</div>
                                </div>
                                {
                                    displayMethod("vaanj chuyenj", shippingMethod)
                                }
                                {/* <h4> Vận chuyển </h4>
                                <div className="  form-control form-check  border border-secondary mt-3 d-flex justify-content-between" targetid="flexRadioDefault1">
                                    <span>

                                        <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                        <label className="form-check-label ms-3" htmlFor="flexRadioDefault1">
                                            phương thức vận chuyển 1
                                        </label>
                                    </span>
                                    <span>

                                        $100
                                    </span>
                                </div> 
                                <div className="  form-control form-check  border border-secondary mt-3  d-flex justify-content-between ">
                                    <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label ms-3" htmlFor="flexRadioDefault2">
                                        phương thức vận chuyển 2
                                    </label>
                                    <span>

                                        $100
                                    </span>
                                </div>

*/}





                                {/* chọn phương thức thanh toán */}
                                <hr />
                                <div>


                                    <h4 className="red ">  Thanh toán </h4>

                                    <div className="  form-control form-check  border border-secondary mt-3">
                                        <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name="paymentMethod" id="paymentMethod1" />
                                        <label className="form-check-label ms-3" htmlFor="paymentMethod1">
                                            phương thức thanh toán 1
                                        </label>
                                    </div>
                                    <div className="  form-control form-check  border border-secondary mt-3">
                                        <input className="form-check-input red  " style={{ marginLeft: "-13px" }} type="radio" name="paymentMethod" id="paymentMethod2" />
                                        <label className="form-check-label ms-3" htmlFor="paymentMethod2">
                                            phương thức thanh toán 2
                                        </label>
                                    </div>

                                </div>
                                {/* cho tới đây nè */}
                                <div className="row d-flex justify-content-between mb-2 red">
                                    <button className="col-1 btn btn-primary red">return</button>
                                    <button className="col-5 btn btn-primary red">next</button>

                                </div>

                            </div>

                        }


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