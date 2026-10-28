(()=>{
'use strict';
/* ============ helpers ============ */
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=p=>(p||'i')+Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-4);
const ic=(n,c)=>`<svg class="ic ${c||''}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const now=()=>Date.now();
const hhmm=t=>new Date(t).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
const ago=t=>{const s=(now()-t)/1000;if(s<60)return'just now';if(s<3600)return Math.floor(s/60)+' min';if(s<86400)return Math.floor(s/3600)+' hr';return Math.floor(s/86400)+' day'};
const money=n=>Number(n||0).toLocaleString('en-US');
const COLORS=['#84cc16','#e8a84c','#5eb8a1','#e0806a','#8fa8e0','#c58ad9','#d6c85a'];
const colorOf=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))>>>0;return COLORS[h%COLORS.length]};
const initials=n=>String(n).replace(/\(.*?\)/g,'').trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase()||'?';
const av=(name,cls,color)=>`<span class="av ${cls||''}" style="--c:${color||colorOf(name)}">${esc(initials(name))}</span>`;
const safeSrc=s=>typeof s==='string'&&/^(data:image\/|data:audio\/|data:video\/|blob:)/.test(s)?s:'';
let toastT;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.remove('hidden');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.add('hidden'),2800)}
function sheet(title,html){closeSheet();const el=document.createElement('div');el.className='scrim';el.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><h3><span>${esc(title)}</span><button class="icon-btn" data-act="closeSheet" aria-label="Close">${ic('x')}</button></h3>${html}</div>`;el.addEventListener('mousedown',e=>{if(e.target===el)closeSheet()});$('#layer').appendChild(el);const f=el.querySelector('input:not([type=checkbox]),textarea,select');if(f&&matchMedia('(hover:hover)').matches)f.focus();return el}
function closeSheet(){$('#layer').innerHTML=''}
async function copyText(t){try{await navigator.clipboard.writeText(t);return true}catch(e){try{const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();const ok=document.execCommand('copy');a.remove();return ok}catch(e2){return false}}}
function imgToData(file,max=900,q=.72){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,max/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*k));c.height=Math.max(1,Math.round(im.height*k));const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};im.onerror=rej;im.src=r.result};r.onerror=rej;r.readAsDataURL(file)})}
function pickFile(accept,capture){return new Promise(res=>{const i=document.createElement('input');i.type='file';i.accept=accept||'';if(capture)i.setAttribute('capture',capture);i.onchange=()=>res(i.files&&i.files[0]||null);i.addEventListener('cancel',()=>res(null));i.click()})}
async function sha(txt){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(txt));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=5381;for(const c of txt)h=((h<<5)+h+c.charCodeAt(0))>>>0;return 'x'+h.toString(16)}}
function md(src){
  const inline=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/(^|[\s(])_(.+?)_(?=[\s).,;:!?]|$)/g,'$1<i>$2</i>');
  let out='',list=null;const close=()=>{if(list){out+=`</${list}>`;list=null}};
  for(const raw of String(src).replace(/\r/g,'').split('\n')){
    const l=raw.trimEnd();let m;
    if(!l.trim()){close();continue}
    if(m=l.match(/^#{1,4}\s+(.*)/)){close();out+=`<h4>${inline(m[1])}</h4>`;continue}
    if(m=l.match(/^\s*[-*•]\s+(.*)/)){if(list!=='ul'){close();out+='<ul>';list='ul'}out+=`<li>${inline(m[1])}</li>`;continue}
    if(m=l.match(/^\s*\d+[.)]\s+(.*)/)){if(list!=='ol'){close();out+='<ol>';list='ol'}out+=`<li>${inline(m[1])}</li>`;continue}
    close();
    if(m=l.match(/^\*\*([^*]+)\*\*:?$/)){out+=`<h4>${inline(m[1])}</h4>`;continue}
    out+=`<p>${inline(l)}</p>`;
  }
  close();return out;
}

/* ============ content ============ */
const SEC={
  kilimo:{title:'Grow Together',sub:'Farming',learn:'Learn Farming',mine:'My Farm',ai:'kilimo',my:'shamba',
    topics:['How to grow maize','How to grow rice','How to grow potatoes','How to grow tomatoes','How to grow beans','How to grow sunflower'],
    prompt:'Teach me about:',sugs:['Which fertilizer is best for maize?','How can I identify tomato diseases?','When is the best season to plant beans?','How can I store harvests without spoilage?'],
    kw:['zao','kilimo','shamba','mbegu']},
  ufugaji:{title:'Raise Together',sub:'Livestock',learn:'Learn Livestock',mine:'My Barn',ai:'ufugaji',my:'banda',
    topics:['How to raise chickens','Jinsi ya kufuga ng\'ombe wa maziwa','How to raise pigs','How to raise goats','How to raise fish','How to raise sheep'],
    sugs:['What is the vaccination schedule for chickens?','Nawezaje kuongeza maziwa ya ng\'ombe?','How should I build a good pig shelter?','My goat is sick, what should I do?']}
};
const GUIDES=[
{kw:['mahindi','maize','corn'],title:'How to grow maize',body:`**Farm preparation**
- Lima mapema kabla ya mvua na ondoa magugu. Chagua eneo lisilotuamisha maji.
- Ukiweza, pima udongo; mahindi hupenda udongo wenye rutuba na pH takriban 5.5–7.
**Planting**
- Tumia mbegu bora zinazofaa eneo lako (uliza duka la pembejeo au afisa ugani).
- Panda mvua zikishaanza kunyesha vizuri. Standard spacing: sm 75 kati ya mistari na sm 25–30 kati ya mashimo, mbegu 1 kwa shimo.
**Fertilizer**
- Wakati wa kupanda: DAP au NPK (takriban kg 50 kwa ekari, kulingana na ushauri wa eneo lako).
- Kukuzia wiki 4–6 baada ya kuota: Urea au CAN (takriban kg 50 kwa ekari).
**Care**
- Palilia mara 2: wiki 2–3 na wiki 5–6 baada ya kupanda.
- Kagua viwavijeshi (fall armyworm) kila wiki mahindi yakiwa machanga; tumia dawa iliyosajiliwa kwa kufuata lebo.
**Harvest and storage**
- Vuna magunzi yakikauka; kausha hadi unyevu ufikie takriban 13% kabla ya kuhifadhi.
- Hifadhi kwenye magunia safi au vihifadhio visivyoingiza hewa mahali pakavu ili kuzuia wadudu na ukungu (aflatoksini).`},
{kw:['mpunga','mchele','rice'],title:'How to grow rice',body:`**Preparation**
- Chagua shamba linaloweza kushika maji. Lima na sawazisha ardhi ili maji yasambae sawasawa.
**Planting**
- Njia mbili: kusia moja kwa moja au kuotesha kitalu kisha kupandikiza miche wiki 3–4. Kupandikiza kwa mistari (takriban sm 20 × 20) huongeza mavuno na kurahisisha palizi.
**Water and fertilizer**
- Weka maji kina kifupi (takriban sm 5) wakati mpunga unakua; ondoa maji karibu na kuvuna.
- Weka mbolea ya kupandia na ya kukuzia kulingana na ushauri wa eneo lako.
**Care**
- Palilia mapema; magugu ni tatizo kubwa. Kagua ugonjwa wa kuungua majani (blast) na ndege waharibifu.
**Harvest**
- Vuna punje zikiwa zimeiva kwa wingi (takriban 80–85% ya rangi ya majani ya kukomaa), kausha vizuri kabla ya kuhifadhi.`},
{kw:['viazi','potato'],title:'How to grow potatoes',body:`**Seed**
- Tumia mbegu safi zilizothibitishwa, si viazi vya sokoni; hupunguza magonjwa.
**Planting**
- Panda kwenye udongo uliolegea na unaopitisha maji; kina takriban sm 10, nafasi karibu sm 75 × 30.
- Panda mwanzoni mwa msimu wa mvua.
**Care**
- Palilia na pandisha udongo kwenye shina (kutifulia) ili viazi visifiche jua na kubadilika rangi kuwa kijani.
- Kagua ukungu wa viazi (late blight), hasa kukiwa na unyevu mwingi; tumia dawa zilizosajiliwa kwa kufuata lebo.
**Crop rotation**
- Usipande viazi mahali pamoja mfululizo; badilisha na mahindi au maharage.
**Harvest**
- Kwa kawaida miezi 3–4; vuna majani yakikauka. Hifadhi mahali pa giza penye hewa.`},
{kw:['nyanya','tomato'],title:'How to grow tomatoes',body:`**Nursery and transplanting**
- Oteshea mbegu kwenye kitalu; pandikiza miche wiki 3–4 ikiwa na nguvu.
**Nafasi na matandazo**
- Standard spacing takriban sm 60–75 kati ya mistari na sm 40–50 kati ya miche. Tandaza majani makavu kupunguza magugu na kuhifadhi unyevu.
**Water and fertilizer**
- Mwagilia mara kwa mara kwa kiasi; unyevu usio sawa husababisha matunda kupasuka. Weka mbolea ya kupandia na ya kukuzia kulingana na ushauri.
**Kuchipua na kufunga**
- Tumia miti kusaidia mimea, ondoa vichipukizi visivyohitajika kwa aina zinazopanda.
**Magonjwa na wadudu**
- Ukungu wa nyanya (late blight), mnyauko bakteria, na Tuta absoluta ni changamoto kubwa. Zuia kwa kubadilisha mazao, usafi wa shamba, na kukagua kila wiki.`},
{kw:['maharage','beans','bean'],title:'How to grow beans',body:`**Planting**
- Panda mbegu bora kwenye udongo wenye maji yasiyotuama; kina kifupi (sm 3–5), nafasi takriban sm 50 × 10–20 kulingana na aina.
**Care**
- Palilia mapema (wiki 2 na 4). Maharage hutengeneza naitrojeni mwenyewe, hivyo hayahitaji urea; mbolea ya fosforasi husaidia.
**Wadudu na magonjwa**
- Kagua vidukari, kutu ya majani na mnyauko. Badilisha mazao kila msimu.
**Harvest**
- Vuna maganda yakikauka, kausha vizuri, na hifadhi kwenye vyombo visivyoingiza hewa ili kuzuia kunguni wa maharage (bruchids).`},
{kw:['alizeti','sunflower'],title:'How to grow sunflower',body:`**Planting**
- Panda mbegu bora mwanzoni mwa mvua; nafasi ya kawaida takriban sm 75 kati ya mistari na sm 30 kati ya mimea.
**Care**
- Palilia mapema; alizeti hupenda jua kali na udongo unaopitisha maji.
**Harvest**
- Vuna vichwa vinapogeuka rangi ya kahawia nyuma; kausha vizuri kabla ya kukoboa na kuuza au kukamua mafuta.`},
{kw:['kuku','chicken','kienyeji','broiler','layer'],title:'How to raise chickens',body:`**Aina**
- Kuku wa kienyeji (wanakua polepole, wanastahimili), chotara, wa nyama (broilers), na wa mayai (layers). Chagua kulingana na soko lako.
**Banda**
- Banda kavu, lenye hewa nzuri na salama dhidi ya wanyama waharibifu. Standard spacing takriban kuku 4–5 kwa mita ya mraba kwa wa mayai; wa nyama wanaweza kuwa wengi zaidi kwa muda mfupi.
**Vifaranga**
- Wiki ya kwanza wanahitaji joto takriban 32–35°C, maji safi na chakula cha vifaranga kila wakati.
**Feed and water**
- Tumia chakula kinachofaa umri (vifaranga, wakuaji, wa mayai). Maji safi kila siku.
**Afya na chanjo**
- Chanjo za kawaida ni Newcastle (kideri), Gumboro na Marek; ratiba hutofautiana. Thibitisha na daktari wa mifugo au afisa mifugo wa eneo lako.
- Tenga kuku wagonjwa mara moja na weka banda safi.`},
{kw:['ng\'ombe','ngombe','maziwa','dairy','cow','cattle'],title:'Jinsi ya kufuga ng\'ombe wa maziwa',body:`**Banda na usafi**
- Banda lenye sakafu isiyoteleza, kivuli, na mfumo wa kuondoa mavi na mkojo. Osha mikono na kiwele kabla ya kukamua.
**Maji na lishe**
- Ng'ombe wa maziwa huhitaji maji mengi na safi kila siku (mara nyingi lita 50 au zaidi). Mpe malisho bora (mfano nyasi za Napier), mabaki ya mazao, chakula cha ziada na madini.
**Kukamua**
- Kamua kwa ratiba ile ile kila siku; usafi mzuri hupunguza ugonjwa wa kiwele (mastitis).
**Afya**
- Dhibiti kupe (kuoga au dawa ya kupaka) kwa sababu husambaza magonjwa kama ndigana kali (ECF). Fuata ratiba ya chanjo na dawa za minyoo kwa ushauri wa daktari wa mifugo.
**Kumbukumbu**
- Andika tarehe za kupandisha, kuzaa na kiasi cha maziwa ili kujua ng'ombe bora.`},
{kw:['nguruwe','pig','pigs'],title:'How to raise pigs',body:`**Banda**
- Banda safi, lenye kivuli na sakafu inayosafishika kwa urahisi. Tenga nguruwe kwa umri na hali (wanaonyonyesha, wanaokua).
**Lishe na maji**
- Chakula kinachofaa umri na maji safi kila wakati.
**Afya na usalama wa viumbe**
- Homa ya nguruwe ya Afrika (ASF) haina chanjo; kinga ni usalama wa viumbe: funga banda, zuia wageni na mifugo mingine, tumia dawa ya kusafisha viatu, na nunua nguruwe kutoka vyanzo vinavyoaminika. Ukiona vifo vya ghafla toa taarifa kwa afisa mifugo mara moja.
**Uzazi**
- Tunza kumbukumbu za kupandisha na kuzaa. Nguruwe jike anaweza kuzaa watoto wengi kwa mara moja; watoto wanahitaji joto na maziwa ya kutosha mapema.`},
{kw:['mbuzi','goat'],title:'How to raise goats',body:`**Banda**
- Banda lililoinuka kidogo kutoka ardhini, kavu na lenye hewa; mbuzi hawapendi unyevu.
**Lishe**
- Malisho mchanganyiko, majani ya miti, na madini. Maji safi kila siku.
**Afya**
- Dhibiti minyoo na kupe kwa ratiba ya daktari wa mifugo. Kagua kwato na macho mara kwa mara.
**Uzazi**
- Chagua dume bora, tunza kumbukumbu za kupandisha na kuzaa, na epuka kupandisha ndugu wa karibu.`}
];
function localGuide(q){const s=String(q).toLowerCase();const g=GUIDES.find(g=>g.kw.some(k=>s.includes(k)));return g?`**${g.title}**\n\n${g.body}\n\n_This is the basic guide built into the app. Kwa ushauri wa kina uliza afisa ugani au daktari wa mifugo._`:null}

