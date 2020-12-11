function storeData(name, points) {
  // eléírok egy ketőskeresztet, így megkülönböztethető a localstoageban lévő
  // nem idetartozó bejegyzésektől
  name = "#" + name;
  let oldValue = localStorage.getItem(name);
  if (oldValue < points) localStorage.setItem(name, points);
}

function loadToplist() {
  let toplist = [];
  for (let key in localStorage) {
    let goodkey = key.substring(1);
    // csak azokat a bejegyzéseket listázom, ami kettőskereszttel kezdődik
    if (key == "#" + goodkey) {
      let item = localStorage.getItem(key);
      if (key) toplist.push({ name: goodkey, points: item });
    }
  }
  toplist.sort(compareFunc);
  return toplist;
}

// sorbarendezés a pontszám alapján
function compareFunc(a, b) {
  if (parseInt(a.points) < parseInt(b.points)) return 1;
  if (parseInt(a.points) > parseInt(b.points)) return -1;
  return 0;
}

// a toplista bejegyzésekből html generálása
function toplistToHTML() {
  let toplist = loadToplist();
  let html = "";
  let len = toplist.length;
  // csak az első 10 elem kell
  if (len > 10) len = 10;
  for (let i = 0; i < len; i++) {
    html += '<div class="toplist-item">';
    html += '<div class="toplist-name">' + toplist[i].name + "</div>";
    html += '<div class="toplist-points">' + toplist[i].points + "</div></div>";
  }
  return html;
}

document.getElementById("toplist-container").innerHTML = toplistToHTML();
