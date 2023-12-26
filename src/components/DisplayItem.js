import { useState } from 'react';
import { Link } from 'react-router-dom';
import PagePagination from './Paging/PagePagination';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';



const DisplayAllItem = () => {




    const [listItem, setlistItem] = useState([
        { id: "1", name: "jean", price: "100" },
        { id: "2", name: "skirt", price: "200" },
        { id: "3", name: "skirt", price: "200" },
        { id: "4", name: "skirt", price: "200" },
        { id: "5", name: "skirt", price: "200" },
        { id: "6", name: "coat", price: "300" },
        { id: "7", name: "coat", price: "300" },
        { id: "8", name: "coat", price: "300" },
        { id: "9", name: "jacket", price: "1500" },
        { id: "10", name: "other", price: "1300" }
    ]);

    const [color, setColor] = useState([
        { abb: "R", color: " #dc3545" },
        { abb: "G", color: "#198754" },
        { abb: "B", color: "#0d6efd" }
    ])

    const [rSelected, setRSelected] = useState(null);
    const collectionStyle = {
        height: "50vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // margin: "10px",

    }

    const [dropdownOpen, setDropdownOpen] = useState([false, false, false]);

    const toggle = (x) => setDropdownOpen((prevState) => {
        const newState = [...prevState];  // Tạo một bản sao của mảng trạng thái trước
        newState[x] = !newState[x];      // Đảo ngược trạng thái của phần tử thứ x
        return newState;                  // Trả về mảng trạng thái mới
    });
    const defaultFilter = [
        { id: 0, name: "Sắp xếp theo", itemList: [" Tên A-Z", "Tên Z - A", "Mới nhất", "Giá tăng dần", "Giá giảm dần"] },
        { id: 1, name: "Price", itemList: ["Dưới 200k", "200k - 300k", "300k - 500k", "500k - 1tr", "1tr - 2tr", "2tr - 3tr", "Trên 3tr"] },
        { id: 2, name: "Kind", itemList: [" Áo", "Chân váy", "DRESS", "Quần", "Váy đầm"] }
    ]

    const [filterItem, setFilterItem] = useState(defaultFilter)


    let displayFilterItem = filterItem.map((filter, index) => {
        return (
            <div className="red col-2 border" key={index}>
                <Dropdown isOpen={dropdownOpen[filter.id]} toggle={() => toggle(filter.id)} className='row' >
                    <DropdownToggle className='col-12 filter-btn' style={{ display: 'flex', justifyContent: 'space-between' }} outline color='dark'>
                        <div><svg style={{ marginTop: "-4px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5" />
                        </svg> <span className='fw-semibold ms-1'>{filter.name}
                            </span>  </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                        </svg>  </div>
                    </DropdownToggle>
                    <DropdownMenu >
                        {filter.itemList.map((item, itemIndex) => (
                            <DropdownItem key={itemIndex} onClick={() => setFilterName(filter.id, item)}>{item}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    });

    const setFilterName = (filterId, name) => {
        const updatedFilters = [...filterItem];
        updatedFilters[filterId].name = name;
        setFilterItem(updatedFilters);
    };

    const resetFilter = () => {
        setFilterItem(defaultFilter)
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


                <div className=" red filter row   border border-dark">
                    {displayFilterItem}


                    <Button className=' col-1' onClick={() => resetFilter()} color="dark" style={{ marginBlock: "auto", marginLeft: "10px", padding: "0px" }} >clear</Button>
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
                                    <div className="red">

                                        {color.map((itemcolor, index) => {
                                            return (
                                                <Button key={index} className='me-1' outline onClick={() => setRSelected(item.id + itemcolor.abb)} active={rSelected === item.id + itemcolor.abb} style={rSelected === item.id + itemcolor.abb ? { background: itemcolor.color, color: "white" } : {}}>
                                                    {itemcolor.abb}
                                                </Button>
                                            )
                                        })}
                                    </div>
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

        </div >
    )

}
export default DisplayAllItem;