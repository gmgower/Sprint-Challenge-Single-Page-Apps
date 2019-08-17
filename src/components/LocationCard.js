import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard({ loc }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{loc.name}</Card.Header>
        <Card.Meta>{loc.dimension}</Card.Meta>
        <Card.Description>{loc.created}</Card.Description>
      </Card.Content>
    </Card>
  );
}