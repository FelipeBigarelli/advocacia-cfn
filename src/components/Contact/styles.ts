import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Narrow = styled.div`
  max-width: ${({ theme }) => theme.layout.containerNarrowWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
`;

export const InfoCol = styled.div``;

export const AccentLine = styled.div`
  width: 64px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
`;

export const Title = styled.h2`
  margin: 0 0 18px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 34px;
  font-weight: 900;
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
  margin: 0 0 40px;

  color: ${({ theme }) => theme.colors.secondaryForeground}b3; /* /70 */
  line-height: 1.75;
  font-size: 16px;
  max-width: 560px;
`;

export const InfoList = styled.div`
  display: grid;
  gap: 22px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.md};

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(201, 162, 39, 0.12); /* primary/10-ish */
  border: 1px solid rgba(201, 162, 39, 0.2);

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InfoMeta = styled.div``;

export const InfoLabel = styled.p`
  margin: 0 0 6px;

  color: ${({ theme }) => theme.colors.secondaryForeground}80; /* /50 */
  font-size: 12px;
  font-weight: 800;

  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const InfoValueLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryForeground};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InfoValueText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

/* -------- Form -------- */

export const FormCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 32px;

  /* glass premium */
  background: rgba(248, 250, 252, 0.06);
  border: 1px solid rgba(248, 250, 252, 0.1);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.28);

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

export const FormTitle = styled.h3`
  margin: 0 0 22px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

export const Form = styled.form`
  display: grid;
  gap: 18px;
`;

export const Row2 = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const fieldBase = `
  width: 100%;
  background: transparent;

  color: rgba(248, 250, 252, 0.92);
  border: 1px solid rgba(248, 250, 252, 0.20);

  padding: 12px 14px;
  outline: none;

  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(248, 250, 252, 0.40);
  }

  &:focus {
    border-color: rgba(201, 162, 39, 0.75);
    box-shadow: 0 0 0 4px rgba(201, 162, 39, 0.18);
  }
`;

export const Input = styled.input`
  ${fieldBase}
`;

export const Textarea = styled.textarea`
  ${fieldBase}
  resize: none;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 16px 24px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};

  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  border-radius: ${({ theme }) => theme.radius.md};

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark};
    transform: translateY(-1px);
    box-shadow: 0 18px 40px rgba(201, 162, 39, 0.22);
  }
`;