const RETIRED_SEED_USERS=new Set(['s1','s2','s3','s4']);
const RETIRED_DEMO_CONTACTS=new Set(['x1','x2','x3','x4']);
const EXPERTS=[
 {id:'vet',name:'Daktari wa Mifugo',role:'Afya ya mifugo na chanjo',kind:'ufugaji',phone:'+255749763095',displayPhone:'+255 749 763 095'},
 {id:'extension',name:'Bwana Shamba',role:'Ushauri wa kilimo na mazao',kind:'kilimo',phone:'+255796236053',displayPhone:'+255 796 236 053'}
];
const SEED_CONTACTS=[
 {id:'ai',name:'MIMI Assistant',role:'Msaidizi wa AI wa kilimo na ufugaji',ai:true,online:true}
];
const SEED_CHANNELS=[
 {id:'ch1',name:'Vidokezo vya Farming',desc:'Mbinu fupi za kila siku kwa wakulima.',posts:[{id:'a1',text:'Andaa shamba mapema kabla ya mvua ili upande mvua za kwanza.',ago:86400e3},{id:'a2',text:'Tumia mbegu bora na uliza afisa ugani aina inayofaa eneo lako.',ago:2*86400e3}]},
 {id:'ch2',name:'Vidokezo vya Livestock',desc:'Afya, lishe na usimamizi wa banda.',posts:[{id:'b1',text:'Safisha maji ya mifugo kila siku; maji machafu huleta magonjwa.',ago:86400e3}]}
];
const SEED_COMM=[
 {id:'cm1',name:'Wakulima wa Mahindi',desc:'Kubadilishana mbinu za mahindi.'},
 {id:'cm2',name:'Wafugaji wa Kuku',desc:'Kuku wa kienyeji, chotara na wa nyama.'},
 {id:'cm3',name:'Wakulima wa Mboga',desc:'Nyanya, vitunguu, kabichi na mboga za majani.'},
 {id:'cm4',name:'Wafugaji wa Ng\'ombe wa Maziwa',desc:'Malisho, afya na masoko ya maziwa.'}
];

/* ============ store ============ */
const KEY='mimi_ni_mkulima_v1';
function seedDB(){return{v:1,session:null,users:{},guest:{ai:{},history:[]},
  settings:{dark:true,font:'sans',size:100,chatTheme:'system',shareInfo:true,allowProfile:true,secure:false,autoDelBlocked:true,location:false,perm:{file:true,camera:true,mic:true}},
  posts:[]}}
function loadDB(){try{const r=localStorage.getItem(KEY);if(r){const d=JSON.parse(r);if(d&&d.v===1){
  d.posts=(d.posts||[]).filter(p=>!p.seed&&!RETIRED_SEED_USERS.has(p.by));
  Object.values(d.users).forEach(u=>{
    u.contacts=(u.contacts||[]).filter(c=>!c.demo&&!RETIRED_DEMO_CONTACTS.has(c.id));
    u.statuses=(u.statuses||[]).filter(s=>!RETIRED_DEMO_CONTACTS.has(s.by));
    u.following=(u.following||[]).filter(id=>!RETIRED_SEED_USERS.has(id));
    u.reposts=(u.reposts||[]).filter(id=>d.posts.some(p=>p.id===id));
    for(const id of RETIRED_DEMO_CONTACTS)delete (u.chats||{})[id];
    Object.values(u.chats||{}).forEach(c=>(c.msgs||[]).forEach(m=>{if(typeof m.src==='string'&&m.src.startsWith('blob:')){m.src=null;m.dead=true}}));
  });
  d.settings=Object.assign(seedDB().settings,d.settings);localStorage.setItem(KEY,JSON.stringify(d));return d}}}catch(e){}return seedDB()}
let DB=loadDB(),saveT;
function save(){clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){toast('Hifadhi ya kifaa imejaa. Futa baadhi ya picha au machapisho.')}},200)}
const curUser=()=>DB.users[DB.session]||null;
const fv=(f,n)=>{const e=f.elements.namedItem(n);return e?e.value:''};
const PRIV=()=>curUser()?curUser().priv:DB.settings;
const P=()=>curUser()||DB.guest;
const ST=()=>DB.settings;
function newUserData(u){
  Object.assign(u,{priv:{shareInfo:true,allowProfile:true,secure:false,autoDelBlocked:true,location:false},following:[],liked:[],saved:[],reposts:[],listings:[],ai:{},history:[],farm:{},calls:[],blocked:[],chats:{},
    contacts:SEED_CONTACTS.map(c=>({...c,fav:false,blocked:false})),
    channels:SEED_CHANNELS.map(c=>({id:c.id,name:c.name,desc:c.desc,followed:false,mine:false,posts:c.posts.map(p=>({id:p.id,text:p.text,ts:now()-p.ago}))})),
    communities:SEED_COMM.map(c=>({...c,joined:false})),
    statuses:[]});
  u.chats.ai={id:'ai',type:'dm',name:'MIMI Assistant',unread:0,msgs:[{id:uid('m'),from:'ai',kind:'text',text:'Karibu! Mimi ni MIMI Assistant. Niulize chochote kuhusu kilimo au ufugaji.',ts:now()}]};
}

/* ============ AI ============ */
const BASE_SYS=`Wewe ni "MIMI NI MSADIZI", msaidizi wa kilimo na ufugaji ndani ya app ya MIMI NI MKULIMA kwa wakulima na wafugaji wa Tanzania.
Jibu kwa Kiswahili sahihi na rahisi isipokuwa mtumiaji akiandika Kiingereza. Toa hatua za vitendo, vipimo vinavyofaa (ekari, kilo, lita, TZS inapofaa) na tahadhari.
Kwa dawa, viuatilifu na chanjo: taja kanuni za jumla, mwambie asome lebo na amwone afisa ugani au daktari wa mifugo kwa uthibitisho, hasa dalili kali au wanyama wengi kuugua.
Ukiwa huna uhakika sema wazi. Usibuni takwimu wala bei za soko za sasa. Majibu yawe mafupi hadi ya wastani; tumia orodha fupi inapofaa.`;
function farmOf(k){const u=curUser();if(!u)return{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]};return u.farm[k]=u.farm[k]||{name:'',size:'',items:'',place:'',notes:'',tasks:[],ledger:[]}}
function farmContext(k){const f=farmOf(k),p=[];if(f.name)p.push('Name: '+f.name);if(f.size)p.push((k==='kilimo'?'Ukubwa (ekari): ':'Idadi/ukubwa: ')+f.size);if(f.items)p.push((k==='kilimo'?'Mazao: ':'Mifugo: ')+f.items);if(f.place)p.push('Area: '+f.place);if(f.notes)p.push('Overview: '+f.notes);const o=f.tasks.filter(t=>!t.done).slice(0,8).map(t=>t.text);if(o.length)p.push('Remaining tasks: '+o.join('; '));return p.length?p.join('\n'):'(No details added yet.)'}
function sysFor(mode){let s=BASE_SYS;const k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji';
  s+=k==='kilimo'?'\nMada kuu: kilimo (mazao, udongo, mbolea, wadudu, magonjwa, uvunaji, masoko).':'\nMada kuu: ufugaji (kuku, ng\'ombe, mbuzi, nguruwe, samaki, lishe, banda, magonjwa, chanjo, masoko).';
  if(mode==='shamba'||mode==='banda')s+='\nHuu ni mzungumzo wa kibinafsi kuhusu '+(k==='kilimo'?'shamba':'banda')+' la mtumiaji. Taarifa zake:\n'+farmContext(k)+'\nTumia taarifa hizi kutoa ushauri unaofaa; ukikosa taarifa muhimu uliza swali moja fupi.';
  return s}
async function runAI(turns,o){o=o||{};
  const t=turns.slice(-14).map(x=>({role:x.role,content:String(x.content).slice(0,6000)}));
  try {
    const imageData = o.images ? await imgToData(o.images) : undefined;
    const res = await fetch('/api/v1/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: o.signal,
      body: JSON.stringify({
        messages: t,
        system_prompt: o.system || BASE_SYS,
        mode: o.mode || 'kilimo',
        ...(imageData ? { image_data: imageData } : {})
      })
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw { code: res.status === 429 ? 'rate_limited' : 'upstream_error', text: error.detail || 'AI service is unavailable. Please try again.' };
    }
    const data = await res.json();
    if (typeof data.text !== 'string' || !data.text.trim()) throw { code: 'empty_completion' };
    return { text: data.text };
  } catch(e) {
    if (e && e.code) throw e;
    if (e && e.name === 'AbortError') throw { code: 'cancelled', text: 'Ombi lako limesimamishwa.' };
    throw { code: 'backend_error', text: 'Could not connect to the backend server. Make sure it is running on port 8000.' };
  }
}
function aiErr(e){const c=e&&e.code;if(c==='cancelled')return'';if(c==='rate_limited')return'AI usage limit reached. Please try again later.';if(c==='upstream_error'||c==='empty_completion')return'AI service is unavailable right now. Please try again later.';if(c==='prompt_too_large')return'The message is too long. Please shorten it and try again.';return'AI service is unavailable right now. Please try again later.'}

