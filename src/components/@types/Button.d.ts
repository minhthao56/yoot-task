interface IButton {
  isCreate?: boolean;
  isCancel?: boolean;
  isSave?: boolean;
  isUpdate?: boolean;
  isLogin?: boolean;
  isSearch?: boolean;
  isReset?: boolean;
  className?: className;
  type?: "button" | "submit" | "reset";
  handleOnClick?: () => void;
}
