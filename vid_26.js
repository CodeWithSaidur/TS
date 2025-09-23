"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(Acc) {
    if ('role' in Acc) { // chech is role in Acc
        return {
            Name: Acc.name,
            Email: Acc.email,
            Role: Acc.role,
            Dasignation: 'Admin'
        };
    }
    else {
        return {
            Name: Acc.name,
            Email: Acc.email,
            Dasignation: 'User'
        };
    }
}
console.log(isAdmin({
    name: 'Sabed',
    email: 'Sabed@gmail.com'
}));
