import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(1000, "Rent a Car"));
// store.dispatch(payLoan());

// console.log(store.getState());

// store.dispatch(createCustomer("John Smith", "1234567"));
// store.dispatch(updateName("Alex Zollo"));

// console.log(store.getState());
