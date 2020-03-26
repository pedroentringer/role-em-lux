import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import Slider from "@farbenmeer/react-spring-slider";
import { HashLink as Link } from "react-router-hash-link";

import {
  Oval,
  Container,
  Header,
  HeaderContent,
  Nav,
  Main,
  Section,
  Galery,
  Image,
  Blog,
  MorePosts,
  Contact,
  Footer,
  Languages
} from "./styles";

import services from "../../config/services";

import Service from "../../components/Service";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Login from "../../components/ModalLogin";
import { Input, Textarea } from "../../components/Form";


import ImageLogo from "../../assets/images/logo.png";
import ImageOval from "../../assets/images/oval.png";

import ImageSlide_01 from "../../assets/images/slide/01.jpg";
import ImageSlide_02 from "../../assets/images/slide/02.jpg";
import ImageSlide_03 from "../../assets/images/slide/03.jpg";

import ImageGalery_01 from "../../assets/images/galery/01.jpg";
import ImageGalery_02 from "../../assets/images/galery/02.jpg";

const scroll = (el: HTMLElement) => el.scrollIntoView({ behavior: "smooth", block: "center" });
const styleButton = { backgroundColor: '#CF0D1D' };
const styleButtonLanguage = {...styleButton, padding:0, width: 30, height: 30, borderRadius: 15}

const Landing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState({
    show: false,
    content: <div />,
  });

  const searchAPI = () => {
    console.log('Search API')
  }

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    searchAPI();
  };

  useEffect(()=>{
    searchAPI();
  }, [])

  return (
    <>
      {modal.show && (
        <Modal onClose={() => setModal({...modal, show: false})}>
          {modal.content}
        </Modal>
      )}
      <Oval src={ImageOval}></Oval>
      <Header>
        <Languages>
          <div className="content">
            <Button text="PT" onClick={() => handleChangeLanguage("pt-BR")} style={styleButtonLanguage} />
            <Button text="EN" onClick={() => handleChangeLanguage("en")} style={styleButtonLanguage} />
            <Button text="FR" onClick={() => handleChangeLanguage("fr")} style={styleButtonLanguage} />
          </div>
        </Languages>
        <Container>
          <HeaderContent>
            <img className="logo" src={ImageLogo} alt="Um Rolê em lux"></img>
            <Nav>
              <Link to="#services" scroll={scroll}>
                {t("homepage.nav.services")}
              </Link>
              <Link to="#blog" scroll={scroll}>
                {t("homepage.nav.blog")}
              </Link>
              <Link to="#contact" scroll={scroll}>
                {t("homepage.nav.contact")}
              </Link>
              <Button text={t("homepage.nav.process")} style={styleButton} onClick={ () => setModal({show: true, content: <Login />})}/>
            </Nav>
          </HeaderContent>
        </Container>
      </Header>
      <Container>
        <Main>
          <section className="row">
            <div className="col">
              <h1>
                <Trans>{t("homepage.header.title")}</Trans>
              </h1>
              <p style={{ width: "70%" }}>{t("homepage.header.subtitle")}</p>
              <Button text={t("homepage.header.button")} />
            </div>
            <div
              className="col"
              style={{
                maxWidth: "500px",
                height: 400,
                borderRadius: 6,
                overflow: "hidden"
              }}
            >
              <Slider auto={3000}>
                <img
                  className="slide-img"
                  src={ImageSlide_01}
                  alt="Luxemburgo"
                ></img>
                <img
                  className="slide-img"
                  src={ImageSlide_02}
                  alt="Luxemburgo"
                ></img>
                <img
                  className="slide-img"
                  src={ImageSlide_03}
                  alt="Luxemburgo"
                ></img>
              </Slider>
            </div>
          </section>

          <Section padding="120px 0px" id="services">
            <h2>{t("homepage.services.title")}</h2>
            <p>
              <Trans>{t("homepage.services.subtitle")}</Trans>
            </p>

            <div className="services" style={{ paddingTop: 20 }}>
              {services.map(service => (
                <Service key={service.id} service={service} />
              ))}
            </div>
          </Section>
        </Main>
      </Container>
      <Galery>
        <div className="galery-title">
          <h2>{t("homepage.galery.title")}</h2>
          <p>
            <Trans>{t("homepage.galery.subtitle")}</Trans>
          </p>
        </div>

        <div className="galery-content">
          <Image backgroundImage={ImageGalery_01}>
            <div className="image-content-bg">
              <div className="image-content">
                <h3>{t("homepage.galery.images.left.title")}</h3>
                <p>{t("homepage.galery.images.left.subtitle")}</p>
              </div>
            </div>
          </Image>
          <Image backgroundImage={ImageGalery_02}>
            <div className="image-content-bg">
              <div className="image-content">
                <h3>{t("homepage.galery.images.right.title")}</h3>
                <p>{t("homepage.galery.images.right.subtitle")}</p>
              </div>
            </div>
          </Image>
        </div>
      </Galery>
      <Container>
        <Section padding="60px 0px" id="blog">
          <h2>{t("homepage.blog.title")}</h2>
          <p>
            <Trans>{t("homepage.blog.subtitle")}</Trans>
          </p>

          <Blog>
            <div className="post">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url(https://umaturistanasnuvens.com/wp-content/uploads/2019/11/Motivos-para-visitar-a-Cidade-de-Luxemburgo-Chemin-de-la-Corniche1.jpg)"
                }}
              >
                <div className="thumbnail-title">
                  <h3>Titulo da postagem</h3>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Mais um texto aqui que pode ocupar um espaço legal pra gente
                  falar dessa postagem que vai aparecer no blog, olha que coisa
                  coisada.
                </p>
                <Link to="/post/1">{t("homepage.blog.readMore")}</Link>
              </div>
            </div>
          </Blog>

          <MorePosts>
            <Button text={t("homepage.blog.button")} />
          </MorePosts>
        </Section>
      </Container>
      <Contact id="contact">
        <Container>
          <h2>{t("homepage.contact.title")}</h2>
          <p>{t("homepage.contact.subtitle")}</p>

          <form>
            
            <Input
              type="email"
              required
              placeholder={t("homepage.contact.placeholders.email")}
            />
            <Input
              type="phone"
              required
              placeholder={t("homepage.contact.placeholders.phone")}
            />
            <Textarea
              rows={8}
              required
              placeholder={t("homepage.contact.placeholders.message")}
            />
            <Button text={t("homepage.contact.button")} style={styleButton} />
          </form>
        </Container>
      </Contact>
      <Footer>{t("homepage.footer")}</Footer>
    </>
  );
};

export default Landing;
