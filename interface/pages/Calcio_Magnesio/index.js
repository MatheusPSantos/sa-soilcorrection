import Head from 'next/head'
import Link from 'next/link'
import {Card} from '../../components/Card';
import {Header} from '../../components/Header';
import {Input, InputField} from '../../components/Input';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import styles from '../../styles/Home.module.css'
import {useState} from "react";
import {somenteNumero} from "../../services/InputValidador";
import {ButtonSubmit} from "../../components/Button";
import {calcularCorrecaoDeCalcioMagnesio} from "../../services/CorrecaoCalcioMagnesio";

export default function CalcioMagnesio() {

    const fontesDeCalcioMagnesio = [
        {"indice": 1, "fonte": "Calcário Dolomítico"},
        {"indice": 2, "fonte": "Calcário Calcítico"},
        {"indice": 3, "fonte": "Calcário de Concha"},
        {"indice": 4, "fonte": "Gesso Agrícola"},
        {"indice": 5, "fonte": "Hidróxido de cálcio"},
        {"indice": 6, "fonte": "Calcário Magnesiano"}
    ];

    const [quantidadeAplicar, setQuantidadeAplicar] = useState();
    const [requestOK, setRequestOK] = useState(false);
    const [quantidadeFonte, setQuantidadeFonte] = useState();
    const [prntPercentagem, setPRNTPercentagem] = useState();
    const [fonteCorretivo, setFonteCorretivo] = useState("1");


    async function handleSubmit(e) {
        e.preventDefault();

        const response = await calcularCorrecaoDeCalcioMagnesio(
            prntPercentagem.trim(),
            quantidadeFonte.trim(),
            fonteCorretivo
            );

        if(response.status === 200) {
            setRequestOK(true);
            const {data} = response;

            setQuantidadeAplicar(data.quantidade_aplicar)

        } else {
            window.alert("Ocorreu um erro com a requisição.");
        }
    }

    return <>
        <Head>
            <title>Equilíbrio e Correção de Cálcio e Magnésio</title>
        </Head>

        <Header>
            <Link href="/"><a><AiOutlineArrowLeft/></a></Link>
            <span>Equilíbrio e correção de solo</span>
        </Header>

        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Correção/Recuperção de Cálcio e Magnésio
                </h1>

                <section style={{marginTop: "50px"}} className="row w-800">
                    <Card className="w-full">
                        <h2>Cálcio e Magnésio</h2>
                        <div className="col w-full">
                            <Card className="row">
                                <div className="col w-350">
                                    <InputField className="w-300">
                                        <label>Fonte de Corretivo a usar:</label>
                                        <select
                                            value={fonteCorretivo} onChange={(e) => setFonteCorretivo(e.target.value.split("-")[0].trim())}
                                            style={{height: "30px"}}
                                        >
                                            {fontesDeCalcioMagnesio.map((fonte, index) => {
                                                return <option value={index + 1}
                                                               key={index}>{fonte.indice} - {fonte.fonte}</option>
                                            })}
                                        </select>
                                    </InputField>

                                    <InputField className="w-full">
                                        <label>PRNT (%):</label>
                                        <Input
                                            value={prntPercentagem}
                                            onChange={(e) => setPRNTPercentagem(e.target.value)}
                                            onKeyPress={(e) => somenteNumero(e)}
                                            type="text"
                                        />
                                    </InputField>

                                    <InputField className="w-full">
                                        <label>Quantidade da fonte a utilizar:</label>
                                        <Input type="text"
                                               value={quantidadeFonte}
                                               onKeyPress={(e) => somenteNumero(e)}
                                               onChange={(e) => setQuantidadeFonte(e.target.value)}
                                        />
                                    </InputField>
                                </div>
                            </Card>
                        </div>

                        <ButtonSubmit
                            type={"button"}
                            value={"Calcular"}
                            onClick={(e) => handleSubmit(e)}
                        />
                    </Card>
                </section>

                <section>
                    { requestOK ?
                        <div className={styles.container}>
                            <div className="col">
                                <p style={{fontWeight: "bold"}}>Quantidade a aplicar (kg/hectare):</p>
                                <h3 style={{color: "green"}}>{quantidadeAplicar}</h3>
                            </div>
                        </div>
                        : <></>
                    }
                </section>
            </main>
        </div>
    </>
;
}