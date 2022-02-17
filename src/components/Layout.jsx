import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const Layout = () => {
    return (
        <>
            <header className="App-header">
                <NavLink to="/" className={setActive}>Description</NavLink>
                <NavLink to="/one" className={setActive}>Task one</NavLink>
                <NavLink to="/two" className={setActive}>Task two</NavLink>
                <NavLink to="/tree" className={setActive}>Task tree</NavLink>
                <NavLink to="/four" className={setActive}>Task four</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export { Layout }