import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const data = JSON.stringify([]);
  try {
    await fs.unlink(PATH_DB);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
};

await removeAllContacts();
