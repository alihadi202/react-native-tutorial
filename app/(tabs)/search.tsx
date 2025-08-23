import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MovieCard from '../../components/MovieCard'
import SearchBar from '../../components/SearchBar'
import { icons } from '../../constants/icons'
import { images } from '../../constants/images'
import { fetchMovies } from '../../services/api'
import useFetch from '../../services/useFetch'

const search = () => {
  const [searchQ, setSearchQ] = useState('');
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch:loadMovies,
    reset,
  } = useFetch(() => fetchMovies({query:searchQ}),false)

  useEffect(()=>{
    const timeoutId =setTimeout( async () =>{
      if(searchQ.trim()){
        await loadMovies();
      }else{
        reset();
      }
    },150)
    return()=>clearTimeout(timeoutId)
  }, [searchQ])

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0'/>
      <Image
              source={icons.logo}
              className="w-12 h-10 mt-20 mb-5 mx-auto z-10"
              resizeMode="contain"
            />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent:'flex-start',
          gap:20,
          paddingRight:0,
          paddingLeft:12,
          marginBottom:10
        }}
        
        ListEmptyComponent={
          <Text className='text-xl text-white text-center'>none</Text>
        }

        className='mt-2 pb-32'
        renderItem={({ item }) => (
          <MovieCard
          {...item}/>
        )}
        ListHeaderComponent={
          <>
            <SearchBar
              placeholder="Search for a movie"
              value={searchQ}
              onChangeText={(text:string)=>setSearchQ(text)}
            />
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              results for {searchQ}
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

export default search