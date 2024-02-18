import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <div className="w-full">Header</div>
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full">Footer</footer>
    </>
  );
}
