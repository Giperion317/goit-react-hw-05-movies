import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Conteiner/Conteiner';
import { Section } from 'components/Section/Section';
import { Header, Footer, FooterLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          {<Navigation />}
          </Container>
      </Header>
      <main>
        <Section>
        <Container>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
          </Container>
          </Section>
      </main>
      <Footer>
        © 2022 | Create by <FooterLink href='https://github.com/Giperion317' target="_blank" rel="noopener noreferrer">Giperion317</FooterLink>
      </Footer>
    </>
  );
};
