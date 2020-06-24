import { useSession } from 'next-auth/client';

const Page = () => {
  const [session, loading] = useSession();

  if (loading) return <p>...loading</p>;

  return (
    <p>
      {!session && (
        <>
          Not signed in <br />
          <a href="/api/auth/signin">Sign in</a>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <a href="/api/auth/signout">Sign out</a>
        </>
      )}
    </p>
  );
};
export default Page;
