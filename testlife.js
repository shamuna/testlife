const category = [["shirt",['large','medium','small']],["top",['large','medium','small']],["pants",['large','medium','small']]]
 
 

window.onload=function(){

setTimeout(function(){
    const Popup=document.getElementById('popup')
   
   const ul = document.createElement('ul')
   Popup.appendChild(ul)
   let i=0
   while(i<category.length){
       const li=document.createElement('li')
       li.innerHTML=category[i][0]
       let j=0;
       while (j<category[i][1][j]){
           const ol = document.createElement('ol')
           const li=document.createElement('li')
           ol.appendChild(li)
           j++
       }
       ul.appendChild(li)
       i++
   }
  
   
   Popup.style.display="block"   
   const close=document.getElementById('close')
   close.addEventListener('click', () => {
    Popup.style.display = 'none';
})

},7000)}
