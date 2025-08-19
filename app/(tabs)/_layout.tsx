import { View, Text, ImageBackground , Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {images} from '../../constants/images'
import { icons } from '../../constants/icons'


const TabIcon =({focused, icon, title}: any)=>{
  if(focused){
    return(
      <>
        <ImageBackground
          source={images.highlight} 
          className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden' 
        >
          <Image source={icon} tintColor='#151312' className='size-5'/>

          <Text className='text-secondary text-base font-semibold ml-2'>
            {title}
          </Text>

        </ImageBackground>
      </>
    )
  }else{
    return(
      <View className='size-full justify-center items-center  rounded-full'>
        <Image source={icon} tintColor='#A8B5DB' className='size-5'/>
      </View>
    )
  }
  
}

const _layout = () => {
  return (
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
              
              // headerShown: false,
              tabBarIcon: ({focused}) =>(
                <TabIcon 
                focused={focused} 
                icon={icons.home}
                title='Home'
                />
              )
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
              title: 'Search',
              tabBarIcon: ({focused}) =>(
                <TabIcon
                focused={focused} 
                icon={icons.search}
                title='Search'
                />
              )
              // headerShown: false
          }}
        />

        <Tabs.Screen
          name='saved'
          options={{
              title: 'Saved',
              tabBarIcon: ({focused}) =>(
                <TabIcon
                focused={focused} 
                icon={icons.save}
                title='Saved'
                />
              )
              // headerShown: false
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
              title: 'profile',
              tabBarIcon: ({focused}) =>(
                <TabIcon
                focused={focused} 
                icon={icons.person}
                title='Profile'
                />
              )
              // headerShown: false
          }}
        />

    </Tabs>
  )
}

export default _layout