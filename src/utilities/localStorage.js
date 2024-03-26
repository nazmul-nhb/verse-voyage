import { toast } from "react-toastify";

const getStoredItems = (itemKey) => {
    const storedItemsString = localStorage.getItem(itemKey);
    if (storedItemsString) {
        return JSON.parse(storedItemsString);
    }
    return [];
}

const saveToLocal = (item, itemKey, toastKey) => {
    const storedBooks = getStoredItems(itemKey);
    // prevent duplicate items from being added to local storage
    const filteredBooks = storedBooks.find(book => book.bookID === item.bookID);
    if (!filteredBooks) {
        storedBooks.push(item);
        localStorage.setItem(itemKey, JSON.stringify(storedBooks));
        toast.success(`Successfully Added to ${toastKey}`);
    } else {
        toast.warn(`Book Already Exists in ${toastKey}`)
    }
}
/* 
const removeFromLocal = (removableItem, itemKey) => {
    const storedBooks = getStoredItems(itemKey);
    const filteredBooks = storedBooks.find(book => book.bookID !== removableItem.bookID);
    // if(filteredBooks) {
    //     localStorage.setItem(itemKey, JSON.stringify(filteredBooks));
    // }
    saveToLocal(filteredBooks, itemKey );
} */

export { getStoredItems, saveToLocal }