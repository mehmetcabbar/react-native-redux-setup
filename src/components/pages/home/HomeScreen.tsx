import { View, Text, SafeAreaView, Button } from 'react-native'
import { styles } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { incrementNumber, decrementNumber, setupState, State } from '../../../state'

const HomeScreen = () => {
    const dispatch: any = useDispatch()
    const state = useSelector((state: State) => state.counter)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text>{state}</Text>
                <View style={styles.buttonBox}>
                    <Button
                        title='Increment'
                        onPress={() => dispatch(incrementNumber(1))}
                    />
                    <Button
                        title='Decrement'
                        onPress={() => dispatch(decrementNumber(1))}
                    />
                    <Button
                        title='Setup'
                        onPress={() => dispatch(setupState())}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen