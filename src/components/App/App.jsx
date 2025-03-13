import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';

const Home = lazy(() => import('../../pages/Home/HomePage.jsx'));
const Campers = lazy(() => import('../../pages/Campers/CampersPage.jsx'));
const Details = lazy(() => import('../../pages/Details/DetailsPage.jsx'));
const Features = lazy(() => import('../../pages/Details/Features/Features.jsx'));
const Reviews = lazy(() => import('../../pages/Details/Reviews/ReviewsPage.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFoundPage.jsx'));

function App() {

  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campers" element={<Campers />} />
      <Route path="/campers/:truckId" element={<Details />}>
        <Route path="features" element={<Features />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </Layout>
  )
}

export default App
