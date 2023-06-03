import { useState } from 'react';
import {
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import PrimaryAppBar from '../Components/AppBar';
import Definitions from '../Components/Definitions';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const light = {
  palette: {
    primary: {
      main: '#A445ED',
    },
    mode: 'light',
  },
};

const dark = {
  palette: {
    primary: {
      main: '#A445ED',
    },
    mode: 'dark',
  },
};

function App() {
  const [loading, setLoading] = useState(false);
  const [searchedWord, setSearchedWord] = useState('');
  const [apiResponse, setApiResponse] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [fontStyle, setFontStyle] = useState('serif');

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { searchedWord } = data;
    setSearchedWord(searchedWord);

    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then((response) => {
        const ans = response.data;

        console.log('ans');
        console.log(ans);
        setApiResponse(ans);
      });
    // .finally(() => setLoading(false));
  };

  const onError = () => {
    console.log('errorrr');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Container>
        <PrimaryAppBar
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
        />
        <form id="searchedWordForm" onSubmit={handleSubmit(onSubmit, onError)}>
          <FormControl required fullWidth>
            <TextField
              id="searchBar"
              label="Search for any word..."
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton
                    className="submitMessageBtn"
                    onClick={handleSubmit(onSubmit, onError)}
                  >
                    <InputAdornment position="start">
                      <SearchIcon
                        className="searchIcon"
                        // sx={{
                        //   color: '#A445ED',
                        // }}
                      />
                    </InputAdornment>
                  </IconButton>
                ),
              }}
              {...register('searchedWord', { required: true })}
            />
          </FormControl>
        </form>

        {JSON.stringify(apiResponse) !== '{}' && (
          <Definitions searchedWord={searchedWord} apiResponse={apiResponse} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
