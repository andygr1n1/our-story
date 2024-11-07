import { Box, Container, Image, VStack } from '@chakra-ui/react'
import weddingImage from '/img/wedding.png'

export const HomeIndex = () => {
    return (
        <Container maxW='container.xl' py={8}>
            <VStack>
                <Box position='relative' width='full' height='400px' overflow='hidden' borderRadius='lg' shadow='lg'>
                    <Image src={weddingImage} alt='Daria and Andrei' className='mx-auto' />
                    <Box
                        position='absolute'
                        top='0'
                        left='0'
                        width='full'
                        height='full'
                        // bg='rgba(0, 0, 0, 0.5)'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    ></Box>
                </Box>
            </VStack>
        </Container>
    )
}
