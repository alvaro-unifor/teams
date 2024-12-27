import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";


import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";

import { useNavigation } from '@react-navigation/native';

export function NewGroup() {

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', {'group': 'Nova Turma'})
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
            />

            <Button 
                title="Criar"
                onPress={handleNew}
            />
        </Content>
    </Container>
  );
}