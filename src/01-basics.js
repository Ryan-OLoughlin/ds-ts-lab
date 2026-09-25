"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colleagues = exports.friends = void 0;
const friend1 = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
};
const friend2 = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
};
//console.log(friends[1]);
//   -------------------
const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};
const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@company.com",
        extension: 132,
    },
};
const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@company.com",
        extension: 125,
    },
};
exports.friends = [friend1, friend2];
exports.colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};
//console.log(ColleagueHistory.current[0]);
