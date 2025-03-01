import { Container,HomeTitle, HomeSubTitle, HomeButton } from './Home-styled.js';

export default function Home() {


  return (
    <Container>
      <HomeTitle>Campers of your dreams</HomeTitle>
      <HomeSubTitle>You can find everything you want in our catalog</HomeSubTitle>
      <HomeButton to="/catalog">View Now</HomeButton>
    </Container>
  )
}