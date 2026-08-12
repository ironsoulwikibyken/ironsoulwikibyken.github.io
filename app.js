/* ==========================================================================
   GameWiki — Application Engine
   Hash-based router + reusable render templates driven entirely by data.js
   ========================================================================== */

/* ---------------------------- Icon library ---------------------------- */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  chevronUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M3 12h18M12 8c-2 0-4-1-4-3a2 2 0 0 1 4-1 2 2 0 0 1 4 1c0 2-2 3-4 3z"/></svg>',
  hammer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5a2 2 0 0 1-2.8-2.8L12 9"/><path d="M17.6 3.4 21 6.8l-4 4-3.4-3.4z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 3.1 6.6 7.2.9-5.3 5 1.4 7.2-6.4-3.6-6.4 3.6 1.4-7.2-5.3-5 7.2-.9z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 8-8M15 7h6v6"/></svg>',
  sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 17.5 5-5L21 4l-8.5 1.5-5 5M6 15l3 3M2 22l6-6M9.5 5.5 4 11l3.5 3.5L13 9"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 3-6.5 6.5M15 3l6 6M3 21l9-9M6 3v3M3 6h3M18 15v3M16.5 16.5h3"/></svg>',
  axe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4c3 .5 6 3 6 7-4 1-7-1-8-4M6 22l6-13M14 4a3 3 0 0 0-3 3c0 2 1 3 3 3"/></svg>',
  fist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12V7a1.5 1.5 0 0 1 3 0M11 12V6a1.5 1.5 0 0 1 3 0v6M14 12V7a1.5 1.5 0 0 1 3 0v6M5 13l1-2a1.5 1.5 0 0 1 2.8 1l-.3 1M5 13v3a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-3"/></svg>',
  scythe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3s10-1 12 6c1 4-2 7-6 7a7 7 0 0 1-6-3"/><path d="M10 15 4 21"/></svg>',
  bow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3a15 15 0 0 0 0 18M6 3l14 9L6 21M6 12h14"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  pick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5c3 1 5 3 5 3s-2 2-5 3M9.5 20.5c-3-1-5-3-5-3s2-2 5-3M4 20 19.5 4.5"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  bookmarkFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21 8 9l4-6 4 6z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  door: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V4a1 1 0 0 1 1-1h7l5 4v14M13 12v.01"/></svg>',
  news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h13a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1H6a2 2 0 0 1-2-2z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 4 4v4a2 2 0 0 0-2 2H6a2 2 0 0 0-4-4z"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s6 5 6 11a6 6 0 0 1-12 0c0-2 1-3 1-3s1 2 3 2c-1-3 0-6 2-10z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 6-6 2 2-6z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 5.4A17 17 0 0 0 15.9 4l-.3.6a12 12 0 0 1 3.6 1.4 15 15 0 0 0-14.4 0 12 12 0 0 1 3.7-1.4L8.1 4a17 17 0 0 0-4.4 1.4C1.3 9 .6 12.6.9 16a17 17 0 0 0 4.9 2.4l1-1.6a10.6 10.6 0 0 1-1.7-.8l.4-.3a12.3 12.3 0 0 0 10.9 0l.4.3a10.6 10.6 0 0 1-1.7.8l1 1.6A17 17 0 0 0 21 16c.4-3.9-.6-7.5-2.9-10.6zM8.7 13.9c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H22l-7.6 8.7L23 21h-6.8l-5.3-6.9L4.8 21H1.6l8.2-9.3L1 3h7l4.8 6.3zm-1.2 16.2h1.7L7.4 4.7H5.6z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 7s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C15.9 3.5 12 3.5 12 3.5h0s-3.9 0-7.2.2c-.5.1-1.5.1-2.4 1C1.7 5.4 1.5 7 1.5 7S1.3 8.9 1.3 10.8v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7 .2 7 .2s3.9 0 7.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.9V8.4l6 3.3z"/></svg>'
};
function icon(name, cls=''){ return `<span class="i ${cls}" aria-hidden="true">${ICONS[name]||''}</span>`; }

/* ---------------------------- Small utils ---------------------------- */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
function fmtDate(d){ return new Date(d+"T00:00:00").toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
function slugTitle(s){ return s.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()); }
function rarityBadge(r){
  const map = { common:'badge-gray', uncommon:'badge-green', rare:'badge-blue', epic:'badge-purple', legendary:'badge-gold', mythical:'badge-red' };
  return `<span class="badge ${map[r]||'badge-gray'}">${r}</span>`;
}
function debounce(fn, ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; }
function escapeHTML(value){ return String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c]); }
function renderMarkdown(text){ return escapeHTML(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>'); }

const BOOKMARK_KEY = 'gamewiki_bookmarks';
function getBookmarks(){ try{ return JSON.parse(localStorage.getItem(BOOKMARK_KEY))||[]; }catch(e){ return []; } }
function toggleBookmark(id){
  let list = getBookmarks();
  if(list.includes(id)) list = list.filter(x=>x!==id); else list.push(id);
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(list));
  return list.includes(id);
}
function isBookmarked(id){ return getBookmarks().includes(id); }

function toast(msg){
  const el = $('#toast');
  el.innerHTML = icon('check') + `<span>${escapeHTML(msg)}</span>`;
  el.classList.add('show');
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=>el.classList.remove('show'), 2200);
}

async function copyCode(code, btn){
  try { await navigator.clipboard.writeText(code); }
  catch { toast('Clipboard access unavailable'); return; }
  btn.classList.add('copied');
  btn.innerHTML = icon('check') + 'Copied!';
  toast(`Code "${code}" copied to clipboard`);
  setTimeout(()=>{ btn.classList.remove('copied'); btn.innerHTML = icon('copy') + 'Copy'; }, 1800);
}

async function shareCurrent(title){
  const url = location.href;
  if(navigator.share){
    try { await navigator.share({ title, url }); } catch {}
    return;
  }
  try { await navigator.clipboard.writeText(url); toast('Link copied to clipboard'); }
  catch { toast('Clipboard access unavailable'); }
}

/* ---------------------------- Search index ---------------------------- */
function buildSearchIndex(){
  const idx = [];
  DATA.guides.forEach(g => idx.push({ type:'Guide', title:g.title, sub:g.category, img:g.cover, url:`#/guides/${g.slug}` }));
  DATA.ore.forEach(o => idx.push({ type:'Ore', title:o.name, sub:`${o.rarity} · Item`, img:o.image, url:`#/items/ore/${o.slug}` }));
  Object.entries(DATA.weapons).forEach(([cat, list]) => {
    list.forEach(w => idx.push({ type:'Weapon', title:w.name, sub:`${slugTitle(cat)} · ${w.rarity}`, img:w.image, url:`#/crafting/${cat}/${w.slug}` }));
  });
  DATA.dungeons.forEach(d => idx.push({ type:'Dungeon', title:d.name, sub:`Level ${d.level}`, img:d.banner, url:`#/dungeons/${d.slug}` }));
  DATA.codes.active.forEach(c => idx.push({ type:'Code', title:c.code, sub:c.reward, img:null, url:`#/codes` }));
  DATA.news.forEach(n => idx.push({ type:'News', title:n.title, sub:n.category, img:n.cover, url:`#/news/${n.slug}` }));
  return idx;
}
const SEARCH_INDEX = buildSearchIndex();

function runSearch(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  return SEARCH_INDEX.filter(i => i.title.toLowerCase().includes(q) || (i.sub||'').toLowerCase().includes(q)).slice(0,40);
}

