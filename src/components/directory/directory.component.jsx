import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Accessories',
    imageUrl: 'https://i.ibb.co/WNrYcg7/accessories.jpg'
    //https://ibb.co/qLHPRkh 
  },
  {
    id: 2,
    title: 'Protect-ware',
    imageUrl: 'https://i.ibb.co/ZMqr7p2/cases.jpg',
  },
  {
    id: 3,
    title: 'Repair Services',
    imageUrl: 'https://i.ibb.co/SPcjzgK/phone-repair.jpg'
  },
  {
    id: 4,
    title: 'Phone',
    imageUrl: 'https://i.ibb.co/kGsQ1V7/phone.jpg'
  },
  {
    id: 5,
    title: "PC and Computers",
    imageUrl: 'https://i.ibb.co/Ln5ZLXx/computer.jpg',
  }
]

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
