import {DynamicMenu} from './DynamicMenu';

const menuItems = [
    {
        id: 1,
        text: 'Menu item 1',
        onClick: () => {console.log('Click menu item 1')}
    },
    {
        id: 2,
        text: 'Menu item 2',
        onClick: () => {console.log('Click menu item 2')}
    },
    {
        id: 3,
        text: 'Long menu item 3',
        onClick: () => {console.log('Click long menu item 3')}
    },
    {
        id: 4,
        text: 'Menu item 4',
        onClick: () => {console.log('Click menu item 4')}
    },
    {
        id: 5,
        text: 'Menu item 5',
        onClick: () => {console.log('Click menu item 5')}
    },
    {
        id: 6,
        text: 'Menu item 6',
        onClick: () => {console.log('Click menu item 6')}
    },
    {
        id: 7,
        text: 'Menu item 7',
        onClick: () => {console.log('Click menu item 7')}
    },
    {
        id: 8,
        text: 'Menu item 8',
        onClick: () => {console.log('Click menu item 8')}
    },
    {
        id: 9,
        text: 'Menu item 9',
        onClick: () => {console.log('Click menu item 9')}
    },
    {
        id: 10,
        text: 'Menu item 10',
        onClick: () => {console.log('Click menu item 10')}
    },
]
function App() {

  return (
    <DynamicMenu items={menuItems}/>
  )
}

export default App
