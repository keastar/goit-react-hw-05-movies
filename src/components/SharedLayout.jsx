import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer
        style={{
          paddingLeft: '20px',
        }}
      >
        Footer
      </footer>
    </div>
  );
}
