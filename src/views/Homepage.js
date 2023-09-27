import React from 'react';
import Romb from '../components/romb.jsx'
const Homepage = () => {
  return (
    <div id="about" style={{ minHeight: '80vh' , padding: '0 15%'}}>
      <div style={{display :'flex', flexWrap: 'wrap'}}>
        <Romb header = {'headero4ik'} body= {'bodyro4ik'}/>
        <Romb header = {'headero4ik1'} body= {'bodyro4ik1'}/>
        <Romb header = {'headero4ik2'} body= {'bodyro4ik2'}/>
        <Romb header = {'headero4ik3'} body= {'bodyro4ik3'}/>
      </div>
    </div>
  )
}
export {Homepage}