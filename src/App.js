import './App.css';
import React from 'react';
import {Header} from './components/Header';
import {Balance}  from './components/Balance';
import {IncomeExpenses}  from './components/incomeExpenses';
import {AddTransaction}  from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import {GlobalProvider} from './context/GlobalState';

// Build an Expense Tracker | React Hooks & Context API
// https://github.com/bradtraversy/expense-tracker-react

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
      <Balance />
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
