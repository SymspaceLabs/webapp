import React, { FormEvent } from 'react';
import Link from 'next/link';
import AuthLogo from '../auth-logo'; // Adjust this path as necessary
import { supabase } from 'supabaseClient'; // Ensure this points to your Supabase client configuration

export const metadata = {
  title: 'Sign In - Stellar',
  description: 'Page description',
};

export default function SignIn() {
  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value;

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })

    if (error) {
      console.error('Error signing in:', error.message);
      alert('Error signing in: ' + error.message); // Display error to the user
    } else {
      console.log('Sign in successful');
      alert('Sign in successful'); // Inform the user
      // Redirect or update UI upon successful sign-in
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto text-center pb-12">
        <AuthLogo />
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Sign in to your account</h1>
      </div>
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSignIn}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 font-medium mb-1">Email</label>
              <input id="email" name="email" className="form-input w-full" type="email" required />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm text-slate-300 font-medium mb-1">Password</label>
                <Link href="/reset-password" className="text-sm font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out ml-2">Forgot?</Link>
              </div>
              <input id="password" name="password" className="form-input w-full" type="password" autoComplete="on" required />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
              Sign In <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <div className="text-sm text-slate-400">
            Don't have an account? <Link href="/signup" className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out">Sign up</Link>
          </div>
        </div>
        <div className="flex items-center my-6">
          <div className="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
          <div className="text-sm text-slate-500 italic">or</div>
          <div className="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
        </div>
        <div className="flex space-x-3">
          {/* Assuming you have the social login setup ready, include those buttons here */}
          {/* Social login buttons */}
        </div>
      </div>
    </>
  );
}
