import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

const LocationSetter = ({ selectedCity }) => {
    const map = useMap()

    useEffect(() => {
        if(Object.keys(selectedCity).length > 0)
            map.setView([selectedCity.mairie.coordinates[1], selectedCity.mairie.coordinates[0]], 14)
    }, [selectedCity])
    
    return null
}
  


const CityDetails = ({ selectedCity }) => {
    if(Object.keys(selectedCity).length > 0){
        return (
            <MapContainer center={[50.5, 30.5]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationSetter selectedCity={selectedCity}/>
            </MapContainer>
        )
    }
}

export default CityDetails;