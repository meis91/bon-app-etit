import Typography from '@mui/material/Typography';

function Footer({ title }) {
  return (
    <div>
        <Typography variant="h5" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Created at Codecool Austria 2023
        </Typography>
    </div>
  )
}

export default Footer