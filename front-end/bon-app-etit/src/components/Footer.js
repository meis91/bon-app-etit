import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchField from './SearchField.js';
import CategoryFilter from './CategoryFilter.js';
import Link from '@mui/material/Link';

function Footer({ title }) {
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
    <>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
    </>
  )
}

export default Footer


