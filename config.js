var config = {
  title: "Infinity SMP",
  center: [0, 64, 0], // adjust to your spawn if needed
  zoom: 1,
  world: "infinitySMP",
  worldname: "infinitySMP",
  map: "surface",
  controls: {
    pan: true,
    zoom: true,
    compass: true,
    mapselector: true,
    chatbox: false,
    link: true,
    coordsbox: true,
    config: false
  },
  worlds: {
    "infinitySMP": "Infinity SMP"
  },
  tilesets: [
    {
      name: "surface",
      path: "tiles/infinitySMP/surface",
      zoomlevels: 5,
      tileSize: 128,
      mapzoomout: 3
    }
  ]
};
