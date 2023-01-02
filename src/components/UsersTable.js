import React from 'react';
import './Style.css';

export default props => {

    const rows = props.users.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td className= {"roles" + user.id}>{user['roles']['0']['name']}</td>
                {/* <td className="col-md-2">{user.departament.id}</td> */}
                
                <td className="col-md-2">
                {(props.usuario.username === user.username || props.admin === 'ADMIN')
                 &&(
                        <button id="buttonEdit" type="button" title="Editar"
                        className={"btn btn-warning edit"+ user.id}
                        onClick={e => props.edit(user.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    )}  

                                       
                                    
                    
                    {/* <button type="button" title="Excluir"
                        className="btn btn-primary btn-delete"
                        onClick={e => props.delete(user.id)}>
                        <i className="pi pi-trash"></i>
                    </button> */}
                </td>
            </tr>
        )
    } )

    return (

        <table className="table table-hover">
            <thead>
                <tr className="table-active">
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Matrícula</th>
                    <th scope="col">Papel</th>
                    {/* <th scope="col">Id do Departamento</th> */}
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}