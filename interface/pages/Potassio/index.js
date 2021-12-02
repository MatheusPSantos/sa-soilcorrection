import Head from 'next/head'
import Link from 'next/link'
import { Input, InputField } from '../../components/Input'
import { Header } from '../../components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/Home.module.css'
import {useEffect, useState} from "react";
import {somenteNumero} from "../../services/InputValidador";
import {ButtonSubmit} from "../../components/Button";
import {calcularCorrecaoDeFosforo} from "../../services/CorrecaoFosforo";
import {calcularCorrecaoDePotassio} from "../../services/CorrecaoPotassio";

export default function Potassio() {

	const fontesDePotassio = [
		{ "indice": 1, "fonte": "Cloreto de Potássio" },
		{ "indice": 2, "fonte": "Sulfato de Potássio" },
		{ "indice": 3, "fonte": "Sulf. Potássio/Mag." }
	];

	const [teorSolo, setTeorSolo] = useState();
	const [participacaoCTCExistente, setParticipacaoCTCExistente] = useState();
	const [participacaoCTCDesejada, setParticipacaoCTCDesejada] = useState();
	const [fontePotassio, setFontePotassio] = useState("1");

	const [requestOK, setRequestOK] = useState(false);
	const [necessidadeAdicionarCMolcDm3, setNecessidadeAddCMolcDM3] = useState();
	const [necessidadeAdicionarMgDm3, setNecessidadeAdicionarMgDm3] = useState();
	const [necessidadeAdicionarKgHa, setNecessidadeAdicionarKgHa] = useState();
	const [eficienciaNutriente, setEficienciaNutriente] = useState();
	const [quantidadeAplicar, setQuantidadeAplicar] = useState();

	async function handleRequest(event) {
		event.preventDefault();
		console.log('fonte potassio ', fontePotassio)
		const response = await calcularCorrecaoDePotassio(
			0.15,
			participacaoCTCExistente.trim(),
			participacaoCTCDesejada.trim(),
			fontePotassio
		);

		if(response.status === 200) {
			const {data} = response;
			setRequestOK(true);
			setNecessidadeAddCMolcDM3(data.necessidade_adicionar_CMolcDm3);
			setNecessidadeAdicionarMgDm3(data.necessidade_adicionar_MgDm3);
			setNecessidadeAdicionarKgHa(data.necessidade_adicionar_KgHa);
			setEficienciaNutriente(data.eficiencia_nutriente);
			setQuantidadeAplicar(data.quantidade_aplicar);

		} else {
			window.alert("Houve um erro com a requisição.");
		}
	}

	return <>
		<Head>
			<title>Equilíbrio e Correção de Potássio</title>
		</Head>

		<Header>
			<Link href="/"><a><AiOutlineArrowLeft /></a></Link>
			<span>Equilíbrio e correção de solo</span>
		</Header>

		<div className={styles.container} >
			<main className={styles.main}>
				<h1 className={styles.title}>
					Correção/Recuperção de Potássio
				</h1>

				<section style={{ marginTop: "50px" }} className={styles.grid_left}>
					<div className="col w-800">
						<div className={styles.row}>
							<InputField className="w-400">
								<label>Participação atual do Potássio na CTC do solo (%): </label>
								<Input
									value={participacaoCTCExistente}
									onKeyPress={(event) => somenteNumero(event)}
									onChange={(event) => setParticipacaoCTCExistente(event.target.value)}
									type="text"
								/>
							</InputField>
						</div>
						<div className={styles.row}>
							<InputField className="w-400">
								<label>Participação do Potássio na CTC, desejada (%): </label>
								<Input
									value={participacaoCTCDesejada}
									onKeyPress={(e)=> somenteNumero(e)}
									onChange={(e) => setParticipacaoCTCDesejada(e.target.value)}
									type="text"
								/>
							</InputField>
						</div>
						<div className="row">
							<InputField className="w-400">
								<label>Participação ideal do Potássio na CTC (%): </label>
								<Input type="text" placeholder="3,0%" disabled />
							</InputField>
						</div>
						<div className="row">
							<InputField className="w-300">
								<label>Fonte de Potássio a utilizar: </label>
								<select
									value={fontePotassio}
									onChange={(e) => setFontePotassio(e.target.value.split("-")[0].trim())}
									style={{ height: "30px" }}
								>
									{fontesDePotassio.map((fonte, index) => {
										return <option value={index + 1} key={index}>{fonte.indice} - {fonte.fonte}</option>
									})}
								</select>
							</InputField>
						</div>
					</div>

					<ButtonSubmit type="button" value="Calcular" onClick={(e) => handleRequest(e)} />
				</section>

				<section>
					{ requestOK ?
						<div className={styles.container}>
							<div className="col">
								<p style={{fontWeight: "bold"}}>Necessário Adicionar C (Molc/DM3):</p>
								<h3 style={{color: "green"}}>{necessidadeAdicionarCMolcDm3}</h3>
							</div>
							<div className="col">
								<p style={{fontWeight: "bold"}}>Necessário adicionar (Mg/Dm³):</p>
								<h3 style={{color: "brown"}}>{necessidadeAdicionarMgDm3}</h3>
							</div>
							<div className="col">
								<p style={{fontWeight: "bold"}}>Necessario adicionar (kg/hectare):</p>
								<h3 style={{color: "green"}}>{necessidadeAdicionarKgHa}</h3>
							</div>
							<div className="col">
								<p style={{fontWeight: "bold"}}>Eficiencia do nutriente:</p>
								<h3 style={{color: "green"}}>{eficienciaNutriente}</h3>
							</div>
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
	</>;
}