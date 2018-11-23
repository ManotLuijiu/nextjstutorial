import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../scss/main.scss';

const Index = () => (
  <section style={{ padding: '10px 45px' }}>
    <Head>
      <title>Build up digital world</title>
    </Head>
    <Navbar />
    <h1>Hello world from Next JS</h1>
  </section>
);

export default Index;
