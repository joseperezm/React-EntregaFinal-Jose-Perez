import { NavLink } from 'react-router-dom'

function Links () {
    return (
        <>
        <div className="Links">
            <NavLink to={`/category/kimonos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Kimonos</NavLink>
            <NavLink to={`/category/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            <NavLink to={`/category/protecciones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Protecciones</NavLink>
        </div>
        </>
    )
}

export default Links