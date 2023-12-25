import { useState } from 'react';
import { Link } from 'react-router-dom';
import PagePagination from './Paging/PagePagination';



const DisplayAllItem = () => {
    const [listItem, setlistItem] = useState([
        { name: "jean", price: "100" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "coat", price: "300" },
        { name: "coat", price: "300" },
        { name: "coat", price: "300" },
        { name: "jacket", price: "1500" },
        { name: "other", price: "1300" }
    ]);




    const collectionStyle = {
        height: "50vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // margin: "10px",

    }




    return (
        <div className="container-fluid g-0">

            <div className='container red '>
                <div className=' red  justify-content-center row text-center'>
                    <div className='col-8'>
                        <h2>productname</h2>
                        <p >
                            Luôn giữ cho mình một diện mạo thời thượng dù ở bất kỳ nơi nào chính là cách các F*ck Girls tạo ra sức hút đặc biệt rất riêng của mình.
                        </p>
                        <p >
                            some description some description
                            some description some description some description   some description some description some description some description some description some description some description some description some description some description some description                       </p>
                        <p >
                            some description some description some description some description some description
                        </p>     ______________
                        <p> some discription</p>
                    </div>
                </div>


                <div className=" red filter row   border border-secondary">
                    <div className="red col-2 border">
                        <div className="d-flex  my-1">
                            filter1
                        </div>
                    </div>
                    <div className="red col-2 border">
                        <div className="d-flex my-1">
                            filter2
                        </div>
                    </div>
                    <div className="red col-2 border ">
                        <div className="d-flex my-1">
                            filter3
                        </div>
                    </div>


                </div>
                <div className='red row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>

                    {listItem.map((item, index) => {
                        return (

                            <div className="red " style={{ padding: "10px" }} key={index} >
                                <Link to={"/detail-item"} style={{ textDecoration: "None" }}>
                                    <div style={collectionStyle}></div>
                                </Link>
                                <div>
                                    <div className="red " style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span className="text-danger fw-bold">${item.price}</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" /></svg>
                                        </span>
                                    </div>
                                    <Link to={"/detail-item"} style={{ textDecoration: "None", color: "black" }}>

                                        <div className="red h5 fw-semibold">{item.name}</div>
                                    </Link>
                                    <div className="red">color</div>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className='justify-content-center mt-5 row p-2'>
                    <div className='red col-auto '>
                        <PagePagination />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default DisplayAllItem;