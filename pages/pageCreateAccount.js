import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageCreateAccount() {
    const date = new Date();
    const y = date.getFullYear();
    const m = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const d = (date.getDate() < 10 ? '0' : '') + date.getDate();

    const maxDate = `${y}-${m}-${d}`;

    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('', ['main', 'header', 'button', 'form'])}
        <body>
            ${header()}

            <main>
            <form class="form" action="" method="">
                <div class="form-row">
                    <label for="name">Vardas</label>
                    <input id="name" type="text" />
                </div>
                <div class="form-row">
                    <label for="name">Isidarbinimo data</label>
                    <input id="date" type="date" min="2020-01-01" max="${maxDate}" value="${maxDate}" />
                </div>
                <div class="form-row">
                    <label for="money">Valandinis</label>
                    <input id="name" type="number" min="0" max="9999" value="5" step="0.01" />
                </div>
                <div class="form-row">
                    <button type="submit">Registruoti</button>
                </div>
  
            </form>

            </main>

            ${footer()}
        </body>
        </html>`;
}