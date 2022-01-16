import React, { useContext } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeContext'
import PersonsTable from './PersonsTable'

const Table = ({persons}) => {

    const {darkMode} = useContext(DarkThemeContext)

    return (
        <div className="">
            <div className="table-responsive">            
        
            <table className={darkMode ? "table table-striped my-3 bg-secondary text-white rounded text-center"  : "table table-striped bg-white my-3 rounded text-center"}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                {persons.data?.map(person => (
                        <PersonsTable
                            key={person.id}
                            person = {person}
                        />
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Table
