import { SQLite, FileSystem } from 'expo';
import { createTables } from 'db/schema.js';

const DATABASE_NAME = 'mhh.db';

const database = SQLite.openDatabase(DATABASE_NAME);

export async function initializeDatabase() {
    database.transaction(tx => {
        createTables.map(script => tx.executeSql(script));
    }, (error) => console.log('Cannot initialise database ', error),
    () => console.log('Database initialised'));
}