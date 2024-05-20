<template>
  <div class="container">
    <h1>Expense Tracker</h1>
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList
      :transactions="transactions"
      @deleteById="handleTransactionDeleted"
    />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script>
import App from '../App.vue';
import Balance from '../components/expenses/Balance.vue';
import IncomeExpenses from '../components/expenses/IncomeExpenses.vue';
import TransactionList from '../components/expenses/TransactionList.vue';
import AddTransaction from '../components/expenses/AddTransaction.vue';
import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const transactions = ref([
      { id: 1, text: 'Flowers', amount: -19.99 },
      { id: 2, text: 'Electronics', amount: -120.99 },
      { id: 3, text: 'Software', amount: 109.84 },
    ]);
    const toast = useToast();

    // console.log(transactions.value);

    const total = computed(() => {
      return transactions.value.reduce((acc, transaction) => {
        return acc + transaction.amount;
      }, 0);
    });
    // console.log('total', total.value);
    const income = computed(() => {
      return transactions.value
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0);
    });
    console.log(income.value);
    const expenses = computed(() => {
      return transactions.value
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0);
    });

    const generateUniqueId = () => {
      return Math.floor(Math.random() * 100000);
    };

    const handleTransactionSubmitted = (transactionData) => {
      console.log('handling transaction', transactionData);
      transactions.value.push({
        id: generateUniqueId(),
        text: transactionData.text,
        amount: transactionData.amount,
      });
    };

    const handleTransactionDeleted = (id) => {
      console.log('handling transaction', id);
      transactions.value = transactions.value.filter(
        (transaction) => transaction.id !== id
      );
      toast.warning('transaction deleted');
    };

    return {
      transactions,
      total,
      income,
      expenses,
      handleTransactionSubmitted,
      handleTransactionDeleted,
    };
  },
  components: {
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction,
  },
};
</script>

<style scoped></style>
