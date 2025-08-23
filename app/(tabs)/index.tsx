import { useRouter } from 'expo-router'
import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import MovieCard from '../../components/MovieCard'
import SearchBar from '../../components/SearchBar'
import { icons } from '../../constants/icons'
import { images } from '../../constants/images'
import { fetchMovies } from '../../services/api'
import useFetch from '../../services/useFetch'

const Index = () => {
  const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }))


  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (moviesError) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Text className="text-lg text-white font-bold">
          {`Error: ${moviesError?.message}`}
        </Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-primary">
      {/* Background image */}
      <Image source={images.bg} className="absolute w-full h-full z-0" />

      {/* Logo */}
      <Image
        source={icons.logo}
        className="w-12 h-10 mt-20 mb-5 mx-auto z-10"
        resizeMode="contain"
      />

      {/* Movies list */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'flex-start',
          gap:20,
          paddingRight:5,
          marginBottom:10
        }}
        className='mt-2 pb-32'
        renderItem={({ item }) => (
          <MovieCard
          {...item}/>
        )}
        ListHeaderComponent={
          <>
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
            />
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Index
