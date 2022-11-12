import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import products from "./product.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeokshi Life</title>
        <meta name="description" content="Living as expected" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to 역시</h1>

        <div>
          {products.map((product) => {
            const { productId, title, price, description, image } = product;
            return (
              <div key={productId}>
                <h1>{title}</h1>
                <h4>${price}</h4>
                <Image src={image} alt={description} width="100" height="100" />
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
