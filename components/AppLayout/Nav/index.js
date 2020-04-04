import React from 'react';
import Link from 'next/link';
import {
  NavBlock,
  NavListItem,
  NavListItemMenu,
  NavListItemMenuItem,
  NavListItemMenuItemMenu,
  NavLink
} from './styles';

const navItem = [
  {
    mainMenu: '아이템1',
    subMenu: [
      {
        name: 'product',
        path: 'product'
      },
      {
        name: '상품1',
        path: '/'
      }
    ]
  },
  {
    mainMenu: '아이템2',
    subMenu: [
      {
        name: '상품2-1',
        path: '#'
      },
      {
        name: '상품2-2',
        path: '#'
      }
    ]
  },
  {
    mainMenu: '아이템3',
    subMenu: [
      {
        name: '상품3',
        path: '#'
      },
      {
        name: '상품3-1',
        path: '#'
      }
    ]
  },
  {
    mainMenu: '아이템4',
    subMenu: [
      {
        name: '상품4',
        path: '#'
      },
      {
        name: '상품4-1',
        path: '#'
      },
      {
        name: '상품5-1',
        path: '#'
      }
    ]
  }
];

const Nav = () => {
  return (
    <NavBlock>
      {navItem.map(item => (
        <NavListItem key={item.mainMenu}>
          <NavListItemMenu>
            {item.mainMenu}
            <NavListItemMenuItem>
              {item.subMenu.map(sub => (
                <NavListItemMenuItemMenu key={sub.name}>
                  <Link href={sub.path}>
                    <a>{sub.name}</a>
                  </Link>
                </NavListItemMenuItemMenu>
              ))}
            </NavListItemMenuItem>
          </NavListItemMenu>
        </NavListItem>
      ))}
    </NavBlock>
  );
};
export default Nav;
