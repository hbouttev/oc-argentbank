import UserIcon from '~/assets/icons/user-circle.svg?react';
import { Form } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import FormTextInput from '~/components/FormTextInput/FormTextInput.tsx';

export async function action({ request }: ActionFunctionArgs) {
  // handle login with a model or other and loginUser() or similar
  // ten check in other routes with authenticated() or similar
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log('login action');
  return null;
}

export default function Login() {
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
