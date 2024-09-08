import { accountsData } from "../../../data/accountsData.js";
import { isName, isDate, isRate } from "../../../lib/validation.js";

export function accountPost(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null) {
        return res.json({
            status: 'error',
            message: 'Netinkamas duomenu tipas, turi buti objektas',
        });
    }

    const validation = {
        name: {
            func: isName,
            trans: 'vardas',
        },
        date: {
            func: isDate,
            trans: 'isidarbinimo data',

        },
        rate: {
            func: isRate,
            trans: 'valandinis atlyginimas',
        },
    };

    let sizeErrorMessage = '';

    const keys = Object.keys(validation);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        sizeErrorMessage += `${key} (${validation[key].trans})`;

        if (keys.length > 1) {
            if (i === keys.length - 2) {
                sizeErrorMessage += ' ir ';
            } else if (i < keys.length - 2) {
                sizeErrorMessage += ', ';
            }
        }
    }


    // sizeErrorMessage = [
    //     'name (vardas), 
    //     'date (isidarbinimo data), 
    //     'rate (valandinis atlyginimas)'
    // ];

    const requiredDataKeysCount = Object.keys(validation).length;
    if (Object.keys(req.body).length !== requiredDataKeysCount) {
        return res.json({
            status: 'error',
            message: 'Netinkama duomenu struktura, reikalinga: ' + sizeErrorMessage,
        });
    }

    for (const key in validation) {
        const value = req.body[key];
        const valueError = validation[key].func(value);
        if (valueError !== '') {
            return res.json({
                status: 'error',
                message: valueError,
            });
        }
    }

    accountsData.push({
        ...req.body,
        salary: '---',
    });

    return res.json({
        status: 'success',
        message: 'Paskyra sekmingai sukurta',
    });
}