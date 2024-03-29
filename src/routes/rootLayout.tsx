import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import LoginStatusButton from '~/features/auth/LoginStatusButton/LoginStatusButton';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Set background color only for dashboard pages, not for the home page
  const dashboardMainStyle = pathname !== '/' ? ' bg-dark' : '';

  return (
    <>
      <nav className="flex items-center justify-between px-5 py-[5px] font-bold">
        <Link to="/" className="flex items-center">
          <img
            src="src/assets/logos/argentBankLogo.png"
            alt="Argent Bank logo"
            className="w-[200px] max-w-full"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <LoginStatusButton />
      </nav>
      <main className={`flex-1${dashboardMainStyle}`}>
        <Outlet />
      </main>
      <footer className="flex justify-center border-t-2 border-solid border-t-[#ccc] pb-6 pt-8">
        Copyright 2020 Argent Bank
      </footer>
    </>
  );
}
