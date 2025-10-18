<template>
    <nav class="navbar navbar-dark bg-dark primary-font">
    <div class="container-fluid header-container">
      <NuxtLink class="navbar-brand" to="/">Portafolio Ayrton Morrison</NuxtLink>

    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
    >
        <span class="navbar-toggler-icon"></span>
      </button>

    <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
    >
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">Curriculum</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">Personal</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </nav>
</template>

<style>
.router-link-active {
  font-weight: bold;
  color: #fff !important;
}

.navbar-brand{
    font-family: "Helvetica Black Oblique", sans-serif;
    font-weight: 100;
    font-size: 2.5rem;
    padding: 2rem;
    color: yellow !important;
    text-shadow: 0px 1px 0px red;
}



.navbar{
    background-color: black !important;
}

.offcanvas-body{
    background-color: black;
    font-size: 1.5rem;
}

.nav-link{
    color: red !important;
}

.offcanvas-header{
    background-color: black;
    font-size: 1.5rem;
    color: yellow !important;
    text-shadow: 0px 1px 0px red;
}

#offcanvasNavbarLabel{
    font-size: 2rem;
}

</style>