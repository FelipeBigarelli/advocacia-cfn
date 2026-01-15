import styled from 'styled-components';

export const FooterWrap = styled.footer`
  /* bg-charcoal */
  background: #0b1220;
  padding: 64px 0;
`;

export const Narrow = styled.div`
  max-width: ${({ theme }) => theme.layout.containerNarrowWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export const TopGrid = styled.div`
  display: grid;
  gap: 40px;
  margin-bottom: 48px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
    align-items: start;
  }
`;

export const BrandCol = styled.div``;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

export const BrandText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

export const BrandStrong = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
`;

export const AboutText = styled.p`
  margin: 0;
  max-width: 520px;

  color: ${({ theme }) => theme.colors.secondaryForeground}99; /* /60 */
  line-height: 1.8;
  font-size: 14px;
`;

export const ColTitle = styled.h4`
  margin: 0 0 18px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  gap: 12px;
`;

export const LinkItem = styled.li``;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryForeground}99; /* /60 */
  text-decoration: none;
  font-size: 14px;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialBtn = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.secondaryForeground}33; /* /20 */
  color: ${({ theme }) => theme.colors.secondaryForeground}99; /* /60 */
  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    transform: translateY(-1px);
  }
`;

export const BottomBar = styled.div`
  padding-top: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryForeground}1a; /* /10 */

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
`;

export const BottomText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondaryForeground}80; /* /50 */
`;
