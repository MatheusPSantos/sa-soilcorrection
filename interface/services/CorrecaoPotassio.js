import { api } from "../api";

/**
 * Serviço que realiza o calculo da correcao de potássio no solo
 * @param {Number} teorSolo teor de potássio atual do solo
 * @param {Number} fontePotassio Fonte de potassio que será utilizada
 * @param {Number} partCTCDesejada participação na CTC desejada
 * @param {Number} partCTCExistente participação na CTC existente
 * 
 * @returns promise
 */

export async function calcularCorrecaoDePotassio(teorSolo, partCTCExistente, partCTCDesejada, fontePotassio) {
    return api.get("/potassio", {
        params: {
            "teor_solo": teorSolo,
            "participacao_ctc_existente": partCTCExistente,
            "participacao_ctc_desejada": partCTCDesejada,
            "fonte_potassio": fontePotassio 
        }
    });
}