# React Native Offline CRUD Application

This project is a simple mobile application developed using **React Native**, **Redux**, and **SQLite**. It demonstrates the implementation of:

- Offline data storage and retrieval using SQLite
- Global state management with Redux Toolkit
- Basic CRUD operations (Create, Read, Update, Delete)

## Features

- Works fully offline using a local SQLite database
- Global state management using Redux Toolkit
- Add and edit items through a form with validation
- Delete items with proper state and database updates
- List view displaying data from local storage

## Technologies Used

- React Native
- Redux Toolkit
- SQLite (via Expo SQLite or react-native-sqlite-storage)

## Project Structure

```
ReactNativeOfflineCRUD/
├── App.js
├── src/
│   ├── db/
│   │   └── db.js
│   ├── redux/
│   │   ├── itemsSlice.js
│   │   └── store.js
│   └── screens/
│       ├── HomeScreen.js
│       └── ItemFormScreen.js
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-native-offline-crud.git
cd react-native-offline-crud
```

### 2. Install dependencies

```bash
npm install
```

### 3. Required Packages

Ensure the following packages are installed:

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install @reduxjs/toolkit react-redux
npx expo install expo-sqlite
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

> If you are not using Expo, you may use `react-native-sqlite-storage` instead of `expo-sqlite`.

### 4. Start the development server

```bash
npx expo start
```

## How It Works

1. **HomeScreen**: Displays all items stored in SQLite and allows navigation to the Add/Edit screen.
2. **ItemFormScreen**: Used to add a new item or edit an existing one.
3. **Redux Toolkit**: Manages global state for consistent UI and logic flow.
4. **SQLite**: Handles all offline data persistence.

## Validation

- Both `name` and `description` fields are required when adding or editing an item.
- If validation fails, the form will display an appropriate error.

## Known Limitations

- This is a basic demonstration and does not include remote syncing functionality.
- No pagination or search implemented for the item list.

## License

This project is licensed for educational and demonstration purposes.

