import * as S from "./wppButton.style";

function WppButton() {
  let wppTalk = () => {
    window.open("https://api.whatsapp.com/send?phone=5531991587744", "_blank");
  };

  return (
    <S.TalkButton className="wppButton" onClick={wppTalk}>
      Let's Talk <S.WppImg src="/images/logos/wpp.png" />
    </S.TalkButton>
  );
}

export default WppButton;
