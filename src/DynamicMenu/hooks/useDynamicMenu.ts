import {useLayoutEffect, useRef, useState} from 'react';
import {DynamicMenuItemProps} from '../model/IDynamicMenu';
import {useResizeObserver} from './useResizeObserver';

export const useDynamicMenu = (items:DynamicMenuItemProps[]) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [containerWidth, setContainerWidth] = useState(0)
	const [hiddenItems, setHiddenItems] = useState<Record<number, boolean>>({})

	useResizeObserver(containerRef, (entries) => {
		const entry = entries[0];
		if (containerWidth === entry.contentRect.width) {
			return;
		}
		setContainerWidth(entry.contentRect.width);
		setHiddenItems({});
	});

	useLayoutEffect(() => {
		const containerEl = containerRef.current
		const containerChildren = containerEl?.children

		if(!containerChildren) {
			return
		}

		const itemsWidth:number[] = []
		let dropdownWidth = 0

		for (let i = 0; i < containerChildren.length; i++) {
			const child = containerChildren[i]
			const width = child.getBoundingClientRect().width
			let spacing = 0
			if(i > 0) {
				spacing = child.getBoundingClientRect().left - (containerChildren[i-1].getBoundingClientRect().left + containerChildren[i-1].getBoundingClientRect().width)
			}
			const totalWidth = width + spacing
			if(child.getAttribute('id') === 'dropdown-button') {
				dropdownWidth = totalWidth
			}
			else{
				itemsWidth.push(totalWidth)
			}
		}

		let remainingContainerWidth = containerWidth - dropdownWidth
		const hiddenItemsMap:Record<number, boolean> = {}

		items.forEach((item, i) => {
			const itemWidth = itemsWidth[i]
			if(itemWidth <= remainingContainerWidth) {
				remainingContainerWidth -= itemWidth
			}
			else {
				hiddenItemsMap[item.id] = true
			}
		})

		setHiddenItems(hiddenItemsMap)

	}, [containerWidth, items])

	return {
		containerRef,
		hiddenItems
	}
}