export const maskBRPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11); // até 11 dígitos (DDD + 9)

  // (DD) XXXXX-XXXX
  if (digits.length <= 10) {
    // (DD) XXXX-XXXX
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};
