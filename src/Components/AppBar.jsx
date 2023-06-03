import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Within } from '@theme-toggles/react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PrimaryAppBar({
  isDarkTheme,
  setIsDarkTheme,
  fontStyle,
  setFontStyle,
}) {
  const toggleTheme = (e) => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  };
  const toggleFont = (event) => {
    const selectedFont = event.target.value;
    setFontStyle(selectedFont);

    // Update the data-font attribute on the body element
    document.querySelector('body').setAttribute('data-font', selectedFont);
  };

  return (
    <Box sx={{ flexGrow: 1 }} id="appbar">
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src="/media/logo.png" alt="book logo" className="mainLogo" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <FormControl
              fullWidth
              className="fontSelect"
              sx={{ backgroundColor: '#000' }}
            >
              <InputLabel>Font Style</InputLabel>
              <Select
                onChange={toggleFont}
                value={fontStyle}
                inputProps={{
                  name: 'font',
                  id: 'uncontrolled-native',
                }}
              >
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="sansSerif">Sans Serif</MenuItem>
                <MenuItem value="mono">Monospace</MenuItem>
              </Select>
            </FormControl>

            <Within
              toggled={isDarkTheme}
              toggle={toggleTheme}
              className="menuIcon themeToggle"
            />

            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Switch checked={isDarkTheme} onChange={toggleTheme} />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
