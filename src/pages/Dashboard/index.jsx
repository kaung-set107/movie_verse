import Sidebar from "../../components/Sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Pagination,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Slide from "./slideposter";
import Nav from "../../components/Navbar/index";
import { SearchIcon } from "../../components/Icons/searchicon";
import apiInstance from "../../util/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import Footer from "../../components/Navbar/footer";
import Logo from "../../assets/ms2.png";
import Theme from "../../components/ThemeSwitch/index";
export default function Dashboard(props) {
  const [empList, setEmpList] = useState([]);
  // console.log(props.movieSearchList,'se')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataCount, setDataCount] = useState("");
  const [delID, setDelID] = useState(null);
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return empList.slice(start, end);
  }, [page, empList]);
  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get("movie/now_playing?language=en-US&page=1")
        .then((res) => {
          console.log(res.data.results, "here");

          setEmpList(res.data.results);
          setDataCount(res.data.counts);
          setPages(
            res.data.results.length % rowsPerPage === 0
              ? Math.round(res.data.results.length / rowsPerPage)
              : Math.round(res.data.results.length / rowsPerPage) >
                res.data.results.length / rowsPerPage
              ? Math.round(res.data.results.length / rowsPerPage)
              : res.data.results.length / rowsPerPage
          );
        });
    };
    getEmployeeLists();
  }, [isOpen, rowsPerPage]);
  return (
    <div className='flex'>
      <div className='py-2 flex-grow'>
        <div className='body px-6 py-5'>
          <Card className='rounded-md shadow-md py-5'>
            <CardHeader className='flex justify-between font-semibold rounded-2 text-xl py-10'>
              <div className=''>
                <img src={Logo} width='200' height='100' />
              </div>
              <div className='flex'>
                <Theme />
                <Input
                  isClearable
                  radius='lg'
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-default-200/50",
                      "dark:bg-default/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-default-200/70",
                      "dark:hover:bg-default/70",
                      "group-data-[focused=true]:bg-default-200/50",
                      "dark:group-data-[focused=true]:bg-default/60",
                      "!cursor-text",
                    ],
                  }}
                  placeholder='Type to search...'
                  startContent={
                    <SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
            </CardHeader>
            <Divider></Divider>
            <CardBody className='flex mt-2'>
              <div className='grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-6'>
                {items.map((item, i) => (
                  <div className='block' key={item.id}>
                    <div className='w-20 md:w-32 lg:w-48 shadow-sm'>
                      <Link to={"/detail/" + item.id}>
                        <Image
                          isBlurred
                          width={240}
                          src={
                            "http://image.tmdb.org/t/p/w500" + item.poster_path
                          }
                          alt='NextUI Album Cover'
                          classNames='m-5'
                        />
                      </Link>
                    </div>
                    <div className='flex flex-row mt-1'>
                      <b>{Number(item.vote_average)?.toFixed(1)}</b>
                      <img
                        src={star}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <div
                      key={item.id}
                      className='sm:text-left lg:w-40 h-12 overflow-hidden mt-1'
                    >
                      {item.title}

                      <br />
                      {item.release_date}
                    </div>
                  </div>
                ))}
              </div>

              <div className='py-10 flex justify-end w-full'>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color='primary'
                  page={page}
                  total={pages}
                  size='lg'
                  onChange={(page) => setPage(page)}
                />
              </div>
            </CardBody>
            <Divider></Divider>
            <CardFooter className='justify-center'>
              <div className='text-center sm:text-left'>
                <Footer />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
