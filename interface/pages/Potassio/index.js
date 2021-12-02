import Head from 'next/head'
import Link from 'next/link'
import { Input, InputField } from '../../components/Input'
import { Header } from '../../components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/Home.module.css'

export default function Potassio() {

	const fontesDePotassio = [
		{ "indice": 1, "fonte": "Cloreto de Potássio" },
		{ "indice": 2, "fonte": "Sulfato de Potássio" },
		{ "indice": 3, "fonte": "Sulf. Potássio/Mag." }
	];

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
									id=""
									name=""
									type="text"
								/>
							</InputField>
						</div>
						<div className={styles.row}>
							<InputField className="w-400">
								<label>Participação do Potássio na CTC, desejada (%): </label>
								<Input
									id=""
									name=""
									type="text"
								/>
							</InputField>
							<InputField className="w-400">
								<label>Participação do Potássio na CTC, após correção (%): </label>
								<Input
									id=""
									name=""
									type="text"
								/>
							</InputField>
						</div>
						<div className="row">
							<InputField className="w-400">
								<label>Participação ideal do Potássio na CTC (%): </label>
								<Input
									type="text"
									placeholder="3,0%"
									name=""
									id=""
									disabled
								/>
							</InputField>
						</div>
						<div className="row">
							<InputField className="w-300">
								<label>Fonte de Potássio a utilizar: </label>
								<select
									style={{ height: "30px" }}
								>
									{fontesDePotassio.map((fonte, index) => {
										return <option key={index}>{fonte.indice} - {fonte.fonte}</option>
									})}
								</select>
							</InputField>
						</div>
						<div className="row">
							<InputField className="w-300">
								<label>Quantidade a aplicar (kg/hectare): </label>
								<Input
									id=""
									name=""
									type="text"
								/>
							</InputField>
							<InputField className="w-300">
								<label>Custo (R$/h1): </label>
								<Input
									placeholder="0,00"
									type="text"
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