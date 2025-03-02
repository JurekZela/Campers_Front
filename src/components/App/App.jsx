import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout.jsx';
import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';

const Home = lazy(() => import('../../pages/Home/HomePage.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/CatalogPage.jsx'));
const Details = lazy(() => import('../../pages/Details/DetailsPage.jsx'));
const Reviews = lazy(() => import('../../pages/Reviews/ReviewsPage.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFoundPage.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks())
  }, [dispatch]);

  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Details />}/>
      <Route path="/reviews" element={<Reviews />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </Layout>
  )
}

export default App
