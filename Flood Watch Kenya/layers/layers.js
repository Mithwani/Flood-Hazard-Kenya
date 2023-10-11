var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_FloodHazardMap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flood Hazard Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FloodHazardMap_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3757871.829442, -521380.460317, 4677504.372292, 574062.542863]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_FloodHazardMap_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FloodHazardMap_1];
