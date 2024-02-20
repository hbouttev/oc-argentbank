import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '~/features/auth/authSlice.ts';
import { Link, useNavigate } from 'react-router-dom';
import UserIcon from '~/assets/icons/user-circle.svg?react';
import SignOutIcon from '~/assets/icons/sign-out.svg?react';

/**
 * The login status button to be displayed in the header.
 * The component is autonomous and can be imported and used as is without
 * specific props, loader or action. It's an example of component only Redux
 * usage.
 */
export default function LoginStatusButton() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex gap-1.5">
      {user ? (
        <>
          <UserLink to={'/profile'}>{user.firstName}</UserLink>
          <button
            onClick={handleLogout}
            className="mr-2 flex items-center gap-1.5 hover:underline"
          >
            <SignOutIcon className="fill-primary size-[16px]" />
            Sign Out
          </button>
        </>
      ) : (
        <UserLink to={'/login'}>Sign In</UserLink>
      )}
    </div>
  );
}

interface UserLinkProps {
  children: ReactNode;
  to: string;
}

function UserLink({ children, to }: UserLinkProps) {
  return (
    <Link to={to} className="mr-2 flex items-center gap-1.5 hover:underline">
      <UserIcon className="fill-primary size-[16px]" />
      {children}
    </Link>
  );
}
