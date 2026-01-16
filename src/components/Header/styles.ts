import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  background: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerNarrow = styled.div`
  /* substitui "container-narrow" */
  max-width: ${({ theme }) => theme.layout?.containerNarrowWidth || '1180px'};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  img {
    height: 72px;
    border: 1px solid ${({ theme }) => theme.colors.goldDark};
    border-block: none;
    border-radius: 50%;
  }
`;

export const BrandText = styled.span`
  font-family: ${({ theme }) => theme.fonts?.heading || 'inherit'};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

export const BrandStrong = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

export const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const NavLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.secondaryForeground}; /* /80 */
  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* no mobile, vira item de lista */
  @media (max-width: 1023px) {
    padding: 8px 0;
  }
`;

export const DesktopCta = styled.a`
  display: none;
  border-radius: 8px;

  @media (min-width: 1024px) {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};

    padding: 12px 24px;
    text-decoration: none;

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    transition: background 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark || theme.colors.primary};
    filter: brightness(0.98);
  }
`;

export const MobileButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  padding: 8px;
  color: ${({ theme }) => theme.colors.secondaryForeground};

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: none;

  border-top: 1px solid ${({ theme }) => theme.colors.secondaryForeground}1a; /* /10 */
  padding: 20px 0 24px;

  animation: ${fadeDown} 160ms ease both;

  @media (max-width: 1023px) {
    display: block;
  }
`;

export const MobileNavInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MobileCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};

  padding: 12px 24px;
  text-decoration: none;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  margin-top: 6px;
`;
