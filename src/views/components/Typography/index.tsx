import { Text } from 'react-native';

// Interface
import { TypographyProps } from './Typography.interface'

const Typography = (props: TypographyProps) => {
    const { children, style } = props


    return <Text style={style}>{children}</Text>;
}


export default Typography