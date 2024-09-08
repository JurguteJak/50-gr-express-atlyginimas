/**
 * Funkcija, kuri patikrina, ar duotasis tekstas yra sudarytas tik is leistinu simboliu.
 * @param {string} str Analizuojamas tekstas.
 * @param {string} abc Leistinu simboliu abecele.
 * @returns {boolean}
 */
export function textContainsOnlyAllowedSymbols(str, abc) {
    return str.split('').map(s => abc.includes(s)).every(x => x === true);
}

/**
 * Duotame tekste, pagal pateikta **leistinu** simboliu abecele, randamas ir grazinamas _pirmasis_ neleistinas naudoti simbolis.
 * @param {string} str Analizuojamas tekstas.
 * @param {string} abc Leistinu simboliu abecele.
 * @returns {string} Panaudotas neleistinas simbolis (pirmasis kuri pavyko rasti) arba tuscias string'as, jei neleistinu naudoti simboliu nerasta.
 * @example
 * ```js
 * firstNonAllowedSymbol('labas', 'abc'); // 'l'
 * firstNonAllowedSymbol('labas', 'abcl'); // 's'
 * firstNonAllowedSymbol('labas', 'labas'); // ''
 * ```
 */
export function firstNonAllowedSymbol(str, abc) {
    return str.split('').filter(s => !abc.includes(s))[0] ?? '';
}

/**
 * Skaiciuoja, kiek nurodytame menesyje yra darbo dienu, neatsizvelgiant i galimas sventines dienas.
 * @param {number} year Metai
 * @param {number} month Menuo (zmoniu "kalba", o ne index 👀)
 * @returns {number} Darbo dienu skaicius.
 */
export function workingDaysCount(year, month) {
    let daysCount = 0;

    for (let i = 1; i <= 31; i++) {
        const m = month < 10 ? '0' + month : month;
        const d = i < 10 ? '0' + i : i;
        const dateStr = `${year}-${m}-${d}`;
        const obj = new Date(dateStr);

        if (month === (obj.getMonth() + 1) && obj.getDay() >= 1 && obj.getDay() <= 5) {
            daysCount++;
        }
    }

    return daysCount;
}