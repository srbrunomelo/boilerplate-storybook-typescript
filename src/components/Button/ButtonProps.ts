export interface ButtonProps {
  /**
   * Button contents
   */
  children?: string
   /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}