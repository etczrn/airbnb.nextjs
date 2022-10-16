import Head from 'next/head';
import { Header } from '../components/header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>PAPA Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Banner */}
    </div>
  );
}
