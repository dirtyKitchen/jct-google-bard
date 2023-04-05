const messages = [
  "Bard can draft a packing list for your weekend fishing and camping trip",
  "Bard can explain why lightning might strike the same place twice",
  "Bard can help you finish your art studio tagline: craft, create, and ...",
  "Bard can help you get started on writing your first novel",
  "Bard can outline your blog post about summer mocktail recipes",
  "Bard can explain why large language models might make mistakes",
];

const meet = [
  "Meet Bard: your creative and helpful collaborator, here to supercharge your imagination, boost your productivity, and bring your ideas to life.",
];

const country = ["Bard isn’t currently supported in your country. Stay tuned!"];


const msgEl = document.getElementById("message-element");
const meetEl = document.getElementById('meet-element');
const supportEl = document.getElementById('support-element');

//To Display the first Message By Default
msgEl.textContent = messages[0];

//To Reiterate from index 1 indefently
let index = 1;
setInterval(() => {
    msgEl.textContent = messages[index];
    index = (index + 1) % messages.length;
  }, 2000);


meetEl.textContent = meet
supportEl.textContent = country
