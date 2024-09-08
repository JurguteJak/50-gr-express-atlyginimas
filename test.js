const y = 2024;
const menuo = 8;
let dienos = 0;
let darboDienos = 0;

for (let i = 1; i <= 31; i++) {
    const m = menuo < 10 ? '0' + menuo : menuo;
    const d = i < 10 ? '0' + i : i;
    const dateStr = `${y}-${m}-${d}`;
    const obj = new Date(dateStr);

    if (menuo === (obj.getMonth() + 1)) {
        dienos++;

        if (obj.getDay() >= 1 && obj.getDay() <= 5) {
            darboDienos++;
        }
    }
}

console.log(menuo, 'turi dienu:', dienos);
console.log(menuo, 'turi darbo dienu:', darboDienos);