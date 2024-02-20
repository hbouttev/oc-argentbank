import { useLoaderData } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '~/types/react-router.ts';
import Account from '~/components/Account/Account.tsx';
import { authenticateUser } from '~/features/auth/auth.ts';

export async function loader() {
  const user = authenticateUser();
  if (!user) {
    // This should never happen, as the user is set when authenticating, but the
    // type can still be null
    return {
      user: {
        firstName: '',
        lastName: '',
      },
    };
  }
  return {
    user,
  };
}

export async function action({ request }: ActionFunctionArgs) {
  // TODO: handle profile update
  console.log('profile action');
  return null;
}

export default function Profile() {
  const { user } = useLoaderData() as LoaderData<typeof loader>;

  return (
    <>
      <div className="mb-8 mt-5 text-white">
        <h2 className="mb-5 text-[2rem] font-bold leading-10">
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h2>
        <button className="bg-tertiary border-tertiary p-2.5 text-sm font-bold text-white">
          Edit name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        name="Argent Bank Checking"
        id="x8349"
        balance={2082.79}
        balanceType="available"
      />
      <Account
        name="Argent Bank Savings"
        id="x6712"
        balance={10928.42}
        balanceType="available"
      />
      <Account
        name="Argent Bank Credit Card"
        id="x8349"
        balance={184.3}
        balanceType="current"
      />
    </>
  );
}
