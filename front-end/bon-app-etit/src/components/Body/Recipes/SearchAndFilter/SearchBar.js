import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchField from './SearchField.js'
import CategoryFilter from './CategoryFilter.js'
import axios from "../../../../api/axios";

function SearchBar({ popularSearchTerms, filterOptions, handleSearch }) {


  return (
    <>
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
            <SearchField handleSearch={handleSearch}/>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {popularSearchTerms.map((searchTerm) => (
                <Button variant="outlined" value={searchTerm} key={searchTerm} onClick={handleSearch}>{searchTerm}</Button>
              ))}
            </Stack>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="lg">
              <Grid container spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                  {filterOptions.map((category) => (
                      <Grid key={category.tagCategoryName} item xs={5} sm={4} md={3} lg={2}>
                          <CategoryFilter filterOption={category} handleSearch={handleSearch} />
                      </Grid>
                  ))}
              </Grid>
          </Container>
    </>
  )
}

export default SearchBar
