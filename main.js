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
        const articleModal = document.getElementById('article-modal');
        const articleModalTitle = document.getElementById('article-modal-title');
        const articleModalText = document.getElementById('article-modal-text');


        // news modal body
        const articles = [{
                title: "STS Library's New Digital Archiving Initiative",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            {
                title: "Annual STEM Fair Showcases Student Innovation",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            {
                title: "New After-School Tutoring Program Launched",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            {
                title: "Guest Lecture Series Features Dr. Evelyn Reed",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            {
                title: "Library Expands Digital Media Collection",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            {
                title: "Volunteers Needed for Annual Book Drive",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            }
        ];

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

        // function for show news modal
        function showArticleModal(articleIndex) {
            const article = articles[articleIndex];
            if (article) {
                articleModalTitle.textContent = article.title;
                articleModalText.textContent = article.text;
                articleModal.style.display = 'flex'; // Make the modal visible first
                setTimeout(() => {
                    articleModal.classList.add('show');
                }, 5);
            }
        }

        // function for news modal - remove
        function closeArticleModal() {
            const articleModalContent = document.getElementById('article-modal-content');
            articleModalContent.classList.add('is-closing');
            articleModal.classList.remove('show');
            setTimeout(() => {
                articleModalContent.classList.remove('is-closing');
                articleModal.style.display = 'none';
            }, 250);
        }

        // add event listeners to close the modal
        imageModal.addEventListener('click', closeImageModal);
        articleModal.addEventListener('click', (e) => {
            if (e.target.id === 'article-modal') {
                closeArticleModal();
            }
        });

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