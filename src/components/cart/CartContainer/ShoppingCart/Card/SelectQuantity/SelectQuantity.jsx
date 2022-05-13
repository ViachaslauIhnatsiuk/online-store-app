import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { changeCountAction } from '../../../../../../redux-store/actions/cartActions';

const options = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 4, label: '4' },
	{ value: 5, label: '5' },
];

const customStyles = {
	menu: (provided) => ({
		...provided,
		top: -8,
		width: 80,
	}),
	option: (provided, state) => ({
		...provided,
		border: state.isSelected ? '1px solid #007185' : '1px solid #ffffff',
		color: state.isSelected ? '#000000' : '#0F1111',
		backgroundColor: state.isSelected ? '#EDFDFF' : '#FFFFFF',
		padding: 5,
		paddingLeft: 15,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#E3E6E6',
			border: state.isSelected ? '1px solid #44C4F0' : '1px solid #C9CDCD',
		},
	}),
	control: () => ({
		padding: 0,
		backgroundColor: '#F0F2F2',
		border: '1px solid #C9CDCD',
		borderRadius: 10,
		display: 'flex',
		width: 70,
		height: 30,
		boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#E3E6E6',
		},
	}),
	valueContainer: (provided) => ({
		...provided,
		padding: '0px 8px',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: () => ({
		color: '#555555',
		paddingTop: 4,
		paddingRight: 4,
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...provided, opacity, transition };
	},
};

function SelectQuantity({ id, count }) {
	const [selectedOption, setSelectedOption] = useState(count);
	const dispatch = useDispatch();

	const defaultValueSelect = options.filter(
		(option) => option.value === selectedOption
	);

	const changeCount = (id, count) =>
		dispatch(changeCountAction({ id: id, newCount: count }));

	return (
		<>
			<Select
				defaultValue={defaultValueSelect}
				onChange={(event) => {
					changeCount(id, event.value);
					setSelectedOption(event);
				}}
				options={options}
				styles={customStyles}
			/>
		</>
	);
}

export { SelectQuantity };
