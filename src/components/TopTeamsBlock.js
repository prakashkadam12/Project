import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const TopTeamsBlock = () => {
  const [items, setItems] = useState([]);

  // Simulated list of items (you can replace this with your data)
  const simulatedItems = [
    {
      id: 1,
      name: 'Quill On Canvas',
      image: 'https://grupverse.com/api/media/teamprofilepic/22_7.png',
    },
    {
      id: 2,
      name: 'norMEME',
      image: 'https://grupverse.com/api/media/teamprofilepic/23_3.png',
    },
    {
        id: 3,
        name: 'Space',
        image: 'https://grupverse.com/api/media/teamprofilepic/5_2.png',
      },
      {
        id: 3,
        name: 'Current Affairs',
        image: 'https://grupverse.com/api/img/default_profile_pic_1.png',
      },
      {
        id: 4,
        name: 'Aiims Bhubaneswar',
        image: 'https://grupverse.com/api/media/teamprofilepic/4_2.png',
      },
      {
        id: 5,
        name: 'Fashion',
        image: 'https://grupverse.com/api/img/default_profile_pic_1.png',
      },
      {
        id: 6,
        name: 'MedTerms',
        image: 'https://grupverse.com/api/media/teamprofilepic/25_2.png',
      },
      {
        id: 7,
        name: 'Photography',
        image: 'https://grupverse.com/api/media/teamprofilepic/3_2.png',
      },
      {
        id: 8,
        name: 'Indian Politics',
        image: 'https://grupverse.com/api/img/default_profile_pic_1.png',
      },
      {
        id: 9,
        name: 'AI',
        image: 'https://grupverse.com/api/media/teamprofilepic/2_2.png',
      },
      {
        id: 10,
        name: 'Football memes',
        image: 'https://grupverse.com/api/media/teamprofilepic/23_3.png',
      },
      {
        id: 11,
        name: 'AIIMS canteen',
        image: 'https://grupverse.com/api/img/default_profile_pic_1.png',
      },
      {
        id: 12,
        name: 'NightClub',
        image: 'https://grupverse.com/api/img/default_profile_pic_1.png',
      },
  ];

  const itemsPerPage = 4; // Number of items to load at a time

  useEffect(() => {
    // Load the initial set of items
    setItems(simulatedItems);
  }, []);

  return (
    <div className='flex flex-col space-y-7'>
    <div>
    <h4 className="text-black text-center">Top Teams of the week</h4>
    </div>
    <div
      className="max-h-[300px] overflow-y-scroll border border-gray-300 rounded-lg p-4"
      style={{ maxHeight: '300px' }}
    >
      <ul className="text-black flex flex-col gap-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex flex-row space-x-3 items-center text-sm">
            <img src={item.image} alt={item.name} loading="lazy" className="w-[30px] h-[30px]" />
            <Link to="/login">{item.name}</Link>
            <button className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 text-sm">
            <Link to="login">
            Join
            </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default TopTeamsBlock;
