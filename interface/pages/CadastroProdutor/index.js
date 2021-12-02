import { Input, InputField } from "../../components/Input";
import styles from '../../styles/Home.module.css'
import Head from "next/head"
import Link from "next/link"
import { Header } from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonSubmit } from "../../components/Button";
import { useEffect, useState } from "react";
import { lerCadastroDoProdutor, salvarCadastroDoProdutor } from "../../services/CadastroDoProdutor";

export default function CadastroProdutor() {
	const [cadastroDoProdutor, setCadastroDoProdutor] = useState(null);
	const [produtor, setProdutor] = useState('');
	const [data, setData] = useState(new Date().toLocaleDateString('pt-br'));
	const [municipio, setMunicipio] = useState('');
	const [lote, setLote] = useState('');
	const [areaTotal, setAreaTotal] = useState('');
	const [talhao, setTalhao] = useState('');
	const [areaTalhao, setAreaTalhao] = useState('');
	const [matriculaLote, setMatriculaLote] = useState('');
	const [texturaSolo, setTexturaSolo] = useState('');
	const [sistemaCultivo, setSistemCultivo] = useState('');
	const [responsavelTecnico, setResponsavelTecnico] = useState('');
	const [profundidade, setProfundidade] = useState('');
	const [resultadoAnalise, setResultadoAnalise] = useState('');

	useEffect(() => {
		let cadastroSalvo = lerCadastroDoProdutor();
		if (cadastroSalvo) {
			setProdutor(cadastroSalvo.produtor);
			setData(cadastroSalvo.data);
			setMunicipio(cadastroSalvo.municipio);
			setLote(cadastroSalvo.lote);
			setAreaTotal(cadastroSalvo.areaTotal);
			setTalhao(cadastroSalvo.talhao);
			setAreaTalhao(cadastroSalvo.areaTalhao);
			setMatriculaLote(cadastroSalvo.matriculaLote);
			setTexturaSolo(cadastroSalvo.texturaSolo);
			setSistemCultivo(cadastroSalvo.sistemaCultivo);
			setResponsavelTecnico(cadastroSalvo.responsavelTecnico);
			setProfundidade(cadastroSalvo.profundidade);
			setResultadoAnalise(cadastroSalvo.resultadoAnalise);
			setCadastroDoProdutor(cadastroSalvo);
		}
	}, []);

	function submiterCadastro(event) {
		event.preventDefault();
		const dataObject = {
			produtor,
			data,
			municipio,
			lote,
			areaTotal,
			talhao,
			areaTalhao,
			matriculaLote,
			texturaSolo,
			sistemaCultivo,
			responsavelTecnico,
			profundidade,
			resultadoAnalise,
		};

		if (checkIfIsDifferent(cadastroDoProdutor, dataObject)) {
			salvarCadastroDoProdutor(dataObject);
			setCadastroDoProdutor(lerCadastroDoProdutor());
			window.alert('Dados salvos corretamente');
		} else {
			window.alert('Sem alterações para salvar');
		}
	}

	function checkIfIsDifferent(cadastro, obj) {
		return JSON.stringify(cadastro) !== JSON.stringify(obj);
	}

	return <>
		<Head>
			<title>Cadastro do Produtor</title>
		</Head>

		<Header>
			<Link href="/"><a><AiOutlineArrowLeft /></a></Link>
			<span>Cadastro o produtor</span>
		</Header>

		<div className={styles.container} >
			<main className={styles.main}>
				<section className={styles.grid_left}>

					<form onSubmit={submiterCadastro} method="POST">
						<div className={styles.row}>
							<InputField className="w-700">
								<label htmlFor="produtor">Produtor:</label>
								<Input
									name="produtor"
									id="produtor"
									type="text"
									value={produtor}
									onChange={(event) => setProdutor(event.target.value)}
								/>
							</InputField>
							<InputField className="w-100">
								<label htmlFor="data">Data:</label>
								<Input
									name="data"
									id="data"
									type="date"
									value={new Date(data).toJSON().split('T')[0]}
									onChange={(event) => setData(new Date(event.target.value).toLocaleDateString("pt-br"))}
								/>
							</InputField>
						</div>

						<div className={styles.row}>
							<InputField className="w-500">
								<label htmlFor="municipio">Município:</label>
								<Input
									id="municipio"
									name="municipio"
									type="text"
									value={municipio}
									onChange={(event) => setMunicipio(event.target.value)}
								/>
							</InputField>
							<InputField className="w-100">
								<label htmlFor="lote">Lote:</label>
								<Input
									id="lote"
									name="lote"
									type="text"
									value={lote}
									onChange={(event) => setLote(event.target.value)}
								/>
							</InputField>
							<InputField className="w-200">
								<label htmlFor="area_total">Área Total (ha):</label>
								<Input
									id="area_total"
									name="area_total"
									type="text"
									value={areaTotal}
									onChange={(event) => setAreaTotal(event.target.value)}
								/>
							</InputField>
						</div>

						<div className={styles.row}>
							<InputField className="w-100">
								<label htmlFor="talhao">Talhão:</label>
								<Input
									id="talhao"
									name="talhao"
									type="text"
									value={talhao}
									onChange={(event) => setTalhao(event.target.value)}
								/>
							</InputField>
							<InputField className="w-200">
								<label htmlFor="area_talhao">Área do talhão (ha):</label>
								<Input
									id="area_talhao"
									name="area_talhao"
									type="text"
									value={areaTalhao}
									onChange={(event) => setAreaTalhao(event.target.value)}
								/>
							</InputField>
							<InputField className="w-200">
								<label htmlFor="matricula_lote">Matrícula do lote:</label>
								<Input
									id="matricula_lote"
									name="matricula_lote"
									type="text"
									value={matriculaLote}
									onChange={(event) => setMatriculaLote(event.target.value)}
								/>
							</InputField>
						</div>

						<div className={styles.row}>
							<InputField className="w-200">
								<label htmlFor="textura_solo">Textura do Solo:</label>
								<Input
									id="textura_solo"
									name="textura_solo"
									type="text"
									value={texturaSolo}
									onChange={(event) => texturaSolo(event.target.value)}
								/>
							</InputField>
							<InputField className="w-200">
								<label htmlFor="sistema_cultivo">Sitema de cultivo:</label>
								<Input
									id="sistema_cultivo"
									name="sistema_cultivo"
									type="text"
									value={sistemaCultivo}
									onChange={(event) => setSistemCultivo(event.target.value)}
								/>
							</InputField>
						</div>

						<div className={styles.row}>
							<InputField className="w-700">
								<label htmlFor="responsavel_tecnico">Responsável técnico:</label>
								<Input
									id="responsavel_tecnico"
									name="responsavel_tecnico"
									type="text"
									value={responsavelTecnico}
									onChange={(event) => setResponsavelTecnico(event.target.value)}
								/>
							</InputField>
						</div>
						<div className={styles.row}>
							<InputField className="w-500">
								<label htmlFor="profundidade_solo">Profundidade da amostra de solos (cm):</label>
								<Input
									id="profundidade_solo"
									name="profundidade_solo"
									type="text"
									value={profundidade}
									onChange={(event) => setProfundidade(event.target.value)}
								/>
							</InputField>
						</div>
						<div className={styles.row}>
							<InputField className="w-300">
								<label htmlFor="resultado_analise_solo">Resultado da análise de solos Nº:</label>
								<Input
									id="resultado_analise_solo"
									name="resultado_analise_solo"
									type="text"
									value={resultadoAnalise}
									onChange={(event) => setResultadoAnalise(event.target.value)}
								/>
							</InputField>
						</div>
						<div className={styles.row}>
							<ButtonSubmit type="submit" value="Salvar dados" />
						</div>

					</form>
				</section>
			</main>
		</div>
	</>
}