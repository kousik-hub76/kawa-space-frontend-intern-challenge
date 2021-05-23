import React from 'react'


function Home(props) {

    const { picture,
        gender,
        name,
        location,
        timezone,
    } = props.data

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
                                        <label style={{ color: txtColor.color, fontSize: '45px', fontWeight: 'bold', textDecoration: 'underline', display: 'flex', marginBottom: '2px' }}>{name.title} {name.first} {name.last}</label>
                                        <label style={{ display: 'flex', fontWeight: '600', fontSize: '18px' }}><p style={{ color: txtColor.color1 }}>{location.street.number}, </p>  {location.street.name}, {location.city}, {location.state}, {location.country}, {location.postcode}</label>
                                        <label style={{ display: 'flex', fontWeight: '600', fontSize: '18px' }}>{location.timezone.offset},{location.timezone.description}</label>
                                        <label style={{ display: 'flex', fontWeight: '400', color: txtColor.color2, fontSize: '18px', textTransform: 'capitalize' }}>{gender}</label>
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
