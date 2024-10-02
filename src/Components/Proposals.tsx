import { useRecoilValue } from "recoil";
import { userstate } from "../store/userState";
import { useEffect, useState } from "react";
import axios from "axios";
import { togglestate } from "../store/toggle";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { Proposal } from "../types/proposal";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CustomizedTables({ proposals, updateproposal }: { proposals: Proposal[], updateproposal: (id: string, completed: boolean) => void }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Drive</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proposals.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
              {row.status ? (
                <Button variant="contained" onClick={() => updateproposal(row.id, row.status)}>Accepted</Button>
              ) : (
                <Button variant="contained" onClick={() => updateproposal(row.id, row.status)}>Pending</Button>
              )}
            </StyledTableCell>

              <StyledTableCell align="right">
                <a href={row.drive} target="_blank" rel="noopener noreferrer">
                  <Button variant="contained" color="primary">
                    Visit Drive
                  </Button>
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ProposalPage = () => {
  const navigate = useNavigate();
  const toggle = useRecoilValue(togglestate);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const user = useRecoilValue(userstate);
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [status, setstatus] = useState(false);
  const updateproposal = async (id: string, completed: boolean) => {
    try {
      const token = localStorage.getItem("jwt_token");
      const resp = await axios.put(
        `${BASE_URL}/updateproposal/${id}/${!completed}/${user?.first_name} ${user?.last_name}`,{
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setstatus(!status);
      console.log(resp);
    } catch (error) {
      console.error("Error updating timeline:", error);
    }
  };
  useEffect(() => {
    const getProposals = async () => {
      if (user) {
        if (user.role !== "2") {
          navigate("/");
          return;
        }
        const token = localStorage.getItem("jwt_token");
        try {
          const resp = await axios.get(
            `${BASE_URL}/proposals/${user.first_name} ${user.last_name}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            }
          );
          setProposals(resp.data);
        } catch (error) {
          console.error("Error fetching proposals:", error);
        }
      }
    };
    getProposals();
  }, [user, BASE_URL,status, navigate]);

  return (
    <div className="border-2 border-black relative w-screen overflow-x-hidden h-screen ">
      <div className={`overflow-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}>
        <div
          className="flex justify-center md2:h-[180px] h-[120px] w-screen md2:absolute md2:top-0  z-1"
          style={{ backgroundColor: "#1976d2" }}
        ></div>
        <div className="flex justify-center ">
          <div className="bg-white md2:w-[808px] shadow-custom md2:absolute md2:top-32 z-0 ">
            <div className="mx-8 my-5 text-[24px] fontstylish font-weight-400 text-blue-600">
              Proposals
            </div>
            <div className="italic m-5">
              Welcome to our project proposal page, where students showcase
              their innovative ideas and ambitious plans. Here, you'll find a
              diverse array of projects spanning various disciplines, from
              technology to social sciences, all conceived and crafted by our
              talented students.
            </div>
            <div className="m-5">
            <CustomizedTables proposals={proposals} updateproposal={updateproposal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
