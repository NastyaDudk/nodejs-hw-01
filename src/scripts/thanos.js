import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let json = JSON.parse(data);
    const filteredJson = json.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(filteredJson, null, 2), 'utf8');
    console.log('Дані успішно оновлені:', filteredJson);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

await thanos();
