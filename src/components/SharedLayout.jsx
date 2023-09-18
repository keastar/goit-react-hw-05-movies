import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <header>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
