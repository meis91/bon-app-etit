import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer({ title, theme }) {
    function Copyright() {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              bon-app-etit
            </Link>{' '}
            {new Date().getFullYear()}

          </Typography>
        );
      }

  return (
    <div>
      {/* Footer */}
      <Box sx={{color: 'inherit', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Created at Codecool Austria
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  )
}

export default Footer


