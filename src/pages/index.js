import { Center, Button } from '@mantine/core';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function Home() {
  return (
    <div>
      <Header />


      <div className='flex justify-between py-64 px-96 bg-gradient-to-b from-navy from-5% to-red-orange text-white'>
        <div className='text-8xl'>
          <div>hello.</div>
          <div>i'm sharon.</div>
        </div>

        <div>
          <div className='w-96'>
            <p className='text-ellipsis text-justify'>
              i'm currently a undergraduate computer science student at northeastern university.
              additionally, i am a self-taught visual artist.
            </p>
          </div>
          <Center className='pt-2'>
            <Button className='bg-md-blue drop-shadow-xl' component='a' href='/about' styles={(theme) => ({
              root: {
                '&:hover': {
                  backgroundColor: '#11477d',
                },
              },
            })}>
              more about me
            </Button>
          </Center>
        </div>


      </div>


      <div className='p-32 bg-grey-blue'></div>
      <div className='p-32'></div>
      <Footer />
    </div>
  );
}
