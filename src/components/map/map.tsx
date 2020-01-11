import React, { useEffect, useState } from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

import mapboxgl from "mapbox-gl";
import marker from "../../icons/marker-red.png";
import shelter from "../../icons/shelter.png";


interface MapDisplayProps {
    position: any;
    id: string;
    status: string;
}

const mapPointLayer = (
    name: string,
    lon: string,
    lat: string,
    size: number
): any => {
    return {
        id: name,
        type: "symbol",
        source: {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "Point",
                            coordinates: [lon, lat]
                        }
                    }
                ]
            }
        },
        layout: {
            "icon-image": name,
            "icon-size": size
        }
    };
};

const MapDisplay: React.FC<MapDisplayProps> = props => {
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || "";
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [props.position.lon, props.position.lat],
            zoom: 10
        });
        map.on("load", () => {
            map.loadImage(marker, (err: Error, image: HTMLImageElement) => {
                if (err) throw err;
                map.addImage("marker", image);
                map.addLayer(
                    mapPointLayer("marker", props.position.lon, props.position.lat, 0.15)
                );
            });
            if (props.status !== "REPORTED") {
                map.loadImage(shelter, (err: Error, image: HTMLImageElement) => {
                    if (err) throw err;
                    map.addImage("shelter", image);
                    fetch(process.env.REACT_APP_BACKEND_URL + `/find/shelter/${props.id}`)
                        .then(response => response.json())
                        .then(jsonData => {
                            map.addLayer(
                                mapPointLayer(
                                    "shelter",
                                    jsonData.map.shelter.map.lon,
                                    jsonData.map.shelter.map.lat,
                                    2
                                )
                            );
                        });
                });
            }
        });
    });
    return <div id={"map"} style={{ width: "500px", height: "400px" }}></div>;
};


const Map: React.FC = () => {
    return (
        <Card>
            <CardHeader>Victim's Location</CardHeader>
            <CardBody>

            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
    );
}

export default Map;