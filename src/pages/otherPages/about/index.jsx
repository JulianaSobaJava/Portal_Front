import React from "react";
import * as style from "./style";
import slide1 from "../../../assets/image/logo.jpg";
import slide2 from "../../../assets/image/slide1.jpg";
import slide3 from "../../../assets/image/slide2.jpg";

export default function AboutContainer() {
  return (
    <style.AboutPortal>
      <h1>O que preciso saber sobre o portal?</h1>
      <style.Row>
        <style.FirstRow>
          <h3>Quem Somos?</h3>
          <p>
            O Portal das Escolas foi criado com o objetivo de ser o portal mais
            interativo no segmento da educação em Angola, trazendo soluções
            inovadoras na conexão entre escolas e alunos. Muito mais que um
            website, é uma poderosa ferramenta para a educação, principalmente
            para alunos e escolas, pois ajuda e facilita os alunos que estão
            preparando-se para o ensino médio a escolherem a escola e o curso
          </p>
          <p>
            Foi na busca de facilitar a vida educacional de muitos alunos, pais,
            professores e escolas que criamos um portal dinâmico que não só
            permitirá aos alunos buscarem a melhor escola para si a um click,
            como permitirá conhece-lá bem antes de estudar nela. Dando assim aos
            demais preparação e conhecimento suficiente para escolher a escola
          </p>
        </style.FirstRow>
        <style.Image>
          <img src={slide1} alt="" />
        </style.Image>
      </style.Row>

      <style.RowGroup>
        <div></div>
      </style.RowGroup>

      <style.Row>
        <style.ImageRowTwo>
          <img src={slide2} alt="" />
        </style.ImageRowTwo>
        <style.FirstRow>
          <h3>O que fazemos?</h3>
          <p>
            O Portal das Escolas foi criado com o objetivo de ser o portal mais
            interativo no segmento da educação em Angola, trazendo soluções
            inovadoras na conexão entre escolas e alunos. Muito mais que um
            website, é uma poderosa ferramenta para a educação, principalmente
            para alunos e escolas, pois ajuda e facilita os alunos que estão
            preparando-se para o ensino médio a escolherem a escola e o curso
          </p>
          <p>
            Foi na busca de facilitar a vida educacional de muitos alunos, pais,
            professores e escolas que criamos um portal dinâmico que não só
            permitirá aos alunos buscarem a melhor escola para si a um click,
            como permitirá conhece-lá bem antes de estudar nela. Dando assim aos
            demais preparação e conhecimento suficiente para escolher a escola
          </p>
        </style.FirstRow>
      </style.Row>

      <style.Row>
        <style.ThirdRow>
          <h3>Objectivos</h3>
          <p>
            Não temos dúvidas que o Portal das Escolas é diferente do que existe
            hoje no mercado. Temos convicção que em breve será a maior
            referência na busca por escolas particulares em todo o país, pois
            estamos trabalhando para isso. Estamos com um planejamento de
            expansão das atividades do portal.
          </p>
          <p>
            Entre algumas podemos citar um mecanismo de busca de profissionais e
            diversos blogs com assuntos de suma importância e interesse do mundo
            da educação. Vale ressaltar que o Portal estará em constante
            evolução, portanto o que você vê hoje, verá amanhã com muito mais
            riqueza e aprimoramento. Nossa missão é nunca descansar e sempre
            buscar o melhor para essa comunidade de tanta importância para a
            sociedade.
          </p>
        </style.ThirdRow>
        <style.ThirdRow>
          <h3>Painel particular das escolas</h3>
          <p>
            As escolas poderão criar e administrar, através do Painel criado
            para cada escola cadastrada no Portal das Escolas, uma página
            própria com todas as informações que são de interesse dos pais e da
            própria escola.
          </p>
          <p>
            Poderão falar da sua Filosofia Educacional, sua Proposta de Ensino,
            contar um pouco da sua história e mostrar sua estrutura através de
            textos e fotos. Ainda poderão manter uma tabela de seus cursos com
            os valores atualizados, sem a necessidade de solicitar qualquer
            mudança para nossa área técnica, tudo através de seu portal de
            autocontrole.
          </p>
        </style.ThirdRow>
      </style.Row>

      <style.Row>
        <style.RowColGroup>
          <div>
            <h3>Faça o teste</h3>
          </div>
          <div>
            <h3>Credibilidade</h3>
          </div>
          <div>
            <h3>Potal das escolas</h3>
          </div>
          <div>
            <h3>Segurança</h3>
          </div>
          <div>
            <h3>Foco nos alunos</h3>
          </div>
          <div>
            <h3>Pesquise as escolas</h3>
          </div>
          <div>
            <h3>Pesquise os cursos</h3>
          </div>
        </style.RowColGroup>
      </style.Row>

      <style.Row>
        <style.FirstRow>
          <h3>Quem Somos?</h3>
          <p>
            O Portal das Escolas foi criado com o objetivo de ser o portal mais
            interativo no segmento da educação em Angola, trazendo soluções
            inovadoras na conexão entre escolas e alunos. Muito mais que um
            website, é uma poderosa ferramenta para a educação, principalmente
            para alunos e escolas, pois ajuda e facilita os alunos que estão
            preparando-se para o ensino médio a escolherem a escola e o curso
          </p>
          <p>
            Foi na busca de facilitar a vida educacional de muitos alunos, pais,
            professores e escolas que criamos um portal dinâmico que não só
            permitirá aos alunos buscarem a melhor escola para si a um click,
            como permitirá conhece-lá bem antes de estudar nela. Dando assim aos
            demais preparação e conhecimento suficiente para escolher a escola
          </p>
        </style.FirstRow>
        <style.Image>
          <img src={slide3} alt="" />
        </style.Image>
      </style.Row>
    </style.AboutPortal>
  );
}
