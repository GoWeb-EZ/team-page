import bg from './bg.jpg';
import s from './HomeHero.styles';
import emoji from './emoji.png';

export const HomeHero = () => (
  <s.Root>
    <s.Background src={bg} width="100%" alt="background" />
    <s.Body>
      <s.Title>GoWebEZ is Crazy Bastart Team</s.Title>
      <s.Cta type="button">Learn more team</s.Cta>
    </s.Body>
    <s.FirstEmoji src={emoji} alt="emoji" />
    <s.SecondEmoji src={emoji} alt="emoji" />
    <s.ThirdEmoji src={emoji} alt="emoji" />
    <s.FourthEmoji src={emoji} alt="emoji" />
  </s.Root>
);
