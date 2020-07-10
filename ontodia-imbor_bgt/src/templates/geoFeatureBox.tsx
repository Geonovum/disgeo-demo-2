/* template.tsx */
import * as React from 'react';
import { ElementIri, ElementModel, Dictionary, LocalizedString, Property } from 'ontodia/src/ontodia/data/model';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

// @ts-ignore
import * as Wkt from 'wicket'

interface Wkt {
    new(): Wkt;
    delimiter: string;
    wrapVertices: string;
    regExes: string;
    components: string;
    isCollection(): boolean;
    sameCoords(a: any, b: any): boolean;
    fromObject(obj: any): Wkt;
    toObject(config?: any): any;
    toString(config?: any): string;
    fromJson(obj: any): Wkt;
    toJson(): any;
    merge(wkt: string): Wkt;
    read(str: string): Wkt;
    write(components?: Array<any>): string;
    isRectangle: boolean;
}

export type PropArray = Array<{
    id: string;
    name: string;
    property: Property;
}>;

export interface TemplateProps {
    elementId: string;
    data: ElementModel;
    iri: ElementIri;
    types: string;
    label: string;
    color: any;
    iconUrl: string;
    imgUrl?: string;
    isExpanded?: boolean;
    propsAsList?: PropArray;
    props?: Dictionary<Property>;
}

export class geoFeatureBox extends React.Component<TemplateProps, {}> {


    componentDidMount() {
        // create map
        var wicket = new Wkt.Wkt();
        var wkt_geom 
        this.props.propsAsList.some(({name, id, property}) => { 
            if( id == 'http://www.opengis.net/ont/geosparql#asWKT' )
                wkt_geom = property.values[0].value
                return true
            }
        )
        wicket.read(wkt_geom)
        let location = wicket.toJson();
        let map = L.map('map-'+this.props.elementId, {
          zoom: 16,
          layers: [
            L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png', {
                attribution: '<a href="https://creativecommons.org/licenses/by/3.0/nl/">CC BY 3.0</a> Kadaster', // Attributie van kaartmateriaal
                maxZoom: 18, // Maximale zoom niveau van deze getegelde kaart service
                minZoom: 8, // Minimale zoom niveau van deze getegelde kaart service
                tileSize: 256, // Grootte van de tegels die opgehaald worden
                zoomOffset: 0 // Zoom offset (meestal 0)
            }),
          ]
        });
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        if (map.tap) map.tap.disable();
        let jsonLayer = L.geoJSON(location).addTo(map);
        map.fitBounds(jsonLayer.getBounds());
        
      }

    render() {
        
        return (
            <div className='ontodia-standard-template disgeo-map'
                style={{borderColor: this.props.color}}>
                <div className='title'>{this.props.label}</div>
                <div id={'map-'+this.props.elementId} className='geo_point'/>
            </div>

        );
    }

    

}