import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import '../../screen.css';
import 'antd/dist/antd.css';
import Graph from '../../components/Graph';
import { func } from '../../services/Services';

const InputStyle = {
    background: "#1890ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"

};
var dataInTable;
const columns = [
    {
        title: "x",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "y",
        key: "y",
        dataIndex: "y"
    }
];
var x = [], yE = [];
class Heun extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            start: 0,
            finish: 0,
            x0: 0,
            y0: 0,
            h: 0,
            exactEquation: "",
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    heun(start, finish, x0, y0, h) {
        x = []
        yE = []
        dataInTable = []
        var y = y0
        var xi = x0
        for (var i = start; i <= finish; i += h) {
            var euler = this.euler(xi, y, h)
            y = y + ((func(xi, y) + func((xi += h), euler)) / 2) * h
            yE.push(y)
            x.push(i)
        }
        this.createTable(x, yE)
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }
    euler(x, y, h) {
        return y + func(x, y) * h

    }

    createTable(x, y) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                x: x[i],
                y: y[i]
            });
        }

    }
    render() {
        return (
            <div style={{ padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>Heun's Method</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            style={{ background: "gray", borderRadius:"15px", color: "#FFFFFFFF" }}
                            onChange={this.handleChange}
                            id="inputCard"
                        >

                            <h2>f(x,y)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                            <h2>X<sub>0</sub></h2><Input size="large" name="x0" style={InputStyle}></Input>
                            <h2>Y<sub>0</sub></h2><Input size="large" name="y0" style={InputStyle}></Input>
                            <h2>Start</h2><Input size="large" name="start" style={InputStyle}></Input>
                            <h2>Finish</h2><Input size="large" name="finish" style={InputStyle}></Input>
                            <h2>H</h2><Input size="large" name="h" style={InputStyle}></Input><br /><br />
                            <h2>Exact Equation</h2><Input size="large" name="exactEquation" style={InputStyle}></Input><br /><br />

                            <Button id="submit_button" onClick={
                                () => this.heun(parseFloat(this.state.start), parseFloat(this.state.finish), parseFloat(this.state.x0), parseFloat(this.state.y0), parseFloat(this.state.h))
                            }
                                style={{ background: "#4caf50", color: "white", fontSize: "20px" }}>Submit</Button>

                        </Card>
                    </div>
                    <div className="col">
                        {this.state.showGraph && <Graph fx={this.state.exactEquation} title={'Heun\'s of ' + this.state.exactEquation} />}

                    </div>
                </div>
                {this.state.showOutputCard &&
                    <Card
                        title={"Output"}
                        bordered={true}
                        style={{ background: "#2196f3", color: "#FFFFFFFF" }}
                        id="outputCard"
                    >
                        <Table columns={columns} bordered={true} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
                        ></Table>
                    </Card>
                }
            </div>
        );
    }
}
export default Heun;