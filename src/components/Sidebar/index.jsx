import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  User
} from '@nextui-org/react'
import BadgeIcon from '@mui/icons-material/Badge'
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LaptopIcon from '@mui/icons-material/Laptop';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import MyIcon from '../../../public/myicon.svg'

export default function Sidebar() {

  const itemClasses = {
    base: ' px-2 w-full',
    title: 'font-normal text-medium text-left',
    trigger: 'data-[hover=true]:bg-default-100 round',
    indicator: 'text-medium px-1 py-1',
    content: 'text-small px-2 text-left'
  }
  return (
    <>
      <div className='sidebar  grid grid-cols-1 grid-flow-col py-2 px-2 h-screen'>
        <div className='nav-bar flex-grow'>
          <Card className='flex flex-grow h-auto rounded-sm'>
            <CardHeader className='flex gap-3'>
              <div className='flex flex-row'>
                <Image
                  alt='nextui logo'
                  height={40}
                  radius='sm'
                  src={MyIcon}z
                  width={40}
                />
                <div className='flex ml-4'>
                  <p className='text-md m-auto'>Upgrade Your Business</p>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className='px-0 py-0 m-0'>

              <Accordion
                isCompact={true}
                selectionMode='multiple'
                variant='splited'
                itemClasses={itemClasses}
                defaultExpandedKeys={["1","2","3","4","5","6"]}
              >

                {/* Employee */}
                <AccordionItem key='1' aria-label='Employee' title='Master'>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<PeopleAltIcon />}
                  >
                    <Link to='/emp'>
                      <span className='m-auto'>Employee</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<WorkIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Position</span>
                    </Link>
                  </Button>
                     <Divider></Divider>
                     <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<LaptopIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Department</span>
                    </Link>
                  </Button>
                </AccordionItem>

                {/* Position */}
                <AccordionItem key='2' aria-label='Position' title='Position'>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<WorkIcon />}
                  >
                    <Link>
                      <span className='m-auto'>Position List</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<WorkIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Position Update</span>
                    </Link>
                  </Button>
                </AccordionItem>

                {/* Department */}
                <AccordionItem key='3' aria-label='Department' title='Department'>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<LaptopIcon />}
                  >
                    <Link>
                      <span className='m-auto'>Department List</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<LaptopIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Department Update</span>
                    </Link>
                  </Button>
                </AccordionItem>

                {/* Attendance */}
                <AccordionItem key='4' aria-label='Attendance' title='Attendance' >
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<FolderSharedIcon />}
                  >
                    <Link>
                      <span className='m-auto'>Attendance List</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<FolderSharedIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Attendance Update</span>
                    </Link>
                  </Button>
                </AccordionItem>

                {/* Leave */}
                <AccordionItem key='5' aria-label='Leave' title='Leave'>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<BadgeIcon />}
                  >
                    <Link>
                      <span className='m-auto'>Leave List</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<BadgeIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Leave Update</span>
                    </Link>
                  </Button>
                </AccordionItem>

                {/* Payslip */}
                <AccordionItem key='6' aria-label='Payslip' title='Payslip'>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-0 text-left'
                    startContent={<LocalAtmIcon />}
                  >
                    <Link>
                      <span className='m-auto'>Payslip List</span>
                    </Link>
                  </Button>
                  <Divider></Divider>
                  <Button
                    variant='light'
                    className='rounded-none px-4 py-1 text-left'
                    startContent={<LocalAtmIcon />}
                  >
                    <Link>

                      <span className='m-auto'>Payslip Update</span>
                    </Link>
                  </Button>
                </AccordionItem>

              </Accordion>
              <Divider></Divider>
            </CardBody>
            <Divider />
            <CardFooter>
              <User
                name='HR Ma Ma'
                description='Product Designer'
                avatarProps={{
                  src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
                }}
              />
            
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
