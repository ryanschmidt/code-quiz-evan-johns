import Layout from '../components/Layout'
import Card from '../components/Card'
import { NextPage } from 'next'


import React from 'react';

const Grid: NextPage = () => {
  return (
    <Layout>
    {/* Grid element */}
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-12  justify-items-center px-12 sm:px-64 md:px-52'>

{/* 1 */}
<Card
  h1text={'EVAN'} 
  h2text={'Software Engineer'} 
  q={'Q:'}
  p1={'What is your favorite movie?'} 
  a={'A:'}
  p2={'Whiplash (2014)'} 
  imageURL={"https://picsum.photos/id/51/800/800"}
  />

{/* 2 */}
<Card
  h1text={'JACOB'} 
  h2text={'Software Engineer'} 
  q={'Q:'}
  p1={"Best concert you've been to?"} 
  a={'A:'}
  p2={'King Gizzard and the Lizard Wizard'} 
  imageURL={"https://picsum.photos/id/47/800/800"}
  />

  {/* 3 */}
  <div className="relative h-96 w-72">
  <div className='relative mt-52 flex-col text-left justify-end ml-20'>
  <img src="../images/quotes.png" alt="quotes" className='w-12 h-12'/>
    <h1 className='mt-3 text-blue-gray text-sm font-semibold leading-6'>I DRINK TO MAKE OTHER <br></br> PEOPLE MORE INTERESTING.</h1> 
    <h2 className='text-orange text-xs font-semibold mt-2'>ERNEST HEMINGWAY</h2>
  </div>
</div>

{/* 4 */}
<Card
  h1text={'TRAVIS'} 
  h2text={'Cybersecurity Engineer'} 
  q={'Q:'}
  p1={'What is your favorite food?'} 
  a={'A:'}
  p2={'TACOS~!'} 
  imageURL={"https://picsum.photos/id/61/800/800"}
  />

{/* 5 */}
<Card
  h1text={'SAMUEL'} 
  h2text={'Designer'} 
  q={'Q:'}
  p1={'Who is your favorite superhero?'} 
  a={'A:'}
  p2={'Spider-Man'}
  imageURL={"https://picsum.photos/id/88/800/800"}
  />

{/* 6 */}
<Card
  h1text={'TUNA'} 
  h2text={'Young Buck'} 
  q={'Q:'}
  p1={'For what would you be famous?'} 
  a={'A:'}
  p2={'My legendary puppy dog face and 1st rate begging skills.'} 
  imageURL={"https://picsum.photos/id/58/800/800"}
  />

  {/* 7 */}
  <div className="relative h-96 w-72">
  <div className='relative mt-48 flex-col text-left justify-start'>
    <img src="../images/quotes.png" alt="quotes" className='w-12 h-12'/>
    <h1 className='mt-3 text-blue-gray text-sm font-semibold leading-6'>GOOD PEOPLE DRINK GOOD<br></br>BEER.</h1> 
    <h2 className='text-orange text-xs font-semibold mt-2'>HUNTER S. THOMPSON</h2>
  </div>
</div>

  {/* 8 */}
  <Card
  h1text={'ERIN'} 
  h2text={'Database Administrator'} 
  q={'Q:'}
  p1={'Do you have any pets?'} 
  a={'A:'}
  p2={'Yes, one cat named Jinx.'} 
  imageURL={"https://picsum.photos/id/72/800/800"}
  />

  {/* 9 */}
  <Card
  h1text={'ZACK'} 
  h2text={'Technical Recruiter'} 
  q={'Q:'}
  p1={'What is your favorite TV show?'} 
  a={'A:'}
  p2={'Mr. Robot'} 
  imageURL={"https://picsum.photos/id/67/800/800"}
  />

{/* 10 */}
<Card
  h1text={'JOHN'} 
  h2text={'Software Engineer'} 
  q={'Q:'}
  p1={'What is your favorite beer?'} 
  a={'A:'}
  p2={'Urban Artifact'} 
  imageURL={"https://picsum.photos/id/91/800/800"}
  />

{/* 11 */}
 <div className="relative h-96 w-72">
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-1000 hover:opacity-100 bg-opacity-100  bg-off-white">
    <div className="flex flex-col px-10 justify-center text-center">
    <h1 className="tracking-widest text-blue-gray text-3xl font-bold pb-4">JOIN OUR TEAM</h1>
    <h2 className="tracking-widest font-normal text-sm text-blue-gray mb-4">THINK YOU'VE GOT WHAT IT TAKES?</h2>
    <div>
      <img src="./images/vineyard.png" alt="" className='absolute mt-12 left-52 w-28 h-28'/>
    </div>
    </div>
  </div>
 </div>

</div>
    </Layout>
  );
}

export default Grid;



