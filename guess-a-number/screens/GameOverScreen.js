import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'

import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'
import TitleText from '../components/TitleText'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const GameOverScreen = props => {
  const [availableWidth, setAvailableWidth] = useState(Dimensions.get('window').width)
  const [availableHeight, setAvailableHeight] = useState(Dimensions.get('window').height)

  useEffect(() => {
    const updateLayout = () => {
      setAvailableWidth(Dimensions.get('window').width)
      setAvailableHeight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener("change", updateLayout)
    return () => Dimensions.removeEventListener("change", updateLayout)
  })

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Over!</TitleText>

        <View style={{
          ...styles.imageContainer,
          width: availableWidth * 0.7,
          height: availableWidth * 0.7,
          borderRadius: availableWidth * 0.7 / 2,
          marginVertical: availableHeight / 30
        }}>
          <Image

            style={styles.image}
            resizeMode="cover" // cover is default
            // source={require('../assets/images/success.png')}
            source={{
              uri: 'https://thumbs.werkaandemuur.nl/1/cae406937572774d7c0be041d38e59ee/817x600/thumbnail/fit.jpg'
            }}
          />
        </View>

        <View style={{
          ...styles.textContainer,
          marginVertical: availableHeight / 60
        }}>
          <BodyText style={{
            ...styles.resultText,
            fontSize: availableHeight < 400 ? 16 : 20
          }}>
            After <Text style={styles.accent}>{props.rounds}</Text> rounds, the Number <Text style={styles.accent}>{props.selectedNumber}</Text> was correctly guessed by the computer
        </BodyText>
        </View>

        <MainButton
          title="Restart Game"
          onPress={props.restartGame}
        />
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  textContainer: { marginHorizontal: 30 },
  accent: {
    color: colors.primary,
    fontFamily: fonts.bold
  },
  resultText: { textAlign: "center" }
})

export default GameOverScreen