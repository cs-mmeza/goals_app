import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { Outlet } from 'react-router-dom';


function Layout() {
    return (
        <>
            <Header></Header>
            <Main>
                <Outlet></Outlet>
            </Main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
