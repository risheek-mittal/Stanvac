import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, name TEXT, description TEXT);',
        [],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });
};

export const fetchItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items',
        [],
        (_, {rows}) => {
          resolve(rows._array);
        },
        (_, err) => reject(err),
      );
    });
  });
};

export const insertItem = (name, description) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO items (name, description) VALUES (?, ?);',
        [name, description],
        (_, result) => resolve({id: result.insertId, name, description}),
        (_, err) => reject(err),
      );
    });
  });
};

export const updateItemInDB = (id, name, description) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE items SET name = ?, description = ? WHERE id = ?;',
        [name, description, id],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });
};

export const deleteItemFromDB = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM items WHERE id = ?;',
        [id],
        () => resolve(),
        (_, err) => reject(err),
      );
    });
  });
};
