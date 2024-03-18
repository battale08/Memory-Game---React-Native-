import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      info: {
        fontSize: 18,
        marginBottom: 10,
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      card: {
        width: 80,
        height: 80,
        backgroundColor: 'black',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardText: {
        fontSize: 24,
      },
      flipped: {
        backgroundColor: '#fff',
      },
      button: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },

});

export default style;
