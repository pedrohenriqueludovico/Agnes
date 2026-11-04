const $=s=>document.querySelector(s);
function rain(list,n){n=n||40;for(let i=0;i<n;i++){const e=document.createElement('span');e.className='fx';e.textContent=list[i%list.length];e.style.left=Math.random()*95+'vw';e.style.animationDuration=(2+Math.random()*2)+'s';e.style.animationDelay=Math.random()*.6+'s';e.style.fontSize=(18+Math.random()*20)+'px';document.body.appendChild(e);setTimeout(()=>e.remove(),5000)}}

// botão que foge: depois de "max" tentativas, deixa clicar
function dodge(btn,max,onFree){
  let c=0;
  const run=e=>{
    if(c>=max)return;
    e.preventDefault();c++;
    const a=btn.parentElement.getBoundingClientRect(),b=btn.getBoundingClientRect();
    btn.style.position='absolute';
    btn.style.left=Math.random()*(a.width-b.width)+'px';
    btn.style.top=Math.random()*(a.height-b.height)+'px';
    if(c>=max){btn.dataset.free='1';if(onFree)onFree()}
  };
  btn.addEventListener('pointerenter',run);
  btn.addEventListener('pointerdown',run);
}

$('#abrir').onclick=()=>{rain(['💖','✨','🎉']);$('#card').scrollIntoView({behavior:'smooth',block:'center'})};

new IntersectionObserver((es,o)=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');o.unobserve(x.target)}}),{threshold:.4})
  .observe($('#card'));
const io=new IntersectionObserver((es,o)=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');o.unobserve(x.target)}}),{threshold:.5});
document.querySelectorAll('.l').forEach(l=>io.observe(l));

dodge($('#sim'),5,()=>{$('#m1').textContent='Tá bom, sua pilantra. Eu desisti mas nós sabemos que é mentira. '});
$('#sim').onclick=()=>{if($('#sim').dataset.free)$('#m1').textContent='CALÚNIA! Mas gostei dessa sua cara de pau ai.'};
$('#nao').onclick=()=>{$('#m1').textContent='no minimo tem que aceitar a verdade neh?'};

$('#barraco').onclick=()=>{rain(['🍿','🔥','🍿','😤']);$('#m2').textContent='Agora fudeo. resenha liberada! Calma anjo, Respira: hoje não precisa fechar essa mãozinha ai. '};


dodge($('#talvez'),8,()=>{$('#m3').textContent='Tá, vou dar esse gostinho pra vc. Mas ja conversamos sobre vc mentir pra si mesma kkkkkk '});
$('#talvez').onclick=()=>{if($('#talvez').dataset.free)$('#m3').textContent='"num sei"? Inacreditável. Que decepção. '};
$('#bora').onclick=()=>{rain(['🍦','💖','🎉']);$('#m3').textContent='Oh glória! vc sabe das coisas mesmo, por isso sou seu fã. Pô mas vê se não perde a hora né'};