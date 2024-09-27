import Header from "./components/Header";
import Head from "next/head";
import Login from "./components/login";
import Sidebar from "./components/Sidebar";
//import { getSession } from "next-auth/client";

export default function Home({session}) {
  if(!session) <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      
      <main>
       
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     },
//   };
// }