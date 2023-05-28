type DynamicMenuHiddenItemsProps = Record<number, boolean>

interface DynamicMenuItemProps {
	id: number;
	text: string;
	onClick: () => void;
}
interface DynamicMenuItemsProps {
	items: DynamicMenuItemProps[];
}

interface DynamicMenuDropdownProps {
	items: DynamicMenuItemProps[];
	hiddenItems: DynamicMenuHiddenItemsProps;
}


export type {
	DynamicMenuItemProps,
	DynamicMenuItemsProps,
	DynamicMenuHiddenItemsProps,
	DynamicMenuDropdownProps
}