import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../../components/Header';
import { Input, InputField } from '../../components/Input'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import styles from '../../styles/Home.module.css'
import { calcularCorrecaoDeFosforo } from '../../services/CorrecaoFosforo';
import {somenteNumero} from "../../services/InputValidador";
import {useEffect, useState} from "react";
import {ButtonSubmit} from "../../components/Button";

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

  const [teorFosforo, setTeorFosforo] = useState(0);
  const [fonteFosforo, setFonteFosforo] = useState("1");
  const [requestOk, setRequestOK] = useState(false);

  const [eficiencia, setEficiencia] = useState();
  const [quantidadeAplicar, setQuantidadeAplicar] = useState();

  async function handleRequest(event) {
    event.preventDefault();
    const response = await calcularCorrecaoDeFosforo(teorFosforo.trim(), fonteFosforo.trim());
    if(response.status === 200) {
      setRequestOK(true);
      setQuantidadeAplicar(response.data.quantidade_aplicar);
      setEficiencia(response.data.eficiencia_nutriente);
    } else {
      window.alert("Houve um erro com a requisição.");
    }
  }

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
                    value={teorFosforo}
                    onChange={(event) => setTeorFosforo(event.target.value)}
                    type="text"
                    onKeyPress={(event) => somenteNumero(event)}
                />
              </InputField>
              <InputField className="w-300">
                <label>Fonte de Fósforo a utilizar:</label>
                <select
                  style={{ height: "30px" }}
                  value={fonteFosforo}
                  onChange={event => setFonteFosforo(event.target.value.split("-")[0].trim(""))}
                >
                  {fontesDeFosforo.map((fonte, index) => {
                    return <option value={index + 1} key={index}>{fonte.indice} - {fonte.fonte}</option>
                  })}
                </select>
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

          <ButtonSubmit type="button" onClick={(event) => handleRequest(event)} value="Calcular"/>
        </section>

        <section>
          { requestOk ?
              <div className={styles.container}>
                <div className="col">
                  <p style={{fontWeight: "bold"}}>Quantidade a aplicar (kg/hectare):</p>
                  <h3 style={{color: "green"}}>{quantidadeAplicar}</h3>
                </div>
                <div className="col">
                  <p style={{fontWeight: "bold"}}>Eficiencia do nutriente: </p>
                  <h3 style={{color: "brown"}}>{eficiencia}</h3>
                </div>
              </div>
              : <></>
          }
        </section>
      </main>
    </div>
  </>;
}