/* ============ router ============ */
const S={view:'home',sec:'kilimo',tab:'jifunze',ltab:'muhtasari',ct:'chats',thread:null,cv:null,stream:{tab:'you',q:'',focus:null},learn:{q:'',tab:'maelezo',doc:null},auth:'login',ptab:'maudhui'};
const VIEWS={},POST={},SECTAB={},ACT={},FORM={};
const chatPal=()=>ST().chatTheme==='system'?(ST().dark?'dark':'light'):ST().chatTheme;
function applyPrefs(){const s=ST(),r=document.documentElement;r.dataset.theme=s.dark?'dark':'light';r.style.setProperty('--ts',String(s.size/100));r.style.setProperty('--font-body',s.font==='serif'?"'Times New Roman',Georgia,serif":s.font==='mono'?"ui-monospace,'SF Mono',Menlo,Consolas,monospace":"'Figtree',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif")}
function render(){applyPrefs();$$('#nav [data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));$('#main').innerHTML=VIEWS[S.view]();if(POST[S.view])POST[S.view]()}
function go(v,p){Object.assign(S,{view:v},p||{});closeSheet();render();$('#main').scrollTop=0}
function needLogin(msg){if(curUser())return false;toast(msg||'Please log in to your account first.');go('account',{auth:'login'});return true}
const refreshSec=()=>{const b=$('#secBody');if(b)b.innerHTML=SECTAB[S.tab]();else render()};

/* ============ home ============ */
const furrows=()=>Array.from({length:9},(_,i)=>{const y=30+i*26;return`<path d="M0 ${y} C 180 ${y-38}, 420 ${y+38}, 800 ${y-12}"/>`}).join('');
VIEWS.home=()=>{const u=curUser();
  return`<div class="view"><header class="hero"><svg class="furrows" viewBox="0 0 800 260" preserveAspectRatio="none" aria-hidden="true">${furrows()}</svg>
  <p class="hello">${u?'Welcome back, '+esc(u.name.split(' ')[0]):'Welcome to the farm'}</p>
  <h1 class="mark"><span>MIMI NI</span>MKULIMA</h1><p class="lede">Learn, ask questions, and connect with fellow farmers and livestock keepers.</p></header>
  <div class="split">
   <button class="door" data-act="openSec" data-sec="kilimo">${ic('leaf','door-ic')}<span class="door-t">MKULIMA</span><span class="door-s">Grow Together</span><span class="chips"><i>Learn Farming</i><i>Talk to an Expert</i><i>Chat with AI</i><i>My Farm</i></span></button>
   <button class="door ochre" data-act="openSec" data-sec="ufugaji">${ic('paw','door-ic')}<span class="door-t">TUFUGE</span><span class="door-s">Raise Together</span><span class="chips"><i>Learn Livestock</i><i>Talk to an Expert</i><i>Chat with AI</i><i>My Barn</i></span></button>
  </div></div>`};
ACT.openSec=el=>{go('section',{sec:el.dataset.sec,tab:'jifunze',ltab:'muhtasari',learn:{q:'',tab:'maelezo',doc:null}})};

/* ============ section ============ */
VIEWS.section=()=>{const k=S.sec,T=SEC[k];
  const tabs=[['jifunze',T.learn],['mtaalamu','Talk to an Expert'],['ai','Chat with AI'],['langu',T.mine]];
  return`<div class="view" data-sec="${k}"><div class="sec-head"><button class="icon-btn" data-act="go" data-v="home" aria-label="Back home">${ic('back')}</button><div><h2>${T.title}</h2><p class="muted small">${T.sub}</p></div></div>
  <div class="tabs" role="tablist">${tabs.map(([id,l])=>`<button role="tab" aria-selected="${S.tab===id}" class="${S.tab===id?'on':''}" data-act="stab" data-t="${id}">${l}</button>`).join('')}</div>
  <div id="secBody">${SECTAB[S.tab]()}</div></div>`};
ACT.stab=el=>{S.tab=el.dataset.t;render()};
ACT.go=el=>go(el.dataset.v);

/* --- learn --- */
const engines=q=>{const e=encodeURIComponent(q+' Tanzania');return[['Google','https://www.google.com/search?q='],['Bing','https://www.bing.com/search?q='],['DuckDuckGo','https://duckduckgo.com/?q='],['Yahoo','https://search.yahoo.com/search?p='],['Brave','https://search.brave.com/search?q=']].map(([n,u])=>`<a href="${u}${e}" target="_blank" rel="noopener noreferrer">${n}</a>`).join('')};
function thumbHTML(p){const s=safeSrc(p.src);const inner=p.kind==='image'&&s?`<img src="${s}" alt="" loading="lazy">`:p.kind==='video'&&s?`<video src="${s}" muted preload="metadata"></video>`:'';
  return`<button class="thumb" style="${inner?'':'background:'+BGS[p.bg||0]}" data-act="openPost" data-id="${esc(p.id)}" aria-label="Fungua chapisho">${inner||`<span class="tt">${esc((p.text||p.caption||'').slice(0,70))}</span>`}</button>`}
function docHTML(){const d=S.learn.doc;
  return`<button class="btn ghost sm" data-act="docBack">${ic('back')} Another topic</button>
  <article class="doc" id="docText" style="margin-top:.8rem">${d.text?md(d.text):'<p class="muted"><span class="pulse"></span> Preparing details…</p>'}</article>
  ${d.busy?'':`<div class="note" style="margin-top:1rem">${d.src==='ai'?'Overview haya yameandaliwa na AI kutoka maarifa ya jumla; si utafutaji wa moja kwa moja wa mtandao.':'This is the basic guide built into the app.'} Verify with an agricultural officer or livestock vet and compare with these search engines:</div><div class="engines">${engines(d.q)}</div>`}
  <div id="qaList">${d.qa.map(a=>`<div class="qa"><p class="q">${esc(a.q)}</p><div class="doc">${a.a?md(a.a):'<span class="pulse"></span>'}</div></div>`).join('')}</div>
  ${d.busy?'':`<form class="searchbar" data-form="more">${ic('chat')}<input name="q" placeholder="Ask another question…" aria-label="Ask swali zaidi" autocomplete="off"><button class="btn sm">Ask</button></form>`}`}
function mediaHTML(kind){const q=S.learn.q;const lab=kind==='image'?'Photos':'Short videos';
  if(!q)return`<div class="empty"><b>${lab}</b>Search mada kwanza ili uone ${kind==='image'?'picha':'video'} zinazohusiana.</div>`;
  const e=encodeURIComponent(q+' Tanzania');
  const links=kind==='image'?[['Google Photos','https://www.google.com/search?tbm=isch&q='],['Bing Photos','https://www.bing.com/images/search?q='],['DuckDuckGo Photos','https://duckduckgo.com/?iax=images&ia=images&q=']]:[['YouTube Shorts','https://www.youtube.com/results?search_query=shorts+'],['YouTube','https://www.youtube.com/results?search_query='],['Google Video','https://www.google.com/search?tbm=vid&q=']];
  const words=q.toLowerCase().split(/\s+/).filter(w=>w.length>3&&!['jinsi','kulima','kufuga'].includes(w));
  const ps=DB.posts.filter(p=>p.kind===kind&&safeSrc(p.src)&&words.some(w=>(p.text+' '+p.caption+' '+p.tag).toLowerCase().includes(w)));
  return`<p class="muted">${lab} za “${esc(q)}”</p><div class="engines">${links.map(([n,u])=>`<a href="${u}${e}" target="_blank" rel="noopener noreferrer">${n}</a>`).join('')}</div>
  <h3 style="font:800 1.05rem var(--font-display);margin:1rem 0 .5rem">From fellow farmers</h3>
  ${ps.length?`<div class="thumbs">${ps.map(thumbHTML).join('')}</div>`:`<div class="note">Bado hakuna ${kind==='image'?'picha':'video'} za mada hii kwenye Stream.</div>`}`}
function historyHTML(){const h=P().history||[];if(!h.length)return`<div class="empty"><b>No history</b>Your search topics will appear here.</div>`;
  return`<div class="list">${h.map((x,i)=>`<button class="item" data-act="hist" data-i="${i}">${ic('clock')}<span class="grow">${esc(x.q)}</span><span class="muted small">${ago(x.ts)}</span></button>`).join('')}</div><p style="margin-top:1rem"><button class="btn danger sm" data-act="clearHist">Clear history</button></p>`}
function learnHTML(){const k=S.sec,T=SEC[k],L=S.learn;
  const tabs=[['maelezo','Overview'],['picha','Photos'],['video','Short videos'],['historia','History']];
  let body;
  if(L.tab==='maelezo')body=L.doc?docHTML():`<p class="muted small">${k==='kilimo'?'Learn farming together.':'Learn livestock keeping together.'} Chagua mada au andika unachotaka.</p><div style="margin-top:.4rem">${T.topics.map(t=>`<button class="topic" data-act="topic" data-q="${esc(t)}"><span class="dot"></span>${esc(t)}</button>`).join('')}</div>`;
  else if(L.tab==='picha')body=mediaHTML('image');else if(L.tab==='video')body=mediaHTML('video');else body=historyHTML();
  return`<form class="searchbar" data-form="learn" role="search">${ic('search')}<input name="q" value="${esc(L.q)}" placeholder="${k==='kilimo'?'Search zao unalotaka':'Search mnyama unayemfuga'}" aria-label="Search" autocomplete="off"><button class="btn sm">Search</button></form>
  <div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${L.tab===i?'on':''}" data-act="ltab" data-t="${i}">${l}</button>`).join('')}</div>${body}`}
SECTAB.jifunze=learnHTML;
ACT.ltab=el=>{S.learn.tab=el.dataset.t;refreshSec()};
ACT.topic=el=>openDoc(el.dataset.q);
ACT.docBack=()=>{S.learn.doc=null;refreshSec()};
ACT.hist=el=>{const h=P().history[+el.dataset.i];if(h)openDoc(h.q)};
ACT.clearHist=()=>{P().history=[];save();refreshSec()};
FORM.learn=f=>{const q=fv(f,'q').trim();if(!q)return toast('Andika unachotaka kutafuta.');openDoc(q)};
FORM.more=f=>{const q=fv(f,'q').trim();if(q)askMore(q)};
async function openDoc(q){const L=S.learn,k=S.sec;L.q=q;L.tab='maelezo';const d=L.doc={q,text:'',qa:[],busy:true,src:'ai'};
  const h=P().history=(P().history||[]).filter(x=>x.q.toLowerCase()!==q.toLowerCase());h.unshift({q,ts:now()});P().history=h.slice(0,30);save();refreshSec();
  const prompt=`Andika mwongozo wa kujifunza kuhusu: "${q}" (${k==='kilimo'?'kilimo':'ufugaji'}, Tanzania).\nMuundo: sentensi 2 za muhtasari; kisha sehemu zenye vichwa vilivyo ndani ya ** ** kama ${k==='kilimo'?'Maandalizi, Kupanda, Mbolea na maji, Wadudu na magonjwa, Mavuno na masoko':'Banda, Lishe na maji, Afya na chanjo, Uzazi, Masoko'}; kila sehemu na vidokezo vifupi vya vitendo. Maliza na "Maswali ya kuuliza zaidi" yenye maswali 3. Usibuni bei za sasa.`;
  try{const r=await runAI([{role:'user',content:prompt}],{system:sysFor(k),onText:t=>{d.text=t;const el=$('#docText');if(el&&S.learn.doc===d)el.innerHTML=md(t)}});d.text=r.text}
  catch(e){const g=localGuide(q);d.src='local';d.text=g||`Samahani, AI haipatikani sasa na sina mwongozo wa msingi wa "${q}".\n\n${aiErr(e)}\n\nTumia vitufe vya injini za utafutaji hapa chini kupata taarifa.`}
  d.busy=false;if(S.learn.doc===d&&S.view==='section')refreshSec()}
async function askMore(q){const d=S.learn.doc;if(!d||d.busy)return;const a={q,a:'',busy:true};d.qa.push(a);d.busy=true;refreshSec();
  const ctx=`Mwongozo uliotolewa kuhusu "${d.q}":\n${d.text.slice(0,4500)}\n\n`+d.qa.slice(0,-1).slice(-3).map(x=>`Swali: ${x.q}\nJibu: ${x.a.slice(0,700)}`).join('\n\n')+`\n\nSwali jipya la mtumiaji: ${q}`;
  try{const r=await runAI([{role:'user',content:ctx}],{system:sysFor(S.sec),onText:t=>{a.a=t;const l=$('#qaList');if(l&&S.learn.doc===d)l.lastElementChild&&(l.lastElementChild.querySelector('.doc').innerHTML=md(t))}});a.a=r.text}
  catch(e){a.a=(e&&e.text)||localGuide(q)||aiErr(e)}
  d.busy=false;if(S.learn.doc===d&&S.view==='section')refreshSec()}

/* --- experts --- */
SECTAB.mtaalamu=()=>{const experts=EXPERTS.filter(c=>c.kind===S.sec);
  return`<div class="note">Wasiliana na mtaalamu kwa kupiga simu. Simu itafunguliwa kwenye kifaa chako.</div>
  <div class="list" style="margin-top:.6rem">${experts.map(c=>`<div class="item">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.role)}</span><br><span class="muted small">${esc(c.displayPhone)}</span></span><a class="btn sm" href="tel:${esc(c.phone)}" aria-label="Piga simu ${esc(c.name)}">${ic('phone')} Piga simu</a></div>`).join('')}</div>
  <p class="muted small" style="margin:1rem 0 .3rem">Unaweza pia kuzungumza na msaidizi wa AI:</p><button class="btn ghost sm" data-act="openThread" data-id="ai">Fungua MIMI Assistant</button>`};

/* --- AI chat --- */
let AIBUSY=false,AICTL=null,ATT=null;
function aiStore(mode){const p=P();p.ai=p.ai||{};return p.ai[mode]=p.ai[mode]||{sessions:[],active:null}}
function aiSess(mode,create){const st=aiStore(mode);let s=st.sessions.find(x=>x.id===st.active);if(!s&&create){s={id:uid('s'),title:'Mazungumzo mapya',ts:now(),turns:[]};st.sessions.unshift(s);st.active=s.id}return s}
const bubHTML=t=>t.role==='user'?`<div class="bub me">${esc(t.content)}</div>`:`<div class="bub bot">${md(t.content)}</div>`;
function aiChatHTML(mode){const s=aiSess(mode,false),k=(mode==='kilimo'||mode==='shamba')?'kilimo':'ufugaji';
  const msgs=s&&s.turns.length?s.turns.map(bubHTML).join(''):`<div class="ai-hello"><h3>MIMI NI MSADIZI</h3><p>Nikusaidie nini leo?</p><div class="sugs">${SEC[k].sugs.map(x=>`<button data-act="aiSug" data-q="${esc(x)}">${esc(x)}</button>`).join('')}</div></div>`;
  return`<section class="aichat" data-pal="${chatPal()}" data-mode="${mode}" aria-label="Chat with AI">
  <div class="ai-top"><button class="btn ghost sm" data-act="aiHistory">${ic('clock')} History</button><button class="btn soft sm" data-act="aiNew">${ic('plus')} Mazungumzo mapya</button></div>
  <div class="ai-msgs" id="aiMsgs" aria-live="polite">${msgs}</div><div id="attBar"></div>
  <div class="ai-in"><button class="icon-btn" data-act="aiAttach" aria-label="Ongeza faili, picha au kamera">${ic('plus')}</button><textarea class="field" id="aiText" rows="1" placeholder="Andika swali lako…" aria-label="Ujumbe"></textarea><button class="btn" id="aiGo" data-act="aiSend" aria-label="Tuma">${ic('send')}</button></div></section>`}
SECTAB.ai=()=>aiChatHTML(SEC[S.sec].ai);
POST.section=()=>{const b=$('#aiMsgs');if(b)b.scrollTop=b.scrollHeight};
function setGo(busy){const b=$('#aiGo');if(b){b.dataset.act=busy?'aiStop':'aiSend';b.innerHTML=ic(busy?'stop':'send');b.setAttribute('aria-label',busy?'Simamisha':'Tuma')}}
async function aiSend(text){const root=$('.aichat');if(!root||AIBUSY)return;const mode=root.dataset.mode,ta=$('#aiText');
  text=(text!=null?text:ta.value).trim();const att=ATT;if(!text&&!att)return;
  const s=aiSess(mode,true);let aug=text,images;
  if(att){if(att.kind==='image'){images=att.file;aug=text||'Tafadhali chunguza picha hii na unipe ushauri.'}else aug=(text||'Tafadhali soma faili hili.')+`\n\n[Faili: ${att.name}]\n${att.text}`}
  const shown=(att?(att.kind==='image'?'📷 ':'📎 '):'')+(text||(att?att.name:''));
  s.turns.push({role:'user',content:shown});if(s.turns.length===1)s.title=shown.slice(0,42);s.ts=now();
  ta.value='';ATT=null;$('#attBar').innerHTML='';
  const box=$('#aiMsgs');if(!box.querySelector('.bub'))box.innerHTML='';
  box.insertAdjacentHTML('beforeend',bubHTML({role:'user',content:shown}));
  const bot=document.createElement('div');bot.className='bub bot';bot.innerHTML='<span class="pulse"></span> Inafikiri…';box.appendChild(bot);box.scrollTop=box.scrollHeight;
  AIBUSY=true;AICTL=new AbortController();setGo(true);
  const callTurns=s.turns.slice(0,-1).concat({role:'user',content:aug});let reply='';
  try{const r=await runAI(callTurns,{system:sysFor(mode),signal:AICTL.signal,images,onText:t=>{reply=t;if(bot.isConnected){bot.innerHTML=md(t);box.scrollTop=box.scrollHeight}}});reply=r.text}
  catch(e){if(e&&e.code==='cancelled')reply=(e.text||reply)||'(Imesimamishwa.)';else{const g=(e&&e.text)?null:localGuide(aug);reply=(e&&e.text)||g||aiErr(e);if(g)reply+='\n\n_'+aiErr(e)+'_'}}
  s.turns.push({role:'assistant',content:reply});save();AIBUSY=false;AICTL=null;
  if(bot.isConnected){bot.innerHTML=md(reply);box.scrollTop=box.scrollHeight;setGo(false)}}
ACT.aiSend=()=>aiSend();ACT.aiStop=()=>{if(AICTL)AICTL.abort()};
ACT.aiSug=el=>aiSend(el.dataset.q);
ACT.aiNew=()=>{const m=$('.aichat').dataset.mode;aiStore(m).active=null;ATT=null;save();render()};
ACT.aiHistory=()=>{const m=$('.aichat').dataset.mode,st=aiStore(m);
  sheet('History ya mazungumzo',st.sessions.length?`<div class="list">${st.sessions.map(s=>`<div class="item"><button class="grow" data-act="aiOpen" data-id="${s.id}"><b>${esc(s.title)}</b><br><span class="muted small">${ago(s.ts)} · ujumbe ${s.turns.length}</span></button><button class="icon-btn" data-act="aiDel" data-id="${s.id}" aria-label="Futa">${ic('trash')}</button></div>`).join('')}</div>`:'<div class="empty">Bado hakuna mazungumzo yaliyohifadhiwa.</div>')};
ACT.aiOpen=el=>{aiStore($('.aichat').dataset.mode).active=el.dataset.id;closeSheet();render()};
ACT.aiDel=el=>{const st=aiStore($('.aichat').dataset.mode);st.sessions=st.sessions.filter(s=>s.id!==el.dataset.id);if(st.active===el.dataset.id)st.active=null;save();closeSheet();render()};
ACT.aiAttach=()=>sheet('Ongeza',`<div class="menu"><button data-act="attKind" data-k="file">${ic('clip')} Faili (maandishi)</button><button data-act="attKind" data-k="image">${ic('image')} Photos</button><button data-act="attKind" data-k="camera">${ic('camera')} Camera</button></div><p class="muted small" style="margin-top:.6rem">Piga picha ya zao au mnyama mwenye tatizo upate ushauri wa jumla.</p>`);
ACT.attKind=async el=>{const kind=el.dataset.k;closeSheet();
  if(kind==='file'&&!ST().perm.file)return toast('Permissions ya faili imezimwa kwenye Mipangilio.');
  if(kind==='camera'&&!ST().perm.camera)return toast('Permissions ya kamera imezimwa kwenye Mipangilio.');
  const f=await pickFile(kind==='file'?'.txt,.csv,.md,.json,text/plain':'image/*',kind==='camera'?'environment':'');if(!f)return;
  ATT=kind==='file'?{kind:'file',name:f.name,text:(await f.text()).slice(0,8000)}:{kind:'image',name:f.name,file:f};
  const b=$('#attBar');if(b)b.innerHTML=`<div class="att">${ic(kind==='file'?'clip':'image')}<span class="grow">${esc(ATT.name)}</span><button class="icon-btn" data-act="attClear" aria-label="Ondoa">${ic('x')}</button></div>`};
ACT.attClear=()=>{ATT=null;$('#attBar').innerHTML=''};

/* --- farm --- */
function farmHTML(){const k=S.sec,T=SEC[k];
  if(!curUser())return`<div class="empty"><b>${T.mine}</b>Log in kwenye akaunti ili uweke taarifa za ${k==='kilimo'?'shamba':'banda'} lako, kazi na mahesabu.<p style="margin-top:1rem"><button class="btn" data-act="go" data-v="account">Log in au jisajili</button></p></div>`;
  const f=farmOf(k),tabs=[['muhtasari','Muhtasari'],['kazi','Kazi'],['fedha','Fedha'],['ai','Gumzo la AI']];
  const inc=f.ledger.filter(x=>x.type==='in').reduce((a,x)=>a+x.amt,0),exp=f.ledger.filter(x=>x.type==='out').reduce((a,x)=>a+x.amt,0);
  let b='';
  if(S.ltab==='muhtasari')b=`<div class="stats"><div class="stat"><span class="muted small">Kazi zilizobaki</span><b>${f.tasks.filter(t=>!t.done).length}</b></div><div class="stat"><span class="muted small">Mapato (TZS)</span><b>${money(inc)}</b></div><div class="stat"><span class="muted small">Faida (TZS)</span><b>${money(inc-exp)}</b></div></div>
  <form class="form" data-form="farm"><label class="lab">Jina la ${k==='kilimo'?'shamba':'banda'}<input class="field" name="name" value="${esc(f.name)}" maxlength="60"></label>
  <label class="lab">${k==='kilimo'?'Ukubwa (ekari)':'Idadi au ukubwa'}<input class="field" name="size" value="${esc(f.size)}" maxlength="40"></label>
  <label class="lab">${k==='kilimo'?'Mazao unayolima':'Mifugo unayofuga'}<input class="field" name="items" value="${esc(f.items)}" maxlength="120" placeholder="${k==='kilimo'?'mfano: mahindi, maharage':'mfano: kuku wa mayai 200'}"></label>
  <label class="lab">Eneo<input class="field" name="place" value="${esc(f.place)}" maxlength="120"></label>
  <label class="lab">Overview<textarea class="field" name="notes" maxlength="500">${esc(f.notes)}</textarea></label>
  <div class="row wrap"><button class="btn">Hifadhi</button>${PRIV().location?`<button type="button" class="btn ghost" data-act="farmLoc">${ic('tag')} Tumia eneo langu</button>`:''}</div></form>`;
  else if(S.ltab==='kazi')b=`<form class="row" data-form="task"><input class="field grow" name="text" placeholder="Kazi mpya (mfano: kupalilia)" maxlength="120" aria-label="Kazi mpya"><input class="field" style="width:auto" type="date" name="due" aria-label="Tarehe"><button class="btn">${ic('plus')}</button></form>
  <div class="list" style="margin-top:.6rem">${f.tasks.length?f.tasks.map(t=>`<div class="item"><button class="chk ${t.done?'on':''}" data-act="taskTog" data-id="${t.id}" role="checkbox" aria-checked="${t.done}" aria-label="Kamilisha">${t.done?ic('check'):''}</button><span class="grow ${t.done?'done':''}">${esc(t.text)}${t.due?`<br><span class="muted small">Tarehe: ${esc(t.due)}</span>`:''}</span><button class="icon-btn" data-act="taskDel" data-id="${t.id}" aria-label="Futa">${ic('trash')}</button></div>`).join(''):'<div class="empty"><b>Hakuna kazi</b>Ongeza kazi za shambani au bandani hapa juu.</div>'}</div>`;
  else if(S.ltab==='fedha')b=`<div class="stats"><div class="stat"><span class="muted small">Mapato</span><b class="in">${money(inc)}</b></div><div class="stat"><span class="muted small">Matumizi</span><b class="out">${money(exp)}</b></div><div class="stat"><span class="muted small">Faida (TZS)</span><b>${money(inc-exp)}</b></div></div>
  <form class="row wrap" data-form="ledger"><select class="field" name="type" style="width:auto" aria-label="Aina"><option value="in">Mapato</option><option value="out">Matumizi</option></select><input class="field grow" name="label" placeholder="Overview (mfano: mbolea)" maxlength="80" required><input class="field" style="width:8rem" name="amt" type="number" min="1" step="1" placeholder="TZS" required><button class="btn">${ic('plus')}</button></form>
  <div class="list" style="margin-top:.6rem">${f.ledger.length?f.ledger.slice().reverse().map(x=>`<div class="item"><span class="grow">${esc(x.label)}<br><span class="muted small">${ago(x.ts)}</span></span><b class="${x.type}">${x.type==='in'?'+':'−'}${money(x.amt)}</b><button class="icon-btn" data-act="ledDel" data-id="${x.id}" aria-label="Futa">${ic('trash')}</button></div>`).join(''):'<div class="empty"><b>Hakuna rekodi</b>Andika mapato na matumizi yako ili ujue faida.</div>'}</div>`;
  else b=aiChatHTML(T.my);
  return`<div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ltab===i?'on':''}" data-act="ftab" data-t="${i}">${l}</button>`).join('')}</div>${b}`}
