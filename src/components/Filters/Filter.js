import Checkbox from '@mui/material/Checkbox';
import React from 'react'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Filters = () => {
    return(
        <div className="container-filters">
            <h4>Filtros</h4>
            <div className='filter-category'>
                <p className='filter-category__name'>Tipos</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Veganos</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Libre de Glutten</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Libre de Azucar</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Sin Lactosa</span>
                </div>
            </div>
            <div className='filter-category'>
                <p className='filter-category__name'>Presentación</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>250 ml</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>500 ml</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>1 L</span>
                </div>
            </div>
            <div className='filter-category'>
                <p className='filter-category__name'>Precio</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$0 - $30000</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$30500 - $60000</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$60500 - $90000</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>+$90500</span>
                </div>
            </div>
            <div>
                <button className='button-filter-submit'>Aplicar Filtros</button>
                <button className='button-filter-clean'>Borrar filtros</button>
            </div>
        </div>
    )
}

export default Filters