import s from './HomeHero.styles';

const emojiList = [
  '/profile-image/신재형-profile',
  '/profile-image/정세호-profile',
  '/profile-image/신동원-profile',
  '/profile-image/김유신-profile',
];
export const HomeHero = () => (
  <s.Root>
    <s.Background src="/bg/bg_pattern.png" width="80%" alt="background" />
    <s.BackgroundBlur>
      <s.Title>
        GoWebEZ is
        <br /> Crazy Bastart Team
      </s.Title>
      <s.Cta type="button">Learn more</s.Cta>

      <s.EmojiBox>
        {emojiList.map((emoji, idx) => (
          <s.CardWrapper key={idx}>
            <s.Card>
              <s.Front>
                <s.Emoji src={emoji + '-black.svg'} alt={emoji} />
              </s.Front>
              <s.Back>
                <s.Emoji src={emoji + '-image.svg'} alt={emoji} />
              </s.Back>
            </s.Card>
          </s.CardWrapper>
        ))}
      </s.EmojiBox>
    </s.BackgroundBlur>
  </s.Root>
);
