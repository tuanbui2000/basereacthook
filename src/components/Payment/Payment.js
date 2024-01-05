import { useState } from "react";

const Payment = () => {
    const [isShiptobuyer, setIsShiptobuyer] = useState(true);


    const handleCheckboxChange = () => {
        setIsShiptobuyer(!isShiptobuyer)
    }
    return (
        <>

            <div className="container red ">
                <div className="row p-3 red " >
                    <div className="col-7 px-6 text-center red ">
                        <div className="logo red"><h1>LOGO</h1></div>
                        <div className=" mb-2 red" > cần 3 bước với icon cụ thể </div>
                        <div className=" mb-2 red text-start fw-bold" ><h4>  thông tin khách hàng</h4> </div>

                        <input className="form-control mb-2 red" name="email" type="text" placeholder="Default input" aria-label="default input example" />
                        <input className="form-control mb-2 red" name="Name" type="text" placeholder="Default input" aria-label="default input example" />
                        <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />
                        <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />

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
                        <div className="text-start mb-2 red">

                            <input id="isShiptoOther" type="checkbox"
                                onChange={() => handleCheckboxChange()}

                            /> Giao hàng đến địa chỉ khác
                        </div>
                        <div className="input-group m-6 red">

                        </div>


                        {isShiptobuyer === false &&
                            <div className="mt-3">

                                <div className=" mb-2 red text-start fw-bold" ><h4>  thông tin người nhận</h4> </div>
                                <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />
                                <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />
                                <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />
                                <input className="form-control mb-2 red" type="text" placeholder="Default input" aria-label="default input example" />

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
                                <div className="text-start mb-2 red">

                                    <input type="checkbox" /> Giao hàng đến địa chỉ khác
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

                        {/* từ đây là trang sau */}

                        <div>
                            <hr />
                            <div className="border border-dark text-start">
                                <div> thông tin nhận hàng</div>
                                <div> tên </div>
                                <div> địa chỉ </div>
                                <div> ghi chú nếu có </div>
                            </div>
                            <div> chọn phương thức giao hàng 1</div>
                            <div> chọn phương thức giao hàng 1</div>
                            <div className="row d-flex justify-content-between mb-2 red">
                                <button className="col-1 btn btn-primary red">return</button>
                                <button className="col-5 btn btn-primary red">next</button>

                            </div>

                        </div>

                        {/* tới đây */}

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