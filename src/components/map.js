import { Scene, PolygonLayer } from '@antv/l7';
import { Mapbox, GaodeMap } from "@antv/l7-maps";
import * as React from 'react';

export default class AMapExample extends React.Component {

    componentWillUnmount() {
        this.scene.destroy();
    }

    async componentDidMount() {
        const data = await fetch(
            './jiangsu.json'
        )
        const scene = new Scene({
            id: 'map',
            map: new GaodeMap({
                pitch: 0,
                style: 'dark',
                center: [120.58, 31.30],
                zoom: 8
            })
        });
        const layer = new PolygonLayer({});

        layer
            .source(await data.json())
            .shape('circle')
            .animate(true)
            .size(72)
            .color('time', time => {
                return time > this.props.day ? '#5B8FF9' : '#5CCEA1';
            })
            .style({
                opacity: 1
            });
        scene.addLayer(layer);
        this.scene = scene;
        console.log('更新')
    }

    render() {
        console.log('更新选软')
        return (
            <div
                id="map"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 200,
                    bottom: 0,
                }}
            />
        );
    }
}