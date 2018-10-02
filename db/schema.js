export const createTables = [
    `CREATE TABLE IF NOT EXISTS basic_information (
        id INTEGER PRIMARY KEY,
        year_of_birth INTEGER, 
        pregnancy_start_date TEXT, 
        first_name TEXT NOT NULL, 
        last_name TEXT NOT NULL, 
        thumbnail BLOB,
        country TEXT,
        patient_number TEXT,
        address TEXT,
        province TEXT,
        division TEXT,
        city TEXT,
        po_box TEXT,
        telephone NUMERIC,
        occupation TEXT,
        education TEXT,
        marital_status INTEGER
    );`,
    `CREATE TABLE IF NOT EXISTS connected_profile (
        id INTEGER PRIMARY KEY, 
        name TEXT NOT NULL, 
        year_of_birth INTEGER, 
        sex INTEGER, 
        gestation_at_birth NUMERIC, 
        birth_weight NUMERIC
    );`
];