import { h } from './main-B0P4vA-S.js';
import './routeAssumptions-D6qzFEVR.js';

const copy = {
  badge:'UK hospitality and gaming guide',
  title:'Ultimate Guide to UK Hotels with Onsite Casinos and Slots',
  intro:"The sophisticated combination of hospitality and entertainment appears at hotels that provide complete facilities for casinos in the centre of Britain's cities and luxurious countryside areas. These facilities deliver an enjoyable all-around experience which satisfies residence needs along with entertainment excitement for people from different regions.",
  sections:[
    ['The Evolution of Casino Hotels in Britain','Casino hotels in Britain experienced major development from the 1960s until now following the Gaming Act which transformed basic gaming spaces into fully-developed entertainment centres. Modern casino hotels merge accommodations with eating establishments and gambling activities and deliver advanced slots machines and table games which offer continuous entertainment throughout the day to their guests.'],
    ['Premier Destinations Across the Kingdom','Many prestigious casino hotels operate in London where Mayfair stands as the district that houses several internationally recognised establishments. Beyond London, significant casino hotels dot the landscape of major cities like Manchester, Birmingham, and Edinburgh. Each property showcases a distinct architectural appeal while maintaining high service standards and a wide array of gaming options.'],
    ['Accommodation and Amenities','UK casino hotels provide hotel services above what standard hotels do. Rooms and suites may include advanced security systems, private check-in stations, VIP gaming access, butler service, in-room dining, and elite entertainment services throughout the premises.'],
    ['Entertainment Beyond Gaming','Modern casinos provide guests with rich entertainment options beyond gaming, including jazz lounges, theatrical performances, spas, fitness facilities, private movie theatres, restaurants, and bars with unique designs that match various needs and preferences.'],
    ['Business and Events','UK casino hotels have become attractive destinations for business groups and private celebration organizers. Many properties present sophisticated conference facilities, meeting rooms, event spaces, and modern technical equipment.'],
    ['Location and Accessibility','Prime locations are carefully planned. London casino hotels offer airport connections through Heathrow and Gatwick, rail transport options, parking areas, and regional access. Some luxury properties serving high-roller guests may also offer premium arrival services.'],
    ['Technology and Innovation','High-tech innovations exist throughout casino hotels to elevate guest benefits. Advanced security systems, smart room controls, and mobile interfaces allow visitors to manage their stay with simple commands while preserving luxury hospitality.'],
    ['Regulatory Compliance and Security','Casino hotels need to follow UK gaming regulations with trained personnel, advanced security systems, and sophisticated access controls. The sector presents an exclusive combination of luxury accommodation, entertainment, business services, and distinctive travel experiences.']
  ],
  age:'This website is for users aged 18+. Please confirm you are 18 or over to proceed.',
  confirm:'Yes, I’m 18+'
};

function isMobile(){return window.matchMedia('(max-width: 780px), (pointer: coarse)').matches}
function accepted(){return sessionStorage.getItem('age_gate_ok')==='1'}
function buildAgeGate(root){
  if(!isMobile() || accepted()) return;
  const backdrop=h('div',{class:'age-backdrop'},[
    h('div',{class:'age-box'},[
      h('p',{text:copy.age}),
      h('button',{class:'age-button',type:'button',text:copy.confirm})
    ])
  ]);
  backdrop.querySelector('button').addEventListener('click',()=>{sessionStorage.setItem('age_gate_ok','1');backdrop.remove()});
  root.appendChild(backdrop);
}
function input(name,placeholder,type='text'){return h('input',{name,placeholder,type,required:'required'})}
function buildApp(shadow){
  const app=h('div',{class:'app-frame'},[
    h('aside',{class:'sidebar'},[
      h('div',{class:'brand',text:'Travel Guide'}),
      h('nav',{class:'nav'},[
        h('a',{href:'#guide',text:'Guide'}),h('a',{href:'#article',text:'Article'}),h('a',{href:'#newsletter',text:'Newsletter'})
      ])
    ]),
    h('main',{class:'main'},[
      h('section',{class:'hero',id:'guide'},[
        h('span',{class:'badge',text:copy.badge}),
        h('h1',{text:copy.title}),
        h('p',{class:'lead',text:copy.intro}),
        h('div',{class:'actions'},[h('a',{class:'button primary',href:'#newsletter',text:'Sign up to the newsletter'}),h('a',{class:'button secondary',href:'#article',text:'Read the guide'})])
      ]),
      h('section',{class:'grid',id:'article'},copy.sections.map(s=>h('article',{class:'card'},[h('h2',{text:s[0]}),h('p',{text:s[1]})]))),
      h('section',{class:'newsletter',id:'newsletter'},[
        h('h2',{text:'Sign up to our newsletter'}),
        h('p',{text:'Get updates about hotel guides, travel inspiration, and destination features.'}),
        h('form',{class:'form'},[input('name','Your name'),input('email','Email address','email'),h('button',{type:'submit',text:'Sign Up'})]),
        h('div',{class:'notice',style:'display:none',text:'Thanks. Your signup was saved on this browser.'})
      ]),
      h('footer',{class:'footer',text:'Information guide for adults 18+. Please check local rules and official venue information before travelling.'})
    ])
  ]);
  const form=app.querySelector('form');
  form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const leads=JSON.parse(localStorage.getItem('newsletter_leads')||'[]');leads.push({...data,createdAt:new Date().toISOString(),page:location.href});localStorage.setItem('newsletter_leads',JSON.stringify(leads));form.reset();app.querySelector('.notice').style.display='block'});
  shadow.appendChild(app);
  buildAgeGate(shadow);
}

const host=document.getElementById('root');
if(host){
  const closedShadow=host.attachShadow({mode:'closed'});
  const cssLink=document.createElement('link');cssLink.rel='stylesheet';cssLink.href='assets_vjs/main-CYEVdsHA.css';closedShadow.appendChild(cssLink);
  buildApp(closedShadow);
}
localStorage.removeItem('entrypoint-chunk-retry-count');
