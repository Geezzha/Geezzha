// CRUD pada Array
let listMahasiswa = ["Budi", "Siti", "Agus"];

function createArrayElement(arr, element) {
    arr.push(element);
}

function readArray(arr) {
    return arr;
}

function updateArrayElement(arr, index, newElement) {
    if (index >= 0 && index < arr.length) {
        arr[index] = newElement;
    } else {
        console.log("Index tidak valid");
    }
}

function deleteArrayElement(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    } else {
        console.log("Index tidak valid");
    }
}

// Contoh penggunaan
createArrayElement(listMahasiswa, "Ani");
console.log(readArray(listMahasiswa)); // ["Budi", "Siti", "Agus", "Ani"]
updateArrayElement(listMahasiswa, 1, "Susi");
console.log(readArray(listMahasiswa)); // ["Budi", "Susi", "Agus", "Ani"]
deleteArrayElement(listMahasiswa, 2);
console.log(readArray(listMahasiswa)); // ["Budi", "Susi", "Ani"]

// CRUD pada Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);

function createSetElement(set, element) {
    set.add(element);
}

function readSet(set) {
    return Array.from(set); // Mengembalikan array dari elemen Set
}

function updateSetElement(set, oldElement, newElement) {
    if (set.has(oldElement)) {
        set.delete(oldElement);
        set.add(newElement);
    } else {
        console.log("Elemen tidak ditemukan");
    }
}

function deleteSetElement(set, element) {
    set.delete(element);
}

// Contoh penggunaan
createSetElement(setMahasiswa, "Ani");
console.log(readSet(setMahasiswa)); // ["Budi", "Siti", "Agus", "Ani"]
updateSetElement(setMahasiswa, "Agus", "Rina");
console.log(readSet(setMahasiswa)); // ["Budi", "Siti", "Rina", "Ani"]
deleteSetElement(setMahasiswa, "Siti");
console.log(readSet(setMahasiswa)); // ["Budi", "Rina", "Ani"]

// CRUD pada Map
let mapNilai = new Map([
    ["Budi", 90],
    ["Siti", 85]
]);

function createMapElement(map, key, value) {
    map.set(key, value);
}

function readMap(map) {
    return Array.from(map.entries()); // Mengembalikan array dari pasangan kunci-nilai
}

function updateMapElement(map, key, newValue) {
    if (map.has(key)) {
        map.set(key, newValue);
    } else {
        console.log("Kunci tidak ditemukan");
    }
}

function deleteMapElement(map, key) {
    map.delete(key);
}

// Contoh penggunaan
createMapElement(mapNilai, "Agus", 80);
console.log(readMap(mapNilai)); // [["Budi", 90], ["Siti", 85], ["Agus", 80]]
updateMapElement(mapNilai, "Siti", 88);
console.log(readMap(mapNilai)); // [["Budi", 90], ["Siti", 88], ["Agus", 80]]
deleteMapElement(mapNilai, "Budi");
console.log(readMap(mapNilai)); // [["Siti", 88], ["Agus", 80]]

// CRUD Generik
function createElement(collection, keyOrValue, value) {
    if (collection instanceof Array) {
        collection.push(keyOrValue);
    } else if (collection instanceof Set) {
        collection.add(keyOrValue);
    } else if (collection instanceof Map) {
        collection.set(keyOrValue, value);
    }
}

function readCollection(collection) {
    if (collection instanceof Array) {
        return collection;
    } else if (collection instanceof Set) {
        return Array.from(collection);
    } else if (collection instanceof Map) {
        return Array.from(collection.entries());
    }
}

function updateElement(collection, oldKeyOrValue, newKeyOrValue) {
    if (collection instanceof Array) {
        const index = collection.indexOf(oldKeyOrValue);
        if (index !== -1) collection[index] = newKeyOrValue;
    } else if (collection instanceof Set) {
        if (collection.has(oldKeyOrValue)) {
            collection.delete(oldKeyOrValue);
            collection.add(newKeyOrValue);
        }
    } else if (collection instanceof Map) {
        if (collection.has(oldKeyOrValue)) {
            collection.set(oldKeyOrValue, newKeyOrValue);
        }
    }
}

function deleteElement(collection, keyOrValue) {
    if (collection instanceof Array) {
        const index = collection.indexOf(keyOrValue);
        if (index !== -1) collection.splice(index, 1);
    } else if (collection instanceof Set) {
        collection.delete(keyOrValue);
    } else if (collection instanceof Map) {
        collection.delete(keyOrValue);
    }
}

// Contoh Penggunaan Generik
let arraySample = ["Budi", "Siti"];
let setSample = new Set(["Budi", "Siti"]);
let mapSample = new Map([["Budi", 90], ["Siti", 85]]);

createElement(arraySample, "Agus");
createElement(setSample, "Agus");
createElement(mapSample, "Agus", 80);
console.log(readCollection(arraySample)); // ["Budi", "Siti", "Agus"]
console.log(readCollection(setSample)); // ["Budi", "Siti", "Agus"]
console.log(readCollection(mapSample)); // [["Budi", 90], ["Siti", 85], ["Agus", 80]]
updateElement(arraySample, "Siti", "Rina");
updateElement(setSample, "Siti", "Rina");
updateElement(mapSample, "Siti", 88);
console.log(readCollection(arraySample)); // ["Budi", "Rina", "Agus"]
console.log(readCollection(setSample)); // ["Budi", "Rina", "Agus"]
console.log(readCollection(mapSample)); // [["Budi", 90], ["Siti", 88], ["Agus", 80]]
deleteElement(arraySample, "Budi");
deleteElement(setSample, "Budi");
deleteElement(mapSample, "Budi");
console.log(readCollection(arraySample)); // ["Rina", "Agus"]
console.log(readCollection(setSample)); // ["Rina", "Agus"]
console.log(readCollection(mapSample)); // [["Siti", 88], ["Agus", 80]]
