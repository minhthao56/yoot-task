import { FC, Fragment } from "react";
import { Actions, Table,Loader } from "../../../../components";
import { Link } from "react-router-dom";
import { GiLaptop } from "react-icons/gi";
import { RiPencilRulerFill } from "react-icons/ri";
import { ImScissors } from "react-icons/im";
import { useEffect, useState } from "react";
import { apiStatusTask } from "../../../../services";
export const TableStatusTask: FC<ITableStatusTask> = ({ dataStatusTask }) => {
  const [,setDataStatusTask] = useState<Array<IReStatusTask>>([]);
  const [loadding, setLoadding] = useState(false)
  const handleDele = (id:number) => {
    try{
      apiStatusTask
      .deleteStatusTask({Id:id})
      .then((res) => res.data)
      .then((data: IResGetListStatusTasks) => {
        const listStatusTask = data.Content.StatusTasks;
        setDataStatusTask(listStatusTask);
        setLoadding(true)
          window.location.replace("/status");
      });
  }
  catch (error) {
    console.log(error);
  }
}
  return (
    <Table
      thead={[
        "Tiêu đề",
        "Thứ tự ưu tiên",
        "Trạng thái",
        "Thông tin tạo",
        "Thông tin sửa",
      ]}
      tbody={
        <Fragment>
          <Loader loadding = {loadding}/>
          {dataStatusTask.map((info, idx) => (
            <tr key={idx}>
              <td>
                <b>{info.Title}</b>
              </td>
              <td>{info.Orderview}</td>
              <td>{info.StatusText}</td>
              <td>
                {info.CreateUserName}
                <br />
                {info.CreateDate}
              </td>
              <td>
                {info.UpdateUserName}
                <br />
                {info.UpdateDate}
              </td>
              <td className="bt"  >
                  <Link to={`/status/new/${info.Id}`}>
                    <div className="bt_style">
                      <button className="bt_style-info">
                        <GiLaptop />
                      </button>
                    </div>
                  </Link>
                  <Link to={`/status/update/${info.Id}`}>
                    <div className="bt_style">
                      <button className="bt_style-edit">
                        <RiPencilRulerFill />
                      </button>
                    </div>
                  </Link>
                  <div className="bt_style">
                    <button className="bt_style-delete" type="submit" onClick={() => handleDele(info.Id)} >
                      <ImScissors />
                    </button>
                  </div>
                </td>
            </tr>
          ))}
        </Fragment>
      }
    />
  );
};
