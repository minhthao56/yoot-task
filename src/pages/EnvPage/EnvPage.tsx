import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { AiOutlineLaptop, AiOutlineScissor } from 'react-icons/ai'
import { RiPencilRulerLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Avatar, Beadcrumb, Search } from '../../components'
import { doDeleteEnvironment, doGetListEnvironments, useAppDispatch, useAppSelector } from '../../redux'
import './EnvPage.scss'
import EnvList from './list/EnvList'
import EnvSearch from './search/EnvSearch'
export const EnvPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState(0);
    const { listEnvironments } = useAppSelector(
        (state) => state.environment
    );
    useEffect(() => {
        dispatch(doGetListEnvironments({
            Title: search,
            Status: status
        }))
            .then(unwrapResult)
            .catch((err) => {
                alert("Đã có lỗi");
            });

        // eslint-disable-next-line
    }, [search, status]);
    const handleSearch = (keyword: string, status: number) => {
        setSearch(keyword);
        setStatus(status);
    }
    const handleDelete = (id: number) => {
        dispatch(doDeleteEnvironment({
            Id: id
        }))
            .then(unwrapResult)
            .catch((err) => {
                alert("Đã có lỗi");
            });
    }

    const envListProps: IEnvList = {
        tableProps: {
            thead: ["Tiêu đề", "Trạng thái", "Thông tin tạo", "Thông tin sửa", ""],
            tbody: listEnvironments?.map(({ Title, StatusText, CreateDate, CreateUserName, UpdateDate, UpdateUserName, Id }, idx) => (
                <tr key={`row-${idx}`}>
                    <td><strong>{Title}</strong></td>
                    <td><strong>{StatusText}</strong>  </td>
                    <td>{CreateUserName} <br />{CreateDate}</td>
                    <td>{UpdateUserName} <br />{UpdateDate}</td>
                    <td className="services">
                        <Link className="view-service" to={`/env/view/${Id}`}>
                            <AiOutlineLaptop />
                        </Link>
                        <Link className="update-service" to={`/env/update/${Id}`}>
                            <RiPencilRulerLine />
                        </Link>
                        <button className="delete-service" onClick={() => handleDelete(Id)}>
                            <AiOutlineScissor />
                        </button>
                    </td>
                </tr>
            ))
        }
    }
    const envSearchProps: IEnvSearch = {
        handleSearch,
    }
    return (
        <div className="envPage">
            <div className="container">
                <div className="envPage__search">
                    <EnvSearch {...envSearchProps} />
                </div>
                <div className="envPage__list">
                    <EnvList {...envListProps} />
                </div>
            </div>
        </div>
    )
}

