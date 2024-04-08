import s from './Container.styles';

export const Container = ({ children }) => (
  <s.Root>
    <s.Background src="/bg/bg_pattern.png" width="80%" alt="background" />
    <s.BackgroundBlur>{children}</s.BackgroundBlur>
  </s.Root>
);
