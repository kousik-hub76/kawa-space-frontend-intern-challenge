import React from 'react'

function Navbar() {

    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light" style={{ color: navBar.color }}>
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ fontSize: '26px', fontWeight: '700' }} href="#">YourChallenge</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav" >
                        <ul class="navbar-nav" style={{ fontSize: '18px', fontWeight: '500' }}>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Download</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
const navBar = {
    navbackground: "#eaecec"
};
