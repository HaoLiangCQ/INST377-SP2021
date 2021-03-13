function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([38.9897,-76.9378],13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWx2aW5oYW8iLCJhIjoiY2ttNXE3NW51MGd4MDJvb2ozbmd3aTNhNCJ9.tE4IVzxBxZkI10pHzarFsw'
}).addTo(mymap);
console.log('mymap',mymap);
return mymap;
}

const marker_list=[];
async function dataHandler(mapFromLeafLet) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers

  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList=document.querySelector('.target-list');
 
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const data=await request.json();

  form.addEventListener('submit', async(event) => {
    
    event.preventDefault();
    console.log('submit form', search.value);
    const result = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    
    const filtered = result.slice(0, 5);
    const firstCoor = filtered[0].geocoded_column_1.coordinates;
    mapFromLeafLet.setView(new L.LatLng(firstCoor[1],firstCoor[0]),13);
    console.table(filtered);
    
    document.querySelector('.target-list').innerHTML='';
    marker_list.forEach((savedMarker) =>{mapFromLeafLet.removeLayer(savedMarker); marker_list.pop();});



    filtered.forEach((item) =>{
      const longLat=item.geocoded_column_1.coordinates;
      console.log('markerLongLat',longLat[0],longLat[1]);

      const marker = L.marker([longLat[1],longLat[0]]).addTo(mapFromLeafLet);
      marker_list.push(marker);
      const appendItem=document.createElement('li');
      appendItem.classList.add('block');
      appendItem.classList.add('list-item');
      appendItem.classList.add('has-background-warning');
      appendItem.innerHTML = `<div class="list-header is-size-5">${item.name}</div> 
      		<address class="is-size-6"> ${item.address_line_1} </address>`;
      targetList.append(appendItem);
    });
    
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;
