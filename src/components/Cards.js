import React, { useEffect, useState } from 'react'


function Cards() {

    const [list, setList] = useState();
    const [selected, setSelected] = useState();

    useEffect(() => {
        const response = fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020").then(res => res.json())
            .then(data => {
                setList(data.results);
                // console.log(data);
            })
            .catch(e => { alert("Fail to fetch data") })
    }, [])


    const handleSelect = (email) => {

        setSelected(list.filter(d => d.email == email)[0])
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-lg-12 col-md-10 col-sm-10 m-auto">
                        <div class="row">

                            {list.map((data, index) => {
                                return (
                                    <div onClick={handleSelect} class="col-sm-3">
                                        <div class="card" style={{ borderRadius: '10px' }}>
                                            <div class="card-body">
                                                <label className="card-text" style={{ display: 'flex', color: cardTxtcolor.color1 }}>{data.gender} - NL</label>
                                                <label className="card-title" style={{ fontWeight: '700', display: 'flex', fontSize: '20px' }}>{data.name.title} {data.name.first} {data.name.last}</label>

                                                <span style={{ display: 'flex', color: cardTxtcolor.color2 }} href="/">{data.email}</span>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



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
