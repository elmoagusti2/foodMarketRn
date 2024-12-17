import { MMKV } from "react-native-mmkv";


export const storage = new MMKV({
    id: 'foodmarket_rn',
    encryptionKey: 'keys'
})

export const saveString = (key, value) => {
    storage.set(key, value);
}

export const getString = (key) => {
    return storage.getString(key);
}

export const deleteString = (key) => {
    storage.delete(key);
}

export const saveArray = (key, item) => {
    if (!Array.isArray(item))
        throw new Error("item must be array");
    storage.set(key, JSON.stringify(item));
}

export const getArray = (key) => {
    const data = storage.getString(key);
    return data ? JSON.parse(data) : [];
}

export const addItemToArray = (key, item) => {
    const array = getArray(key);
    array.push(item);
    saveArray(key, array);
}

export const updateItemInArray = (key, id, updatedItem) => {
    let array = getArray(key);
    array = array.map((item) => (item.id === id ? { ...item, ...updatedItem } : item));
    saveArray(key, array);
}

export const deleteItemFromArray = (key, id) => {
    const array = getArray(key);
    const filteredArray = array.filter((item) => item.id !== id);
    saveArray(key, filteredArray);
}

export const addOrUpdateItemInArray = (key, item) => {
    const array = getArray(key);
    // Check if item exists in the array
    const existingIndex = array.findIndex((data) => data.id === item.id);
    if (existingIndex !== -1) {
        // Item exists, update quantity
        array[existingIndex] = {
            ...array[existingIndex],
            qty: (array[existingIndex].qty || 0) + (item.qty || 1), // Increment quantity
            total_price: (array[existingIndex].total_price || 0) + (item.total_price || 1) // Increment quantity
        };
    } else {
        // Item does not exist, add new item
        array.push({ ...item, qty: item.qty || 1, total_price: item.total_price || 1 }); // Default qty to 1 if not provided
    }
    console.log(array);
    saveArray(key, array);
};

// --USAGE--
// const arrayKey = 'items';

// **Save an array of objects
// saveArray(arrayKey, [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
// ]);

// **Retrieve the array
// const items = getArray(arrayKey);
// console.log('Retrieved Items:', items);

// **Add an item to the array
// addItemToArray(arrayKey, { id: 3, name: 'Item 3' });
// console.log('Items After Adding:', getArray(arrayKey));

// **Update an item in the array
// updateItemInArray(arrayKey, 2, { name: 'Updated Item 2' });
// console.log('Items After Updating:', getArray(arrayKey));

// **Delete an item from the array
// deleteItemFromArray(arrayKey, 1);
// console.log('Items After Deleting:', getArray(arrayKey));
// // Add or update the item in storage
// const item = { id: 1, name: "Apple", qty: 2 };
// addOrUpdateItemInArray('cart_items', item);