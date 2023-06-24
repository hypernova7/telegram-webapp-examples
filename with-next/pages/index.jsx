import Link from 'next/link'
import React, { useEffect, useState } from 'react';

function User() {
  const [first_name, setFirstName] = useState('Anonymous');
  const [last_name, setLastName] = useState(null);

  useEffect(() => {
      console.log(window.Telegram);
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user) {
        setFirstName(user.first_name);
        setLastName(user.last_name);
      }
  }, []);

  return (
    <div>
      <span>{first_name}{last_name && last_name}</span>
    </div>
  );
}

export default function Home() {

  return (
    <div>
      <h3>Hello <User /></h3>
      <Link href="/about">About</Link>
    </div>
  )
}
