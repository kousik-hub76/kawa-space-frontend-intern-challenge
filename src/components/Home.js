import React from 'react'


function Home(props) {
    const variable1 = {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Slavko",
            "last": "Roch"
        },
        "location": {
            "street": {
                "number": 5147,
                "name": "Marktplatz"
            },
            "city": "Weiden in der Oberpfalz",
            "state": "Rheinland-Pfalz",
            "country": "Germany",
            "postcode": 34372,
            "coordinates": {
                "latitude": "-41.3821",
                "longitude": "-98.7363"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "slavko.roch@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/77.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
        },
        "nat": "DE"
    }
    const { picture,
        gender,
        name,
        location,
        timezone,
    } = variable1

    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-lg-10 col-md-10 col-sm-10 m-auto">
                        <div className="card shadow" style={{ borderRadius: '10px' }}>
                            <div className="card-body m-4">
                                <div className="row m-auto">
                                    <div className="col-lg-1 col-md-10 col-sm-10 m-auto">
                                        <img style={{ height: '120px', width: '120px', borderRadius: '100%' }} src={picture.large} />
                                    </div>
                                    <div className="col-lg-2 col-md-8 m-auto">

                                    </div>
                                    <div className="col-lg-9 col-md-10 col-sm-10 m-auto">
                                        <label style={{ color: txtColor.color, fontSize: '55px', fontWeight: 'bold', textDecoration: 'underline', display: 'flex', marginBottom: '2px' }}>{name.title} {name.first} {name.last}</label>
                                        <label style={{ display: 'flex', fontWeight: '600', fontSize: '18px' }}><p style={{ color: txtColor.color1 }}>{location.street.number}</p> {location.street.name},{location.city},{location.state},{location.country},{location.postcode}</label>
                                        <label style={{ display: 'flex', fontWeight: '600', fontSize: '18px' }}>{location.timezone.offset},{location.timezone.description}</label>
                                        <label style={{ display: 'flex', fontWeight: '400', color: txtColor.color2, fontSize: '18px' }}>{gender}</label>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

const txtColor = {
    color: "#f5372a",
    color1: '#241df0',
    color2: '#757678'

}
