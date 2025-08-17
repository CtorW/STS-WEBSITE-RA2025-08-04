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
                title: "Campus Tour!",
                text: `Your dream deserves a strong start, and we’re here to help you make it happen!

Last week’s campus tour was full of energy. Students and parents explored the PHINMA SJC campus, joined hands-on workshops, and experienced first-hand what it’s like to be part of a school that truly supports students’ dreams. 
Now it’s your turn!

Join us for the next campus tour on May 9, from 1 to 5 PM, and see how PHINMA SJC can help you succeed. 
<a href="https://share.hsforms.com/1Sw38ma5qTYywUkRgD8qsuwdu1n5" target="_blank" class="text-[--primary-color] hover:underline">Sign up now</a>.`
            },
            {
                title: "Campus Visit and Career Talk",
                text: `Our future educators got a chance to explore career and learning opportunities abroad in a recent career talk hosted by Trades and Professions, Inc. and Chicago Public School (CPS). Following the insightful engagement with students, PHINMA SJC and Trades and Professions officials discussed potential long-term partnerships aimed to support the students in the field of education.`
            },
            {
                title: "200 units strong 💪🖥️",
                text: `On top of 3 existing computer labs, PHINMA SJC opens up another one in the Manila Campus with 50 brand-new Lenovo PCs equipped with WINDOWS 11, Intel Core i5, 8GB RAM and 256GB SSD storage.
The new units are set to provide the necessary technology for our BSIT students to learn under industry standards. 
`
            },
            {
                title: "Victories across the board! 🥇🥇🥇",
                text: `ICYMI: Students and faculty from the College of Information Technology Education (CITE) secured the top 7 spots after competing against IT Professionals and students from computer-focused colleges in the recent Cybersecurity Symposiums hosted by Asia Symposiums last November 7. 
The competition consists of solving a series of tech-related puzzles through a modified version of “Capture the Flag” using White-hat hacking techniques.
Congratulations!
Renzo Cua (Champion)
Ian Abrigo (2nd Place)
Arnold Solilapsi (Teacher - 3rd Place)
Ramon Brinquez (4th Place)
Reichele Cazenas (5th Place)
Chamian Rameses (6th Place)
Hariette Onofre (Teacher - 7th Place)`
            },
            {
                title: "Capped, pinned, and ready for duty 🫡👩‍⚕️🧑‍🔬",
                text: `Our upperclassmen students from the College of Allied Health Sciences(CAHS) step into the next chapter of their allied health journey at Illuminating Futures: Pinning for Tomorrow's Healthcare Leaders yesterday, September 4(Wednesday), at the Manila Cathedral in Intramuros.
Students present during the event consisted of Y2, Y3, and Y4 students taking up Medical Laboratory Sciences, Nursing, Psychology, Pharmacy, Physical Therapy, Radiologic Technology, and Respiratory Therapy.`
            },
            {
                title: "ICYMI: May chance ka pa to #LiveYourTomorrow! 💪💚🔮",
                text: `Pagkakataon mo nang makita kung ano ang iba't-ibang experience sa bawat college course sa aming FREE CAMPUS TOUR!
Message us on Facebook or call us for more details!
<a href="https://www.facebook.com/phinmasjc/" target="_blank" class="text-[--primary-color] hover:underline">Facebook Link</a>.`
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
        // joe functions 
        function gotofbjoe() {
            window.open('https://www.facebook.com/profile.php?id=61578404446654#', '_blank');
        }

        function gotoinsjoe() {
            window.open('#', '_blank');
        }
        // jm functions
        function gotofbjm() {
            window.open('https://www.facebook.com/jmsantos06#', '_blank');
        }

        function gotoinsjoe() {
            window.open('#', '_blank');
        }
        // dre functions
        function gotofbdre() {
            window.open('https://www.facebook.com/andrymhar15', '_blank');
        }

        function gotoinsdre() {
            window.open('#', '_blank');
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
                articleModalText.innerHTML = article.text;
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

        // ddd event listener for the rocket animation
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