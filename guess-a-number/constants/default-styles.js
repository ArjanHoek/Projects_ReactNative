import { StyleSheet } from 'react-native'
import colors from './colors'
import fonts from './fonts'

export default StyleSheet.create({
  bodyText: {
    fontFamily: fonts.regular,
    color: colors.dark
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.dark
  }
})