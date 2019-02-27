<template lang="html">
	<div id="booking-list">
		<div class="booking" v-for="booking in bookings">
			<h3>Customer name:{{ booking.name }}</h3>
		  <p>Customer email:{{ booking.email }}</p>
      <p>Checked in:{{ booking.checked_in }}</p>

			<button v-on:click="handleDelete(booking._id)">Delete Booking</button>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	name: "BookingList",
	props: ["bookings"],


methods: {
		handleDelete(id){
			fetch(`http://localhost:3000/api/bookings/${id}`, {
				method: "DELETE"
			})
			.then(() => eventBus.$emit('booking-deleted', id))
			}
		}
	}
</script>


<style lang="css" scoped>
#booking-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
