import React, { useEffect, useMemo, useState } from "react";
import "./application.css";
import { MapView } from "./Map";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import { KommuneLayerCheckbox } from "./kommune/kommuneLayerCheck";
import { Layer } from "ol/layer";
import "ol/ol.css";

useGeographic();

export function Application() {
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);
  const map = useMemo(
    () =>
      new Map({
        layers,
        view: new View({ center: [10, 60], zoom: 8 }),
      }),
    [],
  );
  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);
  return (
    <>
      <header>
        <h1></h1>Norges vakreste kart
      </header>
      <nav>
        <a href={"#"}>Zoomer</a>
        <KommuneLayerCheckbox setLayers={setLayers} />
      </nav>
      <MapView map={map} />
    </>
  );
}
