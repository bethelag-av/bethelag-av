'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    //redirect to the landing page for the ministry day volunteer sign up form
    window.location.href = 'https://tinyurl.com/MOHRegister';
  }, []);
}
