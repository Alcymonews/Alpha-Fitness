// Alpha Fitness - comportamentos basicos da interface
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.querySelector("#currentYear");
    const siteHeader = document.querySelector(".site-header");
    const navbarCollapse = document.querySelector("#mainNavbar");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const updateHeaderState = () => {
        if (!siteHeader) return;
        siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    // Fecha o menu mobile depois de selecionar uma opcao.
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (!navbarCollapse || !window.bootstrap) return;

            const menuIsOpen = navbarCollapse.classList.contains("show");
            const collapseInstance = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

            if (menuIsOpen) {
                collapseInstance.hide();
            }
        });
    });
});
