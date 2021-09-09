import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { doGetListAccounts, useAppDispatch, useAppSelector } from "../../redux";

import "./HomePage.scss";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { error, listAccounts, isLoading } = useAppSelector(
    (state) => state.account
  );
  const [accs, setAccs] = useState<Array<ResAccount>>([]);

  useEffect(() => {
    dispatch(doGetListAccounts({}))
      .then(unwrapResult)
      .then((res: IResGetListAccount) => {
        setAccs(res.Content.Accounts);
      })
      .catch((err) => {
        alert("Đã có lỗi");
      });
  }, []);
  console.log("accs", accs);

  if (error === 0) {
    alert("Đã có lỗi");
  }

  return (
    <div className="home-page">
      <p className="margin-top">
        {listAccounts.map((item, i) => {
          return <p key={i}>{item.Name}</p>;
        })}
      </p>
    </div>
  );
};
