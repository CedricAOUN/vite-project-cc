import './App.css'
import Dish from './components/Dish'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className='dishes'>
        <Dish name='Tacos à l’unité' price={3} imgUrl='https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg' />
        <Dish name='Enchiladas' price={12} imgUrl='https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg' />
        <Dish name='Mole poblano' price={15} imgUrl='https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg' />
      </div>
      <Footer />
    </>
  )
}

export default App
