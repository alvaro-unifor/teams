import { playersGetByGroup } from './playersGetByGroup';

export async function playerGetByGroupAndTeam(group: string, team: string) {
    try {
        const stored = await playersGetByGroup(group);

        const players = stored.filter(player => player.team === team);

        return players;

    } catch (error) {
        throw (error);
    }
    
}