let heads=0;
let tails =0;
let coin =document.getElementById('coin')
let flipcoin = document.getElementById('flip-coin')
let resetcoin = document.getElementById('reset-coin')

flipcoin.addEventListener("click" ,()=>{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation="none";
    if (i){
        setTimeout(function(){
            coin.style.animation='spin-head 3s forwardS';
        }, 100)
        heads++;
    }
    else {
        setTimeout(function(){
            coin.style.animation='spin-tail 3s forwardS';
        }, 100)
        tails++;
    }
    setTimeout(updateStats , 3000);
    disablebButton();
});
function updateStats(){
    document.getElementById('heads-count').textContent=`ملك :${heads}`
    document.getElementById('tails-count').textContent=`كتابة :${tails}`
};
function disablebButton(){
    flipcoin.disabled=true;
    setTimeout(function(){
        flipcoin.disabled=false;
    },3000);
}


resetcoin.addEventListener('click',()=>{
    coin.style.animation="none";
    heads=0;
    tails=0;
    updateStats()
})