SECTAB.langu=farmHTML;
ACT.ftab=el=>{S.ltab=el.dataset.t;render()};
FORM.farm=f=>{const o=farmOf(S.sec);['name','size','items','place','notes'].forEach(n=>o[n]=fv(f,n).trim());save();toast('Imehifadhiwa');render()};
FORM.task=f=>{const t=fv(f,'text').trim();if(!t)return;farmOf(S.sec).tasks.unshift({id:uid('t'),text:t,due:fv(f,'due'),done:false});save();render()};
ACT.taskTog=el=>{const t=farmOf(S.sec).tasks.find(x=>x.id===el.dataset.id);if(t){t.done=!t.done;save();render()}};
ACT.taskDel=el=>{const o=farmOf(S.sec);o.tasks=o.tasks.filter(x=>x.id!==el.dataset.id);save();render()};
FORM.ledger=f=>{const a=Math.round(+fv(f,'amt'));if(!(a>0))return toast('Weka kiasi sahihi.');farmOf(S.sec).ledger.push({id:uid('l'),type:fv(f,'type'),label:fv(f,'label').trim(),amt:a,ts:now()});save();render()};
ACT.ledDel=el=>{const o=farmOf(S.sec);o.ledger=o.ledger.filter(x=>x.id!==el.dataset.id);save();render()};
ACT.farmLoc=()=>{if(!navigator.geolocation)return toast('Kivinjari hakiungi mkono eneo.');navigator.geolocation.getCurrentPosition(p=>{const o=farmOf(S.sec);o.place=`${(o.place||'').replace(/\s*\(.*?\)\s*$/,'')} (${p.coords.latitude.toFixed(2)}, ${p.coords.longitude.toFixed(2)})`.trim();save();render()},()=>toast('Imeshindwa kupata eneo. Ruhusu eneo kwenye kivinjari.'))};

/* ============ account ============ */
const creatorName=id=>(DB.users[id]&&DB.users[id].name)||'Mtumiaji';
const post=id=>DB.posts.find(p=>p.id===id);
VIEWS.account=()=>{const u=curUser();return u?profileHTML(u):authHTML()};
function authHTML(){const reg=S.auth==='register';
  return`<div class="view" style="max-width:460px"><h2 style="font:800 2rem var(--font-display);letter-spacing:-.02em">${reg?'Fungua akaunti':'Karibu tena'}</h2>
  <div class="tabs" role="tablist"><button class="${!reg?'on':''}" data-act="authTab" data-t="login">Log in</button><button class="${reg?'on':''}" data-act="authTab" data-t="register">Jisajili</button></div>
  <form class="form" data-form="auth">${reg?'<label class="lab">Jina kamili<input class="field" name="name" required maxlength="60" autocomplete="name"></label>':''}
  <label class="lab">Simu au barua pepe<input class="field" name="id" required maxlength="80" autocomplete="username"></label>
  <label class="lab">Nenosiri<input class="field" name="pw" type="password" required minlength="6" autocomplete="${reg?'new-password':'current-password'}"></label>
  <button class="btn">${reg?'Jisajili':'Log in'}</button>
  <p class="note">Account huhifadhiwa kwenye kifaa hiki tu, bila seva. Ukifuta data ya kivinjari au ukibadilisha kifaa, akaunti itapotea.</p></form>
  <p class="muted small" style="margin-top:1rem">Bila akaunti unaweza kujifunza, kutumia AI, kuona Stream na Mipangilio. Chat, Shamba/My Barn na kuchapisha vinahitaji akaunti.</p></div>`}
ACT.authTab=el=>{S.auth=el.dataset.t;render()};
FORM.auth=async f=>{const id=fv(f,'id').trim().toLowerCase(),pw=fv(f,'pw');
  if(S.auth==='register'){const name=fv(f,'name').trim();if(!name)return toast('Andika jina lako.');
    if(Object.values(DB.users).some(x=>x.login===id))return toast('Account hii tayari ipo. Jaribu kuingia.');
    const salt=uid('s'),u={id:uid('u'),name,login:id,salt,hash:await sha(salt+pw),bio:'',handle:'@'+(name.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,14)||'mkulima')+Math.floor(10+Math.random()*90),ts:now()};
    newUserData(u);u.ai=DB.guest.ai||{};u.history=DB.guest.history||[];DB.guest={ai:{},history:[]};DB.users[u.id]=u;DB.session=u.id;save();toast('Karibu, '+name.split(' ')[0]+'!');go('account')}
  else{const u=Object.values(DB.users).find(x=>x.login===id);if(!u||u.hash!==await sha(u.salt+pw))return toast('Simu/barua pepe au nenosiri si sahihi.');DB.session=u.id;save();go('account')}};
