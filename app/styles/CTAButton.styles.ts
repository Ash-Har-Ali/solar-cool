import styled from 'styled-components';

export const Button = styled.button<{ bgColor: string; textColor: string; width: string }>`
  background-color: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.textColor || '#000'};
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 2px solid #000; /* Black border */
  border-radius: 25px;  /* Rounded border */
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 10px;  /* Space between text and icon */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.bgColor && lightenColor(props.bgColor, 0.1)};
  }

  width: ${(props) => props.width || 'auto'};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
`;


// Helper function to lighten the background color for hover effect
export const lightenColor = (color: string, percent: number) => {
  const colorHex = color.replace(/^#/, '');
  let r = parseInt(colorHex.substring(0, 2), 16);
  let g = parseInt(colorHex.substring(2, 4), 16);
  let b = parseInt(colorHex.substring(4, 6), 16);

  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);

  return `#${(1 << 24) + (r << 16) + (g << 8) + b
    .toString(16)
    .slice(1)}`;
};
