import Sidebar from '../../components/Sidebar'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button
} from '@nextui-org/react'

import Table from '../../components/Movie/movieTable'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import apiInstance from '../../util/api'

export default function Employee() {



  return (
    <>
      <div className='flex'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='flex-grow'>
          <div className=''>
            <Card className='rounded-sm shadow-md py-3 min-h-[890px]'>
              <CardHeader className='justify-between'>
                <div></div>
                <div className='font-semibold'>Employee List</div>

                <Button
                 
                  color='primary'
                  className='text-sm '
                ><Link to='/emp-add'>
                    Add</Link>
                </Button>

              </CardHeader>
              <CardBody className=''>
                <Table />
              </CardBody>
              <Divider></Divider>
              <CardFooter>
                Copyright © 2023-2024{' '}
                <b className='text-cyan-600'>K-win Technology</b> .All rights
                reserved.
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}