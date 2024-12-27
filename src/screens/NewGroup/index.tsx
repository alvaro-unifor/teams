import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";


import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";

import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState('')


  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group })
    } catch (error) {
      console.log(error);
    } 
  }
  return (
    <Container>
        <Header showBackButton/>

        <Content>
            <Icon />

            <Highlight 
                title="Nova turma"
                subtitle="crie uma turma para adicionar pessoas"
            />

            <Input 
              placeholder="Nome da turma"
              onChangeText={setGroup}
            />

            <Button 
                title="Criar"
                onPress={handleNew}
            />
        </Content>
    </Container>
  );
}