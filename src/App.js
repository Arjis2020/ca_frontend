import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import './App.css';
import Content from "./components/Content";
import Header from "./components/Header";
import axios from 'axios'
import ResponsiveBottomAppBar from "./components/ResponsiveBottomBar";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#40E0D0",
      light: "#AFEEEE",
      dark: "#00ced1",
    },
    secondary: {
      main: '#304fff',
      light: '#7B7CFF',
      dark: '#0026CA',
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#CEF9EC"
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  const [searchParams, setSearchParams] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function getData() {
    var response = await axios.get('http://localhost:5000/current_affairs')
    setData(response.data)
    setLoading(false)
  }

  async function startSearching() {
    setLoading(true)
    var results = await axios.get(`http://localhost:5000/current_affairs/search?q=${searchParams}`)
    setData(results.data)
    setLoading(false)
  }

  useEffect(() => {
    if (data.length === 0)
      getData()
  }, [])

  useEffect(() => {
    if (searchParams?.length > 0)
      startSearching()
    else
      getData()
  }, [searchParams])

  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <Header
        onSearchChange={(value) => setSearchParams(value)}
        searchValue={searchParams}
      />
      <Content
        data={data}
        loading={loading}
      />
      <ResponsiveBottomAppBar
        onSearchChange={(value) => setSearchParams(value)}
        searchValue={searchParams}
      />
    </ThemeProvider>
  );
}

export default App;
