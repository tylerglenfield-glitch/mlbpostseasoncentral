// High-Quality Verified Baseball Images
const MLB_PHOTOS = {
  STADIUM: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80",
  BATTER: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
  GLOVE: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80",
  PITCHER: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80",
  LIGHTS: "https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80"
};

// Complete 30 MLB Franchises Database
const mlb30Teams = {
  // AL EAST
  yankees: { name: "New York Yankees", div: "AL_EAST", seed: "AL Wild Card", rec: "93 - 69", pos: "Eliminated in ALDS", star: "Aaron Judge", ws: "27 Titles", primary: "#0c2340", accent: "#1c355e", stadium: "Yankee Stadium (Bronx, NY)", pennants: "40", divTitles: "20", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/yankees", desc: "The New York Yankees won 93 games in 2026. Behind Aaron Judge's 53-home-run campaign, New York advanced past Boston before battling Tampa Bay in the ALDS.", roster: [{ name: "Aaron Judge", pos: "OF | #99", stat: ".322 BA, 53 HR" }, { name: "Juan Soto", pos: "OF | #22", stat: ".288 BA, 41 HR" }], gamelog: [{ game: "ALDS Game 4", opp: "vs Tampa Bay Rays", res: "L 2-5", score: "2 - 5", tv: "TBS" }] },
  redsox: { name: "Boston Red Sox", div: "AL_EAST", seed: "AL Wild Card #5", rec: "89 - 73", pos: "Eliminated in WC", star: "Rafael Devers", ws: "9 Titles", primary: "#bd3039", accent: "#0c2340", stadium: "Fenway Park (Boston, MA)", pennants: "14", divTitles: "10", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/redsox", desc: "Boston staged a second-half surge behind Rafael Devers to capture a Wild Card berth.", roster: [{ name: "Rafael Devers", pos: "3B | #11", stat: ".282 BA, 34 HR" }], gamelog: [] },
  rays: { name: "Tampa Bay Rays", div: "AL_EAST", seed: "#1 Seed • AL East Champs", rec: "98 - 64", pos: "ALCS Series Tied 2-2", star: "Junior Caminero", ws: "0 Titles", primary: "#092c5c", accent: "#00a3e0", stadium: "Tropicana Field (St. Petersburg, FL)", pennants: "2", divTitles: "5", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/rays", desc: "Tampa Bay posted an AL-best 98 wins to capture the AL East title.", roster: [{ name: "Junior Caminero", pos: "3B | #1", stat: ".290 BA, 31 HR" }], gamelog: [] },
  orioles: { name: "Baltimore Orioles", div: "AL_EAST", seed: "In Contention", rec: "86 - 76", pos: "Regular Season 4th", star: "Gunnar Henderson", ws: "3 Titles", primary: "#df4601", accent: "#000000", stadium: "Camden Yards", pennants: "7", divTitles: "10", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/orioles", desc: "Baltimore showcased strong young offensive talent throughout 2026.", roster: [{ name: "Gunnar Henderson", pos: "SS", stat: "37 HR" }], gamelog: [] },
  bluejays: { name: "Toronto Blue Jays", div: "AL_EAST", seed: "In Contention", rec: "82 - 80", pos: "Regular Season 5th", star: "Vladimir Guerrero Jr.", ws: "2 Titles", primary: "#134a8e", accent: "#1d2d5c", stadium: "Rogers Centre", pennants: "2", divTitles: "6", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/bluejays", desc: "Toronto finished above .500 in a competitive AL East division.", roster: [{ name: "Vladimir Guerrero Jr.", pos: "1B", stat: "30 HR" }], gamelog: [] },

  // AL CENTRAL
  guardians: { name: "Cleveland Guardians", div: "AL_CENTRAL", seed: "#3 Seed • AL Central Champs", rec: "88 - 74", pos: "Eliminated in ALDS", star: "José Ramírez", ws: "2 Titles", primary: "#0c2340", accent: "#e31937", stadium: "Progressive Field", pennants: "6", divTitles: "12", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/guardians", desc: "Cleveland captured the AL Central title behind José Ramírez.", roster: [{ name: "José Ramírez", pos: "3B", stat: "38 HR, 115 RBI" }], gamelog: [] },
  tigers: { name: "Detroit Tigers", div: "AL_CENTRAL", seed: "AL Wild Card #6", rec: "86 - 76", pos: "Eliminated in WC", star: "Tarik Skubal", ws: "4 Titles", primary: "#0c2340", accent: "#fa4616", stadium: "Comerica Park", pennants: "11", divTitles: "7", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/tigers", desc: "Detroit made a late-season run behind Tarik Skubal's pitching.", roster: [{ name: "Tarik Skubal", pos: "SP", stat: "18-4, 2.39 ERA" }], gamelog: [] },
  twins: { name: "Minnesota Twins", div: "AL_CENTRAL", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Carlos Correa", ws: "3 Titles", primary: "#072746", accent: "#d31145", stadium: "Target Field", pennants: "6", divTitles: "12", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/twins", desc: "Minnesota stayed in postseason contention all summer.", roster: [{ name: "Carlos Correa", pos: "SS", stat: ".290 BA" }], gamelog: [] },
  royals: { name: "Kansas City Royals", div: "AL_CENTRAL", seed: "In Contention", rec: "83 - 79", pos: "Regular Season 4th", star: "Bobby Witt Jr.", ws: "2 Titles", primary: "#004687", accent: "#7ab2dd", stadium: "Kauffman Stadium", pennants: "4", divTitles: "1", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/royals", desc: "Bobby Witt Jr. delivered another stellar 30-30 campaign for KC.", roster: [{ name: "Bobby Witt Jr.", pos: "SS", stat: "32 HR, 31 SB" }], gamelog: [] },
  whitesox: { name: "Chicago White Sox", div: "AL_CENTRAL", seed: "Rebuilding", rec: "60 - 102", pos: "Regular Season 5th", star: "Luis Robert Jr.", ws: "3 Titles", primary: "#27251f", accent: "#c4ced4", stadium: "Guaranteed Rate Field", pennants: "6", divTitles: "6", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/whitesox", desc: "Chicago is developing top prospects.", roster: [{ name: "Luis Robert Jr.", pos: "OF", stat: "24 HR" }], gamelog: [] },

  // AL WEST
  mariners: { name: "Seattle Mariners", div: "AL_WEST", seed: "#2 Seed • AL West Champs", rec: "92 - 70", pos: "ALCS Series Tied 2-2", star: "Julio Rodríguez", ws: "0 Titles", primary: "#0c2c56", accent: "#005c5c", stadium: "T-Mobile Park", pennants: "0", divTitles: "4", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/mariners", desc: "Seattle won the AL West and is tied 2-2 with Tampa Bay in the ALCS.", roster: [{ name: "Julio Rodríguez", pos: "CF", stat: "30 HR, 30 SB" }], gamelog: [] },
  astros: { name: "Houston Astros", div: "AL_WEST", seed: "In Contention", rec: "87 - 75", pos: "Regular Season 2nd", star: "Yordan Alvarez", ws: "2 Titles", primary: "#002d62", accent: "#eb6e1f", stadium: "Minute Maid Park", pennants: "5", divTitles: "13", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/astros", desc: "Houston compiled another winning record in the AL West.", roster: [{ name: "Yordan Alvarez", pos: "DH", stat: "35 HR" }], gamelog: [] },
  rangers: { name: "Texas Rangers", div: "AL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 3rd", star: "Corey Seager", ws: "1 Title", primary: "#003278", accent: "#c0111f", stadium: "Globe Life Field", pennants: "3", divTitles: "7", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/rangers", desc: "Texas continues building around Corey Seager.", roster: [{ name: "Corey Seager", pos: "SS", stat: "30 HR" }], gamelog: [] },
  athletics: { name: "Athletics", div: "AL_WEST", seed: "Rebuilding", rec: "69 - 93", pos: "Regular Season 4th", star: "Lawrence Butler", ws: "9 Titles", primary: "#003831", accent: "#efb21e", stadium: "Sutter Health Park", pennants: "15", divTitles: "17", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/athletics", desc: "The Athletics displayed young power hitting in 2026.", roster: [{ name: "Lawrence Butler", pos: "OF", stat: "22 HR" }], gamelog: [] },
  angels: { name: "Los Angeles Angels", div: "AL_WEST", seed: "Rebuilding", rec: "66 - 96", pos: "Regular Season 5th", star: "Mike Trout", ws: "1 Title", primary: "#ba0021", accent: "#003263", stadium: "Angel Stadium", pennants: "1", divTitles: "9", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/angels", desc: "Mike Trout leads the Angels as young prospects transition.", roster: [{ name: "Mike Trout", pos: "CF", stat: "28 HR" }], gamelog: [] },

  // NL EAST
  mets: { name: "New York Mets", div: "NL_EAST", seed: "NL Wild Card #4", rec: "89 - 73", pos: "Eliminated in NLDS", star: "Francisco Lindor", ws: "2 Titles", primary: "#002d62", accent: "#ff5910", stadium: "Citi Field", pennants: "5", divTitles: "6", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/mets", desc: "The Mets defeated Atlanta in the Wild Card before taking Milwaukee to 4 games in the NLDS.", roster: [{ name: "Francisco Lindor", pos: "SS", stat: "31 HR, 91 RBI" }], gamelog: [] },
  braves: { name: "Atlanta Braves", div: "NL_EAST", seed: "NL Wild Card #5", rec: "88 - 74", pos: "Eliminated in WC", star: "Ronald Acuña Jr.", ws: "4 Titles", primary: "#13274f", accent: "#ce1141", stadium: "Truist Park", pennants: "18", divTitles: "23", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/braves", desc: "Atlanta clinched another Wild Card berth behind dynamic offense.", roster: [{ name: "Ronald Acuña Jr.", pos: "RF", stat: ".292 BA, 25 SB" }], gamelog: [] },
  phillies: { name: "Philadelphia Phillies", div: "NL_EAST", seed: "#2 Seed • NL East Champs", rec: "95 - 67", pos: "Eliminated in NLDS", star: "Bryce Harper", ws: "2 Titles", primary: "#e81828", accent: "#002d62", stadium: "Citizens Bank Park", pennants: "8", divTitles: "12", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/phillies", desc: "Philadelphia won 95 games to capture the NL East title.", roster: [{ name: "Bryce Harper", pos: "1B", stat: "30 HR, 98 RBI" }], gamelog: [] },
  nationals: { name: "Washington Nationals", div: "NL_EAST", seed: "Rebuilding", rec: "71 - 91", pos: "Regular Season 4th", star: "CJ Abrams", ws: "1 Title", primary: "#ab0003", accent: "#14223d", stadium: "Nationals Park", pennants: "1", divTitles: "5", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/nationals", desc: "Washington's young core continues developing in DC.", roster: [{ name: "CJ Abrams", pos: "SS", stat: "20 HR, 31 SB" }], gamelog: [] },
  marlins: { name: "Miami Marlins", div: "NL_EAST", seed: "Rebuilding", rec: "62 - 100", pos: "Regular Season 5th", star: "Eury Pérez", ws: "2 Titles", primary: "#00a3e0", accent: "#ef3340", stadium: "loanDepot park", pennants: "2", divTitles: "0", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/marlins", desc: "Miami builds with electric young pitching arms.", roster: [{ name: "Eury Pérez", pos: "SP", stat: "3.20 ERA" }], gamelog: [] },

  // NL CENTRAL
  brewers: { name: "Milwaukee Brewers", div: "NL_CENTRAL", seed: "#1 Seed • NL Central Champs", rec: "103 - 59", pos: "NLCS Lead 3-1 vs LAD", star: "Jackson Chourio", ws: "0 Titles", primary: "#122a47", accent: "#ff1c41", stadium: "American Family Field (Milwaukee, WI)", pennants: "1", divTitles: "6", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/brewers", desc: "Milwaukee posted an MLB-best 103-59 record in 2026. Behind phenom Jackson Chourio and a lights-out bullpen, the Brewers hold a 3-1 NLCS lead over Los Angeles.", roster: [{ name: "Jackson Chourio", pos: "OF | #11", stat: ".288 BA, 26 HR, 88 RBI" }, { name: "Christian Yelich", pos: "OF | #22", stat: ".315 BA, 18 HR, .910 OPS" }], gamelog: [{ game: "NLCS Game 4", opp: "@ LA Dodgers", res: "W 4-2", score: "4 - 2", tv: "FS1" }] },
  cubs: { name: "Chicago Cubs", div: "NL_CENTRAL", seed: "In Contention", rec: "83 - 79", pos: "Regular Season 2nd", star: "Pete Crow-Armstrong", ws: "3 Titles", primary: "#0e3386", accent: "#cc3433", stadium: "Wrigley Field", pennants: "11", divTitles: "8", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/cubs", desc: "Chicago mounted strong Wild Card bids at Wrigley Field.", roster: [{ name: "Pete Crow-Armstrong", pos: "CF", stat: "20 HR, 30 SB" }], gamelog: [] },
  cardinals: { name: "St. Louis Cardinals", div: "NL_CENTRAL", seed: "In Contention", rec: "81 - 81", pos: "Regular Season 3rd", star: "Nolan Arenado", ws: "11 Titles", primary: "#c41e3a", accent: "#0c2340", stadium: "Busch Stadium", pennants: "19", divTitles: "15", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/cardinals", desc: "St. Louis finished at .500 in NL Central competition.", roster: [{ name: "Nolan Arenado", pos: "3B", stat: "22 HR" }], gamelog: [] },
  reds: { name: "Cincinnati Reds", div: "NL_CENTRAL", seed: "In Contention", rec: "77 - 85", pos: "Regular Season 4th", star: "Elly De La Cruz", ws: "5 Titles", primary: "#c6011f", accent: "#000000", stadium: "Great American Ball Park", pennants: "9", divTitles: "10", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/reds", desc: "Elly De La Cruz set franchise stolen base records for Cincinnati.", roster: [{ name: "Elly De La Cruz", pos: "SS", stat: "25 HR, 67 SB" }], gamelog: [] },
  pirates: { name: "Pittsburgh Pirates", div: "NL_CENTRAL", seed: "In Contention", rec: "76 - 86", pos: "Regular Season 5th", star: "Paul Skenes", ws: "5 Titles", primary: "#fdb827", accent: "#000000", stadium: "PNC Park", pennants: "9", divTitles: "9", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/pirates", desc: "Paul Skenes delivered Cy Young-worthy dominance for Pittsburgh.", roster: [{ name: "Paul Skenes", pos: "SP", stat: "12-4, 1.96 ERA" }], gamelog: [] },

  // NL WEST
  dodgers: { name: "Los Angeles Dodgers", div: "NL_WEST", seed: "#3 Seed • NL Wild Card", rec: "98 - 64", pos: "NLCS Trailing 1-3 vs MIL", star: "Shohei Ohtani", ws: "8 Titles", primary: "#005a9c", accent: "#ef3e42", stadium: "Dodger Stadium (Los Angeles, CA)", pennants: "25", divTitles: "21", img: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/dodgers", desc: "The Dodgers entered the 2026 postseason boasting one of the most star-studded lineups in baseball history. Led by Shohei Ohtani, Mookie Betts, and Freddie Freeman, Los Angeles advanced through the Wild Card and Division series into the NLCS.", roster: [{ name: "Shohei Ohtani", pos: "DH/SP | #17", stat: ".310 BA, 54 HR, 130 RBI" }, { name: "Mookie Betts", pos: "SS/OF | #5", stat: ".289 BA, 28 HR" }], gamelog: [{ game: "NLCS Game 4", opp: "vs Milwaukee Brewers", res: "L 2-4", score: "2 - 4", tv: "FS1" }] },
  padres: { name: "San Diego Padres", div: "NL_WEST", seed: "NL Wild Card #6", rec: "87 - 75", pos: "Eliminated in WC", star: "Fernando Tatis Jr.", ws: "0 Titles", primary: "#2f241d", accent: "#ffc425", stadium: "Petco Park", pennants: "2", divTitles: "5", img: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/padres", desc: "San Diego earned a Wild Card spot behind star outfield hitting.", roster: [{ name: "Fernando Tatis Jr.", pos: "RF", stat: "28 HR, 80 RBI" }], gamelog: [] },
  diamondbacks: { name: "Arizona Diamondbacks", div: "NL_WEST", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Corbin Carroll", ws: "1 Title", primary: "#a71930", accent: "#e3d4ad", stadium: "Chase Field", pennants: "2", divTitles: "5", img: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/dbacks", desc: "Arizona's baserunning speed kept them in playoff contention.", roster: [{ name: "Corbin Carroll", pos: "OF", stat: "22 HR, 35 SB" }], gamelog: [] },
  giants: { name: "San Francisco Giants", div: "NL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 4th", star: "Matt Chapman", ws: "8 Titles", primary: "#fd5a1e", accent: "#000000", stadium: "Oracle Park", pennants: "23", divTitles: "9", img: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/giants", desc: "San Francisco relied on elite defense and pitching at Oracle Park.", roster: [{ name: "Matt Chapman", pos: "3B", stat: "27 HR, Gold Glove" }], gamelog: [] },
  rockies: { name: "Colorado Rockies", div: "NL_WEST", seed: "Rebuilding", rec: "61 - 101", pos: "Regular Season 5th", star: "Ezequiel Tovar", ws: "0 Titles", primary: "#330066", accent: "#c4ced4", stadium: "Coors Field", pennants: "1", divTitles: "0", img: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/rockies", desc: "Colorado continues developing young prospects.", roster: [{ name: "Ezequiel Tovar", pos: "SS", stat: "25 HR" }], gamelog: [] }
};

let selectedTeamKey = 'dodgers';

// Helper DOM Safe Guard Functions
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// 30-Team Directory Grid Engine
function renderTeamGrid(filterDiv = 'ALL') {
  const grid = document.getElementById('team-picker-grid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    if (filterDiv === 'ALL' || team.div === filterDiv) {
      const btn = document.createElement('button');
      btn.className = `team-btn ${key === selectedTeamKey ? 'active' : ''}`;
      btn.innerText = team.name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

function filterTeamsByDivision(divName, e) {
  document.querySelectorAll('.div-tab-btn').forEach(t => t.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  renderTeamGrid(divName);
}

function selectTeam(key) {
  selectedTeamKey = key;
  const t = mlb30Teams[key];
  if (!t) return;

  renderTeamGrid();

  setText('spotlight-title', t.name);
  setText('spotlight-badge', t.seed);
  setText('spotlight-desc', t.desc);
  setText('spotlight-rec', t.rec);
  setText('spotlight-pos', t.pos);
  setText('spotlight-star', t.star);
  setText('spotlight-ws', t.ws);

  const img = document.getElementById('spotlight-img');
  if (img) {
    img.src = t.img;
    img.onerror = () => { img.src = MLB_PHOTOS.STADIUM; };
  }
}

function setFavoriteTeam() {
  localStorage.setItem('favMLBTeam', selectedTeamKey);
  setText('fav-quick-label', mlb30Teams[selectedTeamKey].name);
  alert(`❤️ Saved ${mlb30Teams[selectedTeamKey].name} as your favorite team!`);
}

// Dedicated Team Portal Launcher
function showTeamsHub() {
  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');
  if (mainHub && portalView) {
    mainHub.style.display = 'block';
    portalView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openTeamPortal(key) {
  selectedTeamKey = key;
  const t = mlb30Teams[key];
  if (!t) return;

  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');

  if (!portalView) {
    window.location.href = `teams.html?team=${key}`;
    return;
  }

  document.documentElement.style.setProperty('--team-theme-primary', t.primary || '#0c2340');
  document.documentElement.style.setProperty('--team-theme-accent', t.accent || '#2563eb');

  setText('portal-team-name', t.name);
  setText('portal-badge', t.seed);
  setText('portal-div-name', t.div.replace('_', ' '));
  setText('portal-tagline', `Official 2026 ${t.name} Postseason Hub`);
  
  const linkElem = document.getElementById('portal-official-btn');
  if (linkElem) linkElem.href = t.url;

  setText('portal-full-desc', t.desc);
  setText('ptab-rec', t.rec);
  setText('ptab-ws-titles', t.ws);
  setText('ptab-pennants', t.pennants || "N/A");
  setText('ptab-div-titles', t.divTitles || "N/A");
  setText('ptab-stadium', t.stadium || "MLB Ballpark");

  // Roster Grid
  const rosterGrid = document.getElementById('portal-roster-grid');
  if (rosterGrid) {
    rosterGrid.innerHTML = '';
    t.roster.forEach(player => {
      rosterGrid.innerHTML += `
        <div class="roster-card">
          <strong>${player.name}</strong>
          <span>${player.pos}</span>
          <p style="margin-top:6px; font-size:13px; font-weight:700; color:var(--text-main);">${player.stat}</p>
        </div>
      `;
    });
  }

  // Game Log Table
  const gamelogBody = document.getElementById('portal-gamelog-body');
  if (gamelogBody) {
    gamelogBody.innerHTML = '';
    if (t.gamelog && t.gamelog.length > 0) {
      t.gamelog.forEach(g => {
        gamelogBody.innerHTML += `
          <tr>
            <td><strong>${g.game}</strong></td>
            <td>${g.opp}</td>
            <td><strong style="color:${g.res.includes('W') ? 'var(--accent-green)' : 'var(--accent-red)'}">${g.res}</strong></td>
            <td>${g.score}</td>
            <td><span class="net-pill net-fs1">${g.tv}</span> <a href="https://www.mlb.com/tickets" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td>
          </tr>
        `;
      });
    } else {
      gamelogBody.innerHTML = `
        <tr>
          <td><strong>2026 Season</strong></td>
          <td>Regular Season Games</td>
          <td><strong>${t.rec}</strong></td>
          <td>-</td>
          <td><a href="${t.url}" target="_blank" class="ticket-pill-btn">MLB Schedule ↗</a></td>
        </tr>
      `;
    }
  }

  // News Wire
  const newsGrid = document.getElementById('portal-news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = `
      <article class="news-card">
        <div class="news-thumb">
          <img src="${t.img}" alt="${t.name}">
          <span class="news-badge badge-nlcs">${t.seed}</span>
        </div>
        <div class="news-body">
          <div class="news-meta">Oct 2026 • MLB.com Wire</div>
          <h3>${t.name} Postseason Report & News Breakdown</h3>
          <p>${t.desc}</p>
          <a href="${t.url}" target="_blank" class="news-action-btn">Read Coverage on MLB.com ↗</a>
        </div>
      </article>
    `;
  }

  if (mainHub) mainHub.style.display = 'none';
  if (portalView) portalView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function launchDedicatedPortal() {
  openTeamPortal(selectedTeamKey);
}

function openFavoriteTeamPortal() {
  const saved = localStorage.getItem('favMLBTeam') || 'dodgers';
  if (window.location.pathname.includes('teams.html')) {
    openTeamPortal(saved);
  } else {
    window.location.href = `teams.html?team=${saved}`;
  }
}

function switchPortalTab(tabName, e) {
  document.querySelectorAll('.portal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.portal-tab-content').forEach(c => c.classList.remove('active'));

  if (e && e.target) e.target.classList.add('active');
  const targetContent = document.getElementById(`ptab-${tabName}`);
  if (targetContent) targetContent.classList.add('active');
}

// Broadcast Schedule Renderer
const scheduleData = [
  { match: "ALCS Game 5", matchup: "Tampa Bay Rays @ Seattle Mariners", time: "Oct 15 • 7:07 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "T-Mobile Park, Seattle, WA", link: "https://www.stubhub.com/mlb-tickets" },
  { match: "NLCS Game 5", matchup: "Milwaukee Brewers @ LA Dodgers", time: "Oct 16 • 8:08 PM ET", net: "FS1", badge: "net-fs1", stream: "FOX Sports App", venue: "Dodger Stadium, Los Angeles, CA", link: "https://www.ticketmaster.com/mlb" },
  { match: "ALCS Game 6*", matchup: "Seattle Mariners @ Tampa Bay Rays", time: "Oct 17 • 8:03 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "Tropicana Field, St. Petersburg, FL", link: "https://www.mlb.com/tickets" },
  { match: "NLCS Game 6*", matchup: "LA Dodgers @ Milwaukee Brewers", time: "Oct 18 • 7:08 PM ET", net: "FS1", badge: "net-fs1", stream: "FOX Sports App", venue: "American Family Field, Milwaukee, WI", link: "https://www.ticketmaster.com/mlb" },
  { match: "World Series Game 1", matchup: "AL Champion vs NL Champion", time: "Oct 23 • 8:00 PM ET", net: "FOX", badge: "net-fox", stream: "FOX Sports Live", venue: "TBD (Home of Higher Seed)", link: "https://www.mlb.com/tickets" }
];

function renderSchedule() {
  const tbody = document.getElementById('schedule-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  scheduleData.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${item.match}</strong><br><span style="font-size:12px; color:var(--text-muted);">${item.matchup}</span></td>
        <td>${item.time}</td>
        <td><span class="net-pill ${item.badge}">${item.net}</span></td>
        <td>${item.stream}</td>
        <td>${item.venue}</td>
        <td><a href="${item.link}" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td>
      </tr>
    `;
  });
}

// Live ESPN Scoreboard API
async function fetchLiveMLBData() {
  const ticker = document.getElementById('ticker-content');
  const scoreGrid = document.getElementById('live-scoreboard-grid');

  if (ticker) ticker.innerHTML = "<span>🔄 Syncing with ESPN live score feeds...</span>";

  try {
    const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard');
    const data = await res.json();

    if (data.events && data.events.length > 0) {
      if (ticker) ticker.innerHTML = "";
      if (scoreGrid) scoreGrid.innerHTML = "";

      data.events.forEach(event => {
        const comp = event.competitions[0];
        const home = comp.competitors.find(c => c.homeAway === 'home');
        const away = comp.competitors.find(c => c.homeAway === 'away');
        const status = event.status.type.shortDetail;
        const isCompleted = event.status.type.completed;

        const awayScore = parseInt(away.score) || 0;
        const homeScore = parseInt(home.score) || 0;

        if (ticker) {
          ticker.innerHTML += `<span style="margin-right:25px;">⚾ <strong>${away.team.abbreviation} ${awayScore}</strong> @ <strong>${home.team.abbreviation} ${homeScore}</strong> (${status})</span>`;
        }

        if (scoreGrid) {
          scoreGrid.innerHTML += `
            <div class="score-card">
              <div class="card-top">
                <span>POSTSEASON</span>
                <span class="status-badge ${isCompleted ? 'final' : ''}">${status}</span>
              </div>
              <div class="team-score-row ${awayScore > homeScore ? 'winner' : ''}">
                <span>${away.team.displayName}</span>
                <span>${awayScore}</span>
              </div>
              <div class="team-score-row ${homeScore > awayScore ? 'winner' : ''}">
                <span>${home.team.displayName}</span>
                <span>${homeScore}</span>
              </div>
            </div>
          `;
        }
      });
    } else {
      renderFallbackScoreboard();
    }
  } catch (err) {
    renderFallbackScoreboard();
  }
}

function renderFallbackScoreboard() {
  setText('ticker-content', "⚾ NLCS Gm 4: MIL 4, LAD 2 (FINAL) | ALCS Gm 4: SEA 5, TB 4 (FINAL/9) | NLCS Gm 5: Tomorrow 8:08 PM ET on FS1");

  const scoreGrid = document.getElementById('live-scoreboard-grid');
  if (scoreGrid) {
    scoreGrid.innerHTML = `
      <div class="score-card">
        <div class="card-top"><span>NLCS GAME 4</span> <span class="status-badge final">FINAL</span></div>
        <div class="team-score-row winner"><span>Milwaukee Brewers</span> <span>4</span></div>
        <div class="team-score-row"><span>Los Angeles Dodgers</span> <span>2</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>ALCS GAME 4</span> <span class="status-badge final">FINAL/9</span></div>
        <div class="team-score-row winner"><span>Seattle Mariners</span> <span>5</span></div>
        <div class="team-score-row"><span>Tampa Bay Rays</span> <span>4</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>ALCS GAME 5</span> <span class="status-badge">OCT 15 • 7:07 PM ET</span></div>
        <div class="team-score-row"><span>Tampa Bay Rays</span> <span>-</span></div>
        <div class="team-score-row"><span>Seattle Mariners</span> <span>-</span></div>
      </div>
    `;
  }
}

// Modal Engine
const matchupDetailsMap = {
  'ALCS': { title: "ALCS: Rays vs Mariners", summary: "Series tied 2-2. Winner advances to the 2026 World Series.", games: ["Game 1: TB 3, SEA 1", "Game 2: SEA 4, TB 2", "Game 3: TB 6, SEA 3", "Game 4: SEA 5, TB 4"] },
  'NLCS': { title: "NLCS: Brewers vs Dodgers", summary: "Milwaukee leads 3-1. Game 5 at Dodger Stadium.", games: ["Game 1: MIL 5, LAD 2", "Game 2: MIL 3, LAD 1", "Game 3: LAD 8, MIL 0", "Game 4: MIL 4, LAD 2"] },
  'WS': { title: "2026 World Series", summary: "Starts October 23 on FOX.", games: ["Game 1: Oct 23", "Game 2: Oct 24"] }
};

function openMatchupDetails(key) {
  const modal = document.getElementById('matchup-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const details = matchupDetailsMap[key] || {
    title: `Postseason Matchup: ${key}`,
    summary: "Series summary and game logs.",
    games: ["Game 1: Complete", "Game 2: Complete"]
  };

  content.innerHTML = `
    <h3 style="font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:800; margin-bottom:10px;">${details.title}</h3>
    <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">${details.summary}</p>
    <div style="background:var(--bg-dark); padding:14px; border-radius:10px; border:1px solid var(--border-color);">
      <strong style="display:block; margin-bottom:8px; font-size:13px; color:var(--primary-blue);">Game Log Breakdown:</strong>
      <ul style="list-style:none; font-size:13px; line-height:1.8;">
        ${details.games.map(g => `<li>⚾ ${g}</li>`).join('')}
      </ul>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeMatchupModal(e) {
  if (e && e.target && e.target.id === 'matchup-modal') closeMatchupModalDirect();
}

function closeMatchupModalDirect() {
  const modal = document.getElementById('matchup-modal');
  if (modal) modal.style.display = 'none';
}

function filterBracket(league, e) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');

  const nodes = document.querySelectorAll('.matchup-node');
  nodes.forEach(node => {
    if (league === 'all') {
      node.style.display = 'block';
    } else if (league === 'al' && (node.innerText.includes('AL') || node.innerText.includes('Rays') || node.innerText.includes('Guardians') || node.innerText.includes('Mariners') || node.innerText.includes('Yankees') || node.innerText.includes('Tigers') || node.innerText.includes('Red Sox'))) {
      node.style.display = 'block';
    } else if (league === 'nl' && (node.innerText.includes('NL') || node.innerText.includes('Brewers') || node.innerText.includes('Dodgers') || node.innerText.includes('Mets') || node.innerText.includes('Padres') || node.innerText.includes('Phillies') || node.innerText.includes('Braves'))) {
      node.style.display = 'block';
    } else if (node.classList.contains('ws-card')) {
      node.style.display = 'block';
    } else {
      node.style.display = 'none';
    }
  });
}

// Translations
const i18n = {
  en: { home: "Scores & News", bracket: "Interactive Bracket", teams: "30-Team Franchise Hub", heroTitle: "Road to the World Series" },
  es: { home: "Marcadores y Noticias", bracket: "Cuadro Interactivo", teams: "Hub 30 Franquicias", heroTitle: "El Camino a la Serie Mundial" },
  zh: { home: "比分与新闻", bracket: "互动季后赛图", teams: "30支球队中心", heroTitle: "通往世界大赛之路" }
};

function changeLanguage(langKey) {
  const dict = i18n[langKey];
  if (!dict) return;

  setText('nav-home', dict.home);
  setText('nav-bracket', dict.bracket);
  setText('nav-teams', dict.teams);
  setText('hero-heading', dict.heroTitle);
}

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (icon) icon.innerText = '☀️';
    localStorage.setItem('themeMode', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (icon) icon.innerText = '🌙';
    localStorage.setItem('themeMode', 'dark');
  }
}

// App Load Initialization
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('themeMode');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    setText('theme-icon', '☀️');
  }

  const savedFav = localStorage.getItem('favMLBTeam');
  if (savedFav && mlb30Teams[savedFav]) {
    setText('fav-quick-label', mlb30Teams[savedFav].name);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const teamParam = urlParams.get('team');

  renderTeamGrid();
  renderSchedule();
  fetchLiveMLBData();

  if (teamParam && mlb30Teams[teamParam]) {
    openTeamPortal(teamParam);
  } else if (savedFav && mlb30Teams[savedFav]) {
    selectTeam(savedFav);
  }

  setInterval(fetchLiveMLBData, 60000);
});
