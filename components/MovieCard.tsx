import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/interfases'

const MovieCard = (props:Movie) => {
  return (
   <Link href={`/movies/${props.id.toString}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image
                source={{
                    uri: props.poster_path?`https://image.tmdb.org/t/p/w500/${props.poster_path}`:'https://placehold.co/600x400/lalala/ffffff.png',
                }}
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
            />
            <Text className='text-sm font-bold text-white mt-2'>{props.title}</Text>

        </TouchableOpacity>
   </Link>
  )
}

export default MovieCard