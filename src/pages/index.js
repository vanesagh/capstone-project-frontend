import Head from 'next/head';
import Image from 'next/image';
import ProductItem from './components/ProductItem';
import PageDescription from './components/PageDescription';
import StoreNavBar from './components/StoreNavBar';
import { useRouter } from 'next/router';
import { useItemsSelectedContext } from './itemsSelected-provider';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });




export default function Home({ products }) {

  const router = useRouter();
  const { itemsList } = useItemsSelectedContext();
  //console.log(itemsList);
  const path = router.pathname;

  //console.log(router.pathname);


  return (
    <>
      <Head>
        <title>Repostería Ángeles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoreNavBar itemsList={itemsList} />
      <main className={`${styles.main} ${inter.className}`}>
        <PageDescription title="Nuestros productos" />
        <section>
          {products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}

        </section>


      </main>

    </>
  )
};

export async function getServerSideProps() {
  let products = [
    {
      _id: 1,
      name: "Babka de chocolate",
      description: "Pan trenzado relleno de chocolate",
      price: "230",
      imageUrl: "https://www.foodandwine.com/thmb/3alI1eL7tHTvNuAH9jQlHDDx2Yw=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE0116-XL-chocolate-babka-1a2e39def5f043f58caf48b97456a119.jpg"
    },
    {
      _id: 2,
      name: "Roles de canela",
      description: "Pan trenzado relleno de chocolate",
      price: "20",
      imageUrl: "https://www.savynaturalista.com/wp-content/uploads/Sugar-Free-Cinanamon-Rolls-6.jpg"
    },

  ];
  return {
    props: {
      products,
    },
  };

};
