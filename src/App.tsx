
import './App.css'
import Applenumber from './component/Applenumber'
import Community from './component/Community'
import Faq from './component/Faq'
import Footer from './component/Footer'
import Learners from './component/Learners/Learners'
import Nav from './component/Nav'
import Programs from './component/Program/Programs'
import Stories from './component/Stories'
import Description from './component/Descreption'
function App() {

  return (
    <>
<Nav />
<Description />
<Applenumber />
<Programs />
<Stories />
<Learners />
<Community />
<Faq />
<Footer />
    </>
  )
}

export default App
