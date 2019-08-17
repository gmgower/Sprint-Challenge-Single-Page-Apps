import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function EpisodeCard({ epi }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{epi.name}</Card.Header>
        <Card.Meta>{epi.air_date}</Card.Meta>
        <Card.Description> {epi.episode}</Card.Description>
      </Card.Content>
      <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {epi.characters.length} Characters
                </a>
            </Card.Content>
    </Card>
  );
}
