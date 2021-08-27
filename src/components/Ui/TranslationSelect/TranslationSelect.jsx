import { MxFlag, Title, UsFlag, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";

const TranslationSelect = () => {
  // eslint-disable-next-line
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
      <Title>
        {getLanguage === "en" && "English"}
        {getLanguage === "es" && "Español"}
      </Title>
    </Wrapper>
  );
};

export default TranslationSelect;
