import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const Layout = () => {
    return (
        <>
            <header className="App-header">
                <NavLink to="/" className={setActive}>Description</NavLink>
                <NavLink to="/convert" className={setActive}>Convert dictance</NavLink>
                <NavLink to="/filter" className={setActive}>Filter</NavLink>
                <NavLink to="/dialog" className={setActive}>Dialog</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export { Layout }