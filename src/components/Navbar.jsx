import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">RUS-UKR</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link " aria-current="page" href="#">Home</a>
                            <a class="nav-link " href="https://t.me/mod_russia/">Russian MOD</a>
                            <a class="nav-link" href="https://wagner-pmc.com">PMC Wagner</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar