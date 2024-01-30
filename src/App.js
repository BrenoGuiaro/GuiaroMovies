import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { SeriesPage } from './Pages/SeriesPage';
import { Todos } from './Pages/Todos';
import { PopularPage } from './Pages/PopularPage';
import { EmBrevePage } from './Pages/EmBrevePage';
import { CinemaPage } from './Pages/CinemaPage';
import { Detalhe} from './Pages/Detalhe';
import { DetalheSerie } from './Pages/DetalheSerie';
import { Erro } from './Pages/Erro';

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [emBreve, setEmBreve] = useState([])
  const [cinema, setCinema] = useState([])
  const apiKey = 'ad6ffabcfc327fc2bc18930479d08293'



  const getSeries = async () => {
    try {
      const { data } = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          language: 'pt-BR',
          api_key: apiKey
        }
      })
      setSeries(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  


  const getMoviesPopular = async () => {
    try {
      const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          language: 'pt-BR',
          api_key: apiKey
        }
      })
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }

  }

  const getMoviesEmBreve =async () =>{
    try {
      const {data} = await axios.get('https://api.themoviedb.org/3/movie/upcoming',{
      params: {
        language: 'pt-BR',
        api_key: apiKey
      }
      })
      setEmBreve(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getMoviesCinema = async () =>{
    try {
      const {data} = await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
        params:{
          language: 'pt-BR',
          api_key: apiKey
        }
      })
      setCinema(data.results)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getMoviesPopular()
    getSeries()
    getMoviesEmBreve()
    getMoviesCinema()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todos series={series} movies={movies} cinema={cinema} emBreve={emBreve} />}></Route>
        <Route path='/series' element={<SeriesPage series={series}/>}></Route>
        <Route path='/todos' element={<Todos series={series} movies={movies} cinema={cinema} emBreve={emBreve} />}></Route>
        <Route path='/popular' element={<PopularPage movies={movies}/>}></Route>
        <Route path='/embreve' element={<EmBrevePage emBreve={emBreve}/>}></Route>
        <Route path='/cinema' element={<CinemaPage cinema={cinema}/>}></Route>


        <Route path='serie/:id' element={<DetalheSerie series={series}/>}></Route>
        <Route path='serie/:id/serie/:id' element={<DetalheSerie series={series}/>}></Route>
        <Route path='/todos/serie/:id' element={<DetalheSerie series={series}/>}></Route>
        <Route path='/todos/serie/:id/serie/:id' element={<DetalheSerie series={series}/>}></Route>

        <Route path='movie/:id' element={<Detalhe movies={movies} />}></Route>
        <Route path='movie/:id/movie/:id' element={<Detalhe movies={movies} />}></Route>
        <Route path='/todos/movie/:id' element={<Detalhe movies={movies}/>}></Route>
        <Route path='/todos/movie/:id/movie/:id' element={<Detalhe movies={movies}/>}></Route>

        <Route path='/popular/movie/:id' element={<Detalhe movies={movies}/>}></Route>
        <Route path='/embreve/movie/:id' element={<Detalhe movies={movies}/>}></Route>
        <Route path='/cinema/movie/:id' element={<Detalhe movies={movies}/>}></Route>

        <Route path='*' element={<Erro/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
