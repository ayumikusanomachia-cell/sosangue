

var map = new ol.Map({
  target: 'map', // o id do div no HTML
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM() // usa OpenStreetMap como base
    })
  ],
  view: new ol.View({
    center: [0, 0], // coordenadas iniciais
    zoom: 2         // nível de zoom inicial
  })
});

