import { firstNonAllowedSymbol, textContainsOnlyAllowedSymbols } from "./helpers.js";

/**
 * Teksto validavimo funkcija, kuri patikrina ar duotas tekstas yra "normalus/tikras" vardas vertinant is gramatines puses.
 * @param {string} str 
 * @returns {string} Tuscias string'as - kai viskas OK; Ne tuscias string'as = kai yra rasta klaida, jis kartu ir yra klaidos pranesimas.
 */
export function isName(str) {
    const nameMinSize = 2;
    const nameMaxSize = 20;
    const nameAllowedABC = 'aąbcčdeęėfghiįjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Truksta vardo';
    } else if (str.length < nameMinSize) {
        errorMessage = `Vardas per trumpas, turi buti minimum ${nameMinSize} raides`;
    } else if (str.length > nameMaxSize) {
        errorMessage = `Vardas per ilgas, negali virsyti ${nameMaxSize} raidziu`;
    } else if (!textContainsOnlyAllowedSymbols(str, nameAllowedABC)) {
        errorMessage = `Varde rasta neleistina raide "${firstNonAllowedSymbol(str, nameAllowedABC)}"`;
    } else if (str[0].toUpperCase() !== str[0]) {
        errorMessage = `Vardas turi prasideti didziaja raide`;
    }

    return errorMessage;
}

export function isDate(str) {
    let errorMessage = '';

    return errorMessage;
}

export function isRate(str) {
    let errorMessage = '';

    return errorMessage;
}