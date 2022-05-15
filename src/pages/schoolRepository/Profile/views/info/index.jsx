import React from "react";
import * as S from "./style";
import image from "../../../../../assets/image/IMIL.png";
export default function Info() {
  return (
    <S.Container>
      <S.Text>
        <p>
          Established in 1872, as the first University College in Wales,
          Aberystwyth University is one of the UK’s most important institutions.
          Our reputation for research power, teaching excellence, graduate
          employability and our unbelievable location are what set us apart from
          other universities.
        </p>

        <p>
          Aberystwyth is a vibrant and welcoming university town in a stunning
          location on the west coast of the UK. It is both at the heart of Wales
          and home to a rich variety of cultures, people and entertainment. It
          is home to the impressive National Library of Wales: one of few places
          to contain a copy of every book ever printed in the UK.
        </p>

        <p>
          For international students, we offer generous Scholarships covering
          the cost of your accommodation, as well as free gym membership, visa
          and immigration advice, careers support and transport to Aberystwyth
          upon arrival to the UK.
        </p>
      </S.Text>
      <S.Image>
        <img src={image} alt="" />
      </S.Image>
    </S.Container>
  );
}
