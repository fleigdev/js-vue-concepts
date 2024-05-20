<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const text = ref('');
const amount = ref('');
const toast = useToast();
//const emit = defineEmits([transactionSubmitted]);

export default {
  emits: ['transactionSubmitted'],
  setup(props, { emit }) {
    const onSubmit = () => {
      console.log('submit', text.value, 'amount', amount.value);
      if (!text.value || !amount.value) {
        toast.error('both fields must be filled!');
        return;
      } else {
        const transactionData = {
          text: text.value,
          amount: amount.value,
        };
        console.log('transD', transactionData);
        emit('transactionSubmitted', transactionData);
        text.value = '';
        amount.value = '';
        toast.success('transaction added');
      }
    };

    return {
      onSubmit,
      text,
      amount,
    };
  },
};
</script>
