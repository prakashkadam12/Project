import React,{useState} from 'react';
import {FaUser,FaShareSquare} from "react-icons/fa";
import {Link} from "react-router-dom";
import {PiSignpostFill} from "react-icons/pi";
import {BsMicrosoftTeams} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {BsFillShareFill} from "react-icons/bs";
import {AiOutlineLike,AiOutlineLink,AiOutlineDislike,AiOutlineComment} from "react-icons/ai";
import TopTeamsBlock from '../components/TopTeamsBlock';
import AnotherBlock from '../components/AnotherBlock';
import Post from "../components/Post";


const Home = ({isLoggedIn}) => {
  const [showFullText, setShowFullText] = useState(false);

  const postsData = [
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/2_13.png?profilepic=%27%27',
      username: 'Survo',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/5_2.png',
      teamName: 'space',
      title: 'Orion',
      image: 'https://grupverse.com/api/media/image/10_1.jpeg',
      description: 'Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is one of the most conspicuous and recognizable constellations in the night sky. It is named after Orion, a hunter in Greek mythology. Its brightest stars are blue-white Rigel and red Betelgeuse.',
      likes: 11,
      dislikes: 0,
      comments: 0,
      shares: 3,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/2_13.png?profilepic=%27%27',
      username: 'Survo',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/5_2.png',
      teamName: 'space',
      title: 'Perseus',
      image: 'https://grupverse.com/api/media/image/9_1.jpeg',
      description: 'Perseus is a constellation in the northern sky, being named after the Greek mythological hero Perseus. It is one of the 48 ancient constellations listed by the 2nd-century astronomer Ptolemy, and among the 88 modern constellations defined by the International Astronomical Union. ',
      likes: 10,
      dislikes: 0,
      comments: 0,
      shares: 0,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/2_13.png?profilepic=%27%27',
      username: 'Survo',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/2_2.png',
      teamName: 'AI',
      title: 'Will Programmers Lose Their Jobs Because of GPT3',
      image: 'https://grupverse.com/api/media/image/13_1.jpeg',
      description: 'Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is one of the most conspicuous and recognizable constellations in the night sky. It is named after Orion, a hunter in Greek mythology. Its brightest stars are blue-white Rigel and red Betelgeuse.',
      likes: 11,
      dislikes: 0,
      comments: 0,
      shares: 3,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/2_13.png?profilepic=%27%27',
      username: 'Survo',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/5_2.png',
      teamName: 'space',
      title: 'Orion',
      image: 'https://grupverse.com/api/media/image/10_1.jpeg',
      description: 'Less programming jobs doesn’t mean no programming jobs at all. There will still be a need for qualified specialists to move the things forward, for example, in testing, quality assurance, logical analysis, and many other things. I think we should invest our time learning stuff that has room for creativity and gives us opportunities to create something new and express ourselves better. I also think that we should invest ourselves more in fundamental sciences, social interactions, philosophy, art… and everything else we are here for. If we can do that by programming, if we can build new and interesting things, then let’s do it. Humans are very good at expression and not at routine, let’s keep the routine for machines and fill our lives with more meaning.',
      likes: 9,
      dislikes: 0,
      comments: 0,
      shares: 0,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/2_13.png?profilepic=%27%27',
      username: 'Survo',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/2_2.png',
      teamName: 'AI',
      title: 'Recurrent Neural Networks',
      image: 'https://grupverse.com/api/media/image/11_1.png',
      description: 'Recurrent Neural Network(RNN) are a type of Neural Network where the output from previous step are fed as input to the current step. In traditional neural networks, all the inputs and outputs are independent of each other, but in cases like when it is required to predict the next word of a sentence, the previous words are required and hence there is a need to remember the previous words. Thus RNN came into existence, which solved this issue with the help of a Hidden Layer. The main and most important feature of RNN is Hidden state, which remembers some information about a sequence.',
      likes: 7,
      dislikes: 1,
      comments: 1,
      shares: 0,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/216_2.png?profilepic=%27%27',
      username: 'Singhal97',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/50_2.png',
      teamName: 'Csk',
      title: 'Greet',
      image: 'https://grupverse.com/api/media/image/10_1.jpeg',
      description: 'Thanks',
      likes: 2,
      dislikes: 4,
      comments: 2,
      shares: 4,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/216_2.png?profilepic=%27%27',
      username: 'Singhal97',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/50_2.png',
      teamName: 'Csk',
      title: 'MEME',
      image: 'https://grupverse.com/api/media/image/91_1.png',
      description: 'meme',
      likes: 3,
      dislikes: 2,
      comments: 0,
      shares: 1,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/216_2.png?profilepic=%27%27',
      username: 'Singhal97',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/50_2.png',
      teamName: 'Csk',
      title: 'Nature',
      image: 'https://grupverse.com/api/media/image/90_1.jpeg',
      description: 'xyz',
      likes: 2,
      dislikes: 1,
      comments: 0,
      shares: 0,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/216_2.png?profilepic=%27%27',
      username: 'Singhal97',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/50_2.png',
      teamName: 'Csk',
      title: 'Nature',
      image: 'https://grupverse.com/api/media/image/89_1.jpeg',
      description: 'xyz',
      likes: 0,
      dislikes: 0,
      comments: 0,
      shares: 0,
    },
    {
      userAvatar: 'https://grupverse.com/api/media/userprofilepic/65_2.png?profilepic=%27%27',
      username: 'Maheswar',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/5_2.png',
      teamName: 'space',
      title: 'Orion',
      image: 'https://grupverse.com/api/media/image/88_1.jpeg',
      description: '',
      likes: 6,
      dislikes: 3,
      comments: 8,
      shares: 4,
    },
    {
      userAvatar: 'https://grupverse.com/api/img/default_profile_pic_1.png?profilepic=%27%27',
      username: 'Haripriya',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/22_7.png',
      teamName: 'Quill On Canvas',
      title: '',
      image: 'https://grupverse.com/api/media/image/87_1.jpeg',
      description: '',
      likes: 10,
      dislikes: 1,
      comments: 5,
      shares: 3,
    },
    {
      userAvatar: 'https://grupverse.com/api/img/default_profile_pic_1.png?profilepic=%27%27',
      username: 'Haripriya',
      teamAvatar: 'https://grupverse.com/api/media/teamprofilepic/22_7.png',
      teamName: 'Quill On Canvas',
      title: 'Good things',
      image: 'https://grupverse.com/api/media/image/86_1.jpeg',
      description: '',
      likes: 8,
      dislikes: 0,
      comments: 1,
      shares: 1,
    },
  ];

  return (
    <div className='flex justify-center items-center text-white text-3xl h-full w-full space-x-16'> {/* for whole homne page */}
      

   
      <div className=" flex flex-col space-y-12">    {/* for left part home 1st block page */}
      <div className='rounded-md bg-white shadow-lg p-4'>
      <ul className="flex  text-black flex-col  ">
        <li className="flex flex-row items-center hover:bg-[#ea580c]  cursor-pointer p-2 rounded space-x-3">
          <FaUser />
          <Link to="/signup">My Feed</Link>
        </li>
        <li className="flex flex-row items-center hover:bg-[#ea580c]  cursor-pointer p-2 rounded space-x-3">
          <PiSignpostFill />
          <Link to="/signup">My Post</Link>
        </li>
        <li className="flex flex-row items-center hover:bg-[#ea580c] cursor-pointer p-2 rounded space-x-3">
          <BsMicrosoftTeams />
          <Link to="/signup">My Team Post</Link>
        </li>
        <li className="flex flex-row items-center hover:bg-[#ea580c]  cursor-pointer p-2 rounded space-x-3">
          <BsFillPeopleFill />
          <Link to="/signup">My Following Post</Link>
        </li>
        <li className="flex flex-row items-center hover:bg-[#ea580c]  cursor-pointer p-2 rounded space-x-3">
          <BsFillShareFill />
          <Link to="/signup">Shared Post</Link>
        </li>
      </ul>
     </div>

      <div className='flex flex-col'>    {/* for left part home 2nd block page */}
        <h4 className='text-black'>Trending Topics of the week</h4>
        <img src='https://grupverse.com/static/media/gp1%20image.e29be52063c1ce913669.png' alt='im1' loading='lazy'
          className='w-[120px] h-[150px]'
        />
      </div>
       
    </div>
     


      <div className='flex flex-col w-[390px] rounded-lg shadow-md p-4  space-y-7 h-full'> {/* for middle home page */}
      <h1 className='text-black text-4xl text-center'>Top Posts</h1>
      <div className='space-y-9'>
      {postsData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
    </div>
      

      <div className='space-y-3 flex-col mt-[110px]'>  {/* for Right part homne page */}
  
      <div>{/* for Right part 1st block */}
      <TopTeamsBlock />
      </div>

      <h4>Top Global Users of the week</h4>
      <div>{/* for Right part 2ndt block */}
      <AnotherBlock />
      </div>

      </div>
       
    </div>
  )
}

export default Home
