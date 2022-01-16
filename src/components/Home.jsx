import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import NavBar from './NavBar'
import '../styles/Home.css'
import { DarkThemeContext } from '../contexts/DarkThemeContext'
import Table from './Table'
import Spinner from './Spinner'
import { ToggleCardsTableContext } from '../contexts/ToggleCardsTableContext'
import ToggleButton from './ToggleButton'

const Home = ({user, logOut, loading, setLoading}) => {

    const {darkMode} = useContext(DarkThemeContext)
    const {toggleMode} = useContext(ToggleCardsTableContext)
    const [persons, setPersons] = useState([])


    useEffect(() => {
        const getPersonsAPI = async () => {
            try {
                const url = "https://reqres.in/api/users?page=1"
                const response = await fetch(url)
                const result = await response.json()
                
                setPersons(result)
                
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                
                setLoading(!loading)
            }, 1500);
        }
        getPersonsAPI()
    }, [])

    const fetchUsers = async (currentPage) => {
        try {
        const url = `https://reqres.in/api/users?page=${currentPage}`
        const response = await fetch(url)
        const result = await response.json()

        return result
    }  catch (error) {
        console.log(error);
    }  
}

    const usersHandler = async (index) => {
        try {
        let currentPage =  index + 1

        const usersFromServer = await fetchUsers(currentPage)

        setPersons(usersFromServer)
    } catch (error) {
        console.log(error);   
    }
}

    const {total, page, per_page} = persons

    return (
        loading ? <Spinner /> : (
        
        <div className={darkMode ? 'dark-mode' : ""}>
            <NavBar
                user = {user}
                logOut = {logOut}
            />
            <div className="container">
                <ToggleButton />
                <div className="row w-lg-100">
                    {toggleMode ? ( 
                         <Table 
                         persons = {persons}
                     />
                        
                    ) : (
                        <>
                        {persons.data?.map(person => (
                            <Card
                                key={person.id}
                                person = {person}
                            />
                           ))}
                           </>
                    )}         
                   
                   <div className='ps-3 m-0'>
                    <h6 className={darkMode ? 'text-white m-0' : 'm-0'}>Total Results: {total}</h6>
                    <h6 className={darkMode ? 'text-white m-0' : 'm-0'}>Page: {page} Results: {per_page}</h6>
                   </div>
                </div>
                <div className='d-flex w-lg-100 justify-content-center'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {[...Array(persons.total_pages)].map((elem, index) => 
                            <button 
                                className={darkMode? "btn btn-dark m-1 border" : "btn btn-primary m-1"}
                                key = {index}
                                onClick={() => usersHandler(index)}
                            >
                            {`${index + 1}`}
                            </button>)}                           
                        </ul>
                    </nav>        
                </div>
            </div>
        </div>
        )
    )
}

export default Home