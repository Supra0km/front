import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <br />
          <h3>Aulas grátis: {dados.nome}</h3>
          <h3>Digite o número do seu cartão de crédito: {dados.data}</h3>
          <h3>Seu CPF: {dados.autor}</h3>
          <br />
        </div>
      )}
    </S.Card>
  );
};

export default Card;
