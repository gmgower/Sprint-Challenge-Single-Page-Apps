import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard({ char }) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.species}</Card.Meta>
        <Card.Description>{char.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  );
}
