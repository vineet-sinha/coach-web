import Head from 'next/head';
import ChatWindow from '../components/ChatWindow';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Cone.ai - Coach</title>
        <meta name="description" content="Your Coach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ChatWindow />
      </main>
    </div>
  );
}