function renderSearchPanel(query){
  const panel = $('#search-panel');
  const results = runSearch(query);
  if(!query.trim()){ panel.innerHTML = `<div class="sp-empty">Start typing to search guides, weapons, ore, dungeons, codes &amp; news…</div>`; return; }
  if(!results.length){ panel.innerHTML = `<div class="sp-empty">No results for "${escapeHTML(query)}"</div>`; return; }
  const groups = {};
  results.forEach(r => { (groups[r.type] = groups[r.type]||[]).push(r); });
  panel.innerHTML = Object.entries(groups).map(([type, items]) => `
    <div class="sp-group-label">${type}</div>
    ${items.map(i => `
      <a class="sp-item" href="${i.url}">
        ${i.img ? `<img class="sp-thumb" src="${i.img}" loading="lazy" alt="">` : `<div class="sp-thumb" style="display:flex;align-items:center;justify-content:center;color:var(--blue);">${icon('ticket')}</div>`}
        <div class="sp-meta"><div class="sp-title">${i.title}</div><div class="sp-sub">${i.sub}</div></div>
      </a>`).join('')}
  `).join('');
}

/* ============================================================
   ROUTER
   ============================================================ */
const routes = [];
function route(pattern, handler){ routes.push({ pattern, handler }); }
function matchRoute(hash){
  for(const r of routes){
    const keys = [];
    const rx = new RegExp('^' + r.pattern.replace(/:[^/]+/g, m => { keys.push(m.slice(1)); return '([^/]+)'; }) + '$');
    const m = hash.match(rx);
    if(m){
      const params = {};
      try {
        keys.forEach((k,i) => params[k] = decodeURIComponent(m[i+1]));
      } catch {
        return null;
      }
      return { handler: r.handler, params };
    }
  }
  return null;
}

let currentScrollHandler = null;
let navigationId = 0;

async function navigate(){
  const thisNavigation = ++navigationId;
  const hash = (location.hash || '#/').replace(/^#/, '') || '/';
  const path = hash.split('?')[0] || '/';
  const match = matchRoute(path);
  const app = $('#app');

  // route loading bar
  const loader = $('#route-loader');
  loader.classList.add('active'); loader.style.width = '30%';
  setTimeout(()=> loader.style.width = '70%', 90);

  // skeleton flash for perceived performance
  app.innerHTML = skeletonFor(hash);
  window.scrollTo({ top:0, behavior:'instant' in document.documentElement.style ? 'instant':'auto' });

  await new Promise(res => setTimeout(res, 260));
  if(thisNavigation !== navigationId) return;

  if(match){
    app.innerHTML = match.handler(match.params) || notFoundView();
  } else {
    app.innerHTML = notFoundView();
  }

  loader.style.width = '100%';
  setTimeout(()=>{ loader.classList.remove('active'); loader.style.width='0%'; }, 260);

  setActiveNav(path);
  initPageWidgets(path);
  window.scrollTo(0,0);
}

function setActiveNav(hash){
  const top = '/' + hash.split('/')[1];
  $$('.nav-links a, .mobile-drawer a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === top || (top==='/' && a.dataset.section==='/'));
  });
}

function skeletonFor(hash){
  if(hash === '/' || hash === ''){
    return `<div class="wrap" style="padding-top:60px;">
      <div class="skel" style="height:56px;width:60%;margin:0 auto 20px;border-radius:14px;"></div>
      <div class="skel" style="height:20px;width:40%;margin:0 auto 40px;border-radius:8px;"></div>
      <div class="grid grid-4">${Array(4).fill('<div class="skel skel-card"></div>').join('')}</div>
    </div>`;
  }
  return `<div class="wrap" style="padding-top:40px;">
    <div class="skel" style="height:34px;width:50%;margin-bottom:24px;border-radius:10px;"></div>
    <div class="skel" style="height:280px;border-radius:22px;margin-bottom:24px;"></div>
    <div class="grid grid-3">${Array(3).fill('<div class="skel skel-card"></div>').join('')}</div>
  </div>`;
}

function notFoundView(){
  return `<div class="wrap"><div class="empty-state fade-up">
    ${icon('compass')}
    <h3>This page hasn't been mapped yet</h3>
    <p>Try the search bar above, or head back to the <a href="#/" style="color:var(--blue);font-weight:700;">homepage</a>.</p>
  </div></div>`;
}

function breadcrumb(items){
  return `<div class="wrap"><div class="breadcrumb fade-up">
    <a href="#/">Home</a>
    ${items.map((it,i)=> i===items.length-1
      ? `<span class="sep">${icon('chevronRight')}</span><span class="current">${it.label}</span>`
      : `<span class="sep">${icon('chevronRight')}</span><a href="${it.url}">${it.label}</a>`).join('')}
  </div></div>`;
}

/* ============================================================
   SHARED CARD TEMPLATES (reusable everywhere)
   ============================================================ */
