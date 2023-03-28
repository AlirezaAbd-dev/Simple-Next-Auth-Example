import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>signOut</button>
      ) : (
        <button onClick={() => signIn("github")}>signIn</button>
      )}
    </>
  );
}
