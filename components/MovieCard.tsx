import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { icons } from '../constants/icons'
import { Movie } from '../interfaces/interfases'

const MovieCard = (props:Movie) => {
  return (
   <Link href={`/movies/${props.id.toString}`} asChild>
        <TouchableOpacity className='w-[45%]'>
            <Image
                source={{
                    uri: props.poster_path?`https://image.tmdb.org/t/p/w500/${props.poster_path}`:'https://placehold.co/600x400/lalala/ffffff.png',
                }}
                className='w-full h-60 rounded-lg'
                resizeMode='contain'
            />
            <Text className='text-sm font-bold text-white mt-2 text-center' numberOfLines={1}>{props.title}</Text>
            <View className="flex-row items-center gap-x-1 self-center">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                    key={index}
                    source={icons.star}
                    className="size-4"
                    style={{
                        tintColor: index < Math.round(props.vote_average / 2) ? "#FFD700" : "#666", 
                    }}
                    />
                ))}
            </View>

            <Text className='text-white text-xs text-center'>{props.release_date?.split('-')[0]}</Text>


        </TouchableOpacity>
   </Link>
  )
}

export default MovieCard