function guideCard(g){
  return `<a href="#/guides/${g.slug}" class="card">
    <div class="card-media"><span class="pos-badge badge badge-blue">${g.category}</span>
      <img src="${g.cover}" loading="lazy" alt="${g.title}"></div>
    <div class="card-body">
      <div class="card-title">${g.title}</div>
      <div class="card-desc">${g.description}</div>
      <div class="card-meta">${icon('clock')} ${g.readTime} · Updated ${fmtDate(g.updated)}</div>
    </div>
  </a>`;
}
function oreCard(o){
  return `<a href="#/items/ore/${o.slug}" class="card">
    <div class="card-media"><span class="pos-badge">${rarityBadge(o.rarity)}</span>
      <img src="${o.image}" loading="lazy" alt="${o.name}"></div>
    <div class="card-body">
      <div class="card-title">${o.name}</div>
      <div class="card-desc">${o.description}</div>
      <div class="card-meta">${icon('gem')} Sells for ${o.sellPrice} · Lvl ${o.requiredLevel}+</div>
    </div>
  </a>`;
}
function weaponCard(w, cat){
  return `<a href="#/crafting/${cat}/${w.slug}" class="card">
    <div class="card-media"><span class="pos-badge">${rarityBadge(w.rarity)}</span>
      <span class="pos-badge-r badge badge-gray">${w.element}</span>
      <img src="${w.image}" loading="lazy" alt="${w.name}"></div>
    <div class="card-body">
      <div class="card-title">${w.name}</div>
      <div class="card-desc">${w.passive}</div>
      <div class="card-meta">${icon('sword')} DMG ${w.damage} · Lvl ${w.requiredLevel}+</div>
    </div>
  </a>`;
}
function dungeonCard(d){
  return `<a href="#/dungeons/${d.slug}" class="card">
    <div class="card-media"><span class="pos-badge diff-pill diff-${d.difficulty}">${d.difficulty}</span>
      <img src="${d.banner}" loading="lazy" alt="${d.name}"></div>
    <div class="card-body">
      <div class="card-title">${d.name}</div>
      <div class="card-desc">Boss: ${d.boss}</div>
      <div class="card-meta">${icon('door')} Level ${d.level}</div>
    </div>
  </a>`;
}
function newsCard(n){
  return `<a href="#/news/${n.slug}" class="card">
    <div class="card-media"><span class="pos-badge badge badge-purple">${n.category}</span>
      <img src="${n.cover}" loading="lazy" alt="${n.title}"></div>
    <div class="card-body">
      <div class="card-title">${n.title}</div>
      <div class="card-desc">${n.excerpt}</div>
      <div class="card-meta">${icon('clock')} ${fmtDate(n.date)}</div>
    </div>
  </a>`;
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
route('/', () => {
  const s = DATA.site;
  const latestNews = [...DATA.news].sort((a,b)=> new Date(b.date)-new Date(a.date)).slice(0,3);
  const featuredGuides = DATA.guides.slice(0,4);
  const allWeapons = Object.entries(DATA.weapons).flatMap(([cat,list]) => list.map(w=>({...w,cat})));
  const popularCrafting = allWeapons.slice(0,4);
  const popularWeapons = [...allWeapons].sort((a,b)=>b.damage-a.damage).slice(0,4);
  const recentlyUpdated = [...DATA.guides].sort((a,b)=> new Date(b.updated)-new Date(a.updated)).slice(0,3);
  const codes = DATA.codes.active.slice(0,4);

  return `
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="wrap hero-inner fade-up">
      <span class="eyebrow"><span class="dot"></span> Live for ${s.game}</span>
      <h1>Ini <span class="accent">Tempat yang tepat</span><br>untuk lu yang maen ${s.game}</h1>
      <p class="lead">Guides, Resep, Tempat batu, Tips Ngedungeon dan Segala macam kode — Semua dalam satu tempat, updated dari community.</p>
      <div class="hero-search">
        ${icon('search')}
        <input id="hero-search-input" type="text" placeholder="Search guides, weapons, ore, dungeons, codes…" autocomplete="off">
        <button class="btn btn-primary btn-sm" id="hero-search-btn">Search</button>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><b id="stat-articles">${s.stats.articles}</b><span>Articles</span></div>
        <div class="hero-stat"><b id="stat-weekly-readers">${s.stats.weekly_visitors}</b><span>Weekly Readers</span></div>
        <div class="hero-stat"><b id="stat-codes">${s.stats.codes}</b><span>Active Codes</span></div>
        <div class="hero-stat"><b id="stat-contributors">${s.stats.contributors}</b><span>Contributors</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div><span class="kicker">Fresh off the press</span><h2>Latest News</h2></div>
        <a class="see-all" href="#/news">View all news ${icon('arrowRight')}</a>
      </div>
      <div class="grid grid-3 stagger">${latestNews.map(newsCard).join('')}</div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="section-head">
        <div><span class="kicker">Start here</span><h2>Featured Guides</h2></div>
        <a class="see-all" href="#/guides">All guides ${icon('arrowRight')}</a>
      </div>
      <div class="grid grid-4 stagger">${featuredGuides.map(guideCard).join('')}</div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="section-head">
        <div><span class="kicker">Community favorites</span><h2>Popular Crafting</h2></div>
        <a class="see-all" href="#/crafting">Browse crafting ${icon('arrowRight')}</a>
      </div>
      <div class="grid grid-4 stagger">${popularCrafting.map(w=>weaponCard(w,w.cat)).join('')}</div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="section-head">
        <div><span class="kicker">Highest damage</span><h2>Popular Weapons</h2></div>
        <a class="see-all" href="#/crafting">Browse all weapons ${icon('arrowRight')}</a>
      </div>
      <div class="grid grid-4 stagger">${popularWeapons.map(w=>weaponCard(w,w.cat)).join('')}</div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="wrap grid grid-2" style="align-items:start;gap:28px;">
      <div>
        <div class="section-head" style="margin-bottom:16px;">
          <div><span class="kicker">Fresh edits</span><h2>Recently Updated</h2></div>
        </div>
        <div class="stagger" style="display:flex;flex-direction:column;gap:12px;">
          ${recentlyUpdated.map(g=>`<a href="#/guides/${g.slug}" class="panel" style="display:flex;align-items:center;gap:14px;padding:14px 16px;">
            <img src="${g.cover}" loading="lazy" style="width:56px;height:56px;border-radius:10px;object-fit:cover;flex-shrink:0;" alt="">
            <div style="min-width:0;"><div class="card-title" style="font-size:14px;">${g.title}</div>
            <div class="card-meta" style="padding-top:4px;">${icon('clock')} Updated ${fmtDate(g.updated)}</div></div>
          </a>`).join('')}
        </div>
      </div>
      <div>
        <div class="section-head" style="margin-bottom:16px;">
          <div><span class="kicker">Don't miss out</span><h2>Latest Redeem Codes</h2></div>
          <a class="see-all" href="#/codes">All codes ${icon('arrowRight')}</a>
        </div>
        <div class="stagger" style="display:flex;flex-direction:column;gap:12px;">
          ${codes.map(c=>`<div class="code-card">
            <div class="code-left"><span class="code-chip mono">${c.code}</span><div><div class="code-reward">${c.reward}</div><div class="code-exp">Expires ${c.expires}</div></div></div>
            <button class="copy-btn" data-copy-code="${escapeHTML(c.code)}">${icon('copy')}Copy</button>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
});

/* ============================================================
   GUIDES
   ============================================================ */
route('/guides', () => {
  return breadcrumb([{label:'Guides'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${DATA.guides.length} articles</span><h2>All Guides</h2><p>Learn every system in the game, from your first pickaxe swing to end-game builds.</p></div></div>
    <div class="filter-bar" id="guide-filters">
      <button class="tag active" data-filter="all">All</button>
      ${[...new Set(DATA.guides.map(g=>g.category))].map(c=>`<button class="tag" data-filter="${c}">${c}</button>`).join('')}
    </div>
    <div class="grid grid-4 stagger" id="guides-grid">${DATA.guides.map(guideCard).join('')}</div>
  </div>`;
});

route('/guides/:slug', ({slug}) => {
  const g = DATA.guides.find(x=>x.slug===slug);
  if(!g) return notFoundView();
  const bmId = `guide-${slug}`;
  const related = DATA.guides.filter(x=>g.related.includes(x.slug));
  return breadcrumb([{label:'Guides',url:'#/guides'},{label:g.title}]) + `
  <div class="wrap">
    <div class="page-hero fade-up">
      <img src="${g.cover}" alt="${g.title}" loading="lazy">
      <div class="page-hero-content">
        <div class="badge-row"><span class="badge badge-blue">${g.category}</span>${g.tags.map(t=>`<span class="badge badge-gray">${t}</span>`).join('')}</div>
        <h1>${g.title}</h1>
      </div>
    </div>

    <div class="content-layout">
      <div>
        <div class="action-row" style="margin:20px 0;">
          <div class="card-meta">${icon('clock')} ${g.readTime} · Updated ${fmtDate(g.updated)}</div>
          <div style="flex:1;"></div>
          <button class="icon-btn ${isBookmarked(bmId)?'active':''}" id="bookmark-btn" data-id="${bmId}" title="Bookmark">${icon(isBookmarked(bmId)?'bookmarkFilled':'bookmark')}</button>
          <button class="icon-btn" data-share-title="${escapeHTML(g.title)}" title="Share">${icon('share')}</button>
        </div>

        <p class="prose" style="font-size:16px;">${g.description}</p>

        <div class="info-cards">
          ${g.infoCards.map(c=>`<div class="info-card"><div class="ic-icon">${icon(c.icon)}</div><h4>${c.title}</h4><p>${c.text}</p></div>`).join('')}
        </div>

        <article class="prose" id="article-body">
          ${g.body.map(b => `${b.h?`<h2 id="${b.h}">${b.title}</h2>`:''}<p>${b.p}</p>`).join('')}
        </article>

      </div>

      <aside>
        <div class="panel">
          <h3>${icon('book')} Table of Contents</h3>
          <div class="toc" id="toc">${g.toc.map(t=>`<button type="button" data-target="${escapeHTML(t.id)}">${t.label}</button>`).join('')}</div>
        </div>
        <div class="panel">
          <h3>${icon('compass')} Related Guides</h3>
          ${related.map(r=>`<a href="#/guides/${r.slug}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);">
            <img src="${r.cover}" loading="lazy" style="width:40px;height:40px;border-radius:8px;object-fit:cover;" alt="">
            <span style="font-size:13px;font-weight:600;">${r.title}</span></a>`).join('')}
        </div>
      </aside>
    </div>
  </div>`;
});

/* ============================================================
   ITEMS → ORE
   ============================================================ */
route('/items', () => {
  return breadcrumb([{label:'Items'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">Item categories</span><h2>Items</h2></div></div>
    <div class="grid grid-3">
      <a href="#/items/ore" class="card"><div class="card-body" style="padding:26px;">
        <div class="ic-icon" style="width:44px;height:44px;margin-bottom:12px;">${icon('gem')}</div>
        <div class="card-title" style="font-size:18px;">Ore</div>
        <div class="card-desc">${DATA.ore.length} mineable materials, from common Iron to legendary Crystal.</div>
      </div></a>
    </div>
  </div>`;
});

route('/items/ore', () => {
  return breadcrumb([{label:'Items',url:'#/items'},{label:'Ore'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${DATA.ore.length} entries</span><h2>Ore</h2><p>Every mineable ore in the game, with spawn locations, drop rates and crafting uses.</p></div></div>
    <div class="filter-bar">
      <input class="filter-input" id="ore-search" placeholder="Filter ore by name…" style="min-width:220px;">
      <select class="filter-select" id="ore-rarity-filter">
        <option value="all">All Rarities</option>
        <option value="common">Common</option><option value="uncommon">Uncommon</option><option value="rare">Rare</option>
        <option value="epic">Epic</option><option value="legendary">Legendary</option><option value="mythical">Mythical</option>
      </select>
    </div>
    <div class="grid grid-3 stagger" id="ore-grid"></div>
    <div class="pagination" id="ore-pagination"></div>
  </div>`;
});

route('/items/ore/:slug', ({slug}) => {
  const o = DATA.ore.find(x=>x.slug===slug);
  if(!o) return notFoundView();
  const bmId = `ore-${slug}`;
  const related = DATA.ore.filter(x=>o.related.includes(x.slug));
  return breadcrumb([{label:'Items',url:'#/items'},{label:'Ore',url:'#/items/ore'},{label:o.name}]) + `
  <div class="wrap">
    <div class="content-layout" style="margin-top:8px;">
      <div>
        <div class="panel fade-up" style="padding:0;overflow:hidden;">
          <img src="${o.image}" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;" alt="${o.name}">
          <div style="padding:22px;">
            <div class="badge-row" style="display:flex;gap:8px;margin-bottom:10px;">${rarityBadge(o.rarity)}<span class="badge badge-gray">Lvl ${o.requiredLevel}+</span></div>
            <h1 style="font-size:26px;margin-bottom:10px;">${o.name}</h1>
            <p class="prose" style="margin-bottom:0;">${o.description}</p>
          </div>
        </div>

        <div class="panel">
          <h3>${icon('layers')} Crafting Recipes</h3>
          ${o.recipes.map(r=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
            <span style="font-weight:600;font-size:13.5px;">${r.item}</span><span class="card-meta" style="padding:0;">${r.materials}</span></div>`).join('')}
        </div>

        <div class="panel">
          <h3>${icon('star')} Tips</h3>
          <p class="prose" style="margin:0;">${o.tips}</p>
        </div>

        <div class="panel">
          <h3>${icon('compass')} Related Items</h3>
          <div class="grid grid-3" style="gap:12px;">
            ${related.map(r=>oreCard(r)).join('')}
          </div>
        </div>
      </div>

      <aside>
        <div class="panel">
          <h3>${icon('target')} Details</h3>
          <table class="kv-table">
            <tr><td>Rarity</td><td class="rarity-${o.rarity}">${o.rarity}</td></tr>
            <tr><td>Spawn Location</td><td>${o.spawn}</td></tr>
            <tr><td>Drop Rate</td><td>${o.dropRate}</td></tr>
            <tr><td>Sell Price</td><td>${o.sellPrice}</td></tr>
            <tr><td>Required Level</td><td>${o.requiredLevel}</td></tr>
          </table>
        </div>
        <div class="panel">
          <h3>${icon('hammer')} Used For</h3>
          <div class="tag-row">${o.usedFor.map(u=>`<span class="tag">${u}</span>`).join('')}</div>
        </div>
        <div class="panel">
          <div class="action-row">
            <button class="icon-btn ${isBookmarked(bmId)?'active':''}" id="bookmark-btn" data-id="${bmId}" title="Bookmark">${icon(isBookmarked(bmId)?'bookmarkFilled':'bookmark')}</button>
            <button class="icon-btn" data-share-title="${escapeHTML(o.name)}" title="Share">${icon('share')}</button>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
});

/* ============================================================
   CRAFTING → WEAPON CATEGORIES
   ============================================================ */
route('/crafting', () => {
  return breadcrumb([{label:'Crafting'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">6 weapon families</span><h2>Crafting</h2><p>Browse every weapon category — each page lists unlimited weapons using the same reusable template.</p></div></div>
    <div class="grid grid-3 stagger">
      ${DATA.weaponCategories.map(c=>`<a href="#/crafting/${c.key}" class="card"><div class="card-body" style="padding:26px;">
        <div class="ic-icon" style="width:44px;height:44px;margin-bottom:12px;">${icon(c.icon)}</div>
        <div class="card-title" style="font-size:18px;">${c.label}</div>
        <div class="card-desc">${(DATA.weapons[c.key]||[]).length} weapons documented</div>
      </div></a>`).join('')}
    </div>
  </div>`;
});

route('/crafting/:cat', ({cat}) => {
  const catDef = DATA.weaponCategories.find(c=>c.key===cat);
  if(!catDef) return notFoundView();
  const list = DATA.weapons[cat] || [];
  return breadcrumb([{label:'Crafting',url:'#/crafting'},{label:catDef.label}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${list.length} weapons</span><h2>${catDef.label}</h2></div></div>
    <div class="filter-bar">
      <button class="tag active" data-filter="all">All Rarities</button>
      ${[...new Set(list.map(w=>w.rarity))].map(r=>`<button class="tag" data-filter="${r}">${slugTitle(r)}</button>`).join('')}
    </div>
    <div class="grid grid-4 stagger" id="weapon-grid">${list.map(w=>weaponCard(w,cat)).join('')}</div>
  </div>`;
});

route('/crafting/:cat/:slug', ({cat,slug}) => {
  const catDef = DATA.weaponCategories.find(c=>c.key===cat);
  const w = (DATA.weapons[cat]||[]).find(x=>x.slug===slug);
  if(!catDef || !w) return notFoundView();
  const bmId = `weapon-${cat}-${slug}`;
  const allWeapons = Object.entries(DATA.weapons).flatMap(([c,list]) => list.map(x=>({...x,cat:c})));
  const related = allWeapons.filter(x=>w.related.includes(x.slug));
  const maxStat = 160;
  return breadcrumb([{label:'Crafting',url:'#/crafting'},{label:catDef.label,url:`#/crafting/${cat}`},{label:w.name}]) + `
  <div class="wrap">
    <div class="content-layout" style="margin-top:8px;">
      <div>
        <div class="panel fade-up" style="padding:0;overflow:hidden;">
          <img src="${w.image}" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;" alt="${w.name}">
          <div style="padding:22px;">
            <div class="badge-row" style="display:flex;gap:8px;margin-bottom:10px;">${rarityBadge(w.rarity)}<span class="badge badge-gray">${catDef.label}</span><span class="badge badge-blue">${w.element}</span></div>
            <h1 style="font-size:26px;">${w.name}</h1>
          </div>
        </div>

        <div class="panel">
          <h3>${icon('trending')} Stats</h3>
          <div class="stat-row"><span class="stat-label">Damage</span><div class="stat-track"><div class="stat-fill" style="width:${Math.min(100,w.damage/maxStat*100)}%;"></div></div><span class="stat-val">${w.damage}</span></div>
          <div class="stat-row"><span class="stat-label">Speed</span><div class="stat-track"><div class="stat-fill" style="width:${w.speed}%;"></div></div><span class="stat-val">${w.speed}</span></div>
          <div class="stat-row"><span class="stat-label">Range</span><div class="stat-track"><div class="stat-fill" style="width:${w.range}%;"></div></div><span class="stat-val">${w.range}</span></div>
          <div class="stat-row"><span class="stat-label">Crit Chance</span><div class="stat-track"><div class="stat-fill" style="width:${w.critChance}%;"></div></div><span class="stat-val">${w.critChance}%</span></div>
        </div>

        <div class="panel">
          <h3>${icon('zap')} Passive Skill</h3>
          <p class="prose" style="margin:0;">${w.passive}</p>
        </div>

        <div class="panel">
          <h3>${icon('layers')} Upgrade Path</h3>
          <div class="tag-row">${w.upgradePath.map((u,i)=>`<span class="tag ${i===0?'active':''}">${u}</span>`).join('')}</div>
        </div>

        <div class="panel">
          <h3>${icon('shield')} Best Build</h3>
          <p class="prose" style="margin:0;">${w.bestBuild}</p>
        </div>

        <div class="panel">
          <div class="pros-cons">
            <div class="pc-box pros"><h4>Advantages</h4><ul>${w.pros.map(p=>`<li>${p}</li>`).join('')}</ul></div>
            <div class="pc-box cons"><h4>Disadvantages</h4><ul>${w.cons.map(p=>`<li>${p}</li>`).join('')}</ul></div>
          </div>
        </div>

        <div class="panel">
          <h3>${icon('compass')} Related Weapons</h3>
          <div class="grid grid-3" style="gap:12px;">${related.map(r=>weaponCard(r,r.cat)).join('')}</div>
        </div>
      </div>

      <aside>
        <div class="panel">
          <h3>${icon('hammer')} Crafting Materials</h3>
          <table class="kv-table">${w.materials.map(m=>`<tr><td>${m.name}</td><td>x${m.qty}</td></tr>`).join('')}</table>
        </div>
        <div class="panel">
          <h3>${icon('gift')} Cost & Requirements</h3>
          <table class="kv-table">
            <tr><td>Crafting Cost</td><td>${w.craftingCost}</td></tr>
            <tr><td>Required Level</td><td>${w.requiredLevel}</td></tr>
          </table>
        </div>
        <div class="panel">
          <div class="action-row">
            <button class="icon-btn ${isBookmarked(bmId)?'active':''}" id="bookmark-btn" data-id="${bmId}" title="Bookmark">${icon(isBookmarked(bmId)?'bookmarkFilled':'bookmark')}</button>
            <button class="icon-btn" data-share-title="${escapeHTML(w.name)}" title="Share">${icon('share')}</button>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
});

/* ============================================================
   DUNGEONS
   ============================================================ */
route('/dungeons', () => {
  return breadcrumb([{label:'Dungeons'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${DATA.dungeons.length} dungeons</span><h2>Dungeons</h2><p>Boss strategies, drop tables and recommended gear for every dungeon.</p></div></div>
    <div class="filter-bar">
      <button class="tag active" data-filter="all">All Difficulties</button>
      ${[...new Set(DATA.dungeons.map(d=>d.difficulty))].map(d=>`<button class="tag" data-filter="${d}">${slugTitle(d)}</button>`).join('')}
    </div>
    <div class="grid grid-3 stagger" id="dungeon-grid">${DATA.dungeons.map(dungeonCard).join('')}</div>
  </div>`;
});

route('/dungeons/:slug', ({slug}) => {
  const d = DATA.dungeons.find(x=>x.slug===slug);
  if(!d) return notFoundView();
  const bmId = `dungeon-${slug}`;
  return breadcrumb([{label:'Dungeons',url:'#/dungeons'},{label:d.name}]) + `
  <div class="wrap">
    <div class="page-hero fade-up">
      <img src="${d.banner}" alt="${d.name}" loading="lazy">
      <div class="page-hero-content">
        <div class="badge-row"><span class="diff-pill diff-${d.difficulty}">${d.difficulty}</span><span class="badge badge-gray">Level ${d.level}</span></div>
        <h1>${d.name}</h1>
      </div>
    </div>
    <div class="content-layout">
      <div>
        <div class="action-row" style="margin:20px 0;">
          <div class="card-meta">${icon('shield')} Boss: ${d.boss}</div><div style="flex:1;"></div>
          <button class="icon-btn ${isBookmarked(bmId)?'active':''}" id="bookmark-btn" data-id="${bmId}" title="Bookmark">${icon(isBookmarked(bmId)?'bookmarkFilled':'bookmark')}</button>
          <button class="icon-btn" data-share-title="${escapeHTML(d.name)}" title="Share">${icon('share')}</button>
        </div>

        <div class="panel">
          <h3>${icon('target')} Enemy List</h3>
          <div class="tag-row">${d.enemies.map(e=>`<span class="tag">${e}</span>`).join('')}</div>
        </div>

        <div class="panel">
          <h3>${icon('gem')} Drops</h3>
          <table class="kv-table">${d.drops.map(dr=>`<tr><td>${dr.item}</td><td>${dr.chance}</td></tr>`).join('')}</table>
        </div>

        <div class="panel">
          <h3>${icon('star')} Tips</h3>
          <p class="prose" style="margin:0;">${d.tips}</p>
        </div>

        <div class="panel">
          <h3>${icon('layers')} Gallery</h3>
          <div class="gallery-grid">${d.gallery.map(g=>`<img src="${g}" loading="lazy" alt="${d.name} screenshot">`).join('')}</div>
        </div>
      </div>
      <aside>
        <div class="panel">
          <h3>${icon('shield')} Overview</h3>
          <table class="kv-table">
            <tr><td>Dungeon Level</td><td>${d.level}</td></tr>
            <tr><td>Difficulty</td><td style="text-transform:capitalize;">${d.difficulty}</td></tr>
            <tr><td>Boss</td><td>${d.boss}</td></tr>
            <tr><td>Recommended Level</td><td>${d.recommendedLevel}</td></tr>
          </table>
        </div>
        <div class="panel">
          <h3>${icon('sword')} Recommended Gear</h3>
          <p class="prose" style="margin:0;font-size:13.5px;">${d.recommendedGear}</p>
        </div>
        <div class="panel">
          <h3>${icon('gift')} Rewards</h3>
          <div class="tag-row">${d.rewards.map(r=>`<span class="tag">${r}</span>`).join('')}</div>
        </div>
      </aside>
    </div>
  </div>`;
});

/* ============================================================
   CODES
   ============================================================ */
route('/codes', () => {
  return breadcrumb([{label:'Codes'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">Updated regularly</span><h2>Redeem Codes</h2><p>Free rewards for ${DATA.site.game} — verified and updated by the community.</p></div></div>
    <div class="filter-bar">
      <div class="hero-search" style="margin:0;flex:1;max-width:420px;padding:4px 4px 4px 16px;">
        ${icon('search')}<input id="code-search" placeholder="Search codes…" style="padding:9px 0;">
      </div>
    </div>

    <div class="section-head" style="margin-top:10px;"><h2 style="font-size:19px;">${icon('flame')} Active Codes</h2></div>
    <div id="active-codes" style="display:flex;flex-direction:column;gap:12px;" class="stagger">
      ${DATA.codes.active.map(c=>`<div class="code-card" data-code="${c.code.toLowerCase()}">
        <div class="code-left"><span class="code-chip mono">${c.code}</span><div><div class="code-reward">${c.reward}</div><div class="code-exp">Expires ${c.expires}</div></div></div>
        <button class="copy-btn" data-copy-code="${escapeHTML(c.code)}">${icon('copy')}Copy</button>
      </div>`).join('')}
    </div>

    <div class="section-head" style="margin-top:36px;"><h2 style="font-size:19px;color:var(--text-faint);">Expired Codes</h2></div>
    <div id="expired-codes" style="display:flex;flex-direction:column;gap:12px;">
      ${DATA.codes.expired.map(c=>`<div class="code-card expired" data-code="${c.code.toLowerCase()}">
        <div class="code-left"><span class="code-chip mono">${c.code}</span><div><div class="code-reward">${c.reward}</div><div class="code-exp">Expired ${c.expires}</div></div></div>
        <span class="badge badge-red">Expired</span>
      </div>`).join('')}
    </div>
  </div>`;
});

/* ============================================================
   NEWS
   ============================================================ */
route('/news', () => {
  const cats = [...new Set(DATA.news.map(n=>n.category))];
  return breadcrumb([{label:'News'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${DATA.news.length} posts</span><h2>News</h2><p>Patch notes, new weapons, new crafting recipes, event announcements and upcoming updates.</p></div></div>
    <div class="filter-bar" id="news-filters">
      <button class="tag active" data-filter="all">All</button>
      ${cats.map(c=>`<button class="tag" data-filter="${c}">${c}</button>`).join('')}
    </div>
    <div class="grid grid-3 stagger" id="news-grid">${[...DATA.news].sort((a,b)=>new Date(b.date)-new Date(a.date)).map(newsCard).join('')}</div>
  </div>`;
});

route('/news/:slug', ({slug}) => {
  const n = DATA.news.find(x=>x.slug===slug);
  if(!n) return notFoundView();
  const bmId = `news-${slug}`;
  const related = DATA.news.filter(x=>x.slug!==slug && x.category===n.category).slice(0,3);
  return breadcrumb([{label:'News',url:'#/news'},{label:n.title}]) + `
  <div class="wrap">
    <div class="page-hero fade-up">
      <img src="${n.cover}" alt="${n.title}" loading="lazy">
      <div class="page-hero-content">
        <div class="badge-row"><span class="badge badge-purple">${n.category}</span></div>
        <h1>${n.title}</h1>
      </div>
    </div>
    <div class="content-layout">
      <div>
        <div class="action-row" style="margin:20px 0;">
          <div class="card-meta">${icon('clock')} ${fmtDate(n.date)}</div><div style="flex:1;"></div>
          <button class="icon-btn ${isBookmarked(bmId)?'active':''}" id="bookmark-btn" data-id="${bmId}" title="Bookmark">${icon(isBookmarked(bmId)?'bookmarkFilled':'bookmark')}</button>
          <button class="icon-btn" data-share-title="${escapeHTML(n.title)}" title="Share">${icon('share')}</button>
        </div>
        <article class="prose" id="article-body"><p>${renderMarkdown(n.body)}</p></article>
      </div>
      <aside>
        <div class="panel">
          <h3>${icon('news')} Related Articles</h3>
          ${related.length? related.map(r=>`<a href="#/news/${r.slug}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);">
            <img src="${r.cover}" loading="lazy" style="width:40px;height:40px;border-radius:8px;object-fit:cover;" alt="">
            <span style="font-size:13px;font-weight:600;">${r.title}</span></a>`).join('') : `<p class="card-meta" style="padding:0;">No related articles yet.</p>`}
        </div>
      </aside>
    </div>
  </div>`;
});

/* ============================================================
   SEARCH RESULTS PAGE
   ============================================================ */
route('/search', () => {
  const params = new URLSearchParams(location.hash.split('?')[1]||'');
  const q = params.get('q') || '';
  const results = runSearch(q);
  return breadcrumb([{label:'Search'}]) + `
  <div class="wrap section" style="padding-top:8px;">
    <div class="section-head"><div><span class="kicker">${results.length} results</span><h2>Search results for "${escapeHTML(q)}"</h2></div></div>
    ${results.length ? `<div class="grid grid-3 stagger">${results.map(r=>`
      <a href="${r.url}" class="card"><div class="card-media">${r.img?`<img src="${r.img}" loading="lazy" alt="">`:''}<span class="pos-badge badge badge-blue">${r.type}</span></div>
      <div class="card-body"><div class="card-title">${r.title}</div><div class="card-desc">${r.sub}</div></div></a>`).join('')}</div>`
      : `<div class="empty-state">${icon('search')}<h3>No results found</h3><p>Try a different search term.</p></div>`}
  </div>`;
});

/* ============================================================
   PAGE WIDGET INITIALIZATION (runs after every render)
   ============================================================ */
function initPageWidgets(hash){
  $$('[data-copy-code]').forEach(btn => btn.addEventListener('click', () => copyCode(btn.dataset.copyCode, btn)));
  $$('[data-share-title]').forEach(btn => btn.addEventListener('click', () => shareCurrent(btn.dataset.shareTitle)));

  // Bookmark button
  const bmBtn = $('#bookmark-btn');
  if(bmBtn){
    bmBtn.addEventListener('click', () => {
      const active = toggleBookmark(bmBtn.dataset.id);
      bmBtn.classList.toggle('active', active);
      bmBtn.innerHTML = icon(active ? 'bookmarkFilled' : 'bookmark');
      toast(active ? 'Saved to bookmarks' : 'Removed from bookmarks');
    });
  }

  // Generic tag/category filter bars (guides, crafting cat, dungeons, news)
  $$('.filter-bar .tag[data-filter]').forEach(tag => {
    tag.addEventListener('click', () => {
      const bar = tag.parentElement;
      $$('.tag', bar).forEach(t=>t.classList.remove('active'));
      tag.classList.add('active');
      const filter = tag.dataset.filter;
      const grid = bar.nextElementSibling;
      if(!grid) return;
      $$('.card', grid).forEach(card => {
        const badgeText = ($('.pos-badge', card)?.textContent || '').trim();
        const show = filter === 'all' || badgeText.toLowerCase() === filter.toLowerCase() || card.dataset.cat === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // Ore grid: search + rarity filter + pagination
  const oreGrid = $('#ore-grid');
  if(oreGrid){
    const perPage = 6;
    let currentPage = 1;
    function renderOre(){
      const q = ($('#ore-search')?.value || '').toLowerCase();
      const rarity = $('#ore-rarity-filter')?.value || 'all';
      const filtered = DATA.ore.filter(o => o.name.toLowerCase().includes(q) && (rarity==='all' || o.rarity===rarity));
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      currentPage = Math.min(currentPage, totalPages);
      const pageItems = filtered.slice((currentPage-1)*perPage, currentPage*perPage);
      oreGrid.innerHTML = pageItems.length ? pageItems.map(oreCard).join('') : `<div class="empty-state" style="grid-column:1/-1;">${icon('search')}<h3>No ore found</h3></div>`;
      const pager = $('#ore-pagination');
      let html = '';
      html += `<button class="page-btn" ${currentPage===1?'disabled':''} data-page="${currentPage-1}">${icon('chevronRight').replace('m9 6 6 6-6 6','m15 6-6 6 6 6')}</button>`;
      for(let i=1;i<=totalPages;i++) html += `<button class="page-btn ${i===currentPage?'active':''}" data-page="${i}">${i}</button>`;
      html += `<button class="page-btn" ${currentPage===totalPages?'disabled':''} data-page="${currentPage+1}">${icon('chevronRight')}</button>`;
      pager.innerHTML = html;
      $$('.page-btn', pager).forEach(b => b.addEventListener('click', () => { currentPage = parseInt(b.dataset.page); renderOre(); window.scrollTo({top:300,behavior:'smooth'}); }));
    }
    $('#ore-search')?.addEventListener('input', debounce(()=>{ currentPage=1; renderOre(); },150));
    $('#ore-rarity-filter')?.addEventListener('change', ()=>{ currentPage=1; renderOre(); });
    renderOre();
  }

  // Codes search filter
  $('#code-search')?.addEventListener('input', debounce((e)=>{
    const q = e.target.value.toLowerCase();
    $$('#active-codes .code-card, #expired-codes .code-card').forEach(c => {
      c.style.display = c.dataset.code.includes(q) || c.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  },120));

  // Hero / page search bars -> go to search results page
  const heroInput = $('#hero-search-input');
  if(heroInput){
    const go = () => { const v = heroInput.value.trim(); if(v) location.hash = `#/search?q=${encodeURIComponent(v)}`; };
    $('#hero-search-btn')?.addEventListener('click', go);
    heroInput.addEventListener('keydown', e => { if(e.key==='Enter') go(); });
  }

  // Reading progress bar (only on article-style pages)
  const progress = $('#reading-progress');
  const articleBody = $('#article-body');
  if(currentScrollHandler) window.removeEventListener('scroll', currentScrollHandler);
  if(articleBody){
    currentScrollHandler = () => {
      const rect = articleBody.getBoundingClientRect();
      const total = articleBody.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max((-rect.top) / (total>0?total:1), 0), 1);
      progress.style.width = (scrolled*100) + '%';
    };
    window.addEventListener('scroll', currentScrollHandler, { passive:true });
    currentScrollHandler();
    progress.style.width = '0%';
  } else {
    progress.style.width = '0%';
  }

  // TOC scroll-spy
  if(window.__tocScrollHandler) window.removeEventListener('scroll', window.__tocScrollHandler);
  const toc = $('#toc');
  if(toc){
    const links = $$('button', toc);
    const targets = links.map(l => document.getElementById(l.dataset.target)).filter(Boolean);
    links.forEach(link => link.addEventListener('click', () => document.getElementById(link.dataset.target)?.scrollIntoView()));
    const spy = () => {
      let activeIdx = 0;
      targets.forEach((t,i) => { if(t.getBoundingClientRect().top < 140) activeIdx = i; });
      links.forEach((l,i) => l.classList.toggle('active', i===activeIdx));
    };
    window.__tocScrollHandler = spy;
    window.addEventListener('scroll', spy, { passive:true });
    spy();
  }
}

/* ============================================================
   GLOBAL CHROME: nav, search panel, dark mode, scroll-top, drawer
   ============================================================ */
function initChrome(){
  // Search dropdown (desktop nav)
  const navInput = $('#nav-search-input');
  const searchPanel = $('#search-panel');
  navInput?.addEventListener('input', debounce(() => renderSearchPanel(navInput.value), 100));
  navInput?.addEventListener('focus', () => { searchPanel.classList.add('open'); renderSearchPanel(navInput.value); });
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.nav-search')) searchPanel.classList.remove('open');
  });
  navInput?.addEventListener('keydown', e => {
    if(e.key==='Enter' && navInput.value.trim()){ location.hash = `#/search?q=${encodeURIComponent(navInput.value.trim())}`; searchPanel.classList.remove('open'); }
  });

  // Dark/light toggle
  const themeBtn = $('#theme-toggle');
  function applyTheme(light){
    document.body.classList.toggle('light', light);
    themeBtn.innerHTML = icon(light ? 'sun' : 'moon');
    localStorage.setItem('gamewiki_theme', light ? 'light' : 'dark');
  }
  applyTheme(localStorage.getItem('gamewiki_theme') === 'light');
  themeBtn.addEventListener('click', () => applyTheme(!document.body.classList.contains('light')));

  // Mobile drawer
  const drawer = $('#mobile-drawer');
  const burger = $('#burger-btn');
  const closeDrawer = () => {
    drawer.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    burger?.focus();
  };
  burger?.addEventListener('click', () => {
    drawer.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    $('#drawer-close')?.focus();
  });
  $('#drawer-close')?.addEventListener('click', closeDrawer);
  drawer?.addEventListener('click', (e) => { if(e.target===drawer || e.target.classList.contains('scrim')) closeDrawer(); });
  $$('#mobile-drawer a').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => {
    if(!drawer?.classList.contains('open')) return;
    if(e.key === 'Escape') closeDrawer();
    if(e.key === 'Tab') {
      const focusable = $$('button, a, input', drawer);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
  const mobileSearch = $('#mobile-search-input');
  mobileSearch?.addEventListener('keydown', e => {
    if(e.key === 'Enter' && mobileSearch.value.trim()){
      location.hash = `#/search?q=${encodeURIComponent(mobileSearch.value.trim())}`;
      closeDrawer();
    }
  });

  // Scroll to top button + navbar shrink shadow
  const scrollBtn = $('#scroll-top');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 500);
  }, { passive:true });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  window.addEventListener('hashchange', navigate);
  navigate();

  // Render widget FIRST so DOM elements exist before status callbacks fire
  renderRealtimeControlWidget();
  // Then init Supabase Realtime
  initSupabaseRealtime();
}

/* ============================================================
   SUPABASE REALTIME ENGINE & TEST CONTROL PANEL
   ============================================================ */
const SUPABASE_URL = "https://yomwiagtsmecfefaqiwj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbXdpYWd0c21lY2ZlZmFxaXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MzY5NjUsImV4cCI6MjEwMjExMjk2NX0.5hZtNpB5q5ApJ1GLcB3GbOupkOqBoOZrpVcP2S5Rd9A";

let supabaseClient = null;
let currentStats = {
  articles: DATA.site.stats.articles,
  weekly_readers: DATA.site.stats.weekly_visitors,
  active_codes: DATA.site.stats.codes,
  contributors: DATA.site.stats.contributors
};

function initSupabaseRealtime() {
  if (typeof window.supabase === 'undefined') {
    console.warn('[Realtime] Supabase SDK not found.');
    return;
  }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('[Realtime] Supabase client created.');

  // Fetch initial stats from Supabase and force-update DOM
  supabaseClient
    .from('site_stats')
    .select('*')
    .eq('id', 'main')
    .single()
    .then(({ data, error }) => {
      if (error) {
        console.error('[Realtime] Initial fetch error:', error.message);
        return;
      }
      if (data) {
        console.log('[Realtime] Initial data loaded:', data);
        updateStatsFromPayload(data, false, true); // force=true: always update DOM
      }
    });

  // Subscribe to Realtime postgres_changes
  const channel = supabaseClient
    .channel('realtime-site-stats')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'site_stats' },
      payload => {
        console.log('[Realtime] UPDATE received:', payload.new);
        if (payload.new) {
          updateStatsFromPayload(payload.new, true, true);
        }
      }
    )
    .subscribe(status => {
      console.log('[Realtime] Channel status:', status);
      updateRealtimeStatusIndicator(status);
    });

  console.log('[Realtime] Subscribed to channel:', channel);
}

function updateRealtimeStatusIndicator(status) {
  const badge = $('#rt-status-badge');
  const dot = $('#rt-indicator-dot');
  if (!badge || !dot) return;

  if (status === 'SUBSCRIBED') {
    badge.textContent = 'CONNECTED';
    badge.style.background = 'rgba(16, 185, 129, 0.15)';
    badge.style.color = '#10b981';
    dot.className = 'rt-indicator';
  } else if (status === 'TIMED_OUT' || status === 'CLOSED') {
    badge.textContent = 'DISCONNECTED';
    badge.style.background = 'rgba(239, 68, 68, 0.15)';
    badge.style.color = '#ef4444';
    dot.className = 'rt-indicator disconnected';
  } else {
    badge.textContent = 'CONNECTING...';
    badge.style.background = 'rgba(245, 158, 11, 0.15)';
    badge.style.color = '#f59e0b';
    dot.className = 'rt-indicator connecting';
  }
}

function updateStatsFromPayload(data, animate = true, force = false) {
  if (data.articles !== undefined) currentStats.articles = data.articles;
  if (data.weekly_readers !== undefined) currentStats.weekly_readers = data.weekly_readers;
  if (data.active_codes !== undefined) currentStats.active_codes = data.active_codes;
  if (data.contributors !== undefined) currentStats.contributors = data.contributors;

  DATA.site.stats.articles = currentStats.articles;
  DATA.site.stats.weekly_visitors = currentStats.weekly_readers;
  DATA.site.stats.codes = currentStats.active_codes;
  DATA.site.stats.contributors = currentStats.contributors;

  updateHeroStatsDOM(animate, force);
  updateControlPanelValues();
}

function updateHeroStatsDOM(animate = true, force = false) {
  const map = {
    'stat-articles': currentStats.articles,
    'stat-weekly-readers': currentStats.weekly_readers,
    'stat-codes': currentStats.active_codes,
    'stat-contributors': currentStats.contributors
  };

  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) {
      const changed = el.textContent !== String(val);
      if (changed || force) {
        el.textContent = val;
        if (animate && changed) {
          el.classList.remove('stat-updated');
          void el.offsetWidth;
          el.classList.add('stat-updated');
        }
      }
    }
  });
}

function updateControlPanelValues() {
  const elArt = $('#rt-val-articles');
  const elRead = $('#rt-val-readers');
  const elCodes = $('#rt-val-codes');
  const elContrib = $('#rt-val-contributors');

  if (elArt) elArt.textContent = currentStats.articles;
  if (elRead) elRead.textContent = currentStats.weekly_readers;
  if (elCodes) elCodes.textContent = currentStats.active_codes;
  if (elContrib) elContrib.textContent = currentStats.contributors;
}

function renderRealtimeControlWidget() {
  if ($('#rt-widget-container')) return;

  const container = document.createElement('div');
  container.id = 'rt-widget-container';
  container.innerHTML = `
    <button class="rt-panel-toggle" id="rt-toggle-btn" title="Toggle Realtime Test Control">
      <span class="rt-indicator" id="rt-indicator-dot"></span>
      <span>Realtime Test</span>
    </button>
    <div class="rt-panel" id="rt-panel-box">
      <div class="rt-panel-header">
        <h4>⚡ Supabase Realtime</h4>
        <span class="rt-status-badge" id="rt-status-badge">CONNECTING...</span>
      </div>
      <div class="rt-control-group">
        <div class="rt-control-row">
          <span class="rt-control-label">Articles</span>
          <div class="rt-control-btns">
            <button class="rt-btn-step" onclick="changeStat('articles', -1)">-</button>
            <span class="rt-val" id="rt-val-articles">${currentStats.articles}</span>
            <button class="rt-btn-step" onclick="changeStat('articles', 1)">+</button>
          </div>
        </div>
        <div class="rt-control-row">
          <span class="rt-control-label">Weekly Readers</span>
          <div class="rt-control-btns">
            <button class="rt-btn-step" onclick="changeStat('weekly_readers', -1)">-</button>
            <span class="rt-val" id="rt-val-readers">${currentStats.weekly_readers}</span>
            <button class="rt-btn-step" onclick="changeStat('weekly_readers', 1)">+</button>
          </div>
        </div>
        <div class="rt-control-row">
          <span class="rt-control-label">Active Codes</span>
          <div class="rt-control-btns">
            <button class="rt-btn-step" onclick="changeStat('active_codes', -1)">-</button>
            <span class="rt-val" id="rt-val-codes">${currentStats.active_codes}</span>
            <button class="rt-btn-step" onclick="changeStat('active_codes', 1)">+</button>
          </div>
        </div>
        <div class="rt-control-row">
          <span class="rt-control-label">Contributors</span>
          <div class="rt-control-btns">
            <button class="rt-btn-step" onclick="changeStat('contributors', -5)">-</button>
            <span class="rt-val" id="rt-val-contributors">${currentStats.contributors}</span>
            <button class="rt-btn-step" onclick="changeStat('contributors', 5)">+</button>
          </div>
        </div>
      </div>
      <div class="rt-actions">
        <button class="rt-action-btn btn-primary-alt" onclick="randomizeStats()">🎲 Randomize</button>
        <button class="rt-action-btn" onclick="resetStats()">↺ Reset</button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  $('#rt-toggle-btn').addEventListener('click', () => {
    $('#rt-panel-box').classList.toggle('open');
  });
}

window.changeStat = async function(key, delta) {
  if (!supabaseClient) return;
  const newVal = Math.max(0, (currentStats[key] || 0) + delta);
  const payload = { [key]: newVal, updated_at: new Date().toISOString() };

  const { error } = await supabaseClient
    .from('site_stats')
    .update(payload)
    .eq('id', 'main');

  if (error) {
    toast('Supabase error: ' + error.message);
  }
};

window.randomizeStats = async function() {
  if (!supabaseClient) return;
  const payload = {
    articles: Math.floor(Math.random() * 50) + 10,
    weekly_readers: Math.floor(Math.random() * 200) + 50,
    active_codes: Math.floor(Math.random() * 20) + 2,
    contributors: Math.floor(Math.random() * 500) + 80,
    updated_at: new Date().toISOString()
  };

  const { error } = await supabaseClient
    .from('site_stats')
    .update(payload)
    .eq('id', 'main');

  if (error) toast('Supabase error: ' + error.message);
};

window.resetStats = async function() {
  if (!supabaseClient) return;
  const payload = {
    articles: 12,
    weekly_readers: 10,
    active_codes: 5,
    contributors: 100,
    updated_at: new Date().toISOString()
  };

  const { error } = await supabaseClient
    .from('site_stats')
    .update(payload)
    .eq('id', 'main');

  if (error) toast('Supabase error: ' + error.message);
};

document.addEventListener('DOMContentLoaded', initChrome);

