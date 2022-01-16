import React from 'react'

const PersonsTable = ({person}) => {

    return (
        <tr>
            <th scope="row">{person.id}</th>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
        </tr>
    )
}

export default PersonsTable
