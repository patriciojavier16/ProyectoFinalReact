import { View, Text, StyleSheet, SectionList, Image, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import licoreriaJSON from '../assets/data/licoreria.json'

export default function ProductosScreen() {

    function mensaje() {
        Alert.alert("Mensaje", " Producto Agregado correctamente")
    }

    const datosLicores = licoreriaJSON;
    const secciones = [
        {
            title: 'Productos Ofertados', data: datosLicores.licores
        }
    ]

    return (
        <View style={styles.container}>
            <SectionList sections={secciones}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.txtNombre}>{item.name}</Text>
                        <Text style={styles.txtInfo} >{item.description}</Text>
                        <Text style={styles.txtInfo} >{item.precio}</Text>
                        <View style={styles.container}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={mensaje}
                            >
                                <Text style={styles.buttonTxt}>Añadir al Carrito</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

                renderSectionHeader={({ section }) => (
                    <View >
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#696934', textAlign: 'center' }} >{section.title}</Text>
                    </View>
                )
                }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    txtNombre: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 5,
        color: '#060606'
    },

    txtInfo: {
        fontSize: 16,
        color: '#060606',
        textAlign: 'center'
    },

    img: {
        width: 100,
        height: 100,
        alignItems: 'center'
    },

    button: {
        width: 120,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ca9b0f',
        marginTop: 5
    },
});