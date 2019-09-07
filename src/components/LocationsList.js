import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard'

export default function LocationsList() {
    const [location, setLocation] = useState([])

    
    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/location")
        .then(res => {
            console.log('location data:', res.data.results)
            setLocation(res.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <section className="location-list grid-view">
        {location.map(loc => {
            return <LocationCard key={loc.id} loc={loc} />
        })}
        </section>
    )
}
