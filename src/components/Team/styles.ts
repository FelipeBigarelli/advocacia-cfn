import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 96px 0;

  /* Fundo (opção A - branco premium) */
  background: #ffffff;
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
  font-weight: 900;
  line-height: 1.15;

  color: ${({ theme }) => theme.colors.secondary};

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
  line-height: 1.75;
  font-size: 16px;
  color: rgba(15, 23, 42, 0.72);
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: 22px;

  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.14);
`;

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;

  filter: grayscale(1);
  transform: scale(1.02);

  transition:
    filter 0.7s ease,
    transform 0.7s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0) 35%,
    rgba(15, 23, 42, 0.78) 100%
  );

  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const Socials = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;

  display: flex;
  gap: 12px;

  opacity: 0;
  transform: translateY(8px);

  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
`;

export const SocialBtn = styled.a`
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  text-decoration: none;

  box-shadow: 0 16px 30px rgba(201, 162, 39, 0.2);
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark};
    transform: translateY(-1px);
  }
`;

export const Card = styled.div`
  animation: ${fadeUp} 0.6s ease both;

  &:hover ${Photo} {
    filter: grayscale(0);
    transform: scale(1.06);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${Socials} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Info = styled.div`
  text-align: center;
`;

export const Name = styled.h3`
  margin: 0 0 6px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Role = styled.p`
  margin: 0 0 10px;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 12px;

  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Specialty = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;

  color: rgba(15, 23, 42, 0.7);
`;
