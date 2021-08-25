import React from "react";
import { MxFlag, UsFlag, ItemWrapper, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";

const TranslationSelect = () => {
  const [t, i18n] = useTranslation();

  const getLanguage = i18n.language;

  return (
    <Wrapper>
      {getLanguage === "en" && (
        <MxFlag onClick={() => i18n.changeLanguage("es")} />
      )}
      {getLanguage === "es" && (
        <UsFlag onClick={() => i18n.changeLanguage("en")} />
      )}
    </Wrapper>
  );
};

export default TranslationSelect;
