import styled from "styled-components";

type SectionProps = {
  padding: string;
};

type ImageProps = {
  backgroundImage: string;
};

export const Container = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  padding: 40px 0px;

  .logo {
    max-width: 120px;
    width: 90%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;
`;

export const Languages = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 6px 0px;

  .content {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    aling-items: center;
  }

  button {
    margin: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
  }
`;

export const Buttom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4f4f;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`;

export const Oval = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 50%;
`;

export const Main = styled.main`
  z-index: 1;
  width: 100%;

  .col {
    flex: 1;
  }

  h1 {
    font-weight: 100;
    font-size: 44px;
    line-height: 54px;
    margin: 0;
  }

  p {
    font-size: 16px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  .services {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  padding: ${props => props.padding};
  text-align: center;

  .services {
    margin-top: 50px;
  }

  h2 {
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
  }
`;

export const Galery = styled.section`
  width: 100%;
  background-color: #ff4f4f;
  color: #fff;

  .galery-title {
    text-align: center;
    padding: 40px 0px;

    h2 {
      margin: 0;
    }

    p {
      margin: 0px;
    }
  }

  .galery-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Image = styled.div<ImageProps>`
  max-width: calc(100% / 2);
  width: 90%;
  height: 400px;
  overflow: hidden;
  position: relative;

  background-image: url(${props => props.backgroundImage});
  background-size: cover;

  .image-content-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100%;
    width: 100%;

    opacity: 0;
    transition: 0.5s ease;
    background-color: #ff4f4f;
  }

  .image-content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    h3 {
      font-size: 16px;
      margin: 0;
      padding: 0;
    }

    p {
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
  }

  :hover {
    .image-content-bg {
      opacity: 0.9;
      transition: opacity 0.5s;
    }
  }
`;

export const Blog = styled.div`
  margin: 40px 0px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  .post {
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06);
    transition: ease-out 0.1s;
    border: 1px solid #e0e0e0;

    .thumbnail {
      width: 100%;
      height: 200px;
      background-size: cover;

      .thumbnail-title {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 79, 79, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    h3 {
      font-size: 16px;
      margin: 0;
      padding: 0;
      color: #fff;
      text-align: center;
    }

    .post-content {
      padding: 10px 10px 20px 10px;

      p {
        font-size: 14px;
        margin: 20px 10px;
        padding: 0;
        color: #737373;
        text-align: justify;
      }

      a {
        text-decoration: none;
        color: #ff4f4f;
        font-size: 14px;
      }
    }
  }

  .post:hover {
    transform: scale(1.02);
    transition: ease-in 0.1s;
  }
`;

export const MorePosts = styled.div`
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contact = styled.section`
  width: 100%;
  background-color: #ff4f4f;
  color: #fff;
  text-align: center;

  h2 {
    margin: 0;
  }

  p {
    margin: 0px;
  }

  form {
    max-width: 500px;
    width: 90%;
    display: block;
    margin: 30px auto;

    input, textarea{
      width: 100%;
    }

    button {
      display: block;
      margin: 0 auto;
    }
  }

  > div {
    flex-direction: column;
    padding: 60px 0;
  }
`;

export const Footer = styled.section`
  width: 100%;
  background-color: #cf0d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  padding: 10px 0px;
`;