function profileHTML(u){
  const followers=Object.values(DB.users).filter(x=>x.id!==u.id&&x.following.includes(u.id)).length;
  const mine=DB.posts.filter(p=>p.by===u.id).sort((a,b)=>b.ts-a.ts),tabs=[['maudhui','Maudhui'],['repost','Repost'],['saved','Zilizohifadhiwa'],['soko','Ninauza']];
  const grid=a=>a.length?`<div class="grid3">${a.map(thumbHTML).join('')}</div>`:'<div class="empty"><b>Hakuna kitu bado</b>Vitu vitaonekana hapa.</div>';
  let b;
  if(S.ptab==='maudhui')b=grid(mine);else if(S.ptab==='repost')b=grid(DB.posts.filter(p=>u.reposts.includes(p.id)));
  else if(S.ptab==='saved')b=grid(DB.posts.filter(p=>u.saved.includes(p.id)));
  else b=`<p style="margin-bottom:.6rem"><button class="btn sm" data-act="addListing">${ic('plus')} Ongeza bidhaa</button></p>${u.listings.length?`<div class="list">${u.listings.map(l=>`<div class="item"><span class="grow"><b>${esc(l.name)}</b><br><span class="muted small">${esc(l.qty||'')}${l.place?' · '+esc(l.place):''}</span></span><b>TZS ${money(l.price)}</b><button class="icon-btn" data-act="delListing" data-id="${l.id}" aria-label="Futa">${ic('trash')}</button></div>`).join('')}</div>`:'<div class="empty"><b>Hakuna bidhaa</b>Orodhesha mazao au mifugo unayouza.</div>'}`;
  return`<div class="view" style="max-width:640px"><div class="row" style="justify-content:flex-end"><button class="icon-btn" data-act="profMenu" aria-label="Menyu ya wasifu">${ic('more')}</button></div>
  <div class="prof">${av(u.name,'lg',colorOf(u.id))}<h2 style="font:800 1.5rem var(--font-display)">${esc(u.name)}</h2><span class="muted">${esc(u.handle)}</span>
  <p style="max-width:40ch">${u.bio?esc(u.bio):'<span class="muted">Ongeza maelezo mafupi kukuhusu.</span>'}</p>
  <div class="counts"><button><b>${mine.length}</b><span class="muted small">Machapisho</span></button><button data-act="followSheet"><b>${u.following.length}</b><span class="muted small">Unafuata</span></button><button><b>${followers}</b><span class="muted small">Wanaokufuata</span></button></div>
  <div class="row wrap" style="justify-content:center"><button class="btn ghost sm" data-act="editProfile">${ic('edit')} Hariri wasifu</button><button class="btn sm" data-act="newPost">${ic('plus')} Chapisho jipya</button></div></div>
  <div class="tabs" role="tablist">${tabs.map(([i,l])=>`<button role="tab" class="${S.ptab===i?'on':''}" data-act="ptab" data-t="${i}">${l}</button>`).join('')}</div>${b}</div>`}
ACT.ptab=el=>{S.ptab=el.dataset.t;render()};
ACT.profMenu=()=>sheet('Wasifu',`<div class="menu"><button data-act="editProfile">${ic('edit')} Hariri wasifu</button><button data-act="followSheet">${ic('users')} Unaowafuata</button><button data-act="ptabGo" data-t="soko">${ic('tag')} Ninauza</button><button data-act="go" data-v="settings">${ic('settings')} Mipangilio</button><button data-act="logout">${ic('logout')} Log out</button></div>`);
ACT.ptabGo=el=>{closeSheet();S.ptab=el.dataset.t;render()};
ACT.editProfile=()=>{const u=curUser();sheet('Hariri wasifu',`<form class="form" data-form="profile"><label class="lab">Jina<input class="field" name="name" value="${esc(u.name)}" maxlength="60" required></label><label class="lab">Overview mafupi (bio)<textarea class="field" name="bio" maxlength="160">${esc(u.bio)}</textarea></label><button class="btn">Hifadhi</button></form>`)};
FORM.profile=f=>{const u=curUser();u.name=fv(f,'name').trim()||u.name;u.bio=fv(f,'bio').trim();DB.posts.forEach(p=>{if(p.by===u.id)p.name=u.name});save();closeSheet();render()};
ACT.followSheet=()=>{const u=curUser();sheet('Unaowafuata',u.following.length?`<div class="list">${u.following.map(id=>`<div class="item">${av(creatorName(id),'sm',colorOf(id))}<span class="grow">${esc(creatorName(id))}</span><button class="btn ghost sm" data-act="follow" data-id="${id}">Acha kufuata</button></div>`).join('')}</div>`:'<div class="empty">Bado hujafuata mtu. Fungua Stream na ubonyeze “Fuata”.</div>')};
ACT.logout=()=>{DB.session=null;save();closeSheet();S.thread=null;go('home');toast('Umetoka.')};
ACT.addListing=()=>sheet('Bidhaa mpya',`<form class="form" data-form="listing"><label class="lab">Bidhaa<input class="field" name="name" required maxlength="60" placeholder="mfano: Mahindi"></label><label class="lab">Bei (TZS)<input class="field" name="price" type="number" min="0" required></label><label class="lab">Kiasi<input class="field" name="qty" maxlength="40" placeholder="mfano: gunia 20"></label><label class="lab">Eneo<input class="field" name="place" maxlength="60"></label><button class="btn">Ongeza</button></form><p class="muted small" style="margin-top:.6rem">Orodha hii inaonekana kwenye wasifu wako. Mawasiliano ya wanunuzi yanahitaji seva.</p>`);
FORM.listing=f=>{curUser().listings.unshift({id:uid('l'),name:fv(f,'name').trim(),price:Math.round(+fv(f,'price')),qty:fv(f,'qty').trim(),place:fv(f,'place').trim(),ts:now()});save();closeSheet();S.ptab='soko';render()};
ACT.delListing=el=>{const u=curUser();u.listings=u.listings.filter(l=>l.id!==el.dataset.id);save();render()};

/* ============ stream ============ */
const EMO=['😀','😂','😍','👏','🙏','🔥','🌽','🐔','🐄','🌱','💪','👍'];
function feedPosts(){const u=curUser(),q=S.stream.q.toLowerCase();let a=DB.posts.slice().sort((x,y)=>y.ts-x.ts);
  if(S.stream.tab==='friends')a=u?a.filter(p=>p.by===u.id||u.following.includes(p.by)):[];
  if(q)a=a.filter(p=>((p.text||'')+' '+(p.caption||'')+' '+p.name+' '+p.tag).toLowerCase().includes(q));return a}
function postHTML(p){const u=curUser(),liked=u&&u.liked.includes(p.id),saved=u&&u.saved.includes(p.id),rep=u&&u.reposts.includes(p.id),own=u&&p.by===u.id,fol=u&&u.following.includes(p.by),s=safeSrc(p.src);
  const media=p.kind==='image'&&s?`<img class="pm" src="${s}" alt="${esc(p.caption||'Photos')}">`:p.kind==='video'&&s?`<video class="pm" src="${s}" controls playsinline loop></video>`:p.kind==='video'||p.kind==='image'?`<div class="pm textcard" style="background:${BGS[0]}"><p>Faili hii haipatikani tena (ilipakiwa kwenye kikao kilichopita).</p></div>`:`<div class="pm textcard" style="background:${BGS[p.bg||0]}"><p>${esc(p.text)}</p></div>`;
  return`<section class="post" id="p_${esc(p.id)}" data-id="${esc(p.id)}">${media}
  <div class="pinfo"><div class="by">${av(p.name,'sm',p.color)}<button data-act="viewCreator" data-id="${esc(p.by)}">${esc(p.handle||p.name)}</button>${own?'':`<button class="follow ${fol?'on':''}" data-act="follow" data-id="${esc(p.by)}">${fol?'Unafuata':'Fuata'}</button>`}</div>
  ${(p.kind!=='text'&&p.text)?`<p class="cap">${esc(p.text)}</p>`:''}${p.caption?`<p class="cap">${esc(p.caption)}</p>`:''}${p.seed?'<p class="small" style="opacity:.7">Chapisho la mfano</p>':''}</div>
  <div class="acts"><button class="${liked?'on':''}" data-act="like" data-id="${esc(p.id)}" aria-label="Penda">${ic('heart')}<span>${p.likedBy.length}</span></button>
  <button data-act="comments" data-id="${esc(p.id)}" aria-label="Maoni">${ic('comment')}<span>${p.comments.length}</span></button>
  <button data-act="share" data-id="${esc(p.id)}" aria-label="Shiriki">${ic('share')}<span>Shiriki</span></button>
  <button class="sv ${saved?'on':''}" data-act="save" data-id="${esc(p.id)}" aria-label="Hifadhi">${ic('bookmark')}<span>Hifadhi</span></button>
  <button class="rp ${rep?'on':''}" data-act="repost" data-id="${esc(p.id)}" aria-label="Repost">${ic('repeat')}<span>${p.reposts}</span></button>
  ${own?`<button data-act="postMenu" data-id="${esc(p.id)}" aria-label="Zaidi">${ic('more')}</button>`:''}</div></section>`}
VIEWS.stream=()=>{const a=feedPosts();
  return`<div class="stream fillabs" data-pal="dark"><div class="stop"><div class="tabs" role="tablist"><button class="${S.stream.tab==='you'?'on':''}" data-act="sTab" data-t="you">Kwa Ajili Yako</button><button class="${S.stream.tab==='friends'?'on':''}" data-act="sTab" data-t="friends">Marafiki</button></div>
  <form class="searchbar" data-form="ssearch" role="search">${ic('search')}<input name="q" value="${esc(S.stream.q)}" placeholder="Search maudhui" aria-label="Search maudhui" autocomplete="off"></form><button class="icon-btn" data-act="newPost" aria-label="Chapisha chapisho jipya">${ic('plus')}</button></div>
  ${a.length?`<div class="feed" id="feed">${a.map(postHTML).join('')}</div>`:`<div class="empty" style="position:absolute;inset:0;display:grid;place-content:center;color:#fff"><b style="color:#fff">${S.stream.tab==='friends'?(curUser()?'Bado hufuati mtu':'Log in kuona marafiki'):'Hakuna matokeo'}</b>${S.stream.tab==='friends'?'Fuata watu kwenye “Kwa Ajili Yako” ili uwaone hapa.':'Jaribu neno lingine au chapisha kitu chako.'}</div>`}</div>`};
POST.stream=()=>{const id=S.stream.focus;if(id){const el=$('#p_'+CSS.escape(id));if(el)el.scrollIntoView();S.stream.focus=null}};
ACT.sTab=el=>{S.stream.tab=el.dataset.t;render()};
FORM.ssearch=f=>{S.stream.q=fv(f,'q').trim();render()};
ACT.openPost=el=>{S.stream={tab:'you',q:'',focus:el.dataset.id};go('stream')};
function refreshPost(id){const p=post(id),el=$('#p_'+CSS.escape(id));if(p&&el){const t=document.createElement('div');t.innerHTML=postHTML(p);el.replaceWith(t.firstElementChild)}}
const refreshBy=by=>DB.posts.filter(p=>p.by===by).forEach(p=>refreshPost(p.id));
ACT.like=el=>{if(needLogin('Log in ili upende chapisho.'))return;const u=curUser(),p=post(el.dataset.id);if(!p)return;const i=p.likedBy.indexOf(u.id);if(i<0){p.likedBy.push(u.id);u.liked.push(p.id)}else{p.likedBy.splice(i,1);u.liked=u.liked.filter(x=>x!==p.id)}save();refreshPost(p.id)};
ACT.save=el=>{if(needLogin('Log in to save.'))return;const u=curUser(),id=el.dataset.id;if(u.saved.includes(id))u.saved=u.saved.filter(x=>x!==id);else{u.saved.push(id);toast('Imehifadhiwa kwenye wasifu wako')}save();refreshPost(id)};
ACT.repost=el=>{if(needLogin('Log in to repost.'))return;const u=curUser(),p=post(el.dataset.id);if(!p)return;if(u.reposts.includes(p.id)){u.reposts=u.reposts.filter(x=>x!==p.id);p.reposts=Math.max(0,p.reposts-1)}else{u.reposts.push(p.id);p.reposts++;toast('Umerepost')}save();closeSheet();refreshPost(p.id)};
ACT.follow=el=>{if(needLogin('Log in to follow.'))return;const u=curUser(),id=el.dataset.id;if(id===u.id)return;u.following=u.following.includes(id)?u.following.filter(x=>x!==id):u.following.concat(id);save();if(el.closest('.sheet'))closeSheet();if(S.view==='stream')refreshBy(id);else if(S.view==='account')render()};
ACT.viewCreator=el=>{const id=el.dataset.id,lu=DB.users[id],u=curUser();const n=creatorName(id),cnt=DB.posts.filter(p=>p.by===id).length;
  if(lu&&lu.id!==(u&&u.id)&&!lu.priv.allowProfile)return sheet(n,'<div class="empty"><b>Wasifu wa faragha</b>Mtumiaji huyu hajaruhusu wasifu wake kuonekana.</div>');
  const bio=lu?(lu.priv.shareInfo||(u&&u.id===lu.id)?lu.bio:''):'';
  sheet(n,`<div class="prof">${av(n,'lg',colorOf(id))}<b>${esc(lu?lu.handle:'')}</b>${bio?`<p>${esc(bio)}</p>`:''}<span class="muted small">Machapisho: ${cnt}</span>${u&&u.id!==id?`<button class="btn sm" data-act="follow" data-id="${esc(id)}">${u.following.includes(id)?'Unafuata':'Fuata'}</button>`:''}</div>`)};
ACT.comments=el=>{const p=post(el.dataset.id);if(!p)return;sheet('Maoni',`<div id="cmList">${cmList(p)}</div><div class="emojis" role="group" aria-label="Emoji">${EMO.map(e=>`<button type="button" data-act="emo" data-e="${e}" aria-label="Emoji ${e}">${e}</button>`).join('')}</div><form class="row" data-form="comment" data-id="${esc(p.id)}"><input class="field grow" name="t" placeholder="Andika maoni…" maxlength="300" aria-label="Maoni" autocomplete="off"><button class="btn" aria-label="Tuma">${ic('send')}</button></form>`)};
const cmList=p=>p.comments.length?p.comments.map(c=>`<div class="cm">${av(c.name,'sm',colorOf(c.by))}<div><b>${esc(c.name)}</b> <span class="muted small">${ago(c.ts)}</span><p>${esc(c.text)}</p></div></div>`).join(''):'<div class="empty">Hakuna maoni bado. Kuwa wa kwanza.</div>';
FORM.comment=f=>{if(needLogin('Log in ili utoe maoni.'))return;const p=post(f.dataset.id),t=fv(f,'t').trim();if(!p||!t)return;const u=curUser();p.comments.push({id:uid('c'),by:u.id,name:u.name,text:t,ts:now()});save();$('#cmList').innerHTML=cmList(p);f.reset();refreshPost(p.id)};
ACT.emo=el=>{const i=$('.sheet input[name=t]')||$('#msgText');if(i){i.value+=el.dataset.e;i.focus()}};
ACT.share=el=>{const p=post(el.dataset.id);if(!p)return;const url=location.href.split('#')[0]+'#post='+p.id,txt=encodeURIComponent(((p.text||p.caption||'')+' — MIMI NI MKULIMA').slice(0,140)),eu=encodeURIComponent(url);
  sheet('Shiriki',`<div class="menu"><button data-act="copyLink" data-url="${esc(url)}">${ic('link')} Nakili kiungo</button><button data-act="repost" data-id="${esc(p.id)}">${ic('repeat')} Repost</button></div>
  <div class="sharegrid"><button data-act="shareChat" data-id="${esc(p.id)}"><span class="ci">${ic('chat')}</span>Chats</button>
  <a href="https://wa.me/?text=${txt}%20${eu}" target="_blank" rel="noopener noreferrer"><span class="ci">${ic('phone')}</span>WhatsApp</a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=${eu}" target="_blank" rel="noopener noreferrer"><span class="ci"><b>f</b></span>Facebook</a>
  <button data-act="shareIG" data-url="${esc(url)}"><span class="ci"><b>IG</b></span>Insta</button>
  <button data-act="shareMore" data-url="${esc(url)}" data-t="${esc((p.text||p.caption||'').slice(0,100))}"><span class="ci">${ic('more')}</span>More</button></div>`)};
