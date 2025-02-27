import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/HomePage.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/CatalogPage.jsx'));
const Details = lazy(() => import('../../pages/Details/DetailsPage.jsx'));
const Reviews = lazy(() => import('../../pages/Reviews/ReviewsPage.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFoundPage.jsx'));

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Details />}/>
      <Route path="/reviews" element={<Reviews />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </div>
  )
}

export default App
