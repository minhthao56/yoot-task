import { FC } from "react";
import "./Button.scss";

export const Button: FC<IButton> = ({
  children,
  isCreate,
  isCancel,
  isSave,
  isUpdate,
  isSearch,
  isReset,
  className,
  type,
  handleOnClick
}) => {
  const checkClassName = () => {
    let name = "btn";
    // nút Tạo mới isCreate
    if (isCreate) {
      name = name + " btn--green";
      children = "Tạo mới";
    }
    // nút Hủy  isCancel
    if (isCancel) {
      name = name + " btn--gray";
      children = "Hủy";
    }
    // nút Lưu isSave
    if (isSave) {
      name = name + " btn--paleblue";
      children = "Lưu";
    }
    // nút Cập nhật ảnh isUpdate
    if (isUpdate) {
      name = name + " btn--black";
      children = "Cập nhật ảnh";
    }

    if (isSearch) {
      name = name + " btn--outline--blue";
      children = "Tìm kiếm";
    }

    if (isReset) {
      name = name + " btn--outline--black";
      children = "Nhập lại";
    }
    return name;
  };
  return (
    <button className={`${checkClassName()} ${className}`} type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
};
