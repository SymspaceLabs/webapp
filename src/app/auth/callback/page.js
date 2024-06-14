'use client'; // This directive tells Next.js this component uses client-side code

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { setCookie } from 'nookies';

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const user = searchParams.get('user');
    const accessToken = searchParams.get('accessToken');

    if (user && accessToken) {
      // Save the user and accessToken to cookies
      setCookie(null, 'user', user, { path: '/' });
      setCookie(null, 'accessToken', accessToken, { path: '/' });

      // Redirect to the homepage or any other page
      router.push('/');
    }
  }, [router, searchParams]);

  return <div>Loading...</div>;
};

export default AuthCallback;