ACT.copyLink=async el=>{toast(await copyText(el.dataset.url)?'Kiungo kimenakiliwa':'Imeshindwa kunakili kiungo')};
ACT.shareIG=async el=>{await copyText(el.dataset.url);toast('Kiungo kimenakiliwa. Kibandike kwenye Instagram.')};
ACT.shareMore=async el=>{if(navigator.share){try{await navigator.share({title:'MIMI NI MKULIMA',text:el.dataset.t,url:el.dataset.url})}catch(e){}}else toast(await copyText(el.dataset.url)?'Kivinjari hakina menyu ya kushiriki; kiungo kimenakiliwa':'Kushiriki hakupatikani hapa')};
ACT.shareChat=el=>{if(needLogin())return;const u=curUser(),id=el.dataset.id;sheet('Tuma kwenye Chat',`<div class="list">${u.contacts.filter(c=>!c.blocked).map(c=>`<button class="item" data-act="shareTo" data-c="${c.id}" data-id="${esc(id)}">${av(c.name,'sm',colorOf(c.id))}<span class="grow">${esc(c.name)}</span></button>`).join('')}</div>`)};
ACT.shareTo=el=>{const p=post(el.dataset.id);if(!p)return;const url=location.href.split('#')[0]+'#post='+p.id;closeSheet();sendMsg(el.dataset.c,`${p.text||p.caption||'Chapisho'}\n${url}`);toast('Imetumwa kwenye Chat')};
ACT.postMenu=el=>sheet('Chapisho lako',`<div class="menu"><button data-act="editPost" data-id="${esc(el.dataset.id)}">${ic('edit')} Hariri maelezo</button><button data-act="delPost" data-id="${esc(el.dataset.id)}">${ic('trash')} Futa</button></div>`);
ACT.editPost=el=>{const p=post(el.dataset.id);sheet('Hariri chapisho',`<form class="form" data-form="editpost" data-id="${esc(p.id)}"><label class="lab">Ujumbe<textarea class="field" name="text" maxlength="200">${esc(p.text||'')}</textarea></label><label class="lab">Overview<input class="field" name="cap" maxlength="120" value="${esc(p.caption||'')}"></label><button class="btn">Hifadhi</button></form>`)};
FORM.editpost=f=>{const p=post(f.dataset.id);if(!p)return;p.text=fv(f,'text').trim();p.caption=fv(f,'cap').trim();save();closeSheet();refreshPost(p.id)};
ACT.delPost=el=>{DB.posts=DB.posts.filter(p=>p.id!==el.dataset.id);save();closeSheet();render();toast('Chapisho limefutwa')};
let NP=null;
ACT.newPost=()=>{if(needLogin('Log in ili uchapishe.'))return;NP={kind:'text'};sheet('Chapisho jipya',`<form class="form" data-form="post"><label class="lab">Ujumbe<textarea class="field" name="text" maxlength="200" placeholder="Andika kidokezo au swali"></textarea></label>
  <div class="row wrap"><button type="button" class="btn ghost sm" data-act="npMedia" data-k="image">${ic('image')} Photos</button><button type="button" class="btn ghost sm" data-act="npMedia" data-k="video">${ic('video')} Video</button><span id="npName" class="muted small"></span></div>
  <label class="lab">Overview au hashtag<input class="field" name="cap" maxlength="120" placeholder="#mahindi #ushauri"></label>
  <label class="lab">Kategoria<select class="field" name="tag"><option value="kilimo">Farming</option><option value="ufugaji">Livestock</option></select></label><button class="btn">Chapisha</button></form>`)};
ACT.npMedia=async el=>{const k=el.dataset.k;if(!ST().perm.file)return toast('Permissions ya faili imezimwa kwenye Mipangilio.');const f=await pickFile(k==='image'?'image/*':'video/*');if(!f)return;
  try{if(k==='image')NP={kind:'image',src:await imgToData(f)};else{if(f.size>80e6)return toast('Video ni kubwa mno (zaidi ya MB 80).');NP={kind:'video',src:URL.createObjectURL(f)}}const n=$('#npName');if(n)n.textContent=f.name}catch(e){toast('Imeshindwa kusoma faili.')}};
FORM.post=f=>{const text=fv(f,'text').trim();if(!text&&(!NP||NP.kind==='text'))return toast('Andika ujumbe au ongeza picha au video.');const u=curUser();
  DB.posts.unshift({id:uid('p'),by:u.id,name:u.name,handle:u.handle,color:colorOf(u.id),kind:NP.kind,src:NP.src||null,text,caption:fv(f,'cap').trim(),tag:fv(f,'tag'),bg:Math.floor(Math.random()*BGS.length),ts:now(),likedBy:[],reposts:0,comments:[]});
  const v=NP.kind==='video';NP=null;save();closeSheet();S.stream={tab:'you',q:'',focus:null};render();toast(v?'Umechapisha. Video huonekana kwa kikao hiki tu.':'Umechapisha')};

/* ============ chat ============ */
const TYPING={};let REC=null,recT=null,CALL=null;
const CT_TITLE={chats:'Chat',calls:'Simu',status:'Status',channels:'Vituo'};
const contactOf=id=>{const u=curUser();return u&&u.contacts.find(c=>c.id===id)};
function ensureChat(id){const u=curUser();let c=u.chats[id];if(!c){const ct=contactOf(id);c=u.chats[id]={id,type:'dm',name:ct?ct.name:'Mazungumzo',unread:0,msgs:[]}}return c}
const chatTitle=c=>{if(c.type==='dm'){const ct=contactOf(c.id);return ct?ct.name:c.name}return c.name};
const gate=t=>`<div class="view"><div class="empty"><b>${t}</b>Unahitaji akaunti ili kutumia sehemu hii.<p style="margin-top:1rem"><button class="btn" data-act="go" data-v="account">Log in au jisajili</button></p></div></div>`;
const previewOf=m=>!m?'Hakuna ujumbe':m.kind==='image'?'📷 Photos':m.kind==='voice'?'🎤 Ujumbe wa sauti':m.kind==='file'?'📎 '+(m.name||'Faili'):m.kind==='sys'?m.text:(m.text||'').slice(0,60);
function chatList(){const u=curUser(),q=(S.cq||'').toLowerCase();
  const l=Object.values(u.chats).filter(c=>{const ct=c.type==='dm'?contactOf(c.id):null;return !(ct&&ct.blocked)&&chatTitle(c).toLowerCase().includes(q)})
   .sort((a,b)=>{const fa=(contactOf(a.id)||{}).fav?1:0,fb=(contactOf(b.id)||{}).fav?1:0;if(fa!==fb)return fb-fa;const ta=a.msgs.length?a.msgs[a.msgs.length-1].ts:0,tb=b.msgs.length?b.msgs[b.msgs.length-1].ts:0;return tb-ta});
  if(!l.length)return'<div class="empty"><b>Hakuna mazungumzo</b>Bonyeza kitufe cha chat kuanza mazungumzo.</div>';
  return`<div class="list pad">${l.map(c=>{const last=c.msgs[c.msgs.length-1],ct=c.type==='dm'?contactOf(c.id):null,n=chatTitle(c);
   return`<button class="item" data-act="openThread" data-id="${esc(c.id)}">${av(n,'',colorOf(c.id))}<span class="grow"><b>${esc(n)}</b>${ct&&ct.fav?' '+ic('star','fill'):''}<br><span class="muted small">${PRIV().secure?'Ujumbe umefichwa':esc(previewOf(last))}</span></span><span class="muted small">${last?hhmm(last.ts):''}</span>${c.unread?`<span class="badge">${c.unread}</span>`:''}</button>`}).join('')}</div>`}
function callsBody(){const u=curUser();
  return`<div class="pad"><button class="btn sm" data-act="newCall">${ic('phone')} Simu mpya</button></div>${u.calls.length?`<div class="list pad">${u.calls.map(c=>{const ct=contactOf(c.contactId);if(!ct)return'';return`<div class="item">${av(ct.name,'',colorOf(c.contactId))}<span class="grow"><b>${esc(ct.name)}</b><br><span class="muted small">${c.kind==='video'?'Video':'Sauti'} · ${esc(c.res)} · ${ago(c.ts)}</span></span><button class="icon-btn" data-act="call" data-id="${esc(c.contactId)}" data-k="${c.kind}" aria-label="Piga tena">${ic(c.kind==='video'?'video':'phone')}</button></div>`}).join('')}</div>`:'<div class="empty"><b>Hakuna simu</b>Simu ulizopiga zitaonekana hapa.</div>'}`}
function statusBody(){const u=curUser(),cut=now()-864e5,l=u.statuses.filter(s=>s.ts>cut),mine=l.filter(s=>s.by==='me'),others=l.filter(s=>s.by!=='me'&&!(contactOf(s.by)||{}).blocked);
  return`<div class="pad"><button class="item" data-act="${mine.length?'viewStatus':'addStatus'}" data-id="${mine.length?mine[mine.length-1].id:''}">${av(u.name,mine.length?'ring':'',colorOf(u.id))}<span class="grow"><b>Status yangu</b><br><span class="muted small">${mine.length?'Imeongezwa '+ago(mine[mine.length-1].ts):'Bonyeza kuongeza hali'}</span></span></button>
  <p style="margin:.4rem 0"><button class="btn sm" data-act="addStatus">${ic('plus')} Ongeza hali</button></p>
  <h3 style="font:800 1rem var(--font-display);margin:.8rem 0 .2rem">Status za hivi karibuni</h3>${others.length?`<div class="list">${others.map(s=>{const c=contactOf(s.by);return`<button class="item" data-act="viewStatus" data-id="${s.id}">${av(c.name,'ring',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${ago(s.ts)}</span></span></button>`}).join('')}</div>`:'<div class="empty">Hakuna hali mpya.</div>'}</div>`}
function channelsBody(){const u=curUser();
  if(S.cv&&S.cv.startsWith('ch:')){const ch=u.channels.find(c=>c.id===S.cv.slice(3));if(ch)return`<div class="pad"><div class="row"><button class="icon-btn" data-act="chBack" aria-label="Rudi">${ic('back')}</button><div class="grow"><b>${esc(ch.name)}</b><br><span class="muted small">${esc(ch.desc)}</span></div><button class="btn sm ${ch.followed||ch.mine?'ghost':''}" data-act="chFollow" data-id="${ch.id}">${ch.mine?'Kituo chako':ch.followed?'Unafuata':'Fuata'}</button></div>
    ${ch.mine?`<form class="row" data-form="chpost" data-id="${ch.id}" style="margin:.8rem 0"><input class="field grow" name="t" maxlength="300" placeholder="Andika chapisho la kituo" aria-label="Chapisho la kituo"><button class="btn" aria-label="Tuma">${ic('send')}</button></form>`:''}
    <div style="margin-top:.6rem">${ch.posts.length?ch.posts.slice().sort((a,b)=>b.ts-a.ts).map(p=>`<div class="card" style="margin-bottom:.6rem"><p>${esc(p.text)}</p><span class="muted small">${ago(p.ts)}</span></div>`).join(''):'<div class="empty">Hakuna machapisho bado.</div>'}</div></div>`}
  const q=(S.chq||'').toLowerCase();
  return`<div class="pad"><div class="row"><div class="searchbar grow">${ic('search')}<input id="chq" value="${esc(S.chq||'')}" placeholder="Search vituo" aria-label="Search vituo"></div><button class="btn sm" data-act="chCreate">${ic('plus')} Unda</button></div><div id="chlist">${chList(q)}</div></div>`}
function chList(q){const l=curUser().channels.filter(c=>c.name.toLowerCase().includes(q));return l.length?`<div class="list" style="margin-top:.6rem">${l.map(c=>`<button class="item" data-act="chOpen" data-id="${c.id}">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.desc)}</span></span>${c.mine?'<span class="pill">Chako</span>':c.followed?'<span class="pill">Unafuata</span>':''}</button>`).join('')}</div>`:'<div class="empty">Hakuna kituo kilichopatikana.</div>'}
const chatBodyFor=()=>S.ct==='calls'?callsBody():S.ct==='status'?statusBody():S.ct==='channels'?channelsBody():`<div class="pad"><div class="searchbar">${ic('search')}<input id="cq" value="${esc(S.cq||'')}" placeholder="Search mazungumzo" aria-label="Search mazungumzo"></div></div><div id="clist">${chatList()}</div><button class="fab" data-act="newChat" aria-label="Mazungumzo mapya">${ic('chat')}</button>`;
const paintChatBody=()=>{const b=$('#cbody');if(b)b.innerHTML=chatBodyFor()};
function msgsHTML(c){return c.msgs.map(m=>{if(m.kind==='sys')return`<div class="m sys">${esc(m.text)}</div>`;const me=m.from==='me';let body;
    if(m.kind==='image')body=safeSrc(m.src)?`<img src="${safeSrc(m.src)}" alt="Photos">`:'📷 Photos haipatikani tena';
    else if(m.kind==='voice')body=safeSrc(m.src)?`<audio controls src="${safeSrc(m.src)}"></audio>`:'🎤 Ujumbe wa sauti (haupatikani tena)';
    else if(m.kind==='file')body=`📎 ${esc(m.name||'Faili')}`;else body=esc(m.text);
    return`<div class="m ${me?'me':'them'}">${body}<span style="display:block;text-align:right;font-size:.65rem;opacity:.65">${hhmm(m.ts)}</span></div>`}).join('')+(TYPING[c.id]?'<div class="m them"><span class="pulse"></span> Anaandika…</div>':'')}
