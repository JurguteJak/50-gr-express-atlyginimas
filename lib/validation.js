import { firstNonAllowedSymbol, textContainsOnlyAllowedSymbols } from "./helpers.js";

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