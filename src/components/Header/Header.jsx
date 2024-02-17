import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { changeCategory } from '../../store/categorySlice/categorySlice'
import { Button } from '../Button/Button'

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
		'Омега-3',
		'Икра',
		'Снековая продукция',
	]

	const [user, loading, error] = useAuthState(auth)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<div className='grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-4 mt-4 gap-2'>
			{categories.map((category, i) => (
				<Button
					key={i}
					category={category}
					onClick={() => dispatch(changeCategory(category))}
				/>
			))}
			{user && (
				<Button
					category={'Добавить продукт'}
					onClick={() => navigate('/dashboard')}
				/>
			)}
		</div>
	)
}
