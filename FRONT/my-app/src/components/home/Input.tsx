import {Box,Input, Button} from '@chakra-ui/react'
import { useState } from 'react';

export default function INPUT(){
    const [task,setTask] = useState('')

        const addTasks =async( )=>{
           try{
            const res = await fetch('http://localhost:3000/newTask',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:'Have shower11as'})
            });
    
            if(!res.ok){
                  throw new Error('Backend error!')
             }
    
            const data =await res.json();
            console.log(data)
    
           }catch(err){
            console.log('Error occured while API call...')
           }
        }

    

    

    return(
        <>
        <Box  display={'flex'} justifyContent={'center'} mt={'20px'}> 
                <Input 
               placeholder='Typing...' 
               w={{base:'320px',md:'50vw',lg:'30vw'}}
               outline={'none'}
               border={'2px solid blue'}
               borderRadius={'40px'}
               fontSize={'18px'}
               p={5}
               color={'black'}
               /> 
               <Button bg={'blue.500'} 
                w={{base:'70px',md:'100px'}} 
                _active={{scale:'0.97',}} 
                transition={'all'} 
                borderRightRadius={'100px'}  
                fontSize={'20px'}
                mt={{base:'0.vw',sm:'10px',md:'0px'}}
                ml={{base:'-40px',md:'-99px'}}
                h={'100%'}
                outline={'none'}
                border={'none'}
                _focus={{outline:'none'}}
                onClick={addTasks}
                >
                   Add
                </Button>
        </Box>
        </>
    )
}