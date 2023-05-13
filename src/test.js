const state = { account: [{ point: 1, amount: 200 }] };
const newstate = { account: [{ point: 1, amount: 200 }] };

console.log("state", state);
console.log("newstate", newstate);

state.account.amount = 400;

console.log(state, newstate);
