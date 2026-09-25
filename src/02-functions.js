"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_basics_1 = require("./01-basics");
function older(f) {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}
console.log(older(_01_basics_1.friends[0]));
// Find the colleague with the highest extension number.
function highestExtension(cs) {
    const result = cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension);
    return result[cs.length - 1];
}
console.log(highestExtension(_01_basics_1.colleagues.current));
function addColleague(cs, name, department, email) {
    const extension = (highestExtension(cs).contact.extension + 1);
    const newColleague = { name, department, contact: { email, extension } };
    cs.push(newColleague);
    return newColleague;
}
addColleague(_01_basics_1.colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(_01_basics_1.colleagues.current.filter((c) => c.name === "Sheild O Connell"));
function sortColleagues(colleagues, sorter) {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result;
}
console.log(sortColleagues(_01_basics_1.colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(_01_basics_1.colleagues.current, (a, b) => a.name.length - b.name.length));
function findFriends(friends, criterion) {
    return friends.filter(criterion).map(f => f.name);
}
console.log(findFriends(_01_basics_1.friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(_01_basics_1.friends, (friend) => friend.age < 35));
