import { IconArrowRightSvg, ProgectManagerName, ProgectManagerPhoto, ProgectManagerPosition, ProgectManagerr } from "components/Dasboard/Dashboard.styled";
import photo from '../../img/Ellipse 8.jpg';
import icons from '../../img/svg/symbol-defs.svg';

export default function ProgectManager() {
    return (
        <ProgectManagerr>
          <ProgectManagerPhoto src={photo} alt="IvanoImg" />
          <div>
            <ProgectManagerName>Evano</ProgectManagerName>
            <ProgectManagerPosition>Project Manager</ProgectManagerPosition>
          </div>
          <IconArrowRightSvg width={16} height={16} >
            <use href={`${icons}#icon-chevron-down-1`} />
          </IconArrowRightSvg>
        </ProgectManagerr>
    )
}