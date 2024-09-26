// import Card from './components/Card'
// import Row from './components/Row'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Register2 from './pages/Register2'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Register2 />
        {/* <Row>
          <Card imagen="/img/helados.png" titulo="Helado super rico" precio="2500" lista={['hola', 'soy', 'una', 'lista']} />
          <Card imagen='/img/postal.png' titulo='Refrescante paseo' precio="150000" lista={['hola', 'soy', 'una', 'lista']} />
          <Card imagen='/img/burbujas.png' titulo="Experiencia de burbujas" precio='50000' lista={['hola', 'soy', 'una', 'lista']} />
        </Row> */}
      </div>
      <Footer />
    </>
  )
}

export default App
