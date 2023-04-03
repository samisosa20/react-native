import { Button } from 'react-native';

// Interface
import { ButtonProps } from './Button.interface'

const ButtonDefault = (props: ButtonProps) => {
    const {title, onPress, ...rest} = props

    return <Button
        onPress={onPress}
        title={title}
        {...rest}
    />;
}


export default ButtonDefault