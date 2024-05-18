import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let json = JSON.parse(data);
    let count = json.length;
    return count;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await countContacts());
