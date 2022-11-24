import { View, Text } from 'react-native'
import React from 'react'

export default function Paginator({data}) {
  return (
    <View className='flex-row h-64'>
      {data.map((_,i) => <View className='h-10 gap-3 rounded-2xl w-10 b-[#493d8a]' key={i.toString()}></View>)}
    </View>
  )
}