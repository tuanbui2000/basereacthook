import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";

const nav = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/*" element={<BlogApp />} />
                    <Route path="/users/*" element={<UserApp />} />
                </Routes>
            </BrowserRouter>


        </>

    )

}
export default nav