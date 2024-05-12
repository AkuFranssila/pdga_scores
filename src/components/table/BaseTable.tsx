import { Box, Card, CardHeader, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  PDGALiveSingleRoundResultHole,
  PDGALiveSingleRoundResultScore,
} from "../../types/pdgaLiveRoundResults";

type BaseTableProps = {
  data: PDGALiveSingleRoundResultScore[];
  holeDetails: PDGALiveSingleRoundResultHole[];
  holeUnits: string;
  headerTitle?: string;
};

export function BaseTable(props: BaseTableProps) {
  const { data, holeDetails, holeUnits, headerTitle } = props;

  const cardNumber = data[0].CardNum;
  const columns: GridColDef[] = [];

  //generate rows from data
  const rows = data.map((player) => {
    console.log(player);
    const row: { [key: string]: any } = {
      // Update the type of 'row' to include dynamic keys
      id: player.PDGANum,
      position: player.Tied ? `T${player.RunningPlace}` : player.RunningPlace,
      name: player.Name,
    };

    //Map player.HoleScores to row
    player.HoleScores.forEach((hole, index) => {
      row[`${index + 1} ${cardNumber}`] = hole;
    });

    row[`rd ${cardNumber}`] =
      player.Played && player.Played > 0 ? player.RoundtoPar : "-";
    row[`thru ${cardNumber}`] =
      player.Played === 18 ? "F" : player.Played ? player.Played : "-";
    row[`total ${cardNumber}`] = player.ParThruRound;
    row[`roundRating ${cardNumber}`] = player.RoundRating || "-";

    return row;
  });

  columns.push({
    field: "position",
    headerName: "#",
    width: 50,
  });
  columns.push({ field: "name", headerName: "Name", width: 150 });

  // Create hole columns based on holeDetails
  holeDetails.forEach((hole) => {
    columns.push({
      field: `${hole.Label} ${cardNumber}`,
      headerName: hole.Label,
      width: 55,
      align: "center",
      renderHeader: (params: GridColumnHeaderParams) => (
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <strong>{params.colDef.headerName}</strong>
          <Typography variant="body2" color="text.secondary">
            {hole.Par}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hole.Length}
            {holeUnits === "ft" ? "ft" : "m"}
          </Typography>
        </Box>
      ),
      renderCell: (params: GridRenderCellParams) => {
        const score = params.value;
        const par = hole.Par.toString();

        const birdieGreen = "#228B22";
        const bogeyRed = "#C41E3A";
        const doubleBogeyRed = "#8B0000";
        const parNeutral = "transparent";
        const outOfBoundsOrange = "#FFA500";

        const textColor =
          score === par ? "black" : score < par ? "white" : "white";
        const backgroundColor =
          score === par
            ? parNeutral
            : score < par
            ? birdieGreen
            : score > par + 1
            ? doubleBogeyRed
            : bogeyRed;
        return (
          <Typography
            sx={{
              color: textColor,
              backgroundColor: backgroundColor,
              fontWeight: "bold",
              marginTop: "5px",
              borderRadius: "5px",
            }}
          >
            {score}
          </Typography>
        );
      },
    });
  });

  columns.push(
    {
      field: `rd ${cardNumber}`,
      headerName: "Rd",
      width: 60,
      align: "center",
    },
    {
      field: `thru ${cardNumber}`,
      headerName: "Thru",
      width: 60,
      align: "center",
    },
    {
      field: `total ${cardNumber}`,
      headerName: "Total",
      width: 60,
      align: "center",
    },
    {
      field: `roundRating ${cardNumber}`,
      headerName: "Rating",
      width: 70,
      align: "center",
    }
  );

  return (
    <>
      {headerTitle && <CardHeader title={headerTitle} />}
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        disableColumnFilter
        disableColumnResize
        disableColumnMenu
        hideFooter
        columnHeaderHeight={100}
        showColumnVerticalBorder
        sx={{
          border: "none",
        }}
      />
    </>
  );
}
