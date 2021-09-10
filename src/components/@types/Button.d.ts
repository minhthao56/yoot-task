interface IButton {
  isCreate?: boolean;
  isCancel?: boolean;
  isSave?: boolean;
  isUpdate?: boolean;
  isReset?: boolean;
  isSearch?: boolean;
  className?: className;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: "button" | "submit" | "reset";
  handleOnClick?: () => void; 
}
