var config = {
  title: "Infinity SMP",
  center: [0, 64, 0],
  zoom: 1,
  world: "infinitySMP",
  worldname: "Infinity SMP",
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
    },
    {
      name: "cave",
      path: "tiles/infinitySMP/cave",
      zoomlevels: 5,
      tileSize: 128,
      mapzoomout: 3
    }
  ]
};

