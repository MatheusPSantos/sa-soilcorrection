import { api } from "../api";

/**
 * Serviço que realiza o calculo da correcao de potássio no solo
 * @param {Number} prntPercentagem Percentagem de PRNT
 * @param {Number} fonteCorretivo fonte de corretivo que será usado
 * @param {Number} quantidadeFonte quantidade de fonte adicionar
 * 
 * @returns promise
 */

export async function calcularCorrecaoDeCalcioMagnesio(prntPercentagem, quantidadeFonte, fonteCorretivo) {
    return api.get("/calcio_magnesio", {
        params: {
            "prnt_percentagem": prntPercentagem,
            "quantidade_fonte": quantidadeFonte,
            "fonte_corretivo": fonteCorretivo
        }
    });
}