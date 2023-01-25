import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchField from './SearchField.js'
import CategoryFilter from './CategoryFilter.js'

function MainBar({ popularSearchTerms, filterOptions }) {
  return (
    <>
        <Box
          sx={{
            bgcolor: '#9e9e9e',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm">
        <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              What would you like to eat today?
            </Typography>
            <SearchField />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {popularSearchTerms.map((searchTerm) => (
                <Button variant="outlined" key={searchTerm}>{searchTerm}</Button>
              ))}
            </Stack>
            
            
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={1}
              justifyContent="center"
            >
              {filterOptions.map((option) => (
                <CategoryFilter filterOption={option} key={option.filter} />
              ))}
            </Stack> */}

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md"></Container>
    </>
  )
}

export default MainBar
