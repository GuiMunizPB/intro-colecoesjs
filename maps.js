function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Guilherme', 'Admin');
usuarios.set('Barzilay', 'Admin');
usuarios.set('Herick', 'User');
usuarios.set('Heitor', 'Admin');

console.log(getAdmins(usuarios));