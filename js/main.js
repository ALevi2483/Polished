document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });


        /* Close menu when a navigation link is selected */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";

            });

        });


        /* Close menu if browser changes from mobile
           back to desktop size */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";

            }

        });


        /* Close mobile navigation with Escape key */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.textContent = "☰";

                menuButton.focus();

            }

        });

    }


    /* =====================================================
       AUTOMATIC COPYRIGHT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("#year");

    yearElements.forEach(function (year) {

        year.textContent =
            new Date().getFullYear();

    });

});
