import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';



export default class ApartmentIndex extends Component {

  render() {
    console.log("apts: ", this.props.apartments);
    const { apartments } = this.props

    return (
      <>
        <h3>ApartmentIndex</h3>
        <div>
          {apartments &&
            apartments.map((value, index) => {
              return (
                <Card key={index}>
                  <CardImg
                    className="card-img"
                    top
                    width="100%"
                    src={value.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{value.street}</CardTitle>
                    <CardSubtitle>{value.city}</CardSubtitle>
                    <CardText>{value.state}</CardText>
                    <CardText>{value.manager}</CardText>
                    <CardText>{value.price}</CardText>
                    <CardText>{value.bedrooms}</CardText>
                    <CardText>{value.bathrooms}</CardText>
                    <CardText>{value.pets}</CardText>
                    <Button>
                      <NavLink to={`/apartmentshow/${value.id}`}>More Info</NavLink>
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
        </div>
      </>
    );
  }
}
