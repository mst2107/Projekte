"use strict";

const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I am extremely impressed with the quality of the laptops from apple. The sleek design and top-notch performance exceeded my expectations. I highly recommend apple to anyone in need of a reliable and stylish laptop."
    },
    {
        name: "Peter Pan",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I am extremely impressed with apple's phone. The sleek design, advanced features, and user-friendly interface truly set it apart from the competition. I couldn't be happier with my purchase."
    },

    {
        name: "Samantha Miller",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I am beyond impressed with apple's innovative phone design. The sleek appearance and cutting-edge technology are unmatched. I highly recommend apple for anyone seeking a top-notch mobile experience."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0

function updateTestimonial () {
    const {name, photoUrl, text} = testimonials [idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx ++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 6000)
}

updateTestimonial();