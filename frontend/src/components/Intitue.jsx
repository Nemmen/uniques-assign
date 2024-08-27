import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { saveToExcel } from "../filesave";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none", // Remove outer border
        },

        columnSeparator: {
          display: "none", // Remove column separator lines
        },
        row: {
          borderBottom: "1px solid rgba(224, 224, 224, 1)", // Inner row borders
        },
        cell: {
          "&:focus": {
            outline: "none", // Remove focus border
          },
          cursor: "pointer",
        },
      },
    },
  },
});

export default function Intitue({ rows, columns, setOpen }) {
  const [now,setNo]=useState(0);
  const handleSave = () => {
    setNo((prev)=>prev+1);
    let fileName = "data_dummy" + now + ".xlsx";
    saveToExcel(rows,fileName);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ padding: 1, bgcolor: "" }}>
          <Box sx={{ height: 460, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 15]}
              checkboxSelection
              disableRowSelectionOnClick
              rowHeight={70}
            />
          </Box>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#016F6B",
                ":hover": { backgroundColor: "#016F89" },
              }}
              onClick={handleSave}
            >
              Save the data
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              sx={{
                backgroundColor: "#016F6B",
                ":hover": { backgroundColor: "#016F89" },
              }}
            >
              Add new data
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
