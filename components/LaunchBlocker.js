"use client"
import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';


export function LaunchBlocker({ children }) {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasmcinnercircleCookie = document.cookie.includes('mcinnercircle=true');
    setIsAuthorized(hasmcinnercircleCookie);
    setIsLoading(false);
  }, []);

  const handlePasswordSubmit = () => {
    if (password === 'mcmwlaunch') {
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1);
      document.cookie = `mcinnercircle=true; expires=${expirationDate.toUTCString()}; path=/`;
      setIsAuthorized(true);
    }
  };

  if (isLoading) {
    return <section className='launch-blocker page-section'>
      <div className='container'>
        <div className='text-block'>
          <p>Hold on, we&apos;re putting on our boots...</p>
        </div>
      </div>
    </section>;
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <section className="launch-blocker">
      <div className="container">
        <Image
          src='/logo.png'
          width={280}
          height={130}
          alt='mcmw logo'
        />
          <form className="default-form-style" onSubmit={handlePasswordSubmit}>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              aria-label="Password"
            />
            <button type="submit">
              Log In
              <Image
                src='/icons/arrow-white.svg'
                alt='chunky right arrow'
                width={40}
                height={32}
              />
            </button>
          </form>
        </div>
    </section>
  );
}
