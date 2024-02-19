import { useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '~/types/react-router.ts';
import Account from '~/components/Account/Account.tsx';

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO: get real user data
  return {
    user: {
      firstName: 'Tony',
      lastName: 'Jarvis',
    },
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
