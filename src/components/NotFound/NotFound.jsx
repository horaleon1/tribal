import { useTranslation } from "react-i18next";
import { BigTitle, ButtonWrapper, Img, Title, TitlesWrapper, Wrapper } from "./styled";
import Button from "../Ui/Button/Button";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";

const NotFound = () => {
  //Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("ui");
  return (
    <LayoutBasePage>
      <Wrapper>
        <Img />
        <TitlesWrapper>
          <BigTitle>{t("ui.notFoundTitle")} </BigTitle>
          <Title>{t("ui.notFound")}</Title>
        </TitlesWrapper>
        <ButtonWrapper to="/">
          <Button label="primary" name={t("ui.notFoundButton")} wdt="200px" />
        </ButtonWrapper>
      </Wrapper>
    </LayoutBasePage>
  );
};

export default NotFound;
