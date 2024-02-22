const doctorGrid = document.querySelector(".doctor-grid");

// Replace with your actual doctor data
const doctorData = [
  {
    image: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg",
    name: "Dr. Najwa Joharji",
    specialty: "Pediatric Dental Consultant",
  },
  {
    image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://media.istockphoto.com/id/1446041217/photo/portrait-of-smiling-male-doctor-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=t1y5xibAPFIzOa1oN4tQ5RQKSiURBU2VxeJahOSw9wE=",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg",
    name: "Dr. Ibrahim Almajed",
    specialty: "Orthodontist",
  },
  

  // ... 23 more doctor objects
];

doctorData.forEach((doctor, index) => {
  const doctorCard = document.createElement("div");
  doctorCard.classList.add("doctor-card");
  // Generate a unique ID for each card using the index
  doctorCard.id = "doctor-card-" + (index + 1);

  const image = document.createElement("img");
  image.src = doctor.image;
  doctorCard.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = doctor.name;
  doctorCard.appendChild(name);

  const specialty = document.createElement("p");
  specialty.textContent = doctor.specialty;
  doctorCard.appendChild(specialty);

  doctorGrid.appendChild(doctorCard);
});

