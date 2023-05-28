import {Button, Stack} from '@mui/material';
import {btnStyles} from './styles';
import DynamicMenuDropdown from './DynamicMenuDropdown';
import {DynamicMenuItemsProps} from '../model/IDynamicMenu';
import {useDynamicMenu} from '../hooks/useDynamicMenu';


export const DynamicMenu = ({items}:DynamicMenuItemsProps) => {

	const {containerRef, hiddenItems} = useDynamicMenu(items)

	return (
		<Stack direction="row" spacing={2} ref={containerRef}>
			{
				items.map((item) => {
					if(hiddenItems[item.id]) {
						return null
					}
					return (
						<Button
							key={item.id}
							onClick={item.onClick}
							sx={btnStyles}
							variant='outlined'
						>{item.text}</Button>
					)
				})
			}
			<DynamicMenuDropdown items={items} hiddenItems={hiddenItems}/>
		</Stack>
	);
};