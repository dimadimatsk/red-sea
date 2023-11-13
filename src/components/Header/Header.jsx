import React from 'react';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categorySlice/categorySlice';

export const Header = () => {
  const categories = [
    'Вся продукция',
    'Кулинария из рыбы и морепродуктов',
    'Рыба холодного копчения',
    'Рыба вяленая',
    'Рыба горячего копчения',
    'Рыба слабосолёная',
    'Морепродукты мороженые',
    'Филе рыбное замороженное',
    'Стейки',
    'Полуфабрикаты рыбные рубленые замороженные',
    'Рыба морская свежемороженая',
    'Рыба речная свежемороженая',
    'Консервы',
    'Сопутствующие товары',
  ];

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-4 mt-4 gap-2">
      {categories.map((category, i) => (
        <Button key={i} category={category} onClick={() => dispatch(changeCategory(category))} />
      ))}
    </div>
  );
};
