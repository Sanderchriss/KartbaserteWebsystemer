import React, { useMemo } from "react";
import "./application.css";
import { MapView } from "./Map";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import { KommuneLayerCheckbox } from "./kommune/kommuneLayerCheck";
import "ol/ol.css";

useGeographic();

export function Application() {
  const map = useMemo(
    () =>
      new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({ center: [10, 60], zoom: 8 }),
      }),
    [],
  );
  return (
    <>
      <header>
        <h1></h1>Norges vakreste kart
      </header>
      <nav>
        <a href={"#"}>Zoomer</a>
        <KommuneLayerCheckbox />
      </nav>
      <MapView map={map} />
    </>
  );
}
