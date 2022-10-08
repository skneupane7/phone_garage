import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Accessories',
    imageUrl: 'https://i.ibb.co/WNrYcg7/accessories.jpg',
    route: 'shop/accessories'
  },
  {
    id: 2,
    title: 'Protect-ware',
    imageUrl: 'https://i.ibb.co/ZMqr7p2/cases.jpg',
    route: 'shop/protect-ware'
  },
  {
    id: 3,
    title: 'Repair Services',
    imageUrl: 'https://i.ibb.co/SPcjzgK/phone-repair.jpg',
    route: 'shop/repair services',

  },
  {
    id: 4,
    title: 'Phone',
    imageUrl: 'https://i.ibb.co/kGsQ1V7/phone.jpg',
    route: 'shop/phone',
  },
  {
    id: 5,
    title: "PC and Computers",
    imageUrl: 'https://i.ibb.co/Ln5ZLXx/computer.jpg',
    route: 'shop/pc and computers',
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
