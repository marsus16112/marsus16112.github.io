let funFact = document.getElementById('funfact');
let factArray = [
  'Better than my old webpage!',
  'Dark mode, all the time!',
  'Too many random things here!',
  'This text is randomized!',
  'We ask "When is 2.2?", but never "How is 2.2?" :(',
  'missingno',
  'Help!%20I\'m%20stuck in this textbar!',
  'bob needs a bundle of bugs',
  'AAAAAAAAAAAAAAAA',
  'Never gonna give you up.',
  'I don\'t like colors!'
];
funFact.innerHTML = factArray[Math.floor(Math.random() * factArray.length)];