function paintThread(){const u=curUser(),c=u&&u.chats[S.thread],b=$('#msgs');if(c&&b){b.innerHTML=msgsHTML(c);b.scrollTop=b.scrollHeight}}
function composeHTML(){if(REC)return`<button class="icon-btn" data-act="recCancel" aria-label="Ghairi">${ic('trash')}</button><span class="rec"><span class="pulse" style="background:var(--danger)"></span> Inarekodi <span id="recT">0:00</span></span><button class="btn" data-act="rec" aria-label="Tuma sauti">${ic('send')}</button>`;
  return`<button class="icon-btn" data-act="thAttach" aria-label="Ambatisha">${ic('plus')}</button><button class="icon-btn" data-act="thCamera" aria-label="Camera">${ic('camera')}</button><textarea class="field" id="msgText" rows="1" placeholder="Andika ujumbe" aria-label="Ujumbe"></textarea><button class="icon-btn" data-act="emoToggle" aria-label="Emoji">${ic('smile')}</button><button class="icon-btn" id="micBtn" data-act="rec" aria-label="Rekodi sauti">${ic('mic')}</button><button class="btn hidden" id="sendBtn" data-act="thSend" aria-label="Tuma">${ic('send')}</button>`}
const paintCompose=()=>{const c=$('#compose');if(c)c.innerHTML=composeHTML()};
function threadHTML(){const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null,n=chatTitle(c);c.unread=0;
  const sub=ct?(ct.ai?'Msaidizi wa AI':ct.role||''):c.type==='group'?'Kundi':'';
  return`<div class="fillabs thread" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><button class="icon-btn" data-act="thBack" aria-label="Rudi">${ic('back')}</button>${av(n,'sm',colorOf(c.id))}<div class="grow"><b>${esc(n)}</b><br><span class="muted small">${esc(sub)}</span></div>${ct&&!ct.ai?`<button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Simu ya sauti">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Simu ya video">${ic('video')}</button>`:''}<button class="icon-btn" data-act="thMenu" aria-label="Zaidi">${ic('more')}</button></div>
  <div class="msgs" id="msgs">${msgsHTML(c)}</div><div id="emoRow" class="emojis hidden" style="padding:.3rem .6rem;background:var(--surface)">${EMO.map(e=>`<button type="button" data-act="emo" data-e="${e}" aria-label="Emoji ${e}">${e}</button>`).join('')}</div><div class="compose" id="compose">${composeHTML()}</div></div>`}
VIEWS.chat=()=>{if(!curUser())return gate('Chat');if(S.thread)return threadHTML();
  return`<div class="fillabs" data-pal="${chatPal()}" style="background:var(--bg);color:var(--text)"><div class="chead"><h2>${CT_TITLE[S.ct]}</h2>${S.ct==='chats'?`<button class="icon-btn" data-act="cmenu" aria-label="Chat menu">${ic('more')}</button>`:''}</div><div class="cbody" id="cbody" style="position:relative">${chatBodyFor()}</div>
  <div class="ctabs" role="tablist">${[['chats','chat','Chats'],['calls','phone','Simu'],['status','status','Status'],['channels','mega','Vituo']].map(([i,c,l])=>`<button role="tab" class="${S.ct===i?'on':''}" data-act="ctab" data-t="${i}">${ic(c)}<span>${l}</span></button>`).join('')}</div></div>`};
POST.chat=()=>{const b=$('#msgs');if(b)b.scrollTop=b.scrollHeight};
ACT.ctab=el=>{S.ct=el.dataset.t;S.cv=null;render()};
ACT.openThread=el=>{if(needLogin())return;ensureChat(el.dataset.id);S.ct='chats';go('chat',{thread:el.dataset.id})};
ACT.thBack=()=>{S.thread=null;if(REC)recStop(true);render()};
async function sendMsg(chatId,text,extra){const c=ensureChat(chatId);c.msgs.push(Object.assign({id:uid('m'),from:'me',kind:'text',text,ts:now()},extra||{}));save();if(S.view==='chat'&&S.thread===chatId)paintThread();
  const ct=c.type==='dm'?contactOf(chatId):null;if(ct&&ct.ai&&!ct.blocked&&(!extra||!extra.kind||extra.kind==='text'))await botReply(ct,c)}
async function botReply(ct,c){const key=c.id;TYPING[key]=true;if(S.view==='chat'&&S.thread===key)paintThread();
  const hist=c.msgs.filter(m=>m.kind==='text'&&m.text).slice(-12).map(m=>({role:m.from==='me'?'user':'assistant',content:m.text}));
  let reply;try{reply=(await runAI(hist,{system:BASE_SYS})).text}catch(e){reply=localGuide(hist.length?hist[hist.length-1].content:'')||aiErr(e)}
  TYPING[key]=false;const u=curUser();if(!u||!u.chats[key])return;u.chats[key].msgs.push({id:uid('m'),from:ct.id,kind:'text',text:reply,ts:now()});
  const open=S.view==='chat'&&S.thread===key;if(!open)u.chats[key].unread++;save();if(S.view==='chat'){if(open)paintThread();else if(!S.thread&&S.ct==='chats')paintChatBody()}}
ACT.thSend=()=>{const t=$('#msgText');if(!t)return;const v=t.value.trim();if(!v)return;t.value='';t.style.height='';$('#sendBtn').classList.add('hidden');$('#micBtn').classList.remove('hidden');sendMsg(S.thread,v)};
ACT.emoToggle=()=>{const r=$('#emoRow');if(r)r.classList.toggle('hidden')};
ACT.thAttach=()=>sheet('Ambatisha',`<div class="menu"><button data-act="thFile" data-k="image">${ic('image')} Photos</button><button data-act="thFile" data-k="file">${ic('clip')} Faili</button></div>`);
ACT.thCamera=()=>attachTo('image','environment');
ACT.thFile=el=>{closeSheet();attachTo(el.dataset.k)};
async function attachTo(k,cap){if(!ST().perm.file&&!cap)return toast('Permissions ya faili imezimwa kwenye Mipangilio.');if(cap&&!ST().perm.camera)return toast('Permissions ya kamera imezimwa kwenye Mipangilio.');
  const f=await pickFile(k==='image'?'image/*':'',cap);if(!f)return;try{if(k==='image')sendMsg(S.thread,'',{kind:'image',src:await imgToData(f,900,.7)});else sendMsg(S.thread,'',{kind:'file',name:f.name,size:f.size})}catch(e){toast('Imeshindwa kusoma faili.')}}
ACT.rec=()=>{if(REC)recStop(false);else recStart()};ACT.recCancel=()=>recStop(true);
async function recStart(){if(!ST().perm.mic)return toast('Permissions ya maikrofoni imezimwa kwenye Mipangilio.');if(!navigator.mediaDevices||!window.MediaRecorder)return toast('Kurekodi sauti hakupatikani kwenye kivinjari hiki.');
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),mr=new MediaRecorder(st),ch=[];mr.ondataavailable=e=>{if(e.data&&e.data.size)ch.push(e.data)};REC={mr,st,ch,t0:now(),cancel:false,chat:S.thread};
    mr.onstop=()=>{st.getTracks().forEach(t=>t.stop());const r=REC;REC=null;clearInterval(recT);paintCompose();if(!r||r.cancel)return;const blob=new Blob(r.ch,{type:mr.mimeType||'audio/webm'});sendMsg(r.chat,'',{kind:'voice',src:URL.createObjectURL(blob),dur:Math.round((now()-r.t0)/1000)})};
    mr.start();recT=setInterval(()=>{const e=$('#recT');if(e&&REC){const s=Math.floor((now()-REC.t0)/1000);e.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}},500);paintCompose()}catch(e){toast('Ruhusu maikrofoni kwenye kivinjari ili kurekodi.')}}
function recStop(cancel){if(!REC)return;REC.cancel=!!cancel;try{REC.mr.stop()}catch(e){REC=null;paintCompose()}}
ACT.thMenu=()=>{const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null;
  sheet(chatTitle(c),`<div class="menu">${ct?`<button data-act="viewContact">${ic('user')} Angalia mwasiliani</button><button data-act="favContact">${ic('star')} ${ct.fav?'Ondoa kwenye pendwa':'Weka pendwa'}</button>`:`<button data-act="viewContact">${ic('users')} Washiriki</button>`}<button data-act="thMedia">${ic('image')} Media</button>${ct&&!ct.ai?`<button data-act="blockContact">${ic('ban')} Zuia</button>`:''}<button data-act="clearChat">${ic('trash')} Futa mazungumzo</button></div>`)};
ACT.viewContact=()=>{const c=ensureChat(S.thread),ct=c.type==='dm'?contactOf(c.id):null;
  sheet(chatTitle(c),ct?`<div class="prof">${av(ct.name,'lg',colorOf(ct.id))}<b>${esc(ct.name)}</b><span class="muted">${esc(ct.role||'')}</span></div>`:`<div class="list">${(c.members||[]).map(id=>{const m=contactOf(id);return m?`<div class="item">${av(m.name,'sm',colorOf(id))}<span>${esc(m.name)}</span></div>`:''}).join('')||'<div class="empty">Washiriki wataonekana hapa.</div>'}</div>`)};
ACT.favContact=()=>{const ct=contactOf(S.thread);ct.fav=!ct.fav;save();closeSheet();toast(ct.fav?'Imewekwa pendwa':'Imeondolewa kwenye pendwa')};
ACT.thMedia=()=>{const c=ensureChat(S.thread),im=c.msgs.filter(m=>m.kind==='image'&&safeSrc(m.src));sheet('Media',im.length?`<div class="thumbs">${im.map(m=>`<div class="thumb"><img src="${safeSrc(m.src)}" alt="Photos"></div>`).join('')}</div>`:'<div class="empty">Hakuna picha kwenye mazungumzo haya.</div>')};
ACT.blockContact=()=>{const ct=contactOf(S.thread);if(!ct)return;ct.blocked=true;if(PRIV().autoDelBlocked)delete curUser().chats[ct.id];save();S.thread=null;closeSheet();render();toast(ct.name+' amezuiwa')};
ACT.clearChat=()=>{const c=ensureChat(S.thread);c.msgs=[];save();closeSheet();paintThread()};
ACT.cmenu=()=>sheet('Chat',`<div class="menu"><button data-act="communities">${ic('users')} Communities</button><button data-act="newGroup">${ic('plus')} Create group</button><button data-act="contacts">${ic('user')} All contacts</button><button data-act="invite">${ic('send')} Invite a person</button><button data-act="blockedList">${ic('ban')} Blocked users</button><button data-act="go" data-v="settings">${ic('settings')} Mipangilio</button></div>`);
const contactRows=(act,extra)=>curUser().contacts.filter(c=>!c.blocked&&(extra?!c.ai:true)).map(c=>`<button class="item" data-act="${act}" data-id="${esc(c.id)}">${av(c.name,'sm',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.role||'')}</span></span></button>`).join('');
ACT.newChat=()=>sheet('Mazungumzo mapya',`<div class="list">${contactRows('openThread')}</div>`);
ACT.contacts=()=>sheet('All contacts',`<div class="list">${contactRows('openThread')}</div>`);
ACT.blockedList=()=>{const b=curUser().contacts.filter(c=>c.blocked);sheet('Blocked users',b.length?`<div class="list">${b.map(c=>`<div class="item">${av(c.name,'sm')}<span class="grow">${esc(c.name)}</span><button class="btn ghost sm" data-act="unblock" data-id="${esc(c.id)}">Fungua</button></div>`).join('')}</div>`:'<div class="empty">Hakuna uliyemzuia.</div>')};
ACT.unblock=el=>{const c=contactOf(el.dataset.id);if(c)c.blocked=false;save();ACT.blockedList();if(S.view==='chat'&&!S.thread)paintChatBody()};
ACT.communities=()=>{const u=curUser();sheet('Communities',`<div class="list">${u.communities.map(c=>`<div class="item">${av(c.name,'',colorOf(c.id))}<span class="grow"><b>${esc(c.name)}</b><br><span class="muted small">${esc(c.desc)}</span></span><button class="btn ${c.joined?'ghost':''} sm" data-act="joinComm" data-id="${c.id}">${c.joined?'Ondoka':'Jiunge'}</button></div>`).join('')}</div>`)};
ACT.joinComm=el=>{const u=curUser(),c=u.communities.find(x=>x.id===el.dataset.id);if(!c)return;c.joined=!c.joined;if(c.joined)u.chats[c.id]={id:c.id,type:'group',name:c.name,unread:0,members:[],msgs:[{id:uid('m'),kind:'sys',text:'Umejiunga na jumuiya ya '+c.name+'. Ujumbe hapa unahifadhiwa kwenye kifaa chako tu.',ts:now()}]};else delete u.chats[c.id];save();ACT.communities();if(S.view==='chat'&&!S.thread)paintChatBody()};
ACT.newGroup=()=>sheet('Kundi jipya',`<form class="form" data-form="group"><label class="lab">Jina la kundi<input class="field" name="name" required maxlength="40"></label><div>${curUser().contacts.filter(c=>!c.ai&&!c.blocked).map(c=>`<label class="radio"><input type="checkbox" name="m" value="${esc(c.id)}"> ${esc(c.name)}</label>`).join('')||'<span class="muted small">Ongeza mwasiliani kwanza kupitia “Invite a person”.</span>'}</div><button class="btn">Unda kundi</button></form>`);
FORM.group=f=>{const u=curUser(),id=uid('g'),m=[...f.querySelectorAll('input[name=m]:checked')].map(i=>i.value);u.chats[id]={id,type:'group',name:fv(f,'name').trim(),unread:0,members:m,msgs:[{id:uid('m'),kind:'sys',text:'Umeunda kundi hili.',ts:now()}]};save();closeSheet();S.ct='chats';go('chat',{thread:id})};
ACT.invite=()=>sheet('Invite a person',`<form class="form" data-form="invite"><label class="lab">Jina (si lazima)<input class="field" name="name" maxlength="40"></label><label class="lab">Namba ya simu (si lazima)<input class="field" name="phone" inputmode="tel" maxlength="20" placeholder="255..."></label><button class="btn">Andaa mwaliko</button></form>`);
FORM.invite=f=>{const u=curUser(),name=fv(f,'name').trim(),ph=fv(f,'phone').replace(/\D/g,''),txt='Jiunge nami kwenye MIMI NI MKULIMA, app ya wakulima na wafugaji: '+location.href.split('#')[0];
  if(name){u.contacts.push({id:uid('c'),name,role:ph?'+'+ph:'Mwalikwa',online:false,fav:false,blocked:false});save()}
  sheet('Mwaliko uko tayari',`<p class="muted small" style="margin-bottom:.6rem">${esc(txt)}</p><div class="menu"><a href="https://wa.me/${ph}?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener noreferrer">${ic('phone')} Tuma kwa WhatsApp</a><button data-act="copyLink" data-url="${esc(txt)}">${ic('link')} Nakili ujumbe</button></div>${name?`<p class="note">${esc(name)} ameongezwa kwenye anwani zako.</p>`:''}`)};
