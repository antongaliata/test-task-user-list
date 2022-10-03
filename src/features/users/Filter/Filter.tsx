import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, setSearchText } from "../../../store/action/usersActions";
import { AppRootStateType } from "../../../store/store";
import './style.css';


export const Filter = () => {
	const {searchText} = useSelector((state: AppRootStateType) => state.users);
	const dispatch = useDispatch();

	const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchText(event.target.value));
	};

	const reset = () => {
		dispatch(resetFilter());
	};

	return (
		<div className={'filter-container'}>
			<input
				className={'filter-input'}
				placeholder={'Введите имя, фамилию или email'}
				value={searchText}
				onChange={handlerSearch}/>
			<button className={'filter-reset'} onClick={reset}>
				Перезагрузить
			</button>
		</div>
	)
}