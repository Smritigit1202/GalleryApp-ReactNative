import React from 'react'
import { StatusBar } from 'react-native'


import Route from './screens/Route'

export default function App() {
  return (
    <>
    <StatusBar
    barStyle="light-content"
    backgroundColor="white" />
  
  <Route />
  </>)
}