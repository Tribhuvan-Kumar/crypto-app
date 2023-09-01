import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../assets/pic.jpg'


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={["16", "8"]}>

<Stack direction={["column", "row"]} h={'full'} alignItems={'center'}>

<VStack w={'full'} alignItems={["center", "flex-start"]}>
    <Text fontWeight={'bold'}>About Us</Text>
    <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={["center", "left"]} maxW={'80%'}>Welcome to CryptoTrii, India's premier crypto trading app, where we provide expert guidance at an unbeatable price. Our mission is to empower every crypto enthusiast, whether new or experienced, with the knowledge and tools needed for success in the digital currency market. Join us today for affordable, top-quality trading assistance and embark on a journey to financial prosperity through cryptocurrency.</Text>

</VStack>

<VStack>
    <Avatar boxSize={'28'} mt={["10","0"]} src={profilePic} />
    <Text>Founder</Text>
</VStack>

</Stack>

    </Box>
  )
}

export default Footer