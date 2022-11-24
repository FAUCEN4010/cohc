import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ props, setPropsSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setPropsSearchResults(props)

        const resultsArray = props.filter(prop => prop.item.includes(e.target.value) 
        || prop.dollarVal.includes(e.target.value))   

        setPropsSearchResults(resultsArray)
        }



    return (
        <header>
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="search">Search my property: &nbsp;</label>
                <input 
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                 &nbsp;
                <Button className="search__button" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>

                    
            </form>
        </header>
    )
}

export default SearchBar