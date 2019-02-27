<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="name"> Customer Name:</label>
    <input type="text" id="name" v-model="name"/>

    <label for="email">Customer email</label>
    <input type="text" id="email" v-model="email"/>



    <label for="checked_in">Checked In</label>
    <input type="checkbox" id="checked_in" v-model="checked_in">



    <input type="submit" value="Save" id="save"/>

  </form>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data(){
    return {
      name: '',
      email: '',
      checked_in: false
      }
    },

  methods: {
    addBooking(e){
      e.preventDefault()
      if(this.name === '') return;
      const booking = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
        }
      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}



</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
