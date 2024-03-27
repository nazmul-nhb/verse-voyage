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
        toast.success(`Successfully Added to ${toastKey}`, {autoClose: 3000});
    } else {
        toast.warn(`Book Already Exists in ${toastKey}`, {autoClose: 3000})
    }
}

const moveFromWishToReadList = (removableBook, removeFromKey = 'wish-list', addToKey = 'read-list') => {
    const storedBooks = getStoredItems(removeFromKey);
    const filteredBooks = storedBooks.filter(book => book.bookID !== removableBook.bookID);

    if (filteredBooks.length < storedBooks.length) {
        // Removing from Wishlist
        localStorage.setItem(removeFromKey, JSON.stringify(filteredBooks));
        // Adding to Read List
        const storedBooksToAdd = getStoredItems(addToKey);
        storedBooksToAdd.push(removableBook);
        localStorage.setItem(addToKey, JSON.stringify(storedBooksToAdd));

        toast.info(`Added to Read List from Wishlist`, { theme: "colored", autoClose: 3000 });
    }
}

export { getStoredItems, saveToLocal, moveFromWishToReadList }