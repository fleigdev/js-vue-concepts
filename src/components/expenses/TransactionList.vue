<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      v-bind="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>$ {{ transaction.amount }}</span
      ><button class="delete-btn" @click="deleteTransaction(transaction.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['transactions'],
  emits: ['deleteById'],
  setup(props, { emit }) {
    const deleteTransaction = (id) => {
      console.log('transaction id', id);
      emit('deleteById', id);
    };
    return {
      deleteTransaction,
    };
  },
};
</script>
