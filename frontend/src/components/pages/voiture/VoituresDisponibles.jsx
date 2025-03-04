import { useState, useRef } from 'react';
import "./VoituresDisponibles.css";
function VoituresDisponibles() {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);

    return (
        <div>
            {/* Barre de recherche */}
            <section className='searchCarPart'>
                <form className="searchBar">
                    <div className="searchComponent">
                        <button type='submit'>
                            <i className='fi fi-rr-search'></i>
                        </button>
                        <input 
                            type="text" 
                            ref={inputRef} 
                            placeholder='Recherchez un logement ou une ville...' 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}

export default VoituresDisponibles;