ACT.newCall=()=>sheet('Simu mpya',`<div class="list">${curUser().contacts.filter(c=>!c.ai&&!c.blocked).map(c=>`<div class="item">${av(c.name,'sm',colorOf(c.id))}<span class="grow">${esc(c.name)}</span><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="voice" aria-label="Sauti">${ic('phone')}</button><button class="icon-btn" data-act="call" data-id="${esc(c.id)}" data-k="video" aria-label="Video">${ic('video')}</button></div>`).join('')}</div>`);
ACT.call=el=>{const id=el.dataset.id||S.thread,kind=el.dataset.k,ct=contactOf(id);if(!ct||CALL)return;closeSheet();
  if(kind==='video'&&!ST().perm.camera)return toast('Permissions ya kamera imezimwa kwenye Mipangilio.');
  const d=document.createElement('div');d.className='callscr';d.innerHTML=`<div class="who">${av(ct.name,'lg',colorOf(ct.id))}<h2>${esc(ct.name)}</h2><p id="callSt">Inapiga…</p></div><button class="endcall" data-act="endCall" aria-label="Kata simu">${ic('phone')}</button>`;document.body.appendChild(d);
  CALL={el:d,stream:null,t:setTimeout(()=>{const s=$('#callSt');if(s)s.textContent='Haipatikani. Simu za moja kwa moja zinahitaji seva ya mawasiliano ambayo bado haijaunganishwa.'},3500)};
  if(kind==='video'&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)navigator.mediaDevices.getUserMedia({video:true}).then(s=>{if(!CALL){s.getTracks().forEach(t=>t.stop());return}CALL.stream=s;const v=document.createElement('video');v.muted=true;v.autoplay=true;v.playsInline=true;v.srcObject=s;d.prepend(v)}).catch(()=>{});
  curUser().calls.unshift({id:uid('c'),contactId:id,kind,ts:now(),res:'haikuunganishwa'});save()};
ACT.endCall=()=>{if(!CALL)return;clearTimeout(CALL.t);if(CALL.stream)CALL.stream.getTracks().forEach(t=>t.stop());CALL.el.remove();CALL=null;if(S.view==='chat'&&S.ct==='calls'&&!S.thread)paintChatBody()};
ACT.addStatus=()=>sheet('Status mpya',`<form class="form" data-form="status"><label class="lab">Write your status<textarea class="field" name="text" maxlength="140"></textarea></label><div class="row wrap">${BGS.map((b,i)=>`<label class="radio"><input type="radio" name="bg" value="${i}" ${i===0?'checked':''} aria-label="Rangi ${i+1}"><span style="width:1.6rem;height:1.6rem;border-radius:50%;background:${b};display:inline-block"></span></label>`).join('')}</div><div class="row"><button type="button" class="btn ghost sm" data-act="stImg">${ic('image')} Photos</button><span id="stName" class="muted small"></span></div><button class="btn">Post status</button></form><p class="muted small" style="margin-top:.6rem">Status hupotea baada ya saa 24.</p>`);
let STIMG=null;
ACT.stImg=async()=>{const f=await pickFile('image/*');if(!f)return;try{STIMG=await imgToData(f,800,.7);$('#stName').textContent=f.name}catch(e){toast('Imeshindwa kusoma picha.')}};
FORM.status=f=>{const t=fv(f,'text').trim();if(!t&&!STIMG)return toast('Write a status or choose a photo.');const u=curUser();u.statuses.push({id:uid('st'),by:'me',text:t,bg:+(f.querySelector('input[name=bg]:checked')||{value:0}).value,img:STIMG,ts:now()});STIMG=null;save();closeSheet();paintChatBody()};
ACT.viewStatus=el=>{const s=curUser().statuses.find(x=>x.id===el.dataset.id);if(!s)return;const d=document.createElement('div');d.className='view-stat';d.style.background=BGS[s.bg||0];d.setAttribute('role','dialog');d.setAttribute('aria-label','Status');d.innerHTML=`${s.img&&safeSrc(s.img)?`<img src="${safeSrc(s.img)}" alt="Status">`:''}${s.text?`<p>${esc(s.text)}</p>`:''}<button class="icon-btn" style="position:absolute;top:1rem;right:1rem;color:#fff" aria-label="Close">${ic('x')}</button>`;const c=()=>{clearTimeout(t);d.remove()};d.onclick=c;const t=setTimeout(c,6000);document.body.appendChild(d)};
ACT.chOpen=el=>{S.cv='ch:'+el.dataset.id;paintChatBody()};ACT.chBack=()=>{S.cv=null;paintChatBody()};
ACT.chFollow=el=>{const c=curUser().channels.find(x=>x.id===el.dataset.id);if(c&&!c.mine){c.followed=!c.followed;save();paintChatBody()}};
ACT.chCreate=()=>sheet('Kituo kipya',`<form class="form" data-form="channel"><label class="lab">Jina la kituo<input class="field" name="name" required maxlength="40"></label><label class="lab">Overview<input class="field" name="desc" maxlength="100"></label><button class="btn">Unda kituo</button></form>`);
FORM.channel=f=>{const u=curUser(),id=uid('ch');u.channels.unshift({id,name:fv(f,'name').trim(),desc:fv(f,'desc').trim(),followed:false,mine:true,posts:[]});save();closeSheet();S.cv='ch:'+id;paintChatBody()};
FORM.chpost=f=>{const c=curUser().channels.find(x=>x.id===f.dataset.id),t=fv(f,'t').trim();if(!c||!t)return;c.posts.push({id:uid('cp'),text:t,ts:now()});save();paintChatBody()};

/* ============ settings ============ */
VIEWS.settings=()=>{const s=ST(),pv=PRIV(),u=curUser();
  const sw=(k,v,l,src)=>`<label class="srow"><span>${l}</span><span class="sw"><input type="checkbox" role="switch" data-set="${k}" data-src="${src}" ${v?'checked':''}><i></i></span></label>`;
  return`<div class="view" style="max-width:640px"><h2 style="font:800 2rem var(--font-display);letter-spacing:-.02em">Mipangilio</h2>
  <h3 class="sgroup">Skrini</h3>${sw('dark',s.dark,'Dark mode','st')}
  <div class="srow"><span>Text format</span><select class="field" data-set="font" data-src="st" aria-label="Aina ya maandishi"><option value="sans" ${s.font==='sans'?'selected':''}>Kawaida</option><option value="serif" ${s.font==='serif'?'selected':''}>Times New Roman</option><option value="mono" ${s.font==='mono'?'selected':''}>Monospace</option></select></div>
  <div class="srow"><span>Text size</span><select class="field" data-set="size" data-src="st" aria-label="Ukubwa wa maandishi">${[80,90,100,110,125,150].map(n=>`<option value="${n}" ${s.size===n?'selected':''}>${n}%</option>`).join('')}</select></div>
  <h3 class="sgroup">Chat theme</h3>${[['system','System (follow dark mode)'],['dark','Dark mode'],['light','Light mode']].map(([v,l])=>`<label class="radio"><input type="radio" name="ctheme" value="${v}" data-set="chatTheme" data-src="st" ${s.chatTheme===v?'checked':''}> ${l}</label>`).join('')}
  <h3 class="sgroup">Privacy</h3>${sw('shareInfo',pv.shareInfo,'Shiriki taarifa zangu (bio)','priv')}${sw('allowProfile',pv.allowProfile,'Ruhusu wengine waone wasifu wangu','priv')}${sw('secure',pv.secure,'Security mode (ficha ujumbe kwenye orodha ya chat)','priv')}${sw('autoDelBlocked',pv.autoDelBlocked,'Futa mazungumzo ya waliozuiwa kiotomatiki','priv')}${sw('location',pv.location,'Eneo (location)','priv')}
  <h3 class="sgroup">Permissions</h3>${sw('file',s.perm.file,'File access','perm')}${sw('camera',s.perm.camera,'Camera','perm')}${sw('mic',s.perm.mic,'Microphone','perm')}
  <h3 class="sgroup">Account</h3>${u?`<div class="srow"><span>${esc(u.name)}<br><span class="muted small">${esc(u.handle)}</span></span><button class="btn danger sm" data-act="logout">${ic('logout')} Log out</button></div>`:`<div class="srow"><span class="muted">Not logged in</span><button class="btn sm" data-act="go" data-v="account">Log in</button></div>`}
  <p class="muted small" style="margin-top:1.2rem">Privacy settings ${u?'inahusu akaunti yako':'will switch to the account you open'}. All data is stored on this device.</p></div>`};
async function setPref(t){const k=t.dataset.set,src=t.dataset.src,val=t.type==='checkbox'?t.checked:t.type==='radio'?t.value:t.tagName==='SELECT'&&k==='size'?+t.value:t.value;
  if(src==='perm'){if(val&&(k==='camera'||k==='mic')&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){try{const s=await navigator.mediaDevices.getUserMedia(k==='camera'?{video:true}:{audio:true});s.getTracks().forEach(x=>x.stop())}catch(e){t.checked=false;return toast('Kivinjari hakikuruhusu '+(k==='camera'?'kamera':'maikrofoni')+'. Ruhusu kwenye mipangilio ya kivinjari.')}}DB.settings.perm[k]=val}
  else if(src==='priv')PRIV()[k]=val;else DB.settings[k]=val;
  save();if(src==='st')render()}

/* ============ about ============ */
VIEWS.about=()=>`<div class="view about" style="max-width:720px"><h2>MIMI NI<br>MKULIMA</h2>
  <p>App ya wakulima na wafugaji wa Tanzania: mahali pamoja pa kujifunza, kuuliza AI, kufuatilia shamba au banda lako, kuzungumza na wenzako na kushiriki maarifa kupitia Stream.</p>
  <h3>Lengo</h3><ul><li>Kuwapa wakulima na wafugaji maarifa bora ya kilimo na ufugaji kwa lugha rahisi ya Kiswahili.</li><li>Kurahisisha kupata ushauri kupitia msaidizi wa AI na wataalamu.</li><li>Kusaidia kupanga kazi, mapato na matumizi ya shamba au banda.</li><li>Kuunganisha jamii ya wakulima na wafugaji kwa mazungumzo, jumuiya na masoko.</li></ul>
  <h3>Msanidi</h3><p><b>Daxon Technology</b>, Mbeya, Tanzania.<br>Damian Daud Malunda, Mwanzilishi na Mkurugenzi Mkuu.</p>
  <p class="muted">Huduma za Daxon Technology: uundaji wa programu, usanifu wa picha (graphic design), msaada wa IT na matengenezo ya vifaa vya elektroniki.</p>
  <p class="note" style="margin-top:1.4rem">Toleo la 1.0. Overview ya AI ni ya jumla; kwa dawa, chanjo na magonjwa makali wasiliana na afisa ugani au daktari wa mifugo.</p></div>`;

/* ============ events ============ */
document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el)return;const f=ACT[el.dataset.act];if(f)f(el,e)});
const _go=ACT.go;ACT.go=el=>{if(el.dataset.v==='chat')S.thread=null;_go(el)};
document.addEventListener('submit',e=>{const f=e.target.closest('form[data-form]');if(!f)return;e.preventDefault();const h=FORM[f.dataset.form];if(h)h(f)});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset&&t.dataset.set)setPref(t)});
document.addEventListener('input',e=>{const t=e.target;
  if(t.tagName==='TEXTAREA'&&(t.id==='aiText'||t.id==='msgText')){t.style.height='auto';t.style.height=Math.min(t.scrollHeight,140)+'px'}
  if(t.id==='msgText'){const has=!!t.value.trim();$('#sendBtn').classList.toggle('hidden',!has);$('#micBtn').classList.toggle('hidden',has)}
  if(t.id==='cq'){S.cq=t.value;$('#clist').innerHTML=chatList()}
  if(t.id==='chq'){S.chq=t.value;$('#chlist').innerHTML=chList(t.value.toLowerCase())}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();return}
  if(e.key==='Enter'&&!e.shiftKey&&e.target.tagName==='TEXTAREA'){if(e.target.id==='aiText'){e.preventDefault();aiSend()}else if(e.target.id==='msgText'){e.preventDefault();ACT.thSend()}}});
if(/^#post=/.test(location.hash)){S.stream.focus=decodeURIComponent(location.hash.slice(6));S.view='stream'}
render();
})();
