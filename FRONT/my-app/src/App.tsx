import TITLE from "./components/home/Title"
import INPUT  from './components/home/Input'
import { Button,Box } from "@chakra-ui/react"
import LISTS from "./components/home/Lists"

function App() {

  return (
    <> 
     <Box h={{base:'170vw',sm:'100vw',lg:'50vw'}} w={{base:'90vw',md:'70vw'}} display={'flex'} flexDirection={'column'} >
        <TITLE/>
        <INPUT/> 
        <LISTS/>
     </Box>
    </>
  )
}

export default App
