import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

import { Toaster } from "~/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>Application Exercise</title>
        <meta name="description" content="Created by Manuel Pastor Ringuelet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex flex-1 items-center justify-center p-4">
        {children}
      </main>
      <Footer />

      <Toaster />
    </div>
  );
}
