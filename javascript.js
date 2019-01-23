function newStation() {
  var randomStation = Math.floor(Math.random() * stations.length);
  document.getElementById('stationDisplay').innerHTML = stations[randomStation];
}

function newFact() {
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact]
}

var facts = [
  'one-north (CC23) is the only MRT station starting without a capital letter.',
  'Each train on the Circle Line weighs as much as 22 adult Asian elephants.',
  'Promenade Station (CC4/DT15) has 7 platform levels.',
  'Bras Basah Station (CC2) has the longest escalator.',
  'Raffles Place Station (EW14/NS26) has 10 exits.',
  'Toa Payoh Station (NS19) is Singapore\'s first MRT station.',
  'Bartley Station (CC12) has 164,800 one-cent coins.',
  'Kranji Station (NS7) has 20 fare gates.',
  'Bishan Station (NS17/CC15) was built on a cemetery.',
  'The Circle Line is commonly misinterpreted as yellow in colour when it is in actual fact, orange.',
  'Promenade Station (CC4/DT15) is currently the deepest station.',
  'Tuas Crescent Station (EW31) is currently the highest elevated station.'
]

var stations = [
  'Jurong East \n (NS1/EW24/JE5)',
  'Bukit Batok \n (NS2)',
  'Bukit Gambok \n (NS3)',
  'Choa Chu Kang \n (NS4/JS1/BP1)',
  'Yew Tee \n (NS5)',
  'Kranji \n (NS7)',
  'Marsiling \n (NS8)',
  'Woodlands \n (NS9)',
  'Admiralty \n (NS9)',
  'Sembawang \n (NS11)',
  'Canberra \n (NS12)',
  'Yishun \n (NS13)',
  'Khatib \n (NS14)',
  'Yio Chu Kang \n (NS15)',
  'Ang Mo Kio \n (NS16)',
  'Bishan \n (NS17/CC15)',
  'Braddell \n (NS18)',
  'Toa Payoh \n (NS19)',
  'Novena \n (NS20)',
  'Newton \n (NS21/DT11)',
  'Orchard \n (NS22)',
  'Somerset \n (NS23)',
  'Dhoby Ghaut \n (NS24/NE6/CC1)',
  'City Hall \n (NS25/EW13)',
  'Raffles Place \n (NS26/EW14)',
  'Marina Bay \n (NS27/CE2)',
  'Marina South Pier \n (NS28)',
  'Pasir Ris \n (EW1)',
  'Tampines \n (EW2/DT32)',
  'Simei \n (EW3)',
  'Tanah Merah \n (EW4)',
  'Bedok \n (EW5)',
  'Kembangan \n (EW6)',
  'Eunos \n (EW7)',
  'Paya Lebar \n (EW8/CC9)',
  'Aljunied \n (EW9)',
  'Kallang \n (EW10)',
  'Lavender \n (EW11)',
  'Bugis \n (EW12/DT14)',
  'Tanjong Pagar \n (EW15)',
  'Outram Park \n (EW16/NE3)',
  'Tiong Bahru \n (EW17)',
  'Redhill \n (EW18)',
  'Queenstown \n (EW19)',
  'Commonwealth \n (EW20)',
  'Buona Vista \n (EW21/CC22)',
  'Dover \n (EW22)',
  'Clementi \n (EW23)',
  'Chinese Garden \n (EW25)',
  'Lakeside \n (EW26)',
  'Boon Lay \n (EW27)',
  'Pioneer \n (EW28)',
  'Joo Koon \n (EW29)',
  'Gul Circle \n (EW30)',
  'Tuas Crescent \n (EW31)',
  'Tuas West Road \n (EW32)',
  'Tuas Link \n (EW33)',
  'Expo \n (CG1)',
  'Changi Airport \n (CG2)',
  'Harbour Front \n (NE1/CC29)',
  'Chinatown \n (NE4/DT19)',
  'Clarke Quay \n (NE5)',
  'Little India \n (NE7/DT12)',
  'Farrer Park \n (NE8)',
  'Boon Keng \n (NE9)',
  'Potong Pasir \n (NE10)',
  'Woodleigh \n (NE11)',
  'Serangoon \n (NE12/CC13)',
  'Kovan \n (NE13)',
  'Hougang \n (NE14)',
  'Buangkok \n (NE15)',
  'Sengkang \n (NE16/STC)',
  'Punggol \n (NE17/PTC)',
  'Bras Basah \n (CC2)',
  'Esplanade \n (CC3)',
  'Promenade \n (CC4/DT14)',
  'Nicoll Highway \n (CC5)',
  'Stadium \n (CC6)',
  'Mountbatten \n (CC7)',
  'Dakota \n (CC8)',
  'MacPherson \n (CC10/DT26)',
  'Tai Seng \n (CC11)',
  'Bartley \n (CC12)',
  'Lorong Chuan \n (CC14)',
  'Marymount \n (CC16)',
  'Caldecott \n (CC17/TE9)',
  'Botanic Gardens \n (CC19/DT9)',
  'Farrer Road \n (CC20)',
  'Holland Village \n (CC21)',
  'one-north \n (CC23)',
  'Kent Ridge \n (CC24)',
  'Haw Par Villa \n (CC25)',
  'Pasir Panjang \n (CC26)',
  'Labrador Park \n (CC27)',
  'Telok Blangah \n (CC28)',
  'Bayfront \n (CE1/DT16)',
  'Bukit Panjang \n (DT1/BP6)',
  'Cashew \n (DT2)',
  'Hillview \n (DT3)',
  'Beauty World \n (DT5)',
  'King Albert Park \n (DT6)',
  'Sixth Avenue \n (DT7)',
  'Tan Kah Kee \n (DT8)',
  'Stevens \n (DT10/TE11)',
  'Rochor \n (DT13)',
  'Downtown \n (DT17)',
  'Telok Ayer \n (DT18)',
  'Fort Canning \n (DT20)',
  'Bencoolen \n (DT21)',
  'Jalan Besar \n (DT22)',
  'Bendemeer \n (DT23)',
  'Geylang Bahru \n (DT24)',
  'Mattar \n (DT25)',
  'Ubi \n (DT27)',
  'Kaki Bukit \n (DT28)',
  'Bedok North \n (DT29)',
  'Bedok Reservoir \n (DT30)',
  'Tampines West \n (DT31)',
  'Tampines East \n (DT33)',
  'Upper Changi \n (DT34)',
]
