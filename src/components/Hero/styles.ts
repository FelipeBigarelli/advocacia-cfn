import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translate(-50%, 0); }
  50%      { transform: translate(-50%, 8px); }
`;

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  position: absolute;
  inset: 0;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  /* bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40 */
  background: linear-gradient(
    90deg,
    rgba(15, 23, 42, 0.95) 0%,
    rgba(15, 23, 42, 0.8) 45%,
    rgba(15, 23, 42, 0.4) 100%
  );
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 80px; /* pt-20 */
`;

export const Narrow = styled.div`
  max-width: ${({ theme }) => theme.layout.containerNarrowWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Block = styled.div`
  max-width: 768px; /* max-w-3xl */
`;

export const AccentLine = styled.div`
  width: 80px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  margin-bottom: 32px;

  animation: ${fadeIn} 0.4s ease both;
`;

export const Title = styled.h1`
  margin: 0 0 24px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  line-height: 1.12;

  color: ${({ theme }) => theme.colors.secondaryForeground};

  font-size: 40px;

  animation: ${slideUp} 0.6s ease both;

  @media (min-width: 768px) {
    font-size: 52px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }

  @media (min-width: 1280px) {
    font-size: 72px;
  }
`;

export const GoldGradient = styled.span`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Text = styled.p`
  margin: 0 0 40px;
  max-width: 560px;

  color: ${({ theme }) => theme.colors.secondaryForeground}cc; /* /80 */

  font-size: 18px;
  line-height: 1.7;

  animation: ${slideUp} 0.6s ease both;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  animation: ${slideUp} 0.6s ease both;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};

  text-decoration: none;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark};
    box-shadow: 0 14px 30px ${({ theme }) => theme.colors.shadow};
    transform: translateY(-1px);
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 32px;

  background: transparent;
  color: ${({ theme }) => theme.colors.secondaryForeground};

  border: 2px solid ${({ theme }) => theme.colors.secondaryForeground}4d; /* /30 */
  text-decoration: none;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }
`;

export const ScrollHint = styled.a`
  position: absolute;
  bottom: 32px;
  left: 50%;

  color: ${({ theme }) => theme.colors.secondaryForeground}99; /* /60 */
  text-decoration: none;

  transition: color 0.2s ease;

  animation: ${bounce} 1.2s ease-in-out infinite;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
