import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>Detail Pengguna</h1>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Perusahaan: {user.company.name}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserDetail;