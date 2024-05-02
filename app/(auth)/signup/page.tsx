import React, { FormEvent } from 'react';
import Link from 'next/link';
import AuthLogo from '../auth-logo'; // Ensure this is the correct path to your component
import { supabase } from 'supabaseClient'; // Adjust this import to match the location of your supabaseClient file

export const metadata = {
  title: 'Sign Up - Stellar',
  description: 'Page description',
};

export default function SignUp() {
  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Assuming 'email' and 'password' fields are correctly named in your form.
    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(`Error signing up: ${error.message}`);
    } else {
      alert('Sign up successful. Check your email for a confirmation link.');
    }
  };

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Create your free account</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSignUp}>
          <div className="space-y-4">
            {/* Form fields adapted from your template */}
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
              <input id="email" name="email" className="form-input w-full" type="email" placeholder="markrossi@company.com" required />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password">Password <span className="text-rose-500">*</span></label>
              <input id="password" name="password" className="form-input w-full" type="password" autoComplete="on" required />
            </div>
          </div>
          <div className="mt-6">
            <button className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
              Sign Up <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <div className="text-sm text-slate-400">
            Already have an account? <Link className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="/signin">Sign in</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
          <div className="text-sm text-slate-500 italic">or</div>
          <div className="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
        </div>

        {/* Social login buttons */}
        {/* Keep your original social login buttons here as they were from your template */}
      </div>
    </>
  );
}
