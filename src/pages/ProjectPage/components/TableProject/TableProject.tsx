import { FC, Fragment } from "react";
import { useFormik } from "formik";
import { Table,Loader } from "../../../../components";
import { Link } from "react-router-dom";
import { GiLaptop } from "react-icons/gi";
import { RiPencilRulerFill } from "react-icons/ri";
import { ImScissors } from "react-icons/im";
import { useEffect, useState } from "react";
import { apiProject } from "../../../../services";

export const TableProject: FC<ITableProject> = ({ dataProject}) => {
  const [,setDataProject] = useState<Array<IResProject>>([]);
  const [loadding, setLoadding] = useState(false)
  const handleDele = (id:number) => {
      try{
        apiProject
        .deleteProject({Id:id})
        .then((res) => res.data)
        .then((data: IResGetListProjects) => {
          const listProjects = data.Content.Projects;
          setDataProject(listProjects);
          setLoadding(true)
          window.location.replace("/projects");
        });
    }
    catch (error) {
      console.log(error);
    }
  }
  
  return (
      <Table
        thead={[
          "TÊN DỰ ÁN",
          "THIẾT BỊ",
          "TRẠNG THÁI",
          "THÔNG TIN TẠO",
          "THÔNG TIN SỬA",
        ]}
        tbody={
          <Fragment >
            <Loader loadding = {loadding}/>
            {dataProject.map((info, idx) => (
              <tr key={idx} >
                <td>
                  <b>{info.Name}</b>
                </td>
                <td>{info.TypeDeviceText}</td>
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
                  <Link to={`/projects/new/${info.Id}`}>
                    <div className="bt_style">
                      <button className="bt_style-info">
                        <GiLaptop />
                      </button>
                    </div>
                  </Link>
                  <Link to={`/projects/update/${info.Id}`}>
                    <div className="bt_style">
                      <button className="bt_style-edit">
                        <RiPencilRulerFill />
                      </button>
                    </div>
                  </Link>
                  <div className="bt_style">
                    <button className="bt_style-delete" onClick={() =>  handleDele(info.Id) } >
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
