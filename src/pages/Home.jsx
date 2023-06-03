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
import { toast } from 'react-toastify';

import PrimaryAppBar from '../Components/AppBar';
import Definitions from '../Components/Definitions';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toaster from '../Components/Toast.jsx';

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
  const [searchedWord, setSearchedWord] = useState('');
  const [apiResponse, setApiResponse] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [fontStyle, setFontStyle] = useState('serif');

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { searchedWord } = data;
    setSearchedWord(searchedWord);

    if (searchedWord === '') {
      console.log('empty string submitted');
      return;
    }

    if (searchedWord.split(' ').length > 1) {
      toast('🦄 Please only submit 1 word to be looked up', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      });
      console.log('please only submit 1 word to be looked up');
      return;
    }

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

  const onError = (data) => {
    const { searchedWord } = data;

    if (searchedWord.message === '') {
      console.log('empty string submitted');
      toast('🦄 Submission cannot be empty', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      });
      return;
    }

    console.log('errorrrr');
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
                      <SearchIcon className="searchIcon" />
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
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
