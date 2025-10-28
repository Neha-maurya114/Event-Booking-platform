const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "2025-11-05",
    location: "Mumbai",
    price: 499,
    image: "https://cdn.pixabay.com/photo/2017/08/01/10/38/trap-2564431_1280.jpg",
    description: "Enjoy live music performances by top artists at the beach."
  },
  {
    id: 2,
    title: "Art & Craft Exhibition",
    date: "2025-11-20",
    location: "Delhi",
    price: 299,
    image: "https://plus.unsplash.com/premium_photo-1714060724900-4fceef462079?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwYW5kJTIwY3JhZnQlMjBleGliaXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    description: "Explore creative artworks and handmade crafts."
  },
  {
    id: 3,
    title: "Tech Conference 2025",
    date: "2025-12-01",
    location: "Bangalore",
    price: 999,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaCUyMGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    description: "A gathering for tech innovators and enthusiasts."
  },
{
  id: 4,
  title: "Food Carnival Night",
  date: "2025-11-15",
  location: "Chennai",
  price: 399,
  image: "https://media.istockphoto.com/id/2229534844/photo/cheerful-mother-and-son-eating-flavoured-ice-gola-dipped-in-syrup-in-fair-festival.webp?a=1&b=1&s=612x612&w=0&k=20&c=A_z8xztkhuyYE8Ge7ydJsfgVEOuK1Exf7GzfmWkk4f4=",
  description: "Savor delicious cuisines from around the world with live cooking stations."
},
{
  id: 5,
  title: "Stand-Up Comedy Night",
  date: "2025-12-05",
  location: "Pune",
  price: 350,
  image: "https://images.unsplash.com/photo-1647589047037-ba94e650388f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RhbmQlMjB1cCUyMGNvbWVkeSUyMG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  description: "Laugh out loud with performances by top stand-up comedians."
},
{
  id: 6,
  title: "Science and Innovation Fair",
  date: "2025-11-22",
  location: "Hyderabad",
  price: 150,
  image: "https://images.unsplash.com/photo-1738402431260-a5ec3c697073?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaWVuY2UlMjBhbmQlMjBpbm5vdmF0aW9uJTIwZmFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  description: "Exciting demos, hands-on experiments, and futuristic innovations."
},
{
  id: 7,
  title: "Yoga & Wellness Retreat",
  date: "2025-11-28",
  location: "Rishikesh",
  price: 800,
  image: "https://plus.unsplash.com/premium_photo-1713908832568-20ea0efe6221?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBhbmQlMjB3ZWxsbmVzcyUyMHJldHJlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  description: "A calming weekend of yoga sessions and wellness workshops."
},
{
  id: 8,
  title: "International Film Festival",
  date: "2025-12-18",
  location: "Jaipur",
  price: 600,
  image: "https://media.istockphoto.com/id/2173912022/photo/a-tv-reporter-interviews-the-senior-actress-during-the-live-red-carpet-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZ2FrJy1FAhpwsS_8NRIfBJE1kivyBLx_vkfc4uSPy0=",
  description: "Screenings of award-winning films and panel discussions with filmmakers."
},

];


const container = document.querySelector('.event-list');

function showEvents() {
  container.innerHTML = events
    .map(e => `
      <div class="card">
        <img src="${e.image}" alt="${e.title}">
        <div class="card-content">
          <h3>${e.title}</h3>
          <p>${e.date} | ${e.location}</p>
          <p>₹${e.price}</p>
          <button onclick="bookEvent(${e.id})">View Details</button>
        </div>
      </div>
    `)
    .join(''); 
}


showEvents();

function bookEvent(id) {
 
  const selectedEvent = events.find(e => e.id === id);

  localStorage.setItem('selectedEvent', JSON.stringify(selectedEvent));

 
  window.location.href = "event.html";
}

   