const count = document.getElementById('count');

updateVisitCount();

function updateVisitCount(){
  fetch('https://api.countapi.xyz/update/yeokshi.life/97764835-bccc-415d-98d1-b765061afde7/?amount=1')
    .then(res => res.json())
    .then(res => {
      count.innerHTML = res.value
  });
}