import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useState } from 'react';


const DisplayAllItem = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const dropdownitem = [
        { category: "action1", linkto: "#" },
        { category: "action2", linkto: "#" },
        { category: "action3", linkto: "#" },
        { category: "action4", linkto: "#" },
    ]

    let listDropdown = dropdownitem.map((item, index) => {
        return (
            <DropdownItem key={index}> {item.category}</DropdownItem>
        )
    })

    const collectionStyle = {
        height: "50vh",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: "10px",

    }


    const listItem = [

        { name: "jean", price: "100" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "skirt", price: "200" },
        { name: "coat", price: "300" },
        { name: "jacket", price: "1500" },
        { name: "other", price: "1300" },
    ]





    return (


        <div className="container-fluid g-0">

            <div className='container red '>
                <div className=' red  text-center'>
                    <h3>productname</h3>
                    <p> some discription</p>
                </div>


                <div className=" red filter row">
                    <div className="red col-2">
                        <div className="d-flex ">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                                <DropdownToggle caret>Dropdown</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem header>Header</DropdownItem>
                                    {listDropdown}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>


                </div>
                <div className='red row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                    {listItem.map((item, index) => {
                        return (
                            <div className="red " style={{ padding: "10px" }} key={index} >
                                <div style={collectionStyle}></div>
                                <div>
                                    <div className="red " style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span className="text-danger fw-bold">${item.price}</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" /></svg>
                                        </span>
                                    </div>
                                    <div className="red h5 fw-semibold">{item.name}</div>
                                    <div className="red">color</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center p-2'>
                    <Button> See more</Button>

                </div>
            </div>

        </div>
    )

}
export default DisplayAllItem;