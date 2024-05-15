import * as S from "./resumeButton.style";
// @ts-ignore  
import resume from '../Resume/resume.pdf'

function ResumeButton() {
    return (
        <S.ResumeButton className="resButton" onClick={() => window.open(resume)}>
            My Resume <S.WppImg src="/images/logos/pdf.png" />
        </S.ResumeButton>
    );
}

export default ResumeButton;
