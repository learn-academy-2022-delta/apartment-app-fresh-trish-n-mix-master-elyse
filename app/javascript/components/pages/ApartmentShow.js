import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props;
    return (
      <>
        <h3>Your Selection</h3>
        { apartment && 
          <Card>
          <CardImg
            className="card-img"
            top
            width="100%"
            src={apartment.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{apartment.street}</CardTitle>
            <CardSubtitle>{apartment.city}</CardSubtitle>
            <CardText>{apartment.state}</CardText>
            <CardText>{apartment.manager}</CardText>
            <CardText>{apartment.email}</CardText>
            <CardText>{apartment.price}</CardText>
            <CardText>{apartment.bedrooms}</CardText>
            <CardText>{apartment.bathrooms}</CardText>
            <CardText>{apartment.pets}</CardText>
          </CardBody>
        </Card>}
      </>
    );
  }
}
