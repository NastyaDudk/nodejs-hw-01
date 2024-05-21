import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        console.log('Вміст файлу:', data);
        return data; 
    } catch (err) {
        console.error('Помилка при читанні файлу:', err);
        throw err; 
    }
};

async function main() {
    try {
        const contacts = await getAllContacts();
        console.log(contacts);
    } catch (error) {
        console.error('Помилка у функції main:', error);
    }
}

main();
