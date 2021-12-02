import Head from 'next/head'
import Link from 'next/link'
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Input, InputField } from '../../components/Input';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/Home.module.css'

export default function CalcioMagnesio() {

  const fontesDeCalcioMagnesio = [
    { "indice": 1, "fonte": "Calcário Dolomítico" },
    { "indice": 2, "fonte": "Calcário Calcítico" },
    { "indice": 3, "fonte": "Calcário de Concha" },
    { "indice": 4, "fonte": "Gesso Agrícola" },
    { "indice": 5, "fonte": "Hidróxido de cálcio" },
    { "indice": 6, "fonte": "Calcário Magnesiano" }
  ];

  return <>
    <Head>
      <title>Equilíbrio e Correção de Cálcio e Magnésio</title>
    </Head>

    <Header>
      <Link href="/"><a><AiOutlineArrowLeft /></a></Link>
      <span>Equilíbrio e correção de solo</span>
    </Header>

    <div className={styles.container} >


      <main className={styles.main}>
        <h1 className={styles.title}>
          Correção/Recuperção de Cálcio e Magnésio
        </h1>

        <section style={{ marginTop: "50px" }} className="row w-800">
          <Card className="w-350">
            <h2>Cálcio</h2>
            <div className="col w-full">
              <div>
                <InputField className="w-full">
                  <label>Participação atual no CTC do solo (%): </label>
                  <Input
                    id=""
                    name=""
                    type="text"
                    placeholder="0,0%"
                  />
                </InputField>
              </div>
              <div className="col">
                <InputField className="w-full">
                  <label>Participação ideal na CTC (%): </label>
                  <Input
                    type="text"
                    placeholder="45,0% a 55,0%"
                    name=""
                    id=""
                    disabled
                  />
                </InputField>
              </div>
              <div className="col">
                <InputField className="w-full">
                  <label>Participação após a correção (%): </label>
                  <Input
                    id=""
                    name=""
                    type="text"
                    placeholder="0,0%"
                  />
                </InputField>
                <InputField className="">
                  <label>Participação na CTC, desejada (%): </label>
                  <Input
                    id=""
                    name=""
                    type="text"
                    placeholder="0,0%"
                  />
                </InputField>
              </div>
            </div>
          </Card>

          <Card className="w-350">
            <h2>Magnésio</h2>
            <div className="col w-full">
              <InputField className="w-full">
                <label>Participação atual na CTC do solo (%):</label>
                <Input
                  type="text"
                  placeholder="0,0%"
                  name=""
                  id=""
                />
              </InputField>

              <InputField className="w-full">
                <label>Participação ideal na CTC do solo (%):</label>
                <Input
                  type="text"
                  placeholder="10% a 15%"
                  name=""
                  id=""
                  disabled
                />
              </InputField>

              <InputField className="w-full">
                <label>Participação após correção (%):</label>
                <Input
                  type="text"
                  placeholder="0,0%"
                  name=""
                  id=""
                />
              </InputField>
            </div>
          </Card>
        </section>

        <section className="row w-800">
          <Card className="row">
            <div className="col w-350">
              <InputField className="w-300">
                <label>Fonte de Corretivo a usar:</label>
                <select
                  style={{ height: "30px" }}
                >
                  {fontesDeCalcioMagnesio.map((fonte, index) => {
                    return <option key={index}>{fonte.indice} - {fonte.fonte}</option>
                  })}
                </select>
              </InputField>

              <InputField className="w-full">
                <label>PRNT (%):</label>
                <Input
                  type="text"
                  disabled
                />
              </InputField>

              <InputField className="w-full">
                <label>Teor de CaO do corretivo (%):</label>
                <Input type="text" disabled />
              </InputField>

              <InputField className="w-full">
                <label>Quantidade a aplicar (Ton./ha):</label>
                <Input type="text" name="" id="" />
              </InputField>

              <InputField className="w-full">
                <label>Custo (R$/ha):</label>
                <Input type="text" disabled name="" id="" />
              </InputField>
            </div>

            <div className="col w-350">
              <h3>V%</h3>
              <InputField>
                <label>Atual</label>
                <Input
                  type="text"
                  placeholder="0%"
                />
              </InputField>

              <InputField>
                <label>Ideal</label>
                <Input
                  type="text"
                  placeholder="60% a 70%"
                  disabled
                />
              </InputField>

              <InputField>
                <label>Após a correção</label>
                <Input
                  type="text"
                  placeholder="0%"
                />
              </InputField>
            </div>
          </Card>
        </section>
      </main>
    </div>
  </>;
}