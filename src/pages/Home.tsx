import React from 'react'
import HomeContainer from '../containers/Home'

interface MyComponentProps {
  setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const HomePage: React.FC<MyComponentProps> = ({ setDrawerActive }) => {
  return (
   <HomeContainer setDrawerActive={setDrawerActive}/>
  )
}

export default HomePage
