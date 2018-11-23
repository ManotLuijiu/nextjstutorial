import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../scss/main.scss';

const API = () => (
  <section style={{ padding: '10px 45px' }}>
    <Head>
      <title>Our API</title>
    </Head>
    <Navbar />
    <h1>API</h1>
    <p>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        voluptatibus eligendi repellendus dicta nulla ab quaerat, voluptatem
        voluptates tempore quas atque molestias a in! Delectus ipsam commodi
        odit consectetur nostrum.
      </span>
      <span>
        Velit, voluptatibus? Nobis, non natus exercitationem qui quidem,
        repudiandae reprehenderit explicabo quas dolorum suscipit est tempora
        facere. Numquam, porro reiciendis rerum quas dignissimos veritatis
        corporis, magni quae consequatur vero adipisci!
      </span>
      <span>
        Cupiditate corporis pariatur, tempora temporibus quam animi laborum
        nostrum explicabo libero. Nostrum illum quisquam nemo, architecto ipsum
        temporibus deleniti ratione quam maxime odit atque recusandae quas
        excepturi a voluptatum dolorum.
      </span>
    </p>
  </section>
);

export default API;
