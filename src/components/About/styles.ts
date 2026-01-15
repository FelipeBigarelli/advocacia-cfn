import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 96px 0; /* section-padding */
  background: ${({ theme }) => theme.colors.background};
`;

export const Narrow = styled.div`
  max-width: ${({ theme }) => theme.layout.containerNarrowWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.div``;

export const AccentLine = styled.div`
  width: 64px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0 0 18px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 34px;
  font-weight: 800;
  line-height: 1.15;

  color: ${({ theme }) => theme.colors.textPrimary};

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

export const Paragraph = styled.p`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const TeamLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 700;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.goldDark};
  }
`;

export const Arrow = styled.span`
  font-size: 18px;
  transform: translateY(1px);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface}; /* bg-card */
  padding: 32px;
  text-align: center;

  transition:
    background 0.5s ease,
    color 0.5s ease,
    transform 0.2s ease;
  animation: ${fadeUp} 0.6s ease both;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;

  color: ${({ theme }) => theme.colors.primary};

  /* Quando hover no card, mantém o ícone dourado */
  ${StatCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 40px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;

  transition: color 0.5s ease;

  ${StatCard}:hover & {
    color: ${({ theme }) => theme.colors.secondaryForeground};
  }
`;

export const StatLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.5s ease;

  ${StatCard}:hover & {
    color: ${({ theme }) => theme.colors.secondaryForeground}b3; /* /70 */
  }
`;
