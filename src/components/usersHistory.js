import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";

const UsersHistory = () => {
  const tableHeadings = ["Name", "Category", "Difficulty", "Score"];
  const history = useSelector((state) => state.history.usersData);

  const useStyles = makeStyles({
    table: {
      width: 500,
      minWidth: 650,
      background: "#9bd7df",
    },
  });

  const classes = useStyles();

  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableHeadings.map((head) => (
                <TableCell key={head}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {history.map((item) => (
              <TableRow key={item}>
                {tableHeadings.map((col) => {
                  return (
                    <TableCell scope="row" key={col}>
                      {item.name}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
          {/* <TableBody>
            {history.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.difficulty}</TableCell>
                <TableCell>{item.score}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Grid>
  );
};
export default UsersHistory;
