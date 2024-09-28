import Header from "./components/Header";
import Head from "next/head";
import Login from "./components/login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
//import { getSession } from "next-auth/client";

export default function Home({session}) {
  if(!session) <Login />;
  return (
    <div className="h-screen bg-gray-100 overfolw-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      
      <main className="flex">
       
        <Sidebar />
        <Feed/>
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