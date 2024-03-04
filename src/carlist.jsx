import { Grid, Typography } from '@mui/material';

function CarList({ carList }) {
  return (
    <Grid container spacing={2}>
      {carList.map((car) => (
        <Grid item xs={12} key={car.id}>
          <Typography variant="h6">{car.make} {car.model}</Typography>
          <Typography>Year: {car.year}</Typography>
          <Typography>Price: {car.price}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default CarList;