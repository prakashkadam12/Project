import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnotherBlock = () => {
  const [items, setItems] = useState([]);

  // Simulated list of items (you can replace this with your data)
  const simulatedItems = [
    {
      id: 1,
      name: 'Omniscient',
      image: 'https://grupverse.com/api/api/media/userprofilepic/71_3.png',
    },
    {
      id: 2,
      name: 'Bighnesh',
      image: 'https://grupverse.com/api/api/img/default_profile_pic_1.png',
    },
    {
        id: 3,
        name: 'Madhurjya',
        image: 'https://grupverse.com/api/api/img/default_profile_pic_1.png',
      },
      {
        id: 4,
        name: 'Dona Maria',
        image: 'https://grupverse.com/api/api/media/userprofilepic/70_3.png',
      },
      {
        id: 5,
        name: 'Haripriya',
        image: 'https://grupverse.com/api/api/img/default_profile_pic_1.png',
      },
      {
        id: 6,
        name: 'nhumanpt',
        image: 'https://grupverse.com/api/api/img/default_profile_pic_1.png',
      },
      {
        id: 7,
        name: 'Maheswar',
        image: 'https://grupverse.com/api/api/media/userprofilepic/65_2.png',
      },
      {
        id: 8,
        name: 'MiaBardot',
        image: 'https://grupverse.com/api/api/media/userprofilepic/9_2.png',
      },
      {
        id: 9,
        name: 'Ritu',
        image: 'https://grupverse.com/api/api/media/userprofilepic/1_3.png',
      },
      {
        id: 10,
        name: 'Ravibharathi',
        image: 'https://grupverse.com/api/api/img/default_profile_pic_1.png',
      },
  ];

  const itemsPerPage = 2; // Number of items to load at a time

  useEffect(() => {
    // Load the initial set of items
    setItems(simulatedItems);
  }, []);


  return (
    <div className='flex flex-col space-y-7'>
    <div>
    <h4 className="text-black text-center">Top Global Users of the week</h4>
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
              <button className="bg-red-500 text-white rounded-lg px-1 py-1 hover:bg-red-600 text-sm">
              <Link to="/login">
              Follow
              </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnotherBlock;
