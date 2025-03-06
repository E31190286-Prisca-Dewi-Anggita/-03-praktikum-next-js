import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Selamat Datang di Website Saya!</h1>
      <p>Ini adalah halaman utama.</p>
      <Link href="/about">
          Tentang Kami
      </Link> 
      <br />
      <Link href="/products" legacyBehavior>
        <a>Products</a>
      </Link>
      <br />
      <Link href="/users" legacyBehavior>
        <a>User</a>
      </Link>
      <br />
      <Link href="/weather" legacyBehavior>
        <a>Weather</a>
      </Link>
    </div>
  );
};

export default HomePage;