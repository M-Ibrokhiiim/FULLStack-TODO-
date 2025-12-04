import { useState} from "react"
import { Box, Container, Text, Stack, Checkbox, Flex} from "@chakra-ui/react"
import Delete from '../../icons/Delete.tsx'
import Edit from "../../icons/Edit.tsx"

export default function LISTS(){
    const [isChecked,setChecked] =useState(false)
    const [isActive,setActive] = useState(false)

    const checked=()=>{
        setChecked(!isChecked)
        console.log(isChecked)
    }
 
    return(
        <>
        <Box>
            <Container w={{base:'80vw',md:'50vw',lg:'30vw'}} mt={'50px'} border={'2px solid blue'} h={{base:'100vw',md:"60vw",lg:'30vw'}} borderRadius={'20px'}>
                <Text bg={'white'} textAlign={'center'} mt='3'  fontSize={'30px'} fontWeight={'800'} textDecoration={'underline'} color={'blue.600'} fontFamily={'cursive'}>
                    Tasks
                </Text>
                <Box bg='white' h={{base:'80%',lg:'85%'}} mt='20px' overflow={'scroll'}>
                  <Flex mt='2'>
                    <Checkbox.Root cursor={'pointer'} w={{md:"450px"}}>
                        <Checkbox.HiddenInput    onChange={checked}/>
                        <Checkbox.Control cursor={'pointer'}/>
                        <Checkbox.Label fontSize={{base:'15px',md:'22px'}} textDecoration={isChecked ? 'line-through' :'none'}>Get up in early morning ! </Checkbox.Label> 
                    </Checkbox.Root>
                    <Flex  alignItems={'center'} w={'70px'} justifyContent={'space-between'}>
                        <Edit/>
                        <Delete/>
                    </Flex>
                  </Flex>
                </Box>
            </Container>
        </Box>
        </>
    )
}