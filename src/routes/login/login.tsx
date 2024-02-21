import UserIcon from '~/assets/icons/user-circle.svg?react';
import { Form, redirect, useActionData } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import FormTextInput from './FormTextInput.tsx';
import { login } from '~/features/auth/login.ts';
import type { ActionData } from '~/types/react-router.ts';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { username, password } = Object.fromEntries(formData);
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw new Error('Invalid username or password');
  }
  const { error } = await login(username, password);

  if (error) {
    return { error };
  }

  return redirect('/profile');
}

export default function Login() {
  const actionData = useActionData() as ActionData<typeof action>;
  let error = '';
  if (actionData?.error) {
    error = actionData.error;
  }
  return (
    <section className="mx-auto mt-12 w-[300px] bg-white p-8">
      <UserIcon className="fill-primary inline-block size-[16px]" />
      <h2 className="my-5 text-2xl font-bold">Sign In</h2>
      <Form method="post">
        <FormTextInput label="Username" name="username" type="text" />
        <FormTextInput label="Password" name="password" type="password" />
        <div className="flex">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            className="m-[3px]"
          />
          <label htmlFor="remember-me" className="ml-1">
            Remember me
          </label>
        </div>
        {error && <p className="mt-4 text-[1.1rem] text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-tertiary border-tertiary mt-4 block w-full p-2 text-[1.1rem] font-bold text-white"
        >
          Sign In
        </button>
      </Form>
    </section>
  );
}
