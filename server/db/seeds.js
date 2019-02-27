use hotel_booking;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Janice Hunter",
    email: "janicehunter@waterfoot.com",
    checked_in: false
  },
  {
    name: "Susan Sinclair",
    email: "ssinclair@bt.co.uk",
    checked_in: true
  },
  {
    name: "John Smith",
    email: "john_smith@info.co.uk",
    checked_in: true
  },
  {
    name: "Ken Clark",
    email: "kgclark@whatever.co.uk",
    checked_in: false
  }

]);
