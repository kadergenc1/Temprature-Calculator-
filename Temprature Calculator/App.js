import React, { Component } from 'react'
import Celcius from "./celcius";
import Comp1 from "./comp1";
import Fahrenheit from "./fahrenheit";
import Kelvin from "./kelvin";
import { Container, Row, Col } from "reactstrap";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      sunny : "https://o.quizlet.com/EsQPDtCbC6GBV4ZESCFdkw.jpg",
      rainy : " https://w7.pngwing.com/pngs/453/561/png-transparent-light-rain-meteorology-weather-climate-rainy-forecast-drizzle-weather-solid-daily-forecast-icon-thumbnail.png ",
    
    };

    this.increaseNumber = this.increaseNumber.bind(this);
  }

  increaseNumber = () => {
    this.setState({
      count: this.state.count + 1,
      img: this.state.rainy,
    });

    if (this.state.count > 20) {
      this.setState({
        img:this.state.sunny,
      });

  }
}
  
  render() {
    return (
      <div>
         

          <Container>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.img} />
            <Card.Body>
              <Card.Title>Hava Guzel</Card.Title>
              <Card.Text>
                Hava bugun <Celcius count={this.state.count}/> derece
              </Card.Text> 
            </Card.Body>
          </Card>
            <Row>
              <Col>
                <Comp1 numberUpdate={this.increaseNumber} countComp={this.state.count}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Celcius count={this.state.count}/>
              </Col>
              <Col>
                <Fahrenheit count={this.state.count}/>
              </Col>
              <Col>
                <Kelvin count={this.state.count}/>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }  
}

export default App;



