import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

const LocationSetter = ({ selectedCity }) => {
    const map = useMap()

    useEffect(() => {
        if (Object.keys(selectedCity).length > 0)
            map.setView([selectedCity.mairie.coordinates[1], selectedCity.mairie.coordinates[0]], 14)
    }, [selectedCity])

    return null
}

const CityDetails = ({ selectedCity }) => {
    if (Object.keys(selectedCity).length > 0) {
        console.log(selectedCity)
        return (
            <section className="details-section">
                <div className='details-infos'>
                    <h1>{selectedCity.nom}</h1>
                    <p>Région: {selectedCity.region.nom}</p>
                    <p>Départment: {selectedCity.departement.nom} ({selectedCity.departement.code})</p>
                    <p>Population: {selectedCity.population} habitant.e.s</p>
                    <p>Surface: {selectedCity.surface}</p>
                </div>
                <div >
                    <MapContainer>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationSetter selectedCity={selectedCity} />
                    </MapContainer>
                </div>
            </section>
        )
    }
}

export default CityDetails;