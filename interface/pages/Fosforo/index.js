import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../../components/Header';
import { Input, InputField } from '../../components/Input'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import styles from '../../styles/Home.module.css'

export default function Fosforo() {

  const fontesDeFosforo = [
    { "indice": 1, "fonte": "Superfosfato Simples" },
    { "indice": 2, "fonte": "Superfosfato Triplo" },
    { "indice": 3, "fonte": "MAP" },
    { "indice": 4, "fonte": "DAP" },
    { "indice": 5, "fonte": "Yoorin" },
    { "indice": 6, "fonte": "Fosfato  Arad" },
    { "indice": 7, "fonte": "Fosfato  Gafsa" },
    { "indice": 8, "fonte": "Fosfato  Daoui" },
    { "indice": 9, "fonte": "Fosf.Patos Minas" },
    { "indice": 10, "fonte": "Escória de Thomas" },
    { "indice": 11, "fonte": "Ácido Fosfórico" },
    { "indice": 12, "fonte": "Multif.Magnesiano" }
  ];

  return <>
    <Head>
      <title>Equilíbrio e Correção de Fósforo</title>
    </Head>

    <Header>
      <Link href="/"><a><AiOutlineArrowLeft /></a></Link>
      <span>Equilíbrio e correção de solo</span>
    </Header>

    <div className={styles.container} >
      <main className={styles.main}>
        <h1 className={styles.title}>
          Correção/Recuperção de Fósforo
        </h1>

        <section style={{ marginTop: "50px" }} className={styles.grid_left}>
          <div className="col w-800">
            <div className={styles.row}>
              <InputField className="w-300">
                <label>Teor de Fósforo a atingir (mg.dm³):</label>
                <Input
                  id=""
                  name=""
                  type="text"
                />
              </InputField>
              <InputField className="w-300">
                <label>Fonte de Fósforo a utilizar:</label>
                <select
                  style={{ height: "30px" }}
                >
                  {fontesDeFosforo.map((fonte, index) => {
                    return <option key={index}>{fonte.indice} - {fonte.fonte}</option>
                  })}
                </select>
              </InputField>
            </div>
            <div className="row">
              <InputField className="w-300">
                <label>Quantidade a aplicar (kg/hectare):</label>
                <Input
                  id=""
                  name=""
                  type="text"
                />
              </InputField>
              <InputField className="w-300">
                <label>Custo (R$/h1):</label>
                <Input
                  placeholder="0,00"
                  type="text"
                  name=""
                  id=""
                />
              </InputField>
            </div>

            <div className="row">
              <InputField className="w-300">
                <label>Eficiência do Fosforo %:</label>
                <Input
                  type="text"
                  placeholder="70%"
                  name=""
                  id=""
                />
              </InputField>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>;
}