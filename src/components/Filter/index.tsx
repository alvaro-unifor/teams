import { TouchableOpacityProps } from "react-native";

import { Container, Title, FillterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FillterStyleProps & {
    title: string;
};

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container 
            isActive={isActive} 
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}