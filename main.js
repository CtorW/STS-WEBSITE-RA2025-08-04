        // js description - rence
        //                  joe 
        //                  dre
        //                  jm        

        // getting DOM ids
        const pages = document.querySelectorAll('.page');
        const allNavItems = document.querySelectorAll('.nav-item');
        const modeToggleButtons = document.querySelectorAll('#mode-toggle-mobile, #mode-toggle-desktop');
        const body = document.body;
        const mobileDrawer = document.getElementById('mobile-drawer');
        const messageBox = document.getElementById('message-box');
        const imageModal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const startExploringBtn = document.getElementById('start-exploring-btn');
        const rocketEmoji = document.getElementById('rocket-emoji');
        // function to show temporary message box
        function showMessage(message) {
            messageBox.textContent = message;
            messageBox.classList.add('visible');
            setTimeout(() => {
                messageBox.classList.remove('visible');
            }, 3000);
        }

        // function to nav navigation for active links 
        function showPage(element, pageId) {
            // hide all pages if not active
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('show');
            });

            // show requested page want by user and hide other 
            const currentPage = document.getElementById(`${pageId}-page`);
            currentPage.classList.remove('hidden');
            currentPage.classList.add('show');

            // remove active class in nav
            allNavItems.forEach(item => {
                item.classList.remove('active');
            });

            // add active requested by user
            const activeNavItem = element.querySelector('.nav-item');
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }

        // function for light and dark mode
        function toggleDarkMode() {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            modeToggleButtons.forEach(button => {
                const icon = button.querySelector('.material-symbols-outlined');
                icon.textContent = isDark ? 'brightness_7' : 'brightness_4';
            });
        }

        // function for mobile
        function toggleMobileDrawer() {
            mobileDrawer.classList.toggle('translate-x-full');
        }

        // load pages
        document.addEventListener('DOMContentLoaded', () => {
            // theme base on system preference 
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                body.classList.add('dark');
                modeToggleButtons.forEach(button => {
                    const icon = button.querySelector('.material-symbols-outlined');
                    icon.textContent = 'brightness_7';
                });
            }

            // event listeners (darkmode)
            modeToggleButtons.forEach(button => {
                button.addEventListener('click', toggleDarkMode);
            });

            // main page 'home'
            const homePage = document.getElementById('home-page');
            homePage.classList.remove('hidden');
            homePage.classList.add('show');

            // fix the selector to correctly find the home button on page load
            const homeNavItem = document.querySelector('li[onclick*="showPage(this, \'home\')] .nav-item');
            if (homeNavItem) {
                homeNavItem.classList.add('active');
            }
        });
        // lorence functions
        function gotofbrens() {
            window.open('https://www.facebook.com/streetx.rnc', '_blank');
        }

        function gotogitrens() {
            window.open('https://github.com/CtorW', '_blank');
        }

        function showImageModal(cardElement) {
            const image = cardElement.querySelector('img');
            if (image) {
                modalImage.src = image.src;
                imageModal.classList.add('show');
            }
        }

        // function to close the image modal
        function closeImageModal() {
            imageModal.classList.remove('show');
        }

        // add event listeners to close the modal
        imageModal.addEventListener('click', closeImageModal);

        // Add event listener for the rocket animation
        startExploringBtn.addEventListener('click', (e) => {
            // Prevent the default navigation for the animation
            e.preventDefault();
            rocketEmoji.classList.remove('animate');
            // Use a short delay to re-add the class, allowing the animation to restart on click
            setTimeout(() => {
                rocketEmoji.classList.add('animate');
            }, 10);
        });

        // helped by Stackoverflow community (thansk RA 2-7 STS modern website - Showcase)
