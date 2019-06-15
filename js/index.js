var cover = document.getElementsByClassName('cover')[0]
var modal = document.getElementsByClassName('modal')[0]
var arc = document.getElementsByTagName('article')[0]

data.map(function(m){
  var figure = document.createElement('figure');
  figure.classList.add(m.class)
  figure.innerHTML = `
    <div class="figureWrap">
    <img src="${m.img}" alt="">
    <figcaption>
      ${m.title}
      <span>- ${m.name}</span>
    </figcaption>
    </div>
  `
  arc.appendChild(figure)
  figure.onclick = function(e){
    cover.style.opacity = '0.8'
    cover.style.pointerEvents = 'auto';
    modal.style.pointerEvents = 'auto';
    modal.style.opacity = '1';
    modal.scrollTop = 0;
    modal.innerHTML = `

    <div class='imgwrap'>
      <img src='${m.gif}'/>
    </div>
    <div class='textwrap'>
      <h3>${m.title}</h3>
      <h4>${m.name}</h4>
      <p>
        ${m.description}
      </p>
    </div>
    <img class='exit' src='button.png'/>
    `
    var exit = document.getElementsByClassName('exit')[0]
    exit.onclick = function(e){
      cover.style.opacity = '0'
      cover.style.pointerEvents = 'none';
      modal.style.pointerEvents = 'none';
      modal.style.opacity = '0'
    }
  }
})
cover.onclick = function(e){
  cover.style.opacity = '0'
  cover.style.pointerEvents = 'none';
  modal.style.pointerEvents = 'none';
  modal.style.opacity = '0'
}

var amc = document.getElementsByClassName('am');
var pmc = document.getElementsByClassName('pm');
function buttonClick(){
  _all.onclick = function(e){
    for(var i=0;i<amc.length;i++){
      amc[i].style.display = 'inline-block';
    }
    for(var i=0;i<pmc.length;i++){
      pmc[i].style.display = 'inline-block'
    }
  }
  pm.onclick = function(e){
    for(var i=0;i<amc.length;i++){
      amc[i].style.display = 'none';
    }
    for(var i=0;i<pmc.length;i++){
      pmc[i].style.display = 'inline-block'
    }
  }
  am.onclick = function(e){
    for(var i=0;i<pmc.length;i++){
      pmc[i].style.display = 'none';
    }
    for(var i=0;i<amc.length;i++){
      amc[i].style.display = 'inline-block'
    }
  }
}
buttonClick();
