import React, { useEffect, useState } from 'react'

import Home from './Home';

function Cards(props) {

    const [list, setList] = useState([]);
    const [selected, setSelected] = useState();
    const [loading, setloading] = useState(true)
    const [selecting, setselecting] = useState(false)

    useEffect(() => {
        const response = fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020").then(res => res.json())
            .then(data => {
                setList(data.results);
                setloading(false)
            })
            .catch(e => { alert("Fail to fetch data") })
    }, [])


    const handleSelect = (data) => {
        // console.log(data);
        // console.log(list.filter(d => d.email == email)[0]);
        setselecting(true)
        setSelected(data)
        setselecting(false)
    }


    return (
        <div>

            { selecting ? "Please wait...." : (selected ? <Home data={selected} /> : "")}

            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-lg-12 col-md-10 col-sm-10 m-auto">
                        <div class="row">

                            {loading ? "Loading..." :

                                list.length > 0 ? list.map((data, i) => {
                                    return (
                                        <div key={i} onClick={() => handleSelect(data)} class="col-md-3 pt-1 pb-1" style={{ cursor: 'pointer' }}>
                                            <div class="card" style={{ borderRadius: '10px' }}>
                                                <div class="card-body">
                                                    <label className="card-text" style={{ display: 'flex', color: cardTxtcolor.color1, textTransform: 'capitalize' }}>{data.gender} - {data.nat}</label>
                                                    <label className="card-title" style={{ fontWeight: '700', display: 'flex', fontSize: '16px' }}>{data.name.title} {data.name.first} {data.name.last}</label>

                                                    <span style={{ display: 'flex', color: cardTxtcolor.color2, fontSize: '13px' }} href="/">{data.email}</span>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                    :
                                    <span>No Data Found</span>
                            }



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards

const cardTxtcolor = {
    color1: '#757678',
    color2: '#d90f0f'
};
