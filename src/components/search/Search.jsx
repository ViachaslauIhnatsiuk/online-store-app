import React, { useState } from 'react';
import s from './Search.module.css';
import { Button } from './Button/Button';
import { useDispatch } from 'react-redux';
import { setSearchQuery as setSearchFilter } from '../../redux-store/actions/productsActions';
import { Input } from './Input/Input'
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useState("")
	const productsPagePath = '/products'

	return (
		<form className={s.wrapper} onSubmit={(e) => {
			e.preventDefault()
			dispatch(setSearchFilter(searchQuery))
			setSearchQuery("")
			navigate(productsPagePath)
		}}>
			<Input inputValue={searchQuery} setInputValue={setSearchQuery}/>
			<Button />
		</form>
	)
}

export { Search };