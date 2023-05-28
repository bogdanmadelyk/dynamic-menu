import {Button, Menu, MenuItem} from '@mui/material';
import {MouseEvent, useLayoutEffect, useState} from 'react';
import {btnStyles} from './styles';
import {DynamicMenuDropdownProps} from '../model/IDynamicMenu';

const DynamicMenuDropdown = ({items, hiddenItems}:DynamicMenuDropdownProps) => {
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	const [isEmpty, setIsEmpty] = useState(false)
	const open = Boolean(anchor);
	const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchor(event.currentTarget);
	};
	const handleClose = () => {
		setAnchor(null);
	};

	useLayoutEffect(() => {
		setIsEmpty(Object.keys(hiddenItems).length === 0)
	}, [hiddenItems])

	if(isEmpty) {
		return null;
	}

	return (
		<>
			<Button
				id="dropdown-button"
				aria-controls={open ? 'dropdown-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleOpen}
				variant='outlined'
				sx={btnStyles}
			>
				Show more
			</Button>
			<Menu
				id="dropdown-menu"
				anchorEl={anchor}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'dropdown-button',
				}}
			>
				{
					items
						.filter((item) => hiddenItems[item.id])
						.map((item) => (
							<MenuItem key={item.id} onClick={item.onClick}>
								{item.text}
							</MenuItem>
						))
				}
			</Menu>
		</>
	);
};

export default DynamicMenuDropdown;