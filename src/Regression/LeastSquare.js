import React, { Component } from 'react'
import {Card, Input, Button, Table} from 'antd';
import '../screen.scss';
import 'antd/dist/antd.css';
const InputStyle = {
    background: "#f58216",
    color: "white", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var columns = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var x, y, tableTag, fx

class LSE extends Component {
    
    constructor() {
        super();
        x = []
        y = []

        tableTag = []
        this.state = {
            nPoints: 0,
            X: 0,
            interpolatePoint: 0,
            showInputForm : true,
            showInputButton: true,
            showTableInput: false,
            showTableButton: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
      
    
    }  
    createTableInput(n, X) {
       /* for (var i=1 ; i<=n ; i++) {

            x.push(<Input style={{
                width: "100%",
                height: "50%", 
                backgroundColor:"black", 
                marginInlineEnd: "5%", 
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }}
            id={"x"+i} key={"x"+i} placeholder={"x"+i}/>);
            y.push(<Input style={{
                width: "100%",
                height: "50%", 
                backgroundColor:"black", 
                marginInlineEnd: "5%", 
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }} 
            id={"y"+i} key={"y"+i} placeholder={"y"+i}/>);   
            
    }*/
        for (var i=1 ; i<=n ; i++) {
            for (var j=1 ; j<=X ; j++) {
                
            }
        }

        tableTag.push({
                no: i,
                x: x,
                y: y[0]
            });
        this.setState({
            showInputForm: false,
            showInputButton: false,
            showTableInput: true,
            showTableButton: true
        })
    }
    initialValue() {
        x = []
        y = []
        for (var i=1 ; i<=this.state.nPoints ; i++) {
            x[i] = parseInt(document.getElementById("x"+i).value);
            y[i] = parseFloat(document.getElementById("y"+i).value);
        }
    }
 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
                <h2 style={{color: "black", fontWeight: "bold"}}>Least Square Error</h2>
                <div>
                    <Card
                      bordered={true}
                      style={{ width: 400, background: "#f44336", color: "#FFFFFFFF", float:"left"}}
                      onChange={this.handleChange}
                    >
                        {this.state.showInputForm && 
                            <div>
                                <h2>Number of X</h2><Input size="large" name="X" style={InputStyle}></Input>
                                <h2>Number of points(n)</h2><Input size="large" name="nPoints" style={InputStyle}></Input>
                            </div> 
                        }                        
                        {this.state.showTableInput && 
                        <div>
                            <Table columns={columns} dataSource={tableTag} pagination={false} bordered={true} bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "white" , overflowY: "scroll", minWidth: 120, maxHeight: 300}}></Table>
                        </div>
                        }
                        <br></br>
                        {this.state.showInputButton && 
                            <Button id="dimention_button" onClick= {
                                ()=> this.createTableInput(parseInt(this.state.nPoints), parseInt(this.state.X))}
                                style={{background: "#4caf50", color: "white", fontSize: "20px"}}>
                                Submit<br></br>
                            </Button>
                        }
                        {this.state.showTableButton && 
                            <Button 
                                id="matrix_button"  
                                style={{background: "blue", color: "white", fontSize: "20px"}}
                                >
                                Submit
                            </Button>
                        }
                        
                    </Card>
                    

                    {this.state.showOutputCard &&
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: 400, border: "2px solid black", background: "rgb(61, 104, 61) none repeat scroll 0% 0%", color: "white", float: "left", marginInlineStart: "4%"}}
                        >
                        <p style={{fontSize: "24px", fontWeight: "bold"}}>{fx}</p>
                            
                        </Card>                        
                    }

                   
                </div>

                
            </div>
        );
    }
}
export default LSE;