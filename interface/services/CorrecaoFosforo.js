import { api } from "../api";

/**
 * Serviço que realiza o calculo da correcao de fósforo no solo
 * @param {Number} teorFosforo teor de fosforo atual do solo
 * @param {Number} fonteFosforo Fonte de fósoforo que será utilizada
 * 
 * @returns promise
 */

export async function calcularCorrecaoDeFosforo(teorFosforo, fonteFosforo) {
    return api.get("/fosforo", {
        params: { "teor_fosforo": teorFosforo, "fonte_fosforo": fonteFosforo }
    });
}