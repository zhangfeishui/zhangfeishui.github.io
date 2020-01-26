import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Topics from "./topic"
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import "../components/layout.css"
import { Scene, PolygonLayer } from '@antv/l7';
import { Mapbox, GaodeMap } from "@antv/l7-maps";
import { render } from "@testing-library/react";
import { Slider, Button } from 'antd';
import sourceData from '../data/jiangsu.json'
// import AMapExample from "../components/map.js"
import * as R from 'ramda'



class NestingExample extends React.Component {
    // componentWillUnmount() {
    //     this.scene.destroy();
    // }

    constructor(props) {
        console.log('01构造函数')
        super(props)
        //与render函数的onClick绑定，必须绑定，不然js找不到这两个函数
        this.onClickAdd = this.onClickAdd.bind(this)
        this.onClickReduce = this.onClickReduce.bind(this)
        this.state = {
            value: 1
        }
    }

    async componentDidMount() {
        console.log('04组件将要挂载')
        let day = this.state.value;
        console.log(day)
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
            .source(this.procSrouceData(day, sourceData))
            .shape('circle')
            .animate(true)
            .size('color', R.identity)
            .color('#5B8FF9')
            // .color('color', R.identity)
            .style({
                opacity: 1
            });


        this.scene = scene;
        this.layer = layer;
        this.scene.addLayer(layer);
    }

    procSrouceData(currentData = 1, sourceData) {
        const features = sourceData.features
        const colorFunc = ({ time }) => time > currentData ? 1 : 72
        // const colorFunc = ({ time }) => time > currentData ? '#5B8FF9' : '#5CCEA1'
        // const f = myFeatures.map(o => ({ ...o, properties: { ...o.properties, color: circleColorFunc(o.properties) } }))

        const appendColorProp = o => ({ ...o, color: colorFunc(o) })
        const propertiesLens = R.lensProp('properties')
        const propertiesTransform = R.over(propertiesLens, appendColorProp)
        return ({ ...sourceData, features: R.map(propertiesTransform, features) })
    }

    updateLayer(day = 1) {
        console.log(this.procSrouceData(day, sourceData))

        this.layer.setData(this.procSrouceData(day, sourceData))
    }

    onClickAdd() {
        const day = this.state.value + 1
        this.setState({ value: day })
        this.updateLayer(day)
    }

    //- => 函数
    onClickReduce() {
        const day = this.state.value - 1
        this.setState({ value: day })
        this.updateLayer(day)
    }


    render() {
        console.log('03数据渲染render')
        return (
            <div class="tubiaoquyu">
                <div class="kongjian">
                    {/* <Slider onChange={this.onChange} defaultValue={30} marks={marks} step={null} tooltipVisible={false} tipFormatter={value => `${value}%`}>{value}</Slider> */}
                    <h1>江苏1月22日出现首例</h1>
                    <h1>第{this.state.value}天</h1>
                    <Button onClick={this.onClickAdd}>+</Button>
                    <Button onClick={this.onClickReduce}>-</Button>
                </div>
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
                {/* <AMapExample day={this.state.value} /> */}
            </div>
        );
    }
}

export default NestingExample


