import Navbar from 'components/layout/Navbar'
import Footer from 'components/layout/Footer'
import Main from './Main'

const Layout = props => {
  return (
    <>
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

export default Layout
