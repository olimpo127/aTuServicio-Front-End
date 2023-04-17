

import {
  Box,
  
  Flex,
  
} from '@chakra-ui/react'


import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  
} from '@react-google-maps/api'
import { useRef, useState } from 'react'



const center = { lat:-33.430901, lng: -70.636805 }
const eight = {lat:-33.410009, lng: -70.4395487}
function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCo2rtCGoBUJggotk150GkgqtZ-aBz_Scs&libraries=places"
    
  })

  const [map, setMap] = useState (null)
 
  if (!isLoaded) {
    return 
  }

  
  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
      
        <GoogleMap
          center={center}
          punto={eight}
          zoom={15}
          mapContainerStyle={{ width: '60%', height: '40%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          
        </GoogleMap>
      </Box>
    
      
    </Flex>
  )
}

export default Map

