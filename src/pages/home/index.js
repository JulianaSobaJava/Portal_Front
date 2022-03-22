import React, { useState } from "react";
import Container from "../../components/container/container";
import Posts from "../../helpers/data/Posts";
import filterOptions from "../../helpers/data/FiltersOptions";
import images from "../../helpers/data/Images";
import slide1 from "../../assets/image/slide1.jpg";
import slide2 from "../../assets/image/slide2.jpg";
import slide3 from "../../assets/image/slide3.jpg";
import first from "../../assets/image/first.png";
import second from "../../assets/image/second.png";
import third from "../../assets/image/third.png";
import fourth from "../../assets/image/fourth.png";
import sol from "../../assets/image/sol.gif";
import * as style from "./home.styled";
import * as Icons from "react-icons/fa";
import NavBar from "../../components/navBar/navbar";
import Banner from "./banner";

export default function Home() {
  const [click, setClick] = useState(false);

  const handleCheckbox = (e) => {
    if (e.currentTarget.name === "foco") {
      setClick(!click);
      console.log(click);
      console.log(e.currentTarget);
      return;
    }
  };

  const handleClick = () => {
    const input = document.getElementById("searchHomeInput");
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const inputValue = input.value.trim();
        if (!inputValue) {
          return;
        }
        window.location.href = "http://localhost:3000/schools";
      }
    });
  };

  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <style.SearchContainer>
          <style.Search>
            <h1>Encontre mais de 500 escolas do Ensino Médio</h1>
            <style.InputSearch>
              <Icons.FaSearch />
              <input
                placeholder="Insira o nome de uma escola"
                type="text"
                onKeyPress={handleClick}
                id="searchHomeInput"
              />
            </style.InputSearch>

            <div>
              <label>Filtrar pesquisa(optional)</label>
              <style.FilterOPtions>
                {filterOptions.map((item) => (
                  <style.FiltersGroups
                    onClick={handleCheckbox}
                    click={click}
                    key={item.id}
                  >
                    <input type="checkbox" name={item.name} click={click} />
                    <label htmlFor={item.htmlFor}>{item.text}</label>
                  </style.FiltersGroups>
                ))}
              </style.FilterOPtions>

              <style.LinkExplore to="/escolas">
                Ver todas as escolas <Icons.FaAngleRight />
              </style.LinkExplore>
            </div>
          </style.Search>
        </style.SearchContainer>
        <style.RandomSchools>
          <h4>
            Resultado de 4 escolas de <span>Luanda</span>
          </h4>
          <style.RandomContainer>
            {images.map((item) => {
              return (
                <style.Box>
                  <img src={item.src} alt="" />
                  <style.BoxContent>
                    <h3>{item.nSchool}</h3>
                    <p>{item.description}</p>
                    <style.LinkButton to={item.link}>
                      Ver Perfil
                    </style.LinkButton>
                  </style.BoxContent>
                </style.Box>
              );
            })}
          </style.RandomContainer>
        </style.RandomSchools>
        <style.FutureContainer>
          <style.FutureContent>
            <style.FutureDescripion>
              <h1>Planeja o seu futuro</h1>
              <p>
                Esteja conectado a tudo que você precisa para, saber sobre
                saídas de empregos para o curso que escolheu, instrutor virtual
                e econtrar a sua futura escola a um click!
              </p>
            </style.FutureDescripion>
            <span>
              <style.Cloud />
              <style.Book />
            </span>
          </style.FutureContent>
          <style.PostFuture>
            <Posts />
          </style.PostFuture>
        </style.FutureContainer>
        <style.HighSchoolSection>
          <style.ImageGroup>
            <style.Img img1 src={slide1} alt="item about" />
            <style.Img img2 src={slide2} alt="item about" />
            <style.Img img3 src={slide3} alt="item about" />
          </style.ImageGroup>
          <style.DescriptionHighSchoolSection>
            <h2>
              Projecte e prepara-se para o ensino médio bem antes de estar
              dentro
            </h2>
            <p>
              Melhorar a educação do país, proporcionar o ingresso dos alunos em
              um ensino de qualidade, dar transparência e acesso sobre as
              informações de todas as escolas Angolanas, incentivar e ajudar as
              escolas a aprimorarem os seus serviços, bem como serem conhecidas.
              Acreditamos que o acesso a educação pode mudar o mundo e
              trabalhamos para isso.
            </p>
          </style.DescriptionHighSchoolSection>
        </style.HighSchoolSection>
        <style.Introduce>
          <style.Post>
            <img src={first} alt="" />
            <p>
              "O Portal das Escolas foi criado com o objetivo de ser o portal
              mais interativo no segmento da educação, trazendo soluções
              inovadoras na conexão entre escolas e alunos.
            </p>
          </style.Post>
          <style.Post>
            <img src={second} alt="" />
            <p>
              "A escolha da escola e do curso é, sem dúvida, uma escolha difícil
              e cheia de particularidades. Nem sempre as melhores escolas são as
              que combinam conosco e o portal das escolas é a solução."
            </p>
          </style.Post>
          <style.Post>
            <img src={third} alt="" />
            <p>
              "Não temos dúvidas que o Portal das Escolas é diferente no mercado
              Agolano. Temos convicção que em breve será a maior referência na
              busca por escolas em todo o país."
            </p>
          </style.Post>
          <style.Post>
            <img src={fourth} alt="" />
            <p>
              "O portal das escolas considera que o ensino médio é o ínicio de
              uma grande e importante caminhada. Pois é apartir dela que toma-se
              a decisão de qual será a nossa profissão."
            </p>
          </style.Post>
        </style.Introduce>
        <style.Question>
          <span>
            <img src={sol} alt="" />
          </span>
          <style.QuestionContent>
            <style.QuestionImg>
              <img
                src="https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </style.QuestionImg>
            <style.QuestionDescription>
              <h1>Tem alguma questão?</h1>
              <label>
                <style.QuestionLink to="/about">
                  Vá para as FAQ
                </style.QuestionLink>
                <strong>ou</strong>
                <style.QuestionLink to="/contacto">
                  Entre em contacto conosco
                </style.QuestionLink>
              </label>
            </style.QuestionDescription>
          </style.QuestionContent>
        </style.Question>
      </Container>
    </>
  );
}
