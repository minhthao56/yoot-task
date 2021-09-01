import { useState } from "react";
import { Beadcrumb, Button } from "../../components";
import { Table } from "../../components";
import "./HomePage.scss";

export const HomePage = () => {
     const [info, setInfo] = useState([
         {
             name: "Avide Web",
             device: "Tất cả thiết bị",
             state: "Hoạt động",
             infoCreated: "",
             infoEdit: "",
         }
     ])
  return (
    <div>
        <Beadcrumb title="kế hoạch"></Beadcrumb>
      <Table thead = {[" tên dự án ","thiết bị", "trạng thái ", "thông tin tạo", "thông tin sửa" ]} tbody={info}></Table>
    </div>
  );
};
