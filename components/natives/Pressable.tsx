import { Pressable, Text } from 'react-native'

interface PressableComponentProps {
    setInputs: (show: boolean) => void,
    show: boolean
}

const PressableComponent = ({ setInputs, show }: PressableComponentProps) => {
    return (
        <Pressable style={{backgroundColor: '#ffd2f9', borderRadius: 10, margin: 10}} onPress={() => setInputs(!show)}>
            <Text style={{ fontSize: 18, margin: 10, paddingTop: 20 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Text>
        </Pressable>
    );
}

export default PressableComponent;