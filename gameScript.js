//card query so that cards flip 'onclick'
const cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', () => {
    card.classList.toggle('is-flipped');
  });
});

//generates random card
const FirstCard = document.getElementById('1');
const SecondCard = document.getElementById('2');
const ThirdCard = document.getElementById('3');

function randomCard() {
   
      
      let rand = Math.floor(Math.random() * 3) + 1;
      switch(rand){
           
        case 1:
          FirstCard.innerHTML = '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">';
          break;
        case 2:
          SecondCard.innerHTML = '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">';    
          break;
        case 3:
          ThirdCard.innerHTML = '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">';
          break;
        }
      if(FirstCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
        SecondCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">';
        ThirdCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">'; 
      }
      else if(SecondCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
        FirstCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">';
        ThirdCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">'; 
      }
      else if(ThirdCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
        FirstCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">';
        SecondCard.innerHTML = '<img src="ImagesGame/yugi token.png" width="200" height="300">';
      }
      
      }
  //win and lose function
  let gameEnded = 0;
  function checkWin1(){
    if(gameEnded == 0){
    
    const endGame = document.getElementById('endGame');
    const rematch = document.getElementById('rematch');
    if(FirstCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
      endGame.innerHTML = "You Win!";
      rematch.style.display = "block";
    }
    else{
      endGame.innerHTML = "You Lose!";
      rematch.style.display = "block";
    }
    return gameEnded++;
  }
  }
  function checkWin2(){
    if(gameEnded == 0){
   
    const endGame = document.getElementById('endGame');
    const rematch = document.getElementById('rematch');
    if(SecondCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
      endGame.innerHTML = "You Win!";
      rematch.style.display = "block";
    }
    else{
      endGame.innerHTML = "You Lose!";
      rematch.style.display = "block";
    }
    return gameEnded++;
  }
  }
  function checkWin3(){
    if(gameEnded == 0){
    
    const endGame = document.getElementById('endGame');
    const rematch = document.getElementById('rematch');
    if(ThirdCard.innerHTML == '<img src="ImagesGame/chupacabra.jpg" width="200" height="300">'){
      endGame.innerHTML = "You Win!";
      rematch.style.display = "block";
    }
    else{
      endGame.innerHTML = "You Lose!";
      rematch.style.display = "block";
    }
    return gameEnded++;
  }
  }
 


  
      


