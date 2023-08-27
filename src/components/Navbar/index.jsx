import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarBrand,
  Avatar
} from '@nextui-org/react'

import { SearchIcon } from './search'
import ThemeSwitch from '../ThemeSwitch'
import Logo from '../../assets/ms.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar maxWidth='full'  isBlurred={false} className='py-8 bg-gray-1000'>

    
        <NavbarBrand>
         <div className='flex flex-row place-content-between'>
<img src={Logo} width='60'/>
</div>
        </NavbarBrand>
      
          {/* <NavbarItem>
            <Link to='/home'>Home</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to='/about' aria-current='page' color='secondary'>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to='/' color='foreground'>
              Login
            </Link>
          </NavbarItem> */}
   


         <NavbarContent
            as='div'
            className='items-center mt-2 flex-grow'
            justify='end'
          >
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[15rem] h-8',
            input: 'text-small',
            inputWrapper:
              'font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<SearchIcon size={20} />}
          type='search'
        />
        {/* <Dropdown placement='bottom-end mt-1'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='primary'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem key='profile' className='h-14 gap-2'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>kaungsethein91@gmail.com</p>
            </DropdownItem>
            <DropdownItem key='settings'>My Settings</DropdownItem>
            <DropdownItem key='team_settings'>Team Settings</DropdownItem>
            <DropdownItem key='analytics'>Analytics</DropdownItem>
            <DropdownItem key='system'>System</DropdownItem>
            <DropdownItem key='configurations'>Configurations</DropdownItem>
            <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
            <DropdownItem key='logout' color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <ThemeSwitch></ThemeSwitch>
      </NavbarContent>
    </Navbar>
  )
}
