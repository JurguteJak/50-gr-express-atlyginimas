import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageViewAllAccounts() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Visos paskyros', ['main', 'header'])}
        <body>
            ${header('/accounts')}   

            <main>
                <h1>Visos paskyros</h1>
            </main>

            ${footer()}
        </body>
        </html>`;
}