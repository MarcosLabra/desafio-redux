import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/Colors'
import PokemonCard from '../components/PokemonCard'
import { removeFavorite, getFavorites } from '../store/actions/favorites.action'

const FavoritesPokemonScreen = () => {

  const pokemons = useSelector(state => state.favorites.favPokemons)
  const dispatch = useDispatch()

  const handlerOnPressButton = (item) => {
    dispatch(removeFavorite(item.id))
  }

  React.useEffect(() => {
    dispatch(getFavorites())
  }, [pokemons])

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} onPress={() => { }} />}
        keyExtractor={item => item.id}
      />
      <Button title='Borrar pokemons' onPress={handlerOnPressButton} color={COLORS.green} />
    </View >
  )
}

export default FavoritesPokemonScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  }
})