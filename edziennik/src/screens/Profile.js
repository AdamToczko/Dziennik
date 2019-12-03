import React from 'react'
import {
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
  Image,
  Field,
  Label,
  Control,
  Input,
  Button
} from 'bloomer'


const Profile = props => {
  return (
    <Container>
   
      <Title isSize={1} hasTextAlign={'centered'}>Profile</Title>
      <Columns>
        <Column isSize={2}>
          <Image isSize="96x96" src="https://via.placeholder.com/96x96" />
        </Column>
        <Column isSize={10}>
          <Subtitle isSize={3}>Hello student</Subtitle>
          <Subtitle>John Doe</Subtitle>
        </Column>
      </Columns>
      <Field>
        <Label>E-mail</Label>
        <Control>
          <Input value={'student1@example.com'} type="email"/>
        </Control>
      </Field>
      <Button isColor='info' isSize="medium" isFullWidth>Change</Button>
      <hr />
      <Field>
        <Label>Current password</Label>
        <Control>
          <Input value="abc123" type="password"/>
        </Control>
      </Field>
      <Field>
        <Label>New password</Label>
        <Control>
          <Input value="abc1234!" type="password"/>
        </Control>
      </Field>
      <Button isColor='info' isSize="medium" isFullWidth>Confirm</Button>
    </Container>
  )
}

export default Profile;