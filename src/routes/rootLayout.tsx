import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserIcon from '~/assets/icons/user-circle.svg?react';

export default function RootLayout() {
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
        <Link
          to="/login"
          className="mr-2 flex items-center gap-1.5 hover:underline"
        >
          <UserIcon className="fill-primary size-[16px]" />
          Sign In
        </Link>
      </nav>
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-center border-t-2 border-solid border-t-[#ccc] pb-6 pt-8">
        Copyright 2020 Argent Bank
      </footer>
    </>
  );
}
