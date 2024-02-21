import { Form, useActionData, useLoaderData } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import type { ActionData, LoaderData } from '~/types/react-router.ts';
import Account from '~/components/Account/Account.tsx';
import { authenticateUser } from '~/features/auth/auth.ts';
import { useEffect, useState } from 'react';
import { updateUserProfile } from '~/features/auth/login.ts';
import FormTextInput from './FormTextInput.tsx';

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
  console.log('profile action');
  const formData = await request.formData();
  const { firstName, lastName } = Object.fromEntries(formData);
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw new Error('Invalid username or password');
  }
  const { error } = await updateUserProfile(firstName, lastName);

  return { error };
}

export default function Profile() {
  const [isEditingName, setIsEditingName] = useState(false);
  const { user } = useLoaderData() as LoaderData<typeof loader>;
  const actionData = useActionData() as ActionData<typeof action>;
  const error = actionData?.error;

  useEffect(() => {
    // If the action was successful, toggle the editing state
    if (actionData?.error === null) {
      toggleEditingName();
    }
  }, [actionData]);

  function toggleEditingName() {
    setIsEditingName((prev) => !prev);
  }

  return (
    <>
      <div className="mb-8 mt-5 text-white">
        <h2 className="mb-5 text-[2rem] font-bold leading-10">
          Welcome back
          {!isEditingName && (
            <>
              <br />
              {user.firstName} {user.lastName}!
            </>
          )}
        </h2>
        {isEditingName ? (
          <Form method="post" className="flex flex-col gap-4 px-2">
            <div className="text-primary flex flex-wrap justify-center gap-5">
              <FormTextInput name="firstName" placeholder={user.firstName} />
              <FormTextInput name="lastName" placeholder={user.lastName} />
            </div>
            <div className="flex justify-center gap-5">
              {error && <p className="text-[1.1rem] text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-tertiary border-tertiary w-32 p-2.5 text-sm font-bold text-white"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-primary border-primary w-32 p-2.5 text-sm font-bold text-white"
                onClick={toggleEditingName}
              >
                Cancel
              </button>
            </div>
          </Form>
        ) : (
          <button
            className="bg-tertiary border-tertiary p-2.5 text-sm font-bold text-white"
            onClick={toggleEditingName}
          >
            Edit name
          </button>
        )}
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
