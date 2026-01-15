import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shine = keyframes`
  from { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
  20%  { opacity: 0.35; }
  to   { transform: translateX(140%) skewX(-20deg); opacity: 0; }
`;

export const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Narrow = styled.div`
  max-width: ${({ theme }) => theme.layout.containerNarrowWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 64px;
`;

export const AccentLine = styled.div`
  width: 64px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 auto 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
`;

export const Title = styled.h2`
  margin: 0 0 18px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 34px;
  font-weight: 800;
  line-height: 1.15;

  color: ${({ theme }) => theme.colors.secondaryForeground};

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const GoldGradient = styled.span`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.secondaryForeground}b3; /* /70 */
  line-height: 1.75;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;

  padding: 34px 32px;
  border-radius: ${({ theme }) => theme.radius.lg};

  /* glass */
  background: rgba(248, 250, 252, 0.06); /* similar ao /5 */
  border: 1px solid rgba(248, 250, 252, 0.1);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  animation: ${fadeUp} 0.6s ease both;

  /* shine layer */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -60%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(201, 162, 39, 0.2) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    opacity: 0;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary}80; /* dourado suave */
    box-shadow: 0 26px 60px rgba(0, 0, 0, 0.32);
  }

  &:hover::after {
    animation: ${shine} 0.8s ease both;
  }
`;

/** Ícone agora vira um badge premium */
export const IconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radius.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  background: ${({ theme }) => theme.colors.gradientPrimary};
  box-shadow: 0 14px 28px rgba(201, 162, 39, 0.22);

  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  svg {
    width: 26px;
    height: 26px;
    color: ${({ theme }) => theme.colors.primaryForeground};
  }

  ${Card}:hover & {
    transform: scale(1.08);
    filter: brightness(1.03);
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 14px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

export const CardText = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.secondaryForeground}b3; /* /70 */
  font-size: 14px;
  line-height: 1.75;
`;
