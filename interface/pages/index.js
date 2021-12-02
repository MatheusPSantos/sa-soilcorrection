import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ButtonLink } from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [produtor, setProdutor] = useState('Valor mockado');

  return (
    <div className={styles.container}>
      <Head>
        <title>Equilíbrio e Correção de solo</title>
      </Head>

      <main className={styles.main}>
        <Image src="/projeto_graos_logo.png" alt="logo do projeto grãos" width={50} height={50} />
        <h1 className={styles.title}>
          Correções e recuperações por material.
        </h1>

        <section className="col">
          <div className={styles.card} title="Clique para ver o cadastro do produtor">
            <p>Produtor Cadastrado: <b><Link href='/CadastroProdutor'>{produtor}</Link></b></p>
          </div>
          <Link passHref href="/CadastroProdutor">
            <ButtonLink >Ver cadastro</ButtonLink>
          </Link>
        </section>

        <div className={styles.row} style={{ marginTop: "50px" }}>
          <Link href="/Fosforo">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Fósforo &rarr;</h2>
            </a>
          </Link>

          <Link href="/Potassio">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Potássio &rarr;</h2>
            </a>
          </Link>

          <Link href="/Calcio_Magnesio">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Cálcio e Magnésio &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          EMATER - {new Date().getFullYear()}
          <br />
          <span className={styles.logo}>
            <Image src="/emater_logo.png" alt="Emater Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  )
}
