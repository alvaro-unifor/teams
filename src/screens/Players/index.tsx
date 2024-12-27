import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
    group: string;
}

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<string[]>([]);
    const [player, setPlayer] = useState('');


    const route = useRoute();
    const { group } = route.params as RouteParams;

    function handleNewPlayer(player: string) {
        setPlayers([...players, player]);
        setPlayer('');
    }

    return (
        <Container>
            <Header showBackButton/>

            <Highlight 
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setPlayer}
                    value={player}
                />
                <ButtonIcon 
                    icon="add"
                    onPress={() => handleNewPlayer(player)}
                />
            </Form>

            <HeaderList>

                <FlatList 
                    data={['Time A', 'Time B']}                    
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item}
                        onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Não hà pessoas nesse time"   
                    />
                )}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />
            <Button 
                title="Remover Turma"
                type= "SECONDARY"
            />
        </Container>
    );
}