const count = document.getElementById('count');

updateVisitCount();

function updateVisitCount(){
  fetch('https://api.countapi.xyz/update/yeokshi.life/8013bede-d013-4b0a-abfc-7dad2f143637/?amount=1')
    .then(res => res.json())
    .then(res => {
      count.innerHTML = res.value
  });
};

var quotes = [
  'When life is hard but you still show up',
  'Of course. Even when you\'re not sure.',
  'Everyone else might be acting weird but you\'re still in it',
  'Who else could be this awesome?',
  'As expected',
  'Sometimes, it really be like that.',
  'Would you like to hear a fact about pies?'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

newQuote();