<template>
  <div id="app">
    <BookingForm/>
    <BookingList :bookings = "bookings"/>
  </div>

</template>

<script>
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingForm,
    BookingList
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added',(booking) => this.bookings.push(booking));
    eventBus.$on('booking-deleted',(id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1);
    })

	},
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
        .then(res => res.json())
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: url('./assets/hotel.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
