import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const elementos = ['²','Pi','^','!','AC', '()', '%', '÷', 7,8,9, '×', 4,5,6, '-', 1,2,3, '+', 0, '.','⌫','=' ]
  const nombres=['Daniela', 'Luis', 'Beto', 'Guicho', 'Susana']

  return (
    <View style={styles.container}>

      <View stile= {styles.elementos}>
        
      </View>   
      <View style={styles.buttons}>
      {
            elementos.map(elemento=>{
                return(
                    <TouchableOpacity
                    key={elemento}>
                    <View style={styles.button} >
                    <Text style={styles.texto}>{elemento}</Text>
                    </View>
                    </TouchableOpacity>
              
                );
            })
        }
        </View>
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: "#ffffff",
    fontSize:45,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: '#3f4d5b',
    boderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeigt: 90,
    flex: 2,
  },
});

