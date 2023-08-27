import {
  Tooltip,
  Table,
  TableHeader,
  Modal,
  ModalContent,
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  useDisclosure,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  User,
} from "@nextui-org/react";

import React, { useEffect, useState } from "react";
import apiInstance from "../../util/api";
import { EditIcon } from "../Table/editicon";
import { DeleteIcon } from "../Table/deleteicon";
import { EyeIcon } from "../Table/eyeicon";
import { Link } from 'react-router-dom';

export default function EmployeeTable() {
  const [empList, setEmpList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [delID, setDelID] = useState(null);

  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return empList.slice(start, end);
  }, [page, empList]);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && isOpen) {
      handleDelete()
    }
  };

  const onRowsChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(newRowsPerPage);
    setPages(Math.ceil(empList.length / newRowsPerPage));
    setPage(1); // Reset the current page to 1 when rows per page changes
  };
  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance.get('movie/now_playing?language=en-US&page=1').then(response => {
        console.log(response.data.results, 'here')
        setEmpList(response.data.results)
      })
    }
    getEmployeeLists()

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, rowsPerPage]);

  const handleOpen = (event) => {
    onOpen();
    console.log(event.currentTarget.getAttribute("data-key"));
    setDelID(event.currentTarget.getAttribute("data-key"));
  };

  const handleClose = () => {
    onClose();
    setDelID(null);
  };

  const handleDelete = async () => {
    console.log(setDelID);
    await apiInstance.delete("user/" + delID).then(() => {
      setEmpList(empList.filter((item) => item._id !== delID));

      onClose();

    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <span className="text-default-400 text-small">Total {empList.length} Positions</span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={(e) => onRowsChange(e)}
          >

            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
<div>

</div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          {(handleClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Position
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this position?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onClick={handleClose}>
                  No, Cancel
                </Button>
                <Button color="danger" onPress={() => handleDelete(delID)} onKeyDown={handleKeyDown}>
                  Yes, I am sure
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>

      </Modal>


    </>
  );
}