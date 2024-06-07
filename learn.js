//content dictionary
//<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE" frameborder="0" allowfullscreen></iframe>

//source data
const content = {
    // codding---------
    "coding": {
        html: {
            yt: [
                ['kUMe1FH4CHE', 'recommended', 'freeCodeCamp.org', 'Learn HTML – Full Tutorial for Beginners (2022)'],
                ['HD13eq_Pmp8', 'recommended', 'Bro Code', 'Learn HTML in 1 hour 🌎'],
                ['qz0aGYrrlhU', '', 'Programming with Mosh', 'HTML Tutorial for Beginners: HTML '],
                ['bWPMSSsVdPk', 'recommended', 'Jake Wright', 'Learn HTML in 12 Minutes'],
                ['FQdaUv95mR8', 'recommended', 'Kevin Stratvert', 'HTML Tutorial for Beginners'],
                ['UB1O30fR-EE', 'recommended', 'Traversy Media', 'HTML Crash Course For Absolute'],
                ['916GWv2Qs08', '', 'freeCodeCamp.org', 'HTML Tutorial - Website Crash Course for Beginners'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['w3school', 'https://www.w3schools.com/html/default.asp', 'A well-known resource with extensive tutorials, references, and a coding playground for practice.'],
                ['Codecademy', 'https://www.codecademy.com/catalog/language/html-css', 'Offers a free HTML course with an interactive interface, making it great for beginners.'],
                ['HTML Reference', 'https://htmlreference.io/', "This website offers a comprehensive HTML reference guide, complete with detailed explanations of tags, attributes, and examples. It's a great resource for quick reference and deeper dives into specific topics."],
                ['MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 'Maintained by Mozilla, it provides comprehensive documentation and references directly from the source.'],
                ['freeCodeCamp', 'https://www.freecodecamp.org/news/html-crash-course/', 'Offers a free full-stack web development curriculum that includes HTML learning.'],
                ['Khan Academy', 'https://www.khanacademy.org/computing/computer-programming/html-css', 'Provides a free HTML course with video lectures and exercises, suitable for a visual learning style.'],
                ['The Odin Project', 'https://www.theodinproject.com/', 'A free, project-based curriculum that teaches HTML and CSS together for a practical approach.'],
                ['BitDegree', 'https://www.bitdegree.org/courses/course/coding-for-beginners-space-doggos', 'Offers interactive courses with gamification elements to make learning HTML engaging.'],
                ['HTML Dog', 'https://htmldog.com/guides/html/beginner/', 'A website specifically focused on HTML with tutorials, references, and challenges'],
                ['CodePen', 'https://codepen.io/./', 'While not strictly a tutorial site, CodePen allows you to see and experiment with HTML code snippets.'],
                ['Udemy', 'https://www.udemy.com/topic/html/', 'Offers a variety of paid HTML courses from different instructors, catering to various learning styles.'],
            ],
        },
        css: {
            yt: [
                ['yfoY53QXEnI', 'basic', 'Traversy Media', 'CSS Crash Course For Beginners '],
                ['OXGznpKZ_sA', 'basic', 'freeCodeCamp.org', 'Learn CSS in 1 Hour [2023 Edition]'],
                ['03Pvl2ecetA', 'basic', ' Programming with Mosh', 'CSS Tutorial for Beginners: Complete CSS Course'],
                ['6XGCCxiIUYc', 'CSS Styling & Visual Design', 'Brad Traversy', 'CSS Mastery: The Complete Guide (2023)'],
                ['tSApgmUqtfM', 'CSS Styling & Visual Design', 'freeCodeCamp.org', 'CSS Animations & Transitions'],
                ['9zA8cB-54SA', '', 'Traversy Media', 'Flexbox & CSS Grid Layout Crash Course'],
                ['wzpx_d_nHfg', '', 'freeCodeCamp.org', 'Build a Responsive Website with HTML & CSS'],
                ['L1BnNl3hw7E', 'CSS Projects', 'The Net Ninja', 'CSS Design Challenges for Beginners'],
                ['CpgNVyUxUV0', 'CSS Projects', 'Brad Traversy', '3 CSS Projects for Beginners (2023)'],
                ['fc3IFF4B6Jw', 'Advanced CSS Topics', 'Traversy Media', 'CSS Preprocessors (Sass & LESS) Crash Course'],
                ['OtBpgtqrjyo', 'Advanced CSS Topics', 'freeCodeCamp.org', 'Advanced CSS Selectors & Pseudo-Classes'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['w3school', 'https://www.w3schools.com/css/default.asp', 'A well-known resource with extensive tutorials, references, and a coding playground for practice.'],
                ['Codecademy Learn CSS ', 'https://www.codecademy.com/learn/learn-css', "Offers a free CSS course with an interactive interface, making it great for beginners."],
                ['MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Web/CSS', "Maintained by Mozilla, it provides comprehensive documentation and references directly from the source."],
                ['freeCodeCamp Learn CSS ', 'https://www.freecodecamp.org/news/learn-css/', "Offers free lessons and projects within their full-stack web development curriculum."],
                ['Khan Academy CSS', 'https://www.khanacademy.org/computing/computer-programming/html-css', "Provides a free CSS course with video lectures and exercises, suitable for a visual learning style"],
                ['The Odin Project - CSS', 'https://www.theodinproject.com/', "A free, project-based curriculum that teaches HTML and CSS together for a practical approach."],
                ['CSS Diner', 'https://flukeout.github.io/', "This interactive website uses a gamified approach where you help run a restaurant by completing coding challenges that involve CSS."],
                ['Flexbox Froggy', 'https://flexboxfroggy.com/', "A fun and interactive way to learn Flexbox, a powerful layout model in CSS."],
                ['Learn CSS Grid ', 'https://cssgridgarden.com/', "Another interactive learning platform specifically designed to teach CSS Grid, a powerful layout system."],
                ["A Beginner's Guide to HTML & CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS", "This guide from Mozilla Developer Network (MDN) provides a structured learning path that starts with the fundamentals of CSS."],
                ['CSS Tricks', 'https://css-tricks.com/', " A popular resource for experienced developers, but also offers tutorials and articles for beginners. It's a great place to stay updated on the latest CSS techniques."],
                // ['website name', 'web link'],
            ],
        },
        'java script': {
            yt: [
                ['PkZNo7MFNFg', 'Core Concepts', 'Clever Programmer', "JavaScript Tutorial for Beginners - Full Course in 12 Hours"],
                ['jS4aFq5-91M', 'Core Concepts', 'freeCodeCamp.org', "Learn JavaScript in 1 Hour"],
                ['PkZNo7MFNFg', 'Core Concepts', 'Programming with Mosh', 'JavaScript Tutorial for Beginners'],
                ['NO5kUNxGIu0', 'DOM Manipulation', 'Traversy Media', 'The DOM: Explained Simply'],
                ['XF1_MlZ5l6M', 'DOM Manipulation', 'channel The Net Ninja', 'JavaScript Event Listeners Tutorial'],
                ['Gwup7MV_fXs', 'DOM Manipulation', 'freeCodeCamp.org', 'Vanilla JavaScript vs. Frameworks (jQuery)'],
                ['7l2-ds_U2Lc', 'Advanced JavaScript Concepts', 'freeCodeCamp.org', 'JavaScript Async/Await Tutorial'],
                ['1S8SBDhA7HA', 'Advanced JavaScript Concepts', 'Traversy Media', 'JavaScript Closures Explained Simply'],
                ['NU_1StN5Tkk', 'Advanced JavaScript Concepts', 'Academind', 'JavaScript Design Patterns & Best Practices'],
                ['j59qQ7YWLxw', 'JavaScript Projects', 'freeCodeCamp.org', 'Build a JavaScript Calculator App'],
                ['2ml4x0rO1PQ', 'JavaScript Projects', 'The Net Ninja', '5 JavaScript Projects for Beginners'],
                ['JtgY3a_TPg0', 'JavaScript Projects', 'Dev Simplified', 'Build a To-Do List App with JavaScript'],
                ['SqcY0GlETPk', 'Modern JavaScript ', 'freeCodeCamp.org', 'Learn React.js in 1 Hour [2023 Edition]'],
                ['FXpIoQ_rT_c', 'Modern JavaScript ', 'Traversy Media', 'Vue.js Crash Course for Beginners'],

            ],
            web: [
                ['MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', " Maintained by Mozilla, it provides comprehensive documentation and references directly from the source. This is a great resource for in-depth learning and future reference"],
                ['freeCodeCamp Learn JavaScript', 'https://www.freecodecamp.org/news/full-javascript-course-for-beginners/', "Offers free lessons, projects, and a supportive community within their full-stack web development curriculum. This is a great option for project-based learning with a helpful community."],
                ['JavaScript.info', 'https://javascript.info/', "A website with a clear and concise introduction to JavaScript, perfect for beginners. It offers interactive lessons and explanations in a user-friendly format."],
                ['Codecademy Learn JavaScript', 'https://www.codecademy.com/catalog/language/javascript', "Provides a free JavaScript course with an interactive interface, making it great for beginners who prefer a structured learning path."],
                ['Khan Academy JavaScript', 'https://www.khanacademy.org/computing/computer-programming/programming', "Offers a free JavaScript course with video lectures and exercises, suitable for a visual learning style."],
                ['The Odin Project - JavaScript', 'https://www.theodinproject.com/paths', "A free, project-based curriculum that teaches JavaScript after HTML and CSS, offering a practical approach for building web applications."],
                ['Udacity Intro to JavaScript and DOM', 'https://www.udacity.com/course/intro-to-javascript--ud803', "While Udacity offers paid courses, they also have a free introductory JavaScript and DOM course, which is a good starting point."],
                ['Coursera JavaScript for Everyone Specialization', 'https://www.coursera.org/courses?query=javascript', "Coursera offers various JavaScript courses, including a free specialization called 'JavaScript for Everyone Specialization.' This is a good option for a more in-depth and structured learning experience, although some courses might require a paid subscription."],
                ['CodePen - Explore JavaScript', 'https://codepen.io/tag/javascript', "While not strictly a tutorial site, CodePen allows you to see and experiment with JavaScript code snippets from other developers. This is a great way to practice and explore different functionalities."],
                ['Egghead.io', 'https://egghead.io/', " Offers short, focused video tutorials on various JavaScript topics. This is a good resource for learning specific concepts or brushing up on your skills."],
                ['Frontend Masters', 'https://frontendmasters.com/courses/', "Another platform with paid courses, but Frontend Masters offers some free JavaScript learning resources and workshops. This can be a great option for focused learning on advanced JavaScript topics."],
            ],
        },
        php: {
            yt: [
                ['BUCiSSyIGGU', 'Started with PHP', 'Programming with Mosh', 'PHP Tutorial for Beginners - FULL Course (2023)'],
                ['OK_JCtrrv-c', 'Started with PHP', 'freeCodeCamp.org', 'Learn PHP in 1 Hour [2023 Edition]'],
                ['OK_JCtrrv-c', 'Started with PHP', 'raversy Media', 'PHP Crash Course For Beginners'],
                ['Pz5CbLqdGwM', 'Building Projects', 'Traversy Media', 'Build a Login System with PHP & MySQL'],
                ['Tug81T3fZcs', 'Building Projects', ' The Net Ninja', '5 PHP Projects for Beginners'],
                ['72U5Af8KUpA', 'Building Projects', 'freeCodeCamp.org', 'PHP CRUD Tutorial for Beginners'],
                ['dQxuYRNbL_M', 'Intermediate Topics', 'freeCodeCamp.org', 'Object-Oriented Programming (OOP) in PHP'],
                ['Z9aePaXve6s', 'Intermediate Topics', 'The Net Ninja', 'PHP Forms Processing Tutorial'],
                ['7NuTyB8Ypxc', 'Intermediate Topics', 'Traversy Media', 'Working with Files & Uploads in PHP'],
                ['JSX0HMYgtvc', '', 'Web Dev Simplified', 'PHP OOP Tutorial: Learn Object Oriented Programming'],
                ['OK_JCtrrv-c', '', 'freeCodeCamp.org', 'PHP Interview Questions & Answers for Beginners & Professionals'],

            ],
            web: [
                ['PHP.net - Manual', 'https://www.php.net/manual/en/index.php', "The official PHP documentation, maintained by the PHP development team. This is an essential resource for in-depth learning and reference, but it can be quite technical for beginners."],
                ['w3school', 'https://www.w3schools.com/php/default.asp', "A well-known website with a comprehensive PHP tutorial, covering the basics to more advanced topics. It offers a good balance of explanations and code examples."],
                ['Codecademy Learn PHP', 'https://www.codecademy.com/learn/paths/php-skill', 'Provides a free PHP course with an interactive interface, making it great for beginners who prefer a structured learning path.'],
                ['freeCodeCamp Learn PHP', 'https://www.freecodecamp.org/news/tag/php/', "Offers free lessons and projects within their web development curriculum. While it doesn't have a dedicated PHP course yet, there are projects that utilize PHP."],
                ['HackerRank PHP Tutorials', 'https://www.hackerrank.com/skills-directory/php_basic', "Offers interactive coding challenges and tutorials for PHP. This is a good option for those who learn best by doing and want to test their skills."],
                ['Learn-PHP.org', 'https://learn-php.org/', "A website specifically dedicated to PHP learning, offering tutorials, references, and exercises for various skill levels."],
                ['PHP Master', 'https://www.oreilly.com/library/view/php-master/9780987090874/', "Provides video tutorials, articles, and a forum dedicated to PHP learning. This can be a good option for visual learners who prefer video instruction."],
                ['Udemy PHP Courses', 'https://www.udemy.com/topic/php/', "PHP courses from different instructors. This can be a good option for a more in-depth and personalized learning experience, but it requires a subscription or individual course purchase."],
                ['Coursera PHP Specialization', 'https://www.coursera.org/courses?query=php', "Coursera offers various PHP courses, including specializations that combine multiple courses for a comprehensive learning experience. Some courses may require a paid subscription."],
                ['Pluralsight PHP Learning Paths', 'https://www.pluralsight.com/paths/php-development-fundamentals', "Similar to Udemy, Pluralsight offers paid PHP learning paths and courses from expert instructors. This can be a good option for focused learning on specific PHP topics."],
                ['BitDegree Learn PHP ', 'https://www.bitdegree.org/learn/', "Offers interactive courses with gamification elements to make learning PHP engaging. This can be a good option for those who prefer a fun and interactive learning approach."],
            ],
        },
        python: {
            yt: [
                ['fqHZhNwYH90', 'Getting Started', 'Traversy Media', 'Python Crash Course for Beginners'],
                ['hMCJDycsHks', 'Getting Started', 'freeCodeCamp.org', 'Learn Python in 1 Hour [2024 Edition]'],
                ['_uQrJ0TkZlc', 'Getting Started', 'Programming with Mosh', 'Python Tutorial for Beginners: Full Course'],
                ['HBbrSDGGOkw', 'Projects', 'freeCodeCamp.org', 'Build a Python Calculator App'],
                ['DLn3jOsNRVE', 'Projects', 'The Net Ninja', '5 Python Projects for Beginners'],
                ['u8X6TiJA8as', 'Projects', 'freeCodeCamp.org', 'Python Text-Based Adventure Game Tutorial'],
                ['pkYVOmU3MgA', 'Intermediate Python Topics', ' freeCodeCamp.org', 'Python Data Structures Tutorial'],
                ['Ej_02ICOIgs', 'Intermediate Python Topics', 'freeCodeCamp.org', 'Object-Oriented Programming (OOP) in Python'],
                ['u-OmVr_fT4s', 'Intermediate Python Topics', 'Programming with Mosh', 'Python Functions Tutorial'],
                ['LHBE6Q9XlzI', 'Advanced Python Concepts', 'freeCodeCamp.org', 'Python for Data Science & Machine Learning'],
                ['Z1RJmh_OqeA', 'Advanced Python Concepts', 'Traversy Media', 'Python with Flask Web Framework Tutorial'],
            ],
            web: [
                ['Official Python Tutorial', 'https://docs.python.org/3/tutorial/', "The official Python documentation provides a comprehensive and well-structured introduction to the language. It's a great reference for beginners and experienced programmers alike."],
                ['Learn Python', 'https://www.learnpython.org/', "This interactive tutorial offers a beginner-friendly approach with clear explanations and coding exercises directly in your browser."],
                ['Codecademy Learn Python', 'https://www.codecademy.com/catalog/language/python', "Codecademy provides a free Python course with an interactive interface, making it a good option for those who prefer a structured learning path with hands-on coding."],
                ['Google\'s Python Class', 'https://developers.google.com/edu/python', "Google offers a free online Python class specifically designed for beginners. This can be a good starting point for those new to programming."],
                ['freeCodeCamp Learn Python', 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', "While freeCodeCamp doesn't have a general Python course, their curriculum includes projects that utilize Python for scientific computing. This can be a great way to learn Python while building practical skills."],
                ['DataCamp Learn Python for Data Science', 'https://www.datacamp.com/courses/intro-to-python-for-data-science', "DataCamp offers interactive tutorials specifically geared towards learning Python for data science. This is a good option if you have a specific goal in mind for using Python."],
                ['Coursera Python for Everybody Specialization ', 'https://www.coursera.org/specializations/python', "Coursera offers various Python courses, including a popular specialization called 'Python for Everybody.' This provides a comprehensive and structured learning experience, although some courses may require a paid subscription."],
                ['Udacity Intro to Programming Nanodegree', 'https://www.udacity.com/course/intro-to-programming-nanodegree--nd000', "Udacity offers a paid Nanodegree program  that uses Python as the primary language. This program provides a project-oriented approach to learning and career preparation."],
                ['edX Introduction to Computer Science', 'https://www.edx.org/learn/computer-science/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python', "EdX offers a free course from MIT on Introduction to Computer Science and Programming using Python. This is a great option for those who want a more academic approach to learning Python."],
                ['MIT OpenCourseware', 'https://ocw.mit.edu/search/?t=Programming+Languages', "Similar to the EdX course, MIT OpenCourseware provides free access to the course materials for Introduction to Computer Science and Programming using Python. This offers flexibility for self-paced learning."],
                ['Real Python Tutorials ', 'https://realpython.com/tutorials/', "Real Python offers high-quality tutorials on various Python topics, catering to both beginners and experienced programmers. This is a great resource for in-depth learning and exploring specific areas of Python."],
                // ['website name', 'web link'],
            ],
        },
        c: {
            yt: [
                ['YlW2X5obUW8', 'Getting Started', 'Vikas', 'C Programming Full Tutorial in One Video (2024)'],
                ['0Sg6QHmlFJE', 'Getting Started', 'freeCodeCamp.org', 'C Programming Full Course for Beginners'],
                ['Bz4MxDeEM6k', 'Getting Started', 'CodeBreakthrough', 'C Programming All-in-One Tutorial Series (10 HOURS!)'],
                ['KJgsSFOSQv0', 'Projects', 'ProgrammingKnowledge', 'C Programming Tutorial for Beginners'],
                ['ZSPZob_1TOk', 'Projects', 'freeCodeCamp.org', 'C Programming Language Tutorial - Full Course'],
                ['irqbmMNs2Bo', 'Projects', 'ProgrammingKnowledge', 'C Programming Tutorial - Step by Step'],
                ['8PopR3x-VMY', 'Intermediate Topics', "Jenny's Lectures CS IT", 'C Programming Tutorial'],
                ['-CpG3oATGIs', 'Intermediate Topics', 'Edureka', 'C Programming in 4 hours'],
                ['K8YELRmUb5o', 'Intermediate Topics', 'CS50 (Harvard University)', 'C Programming for Beginners'],
                ['87SH2Cn0s9A', '', 'Traversy Media', 'Learn C in One Hour'],
                ['e8TZbze72Bc', '', 'thenewboston', 'C Programming: Language Basics'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['Tutorialspoint C Tutorial ', 'https://www.tutorialspoint.com/cprogramming/index.htm', "This website offers a comprehensive C tutorial with clear explanations, code examples, and quizzes to test your understanding. It's a good starting point for beginners."],
                ['Learn-C.org ', 'https://www.learn-c.org/', "This website provides a well-structured C course with interactive exercises and challenges. It focuses on practical learning and helps you build strong C programming fundamentals."],
                ['W3Schools C Tutorial ', 'https://www.w3schools.com/c/', "A well-known resource with a vast C tutorial covering the basics to advanced topics. It offers a good balance of explanations and reference material."],
                ['Programiz C Tutorial', 'https://www.programiz.com/c-programming', "This website provides a beginner-friendly C tutorial with interactive lessons and visual aids. It's a good option for those who prefer a more visual learning approach."],
                ['GeeksforGeeks C Programming', 'https://www.geeksforgeeks.org/c-programming-language/', "This website offers in-depth C tutorials, articles, and practice problems. It caters to both beginners and experienced programmers looking to improve their skills."],
                ['The C Programming Language by Kernighan and Ritchie', 'https://www.amazon.com/Programming-Language-Kernighan-Textbook-Paperback/dp/B072B7MQVS', "This classic book (not a website, but a valuable resource) is a widely recommended reference for learning C. It provides a clear and concise introduction to the language. "],
                ['Udemy C Courses', 'https://www.udemy.com/course/c-programming-for-beginners-/', "Udemy offers a variety of paid C courses from different instructors. This can be a good option for a more personalized learning experience, but it requires a course purchase."],
                ['Coursera C Programming for Everybody Specialization', 'https://www.coursera.org/specializations/python', "While this specialization focuses on Python, it includes introductory modules on C programming that can be beneficial for understanding core programming concepts before diving deeper into C."],
                ['edX Introduction to C Programming', 'https://www.edx.org/learn/c-programming', "EdX offers a free course on Introduction to C Programming. This course provides a structured learning path with video lectures, quizzes, and problem sets."],
                ['MIT OpenCourseware Introduction to C Programming', 'https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/', "Similar to the EdX course, MIT OpenCourseware offers free access to the course materials for Introduction to C Programming. This provides flexibility for self-paced learning."],
                ['C Programming Language Reference', 'http://cppreference.com/', "This website provides a comprehensive reference for the C programming language. It's a valuable resource for experienced programmers and those looking for in-depth information on specific C features."],
                // ['website name', 'web link'],
            ],
        },
        'c++': {
            yt: [
                ['8jLOx1hD3_o', 'Getting Started', 'FreeCodeCamp.org', 'C++ Programming Course - Beginner to Advanced'],
                ['vLnPwxZdW4Y', 'getting started', 'freeCodeCamp.org', 'C++ Tutorial for Beginners - Full Course'],
                ['playlist?list=PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C', 'Getting Started', 'ProgrammingKnowledge', 'Learn C++ Programming | Video Tutorial for Beginners'],
                ['e7sAf4SbS_g', 'recommended', 'Apna College', 'Complete C++ Tutorial in One Shot | Beginner To Advance'],
                ['tvC1WCdV1XU', '', 'freeCodeCamp.org', 'C++ for Programmers'],
                ['GQp1zzTwrIg', 'Getting Started', 'CodeBeauty', 'C++ Programming Tutorial - Full Course for Beginners & Intermediate'],
                ['18c3MTX0PK0', 'projects', ' Telusko', 'C++ Tutorial from Basic to Advance'],
                ['Rub-JsjMhWY', '', 'mycodeschool', 'Learn C++ in One Video '],
                ['mUQZ1qmKlLY', 'Getting Started', 'Udemy Tech', 'C++ Tutorial for Beginners - Full Programming Course'],
                ['GQp1zzTwrIg', 'Intermediate C++ Topics', 'Bro Code', 'C++ Full Course | C++ Tutorial for Beginners'],
                ['8jLOx1hD3_o', 'projects', 'ProgrammingKnowledge', 'C++ Programming Tutorial '],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['LearnCpp.com', 'https://www.learncpp.com/', "This website is a goldmine specifically designed for teaching modern C++. It offers a well-structured tutorial, clear explanations, and exercises tailored for C++."],
                ['Cplusplus.com', 'https://cplusplus.com/', "While not strictly a tutorial site, CPlusPlus.com provides a valuable resource for learning about C++ functionalities. It offers free code documentation, references, and various articles on C++ programming."],
                ['Tutorialspoint C++ Tutorial', 'https://www.w3schools.com/cpp/', 'comprehensive C++ tutorial with clear explanations, code examples, and quizzes to test your understanding.'],
                ['Programiz C++ Tutoria', 'https://www.programiz.com/cpp-programming/examples', "This website offers a beginner-friendly C++ tutorial with interactive lessons and visual aids, making it suitable for those who prefer a visual learning approach."],
                ['Coursera C++ for Everybody Specialization', 'https://www.coursera.org/courses?query=c%2B%2B', "Coursera offers a specialization dedicated to C++ programming. This provides a structured learning path with video lectures, quizzes, and assignments."],
                ['Udemy C++ Courses', 'https://www.udemy.com/topic/c-plus-plus/', "Udemy offers a variety of paid C++ courses from different instructors. This can be a good option for a more personalized learning experience with in-depth explanations, but it requires a course purchase."],
                ['edX Introduction to C++ Programming ', 'https://www.edx.org/learn/c-plus-plus/microsoft-introduction-to-c', 'EdX offers a course on Introduction to C++ Programming as part of their C++ Essential Training professional certificate program. This provides a structured learning path with video lectures, quizzes, and problem sets.'],
                ['MIT OpenCourseware Introduction to C++', 'https://ocw.mit.edu/courses/6-096-introduction-to-c-january-iap-2011/', "Similar to the EdX course, MIT OpenCourseware offers free access to the course materials for Introduction to C++. This provides flexibility for self-paced learning."],
                ['GeeksforGeeks C++ Programming ', 'https://www.geeksforgeeks.org/c-plus-plus/', "This website offers in-depth C++ tutorials, articles, and practice problems. It caters to both beginners and experienced programmers looking to improve their C++ skills."],
                ['Cpp Reference', 'http://cppreference.com/', "This website provides a comprehensive reference for the C++ programming language. It's a valuable resource for experienced programmers and those looking for in-depth information on specific C++ features."],
                ['freeCodeCamp Learn C++', 'https://www.freecodecamp.org/news/learn-c-with-free-31-hour-course/', "While freeCodeCamp doesn't have a dedicated C++ course yet, you might find projects or resources within their curriculum that utilize C++."],
                // ['website name', 'web link'],
            ],
        },
        'c#': {
            yt: [
                ['YrtFtdTTfv0', 'basic', 'FreeCodeCamp.org', 'C# Programming Course - Beginner to Advanced'],
                ['GhQdlIFylQ8', 'basic', 'reeCodeCamp.org', 'C# Tutorial - Full Course for Beginners'],
                ['https://www.youtube.com/playlist?list=PLS9G7A6kaaHPdxiIQx9Zo1RgdN64cJfLS', 'full course', 'Simplilearn', 'Learn C# Programming | Video Tutorial for Beginners'],
                ['UKaZ2S4AJAA', 'recommended', 'Programming with Mosh', 'Complete C# Tutorial for Beginners'],
                ['gfkTfcpWqAY', 'recommended', 'Derek Banas', 'C# Tutorial for Beginners - Learn C# Basics in 1 Hour'],
                ['https://www.youtube.com/playlist?list=PLS9G7A6kaaHPdxiIQx9Zo1RgdN64cJfLS', 'full course', 'CodeAcademy', 'C# Programming (Advanced)'],
                ['4F2m91eKmts', 'advanced', 'Brackeys', 'C# for Beginners | Complete Guide '],
                ['GhQdlIFylQ8', 'advanced', 'ProgrammingKnowledge', 'Learn C# in One Video'],
                ['wxznTygnRfQ', '', 'edureka!', 'C# Full Course for Beginners'],
                ['gfkTfcpWqAY', '', 'elusko', 'C# Tutorial for Absolute Beginners '],


            ],
            web: [
                ['Microsoft Learn - Take Your First Steps with C#', 'https://dotnet.microsoft.com/en-us/learn/csharp', "This is the official Microsoft resource for learning C#. It offers a free, interactive, and hands-on learning path that introduces you to the basics of C# programming. It's a great starting point, especially if you're new to programming in general."],
                ['Codecademy Learn C#', 'https://www.codecademy.com/learn/learn-c-sharp', "Codecademy provides a user-friendly platform with an interactive interface for learning C#. Their free C# course offers a structured learning path with hands-on coding exercises, making it a good option for those who prefer a practical approach."],
                ['Udemy C# Courses ', 'https://www.udemy.com/topic/c-sharp/', "Udemy offers a variety of paid C# courses from different instructors. This can be a good option for a more personalized learning experience with in-depth explanations and project-based learning. However, it requires a course purchase."],
                ['Pluralsight C# Learning Paths', 'https://www.pluralsight.com/paths/c-10', "Similar to Udemy, Pluralsight offers paid C# learning paths and courses. These are taught by expert instructors and provide focused learning on specific C# topics or project-based learning."],
                ['LearnCS.org - C# Tutorial', 'https://www.learncs.org/', "his website offers a free, interactive C# tutorial suitable for both beginners and experienced programmers. It covers fundamental topics in C# along with explanations and code examples. It's a good option for those who prefer a self-paced learning approach with clear explanations."],
                ['Microsoft Docs - C# Guide', 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/', "The official C# documentation by Microsoft provides comprehensive reference material for experienced programmers and those seeking deep dives into specific C# features."],
                ['C# Corner', 'https://www.c-sharpcorner.com/', " A website with a vast collection of C# articles, tutorials, and community discussions. Great for exploring various C# topics and learning from other developers."],
                ['C# Discord Servers', 'https://discord.com/servers/c-143867839282020352', "There are several C# Discord servers where you can connect with other C# developers, ask questions, and participate in discussions."],
                ['ASP.NET - Learn C#', 'https://dotnet.microsoft.com/en-us/learn/back-end-web-dev', "is a great resource to get started with back-end web development using ASP.NET Core, a popular framework built on .NET"],
            ],
        },
        sql: {
            yt: [
                ['HXV3zeQKqGY', 'Getting Started', 'FreeCodeCamp.org', 'SQL Tutorial - Full Database Course for Beginners '],
                ['E8TKYi6-6ik', 'recommended', 'Code With Harry', 'SQL Tutorial for Beginners | Learn SQL in 1 Hour'],
                ['playlist?list=PLavw5C92dz9Ef4E-1Zi9KfCTXS_IN8gXZ', 'Getting Started', 'Edureka', 'Learn Complete SQL (Beginner to Advance)'],
                ['hlGoQC332VM', 'getting started', ' Apna College', 'SQL - Complete Course in 3 Hours | SQL One Shot using MySQL'],
                ['7S_tz1z_5bA', 'Intermediate SQL Topics', 'Programming with Mosh', 'SQL Tutorial for Beginners - Full Course'],
                ['HXV3zeQKqGY', '', 'freeCodeCamp.org ', 'SQL Tutorial - Full Database Course for Beginners'],
                ['HXV3zeQKqGY', 'recommended', 'ProgrammingKnowledge', 'Learn SQL in One Video'],
                ['2eebptXfEvw', 'advanced concept', 'Traversy Media', 'SQL Tutorial - Learn SQL For Free'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['SQLZoo', 'https://sqlzoo.com/', "A popular website with interactive tutorials, exercises, and challenges that allow you to practice writing SQL queries right in your browser. Great for hands-on learning and testing your understanding."],
                ['Codecademy Learn SQL', 'https://www.codecademy.com/learn/learn-sql', "Codecademy's interactive platform provides a user-friendly interface for learning SQL with hands-on coding exercises."],
                ['W3Schools SQL Tutorial', 'https://www.w3schools.com/sql/', "A well-known resource with a comprehensive SQL tutorial covering the basics to advanced topics. It offers a good balance of explanations and reference material."],
                ['LearnSQL.com', 'https://learnsql.com/', "A website dedicated to teaching SQL with a structured learning path, explanations, and practice exercises."],
                ['PostgreSQL Documentation ', 'https://www.postgresql.org/docs/', "The official documentation for PostgreSQL, a popular open-source relational database management system (RDBMS). Provides in-depth information on SQL functionality specific to PostgreSQL."],
                ['MySQL Documentation', 'https://dev.mysql.com/doc/', "Similar to PostgreSQL, the official documentation for MySQL, another popular RDBMS. Offers detailed information on SQL functionalities specific to MySQL"],
                ['SQLBolt', 'https://sqlbolt.com/', "An interactive platform for learning SQL with various database backends like MySQL, PostgreSQL, and SQLite. Allows you to experiment with different SQL dialects and practice writing queries."],
                ['Coursera SQL for Everybody Specialization', 'https://www.coursera.org/specializations/data-science', "While this specialization focuses on data science, it includes introductory modules on SQL that can be beneficial for learning core SQL concepts. "],
                ['Stack Overflow - SQL Tag', 'https://stackoverflow.com/questions/tagged/sql', "A large Q&A forum for programmers. Search for solutions to SQL problems or ask your own questions and learn from the SQL community."],
                ['Reddit r/learnSQL', 'https://www.reddit.com/r/learnSQL/', "A subreddit dedicated to learning SQL. Find resources, ask questions, and connect with other learners."],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
    },
    //cyber security
    "cyber Security": {
        'Network Security': {
            yt: [
                ['3Kq1MIfTWCE', '', 'freeCodeCamp.org', 'Full Ethical Hacking Course - Network Penetration Testing for Beginners'],
                ['lYvijnPI1Rg', '', 'Ryan John', 'Networking For Cybersecurity | What you NEED to know'],
                ['NQ1cvwEvh44', '', 'Simplilearn', 'What Is Network Security? | Introduction To Network Security | Network Security Tutorial|Simplilearn '],
                ['KjN64N6-_Sk', '', 'Intellipaat', 'Network Security Tutorial For Beginners | Network Security Basics | Cybersecurity Training'],
                ['inWWhr5tnEA', '', 'Simplilearn', 'Cyber Security In 7 Minutes | What Is Cyber Security: How It Works? | Cyber Security | Simplilearn '],
                ['XgOF6GhiMuM', '', 'Gerald Auger', 'Required Cybersecurity Skill: Understanding Basic Networking Concepts'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['TryHackMe - Network Security Learning Paths', 'https://m.youtube.com/watch?v=mTR1FswPyHw', "TryHackMe offers interactive learning paths and labs focused on network security. You can practice skills in simulated environments, making it a practical approach."],
                ['SANS Institute - Free Courses ', 'https://www.sans.org/', "SANS offers a wealth of cybersecurity knowledge, including free online courses on network security fundamentals and specific security topics."],
                ['Cybrary - Network Security Courses', 'https://www.cybrary.it/', "Cybrary provides free video courses and learning paths on network security, covering various aspects like firewalls, intrusion detection, and secure network design."],
                ['Professor Messer - Network Security+ Course', 'https://gemini.google.com/%3C0%3Ehttps://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-comptia-security-plus-course/', "Professor Messer offers a free video course and study materials aligned with the CompTIA Network Security+ certification, a popular network security foundation"],
                ['Udemy Network Security Courses', 'https://www.udemy.com/courses/it-and-software/network-and-security/', 'Udemy offers a variety of paid network security courses from different instructors. These can be deep dives into specific topics or project-based learning experiences.'],
                ['Coursera Network Security Specialization', 'https://www.coursera.org/specializations/computer-network-security', "Coursera offers paid specializations on network security, combining video lectures, quizzes, and hands-on projects."],
                ['HackTheBox - Network Security Labs', 'https://www.hackthebox.com/', "HackTheBox provides a platform with vulnerable virtual machines for practicing penetration testing techniques often used in network security assessments."],
                ['Security Onion', 'https://blog.securityonion.net/', "Security Onion is a free and open-source Linux distribution pre-configured with security monitoring tools. It allows you to explore network security tools and gain practical experience."],
                ['National Institute of Standards and Technology', 'https://www.nist.gov/cyberframework', "The NIST Cybersecurity Framework provides a structured approach to managing cybersecurity risks. It offers valuable guidance for organizations building robust network security measures."],
                ['Reddit r/netsec', 'https://www.reddit.com/r/networking/comments/14kbj3h/is_network_security_still_worth_a_try/', "A subreddit focused on network security discussions, news, and resource sharing. Find insights and connect with other network security enthusiasts."],
                ['EC-Council Certified Ethical Hacker (CEH) Training', 'https://www.eccouncil.org/train-certify/ethical-hacking/', "EC-Council offers a popular Certified Ethical Hacker (CEH) program that delves into penetration testing methodologies commonly used to assess network security."]
            ],
        },
        'Application Security': {
            yt: [
                ['RedZvpyRd38', '', ' OWASP Foundation', 'Web Application Security - Basics and Best Practices'],
                ['HE244moNuXE', '', 'LiveOverflow', 'OWASP Top 10: Security Risks'],
                ['wDQ0KXR4D7A', '', 'The Cyber Mentor', 'Advanced Web Application Security'],
                ['K5PgBKqWjy8', '', 'GitKraken', 'Secure Software Development Lifecycle'],
                ['2YD4vygeghM', '', 'HackerSploit', 'SQL Injection and How to Prevent It'],
                ['mKAWpFdVcPY', '', 'LiveOverflow', 'Cross-Site Scripting (XSS) Explained'],
            ],
            web: [
                ['SANS Institute - Secure Coding Courses', 'https://www.sans.org/', 'SANS provides free and paid courses on secure coding practices, a critical aspect of application security. These courses teach you how to write secure code and avoid common vulnerabilities.'],
                ['Cybrary - Application Security Courses', 'https://www.cybrary.it/', "Cybrary offers free video courses and learning paths on application security, including topics like web application vulnerabilities, penetration testing, and secure coding principles."],
                ['OWASP ZAP', 'https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project', "A free and open-source web application security scanner. ZAP allows you to practice identifying vulnerabilities in web applications through hands-on exploration."],
                ['Burp Suite', 'https://portswigger.net/burp', 'A popular web application security testing (WAST) suite with a free community edition. Burp Suite allows you to intercept and analyze web application traffic, helping you understand vulnerabilities and explore secure coding practices.'],
                ['Open Web Application Security Project ', 'https://owasp.org/Top10/', "critical web application security risks is essential for application security professionals. This resource provides detailed information on these vulnerabilities and how to mitigate them."],
                ['Reddit r/websecurity', 'https://www.reddit.com/r/websecurity/', " A subreddit focused on web security discussions, news, and resource sharing. Find insights and connect with other web security enthusiasts."],

            ],
        },
        'Cloud Security': {
            yt: [
                ['jI8IKpjiCSM', '', ' IBM Technology', 'What is Cloud Security?'],
                ['i5DCqgl9dFk', '', 'Tech With Soleyman', 'CyberSecurity vs Cloud Security - Which One Should You Choose?'],
                ['sF014G2BUXM', '', 'Tech With Soleyman', 'What is Cloud Security? Explained in 15 minutes'],
                ['JyQ_NHwA0QI', '', 'Eye on Tech', 'What is Cloud Security and Why Do You Need It?'],
                ['-ObImxw1PmI', '', 'Amazon Web Services', 'AWS re:Inforce 2019: The Fundamentals of AWS Cloud Security'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['Microsoft Azure Security Documentation', 'https://docs.microsoft.com/en-us/azure/security/', "Microsoft provides comprehensive documentation on securing your cloud environment on Azure, covering topics like identity and access management, data encryption, and security best practices."],
                ['Cloud Security Alliance (CSA)', 'https://cloudsecurityalliance.org/', "he Cloud Security Alliance is a non-profit organization focused on cloud security best practices. They offer resources, certifications, and guidance for securing cloud environments."],
                ['Cybrary - Cloud Security Courses', 'https://www.cybrary.it/', "Cybrary offers free video courses and learning paths on cloud security, covering topics like cloud security architecture, identity and access management, and cloud security threats."],
                ['A Cloud Guru - Cloud Security Courses', 'https://acloudguru.com/', "A Cloud Guru provides paid cloud security courses with hands-on labs, covering various cloud platforms and security topics."],
                ['SANS Institute - Cloud Security Courses', 'https://www.sans.org/', "SANS offers paid courses on cloud security topics, providing in-depth knowledge for experienced security professionals."],
                ['Cloud Security Alliance (CSA) Summits and Trainings', 'https://cloudsecurityalliance.org/events/', "The CSA hosts events and workshops on cloud security. Attending these events can be a great way to learn directly from cloud security experts."],
            ],
        },
        'Blockchain Security': {
            yt: [
                ['dl8Hl91siM8', '', 'Learn with Whiteboard', 'Introduction to Blockchain Security Issues & Vulnerabilities'],
                ['aZA8rQ4o4sA', '', 'TradeStation', 'How Secure Is Blockchain?'],
                ['Eh5o3PaHCJU', '', 'Spot Technologies', 'Blockchain Security vs Cyber Security'],
                ['yubzJw0uiE4', '', 'Simplilearn', 'Blockchain In 7 Minutes | What Is Blockchain'],
                ['SSo_EIwHSd4', '', 'Simply Explained', 'How does a blockchain work - Simply Explained'],
            ],
            web: [
                ['Polkadot Academy - Blockchain Security Courses ', 'https://polkadot.network/development/blockchain-academy/', "While focused on Polkadot, this academy offers foundational courses on blockchain security concepts and best practices."],
                ['Udemy Blockchain Security Courses', 'https://www.udemy.com/course/practical-blockchain-security/', "Find paid courses on various blockchain security topics, from smart contract vulnerabilities to blockchain network attacks."],
                ['Capture the Flag (CTF) ', 'https://www.hackthebox.eu/', "HackTheBox may offer blockchain-specific CTFs, allowing you to practice identifying and exploiting vulnerabilities in a safe environment."],
                ['Ethereum Security Documentation', 'https://ethereum.org/en/security/', "This official documentation provides detailed information on securing your Ethereum applications and understanding potential security threats on the Ethereum blockchain platform."],
                ['OpenZeppelin Contracts', 'https://openzeppelin.com/', "This library provides pre-audited smart contract functionalities, promoting secure smart contract development practices."],
                ['ChainSecurity', 'https://chainsecurity.com/', "A blockchain security company offering audits, pentesting, and educational resources."],
            ],

        },
        'Social Engineering': {
            yt: [
                ['uvKTMgWRPw4', '', 'Hacking Exposed Computer Forensics', 'What is Social Engineering'],
                ['GSU1Ue_7Kb0', '', 'Null Byte', 'Social Engineering 101 - Understanding Social Engineering Attacks and Prevention'],
                ['v7VTJhkJUUY', '', 'malware fox', 'What is Social Engineering in Cyber Security? Explained'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['Federal Trade Commission (FTC)', 'https://consumer.ftc.gov/features/identity-theft', "Learn about common social engineering scams and how to safeguard your personal information from the FTC, a trusted government agency."],
                ['Better Business Bureau (BBB) - Scam Tracker', 'https://www.bbb.org/scamtracker', "Explore real-world social engineering scams reported by the BBB, equipping you to identify red flags and protect yourself."],
                ['National Institute of Standards and Technology (NIST)', 'https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-161.pdf', "While this publication covers broader security topics, Section 5.3.1 touches on social engineering threats, providing valuable insights."],
                ['SANS Institute Information Security Reading Room', 'https://www.sans.org/', "Explore the SANS Institute's extensive reading room, which likely contains articles or whitepapers related to social engineering awareness."],
                ['KnowBe4 Security Awareness Training', 'https://www.knowbe4.com/', "Consider exploring KnowBe4's security awareness training resources, which may include modules on social engineering for organizations or individuals."],
                ['PhishingBox', 'https://www.phishingbox.com/', "PhishingBox offers phishing simulation and training resources, potentially including social engineering awareness elements."],
                ['Open Web Application Security Project (OWASP)', 'https://owasp.org/www-project-web-security-testing-guide/', "While the OWASP Testing Guide primarily focuses on web application security, some sections might indirectly touch on social engineering techniques used in penetration testing (ethical hacking) with permission."],
                ['SANS Institute Security Awareness Courses', 'https://www.sans.org/', "The SANS Institute offers security awareness courses that may cover social engineering tactics and mitigation strategies."],
                ['SecurityWeek', 'https://www.securityweek.com/', "SecurityWeek is a reliable source for cybersecurity news, potentially including updates on emerging social engineering threats."],
                ['Social-Engineer.org Blog', 'https://www.social-engineer.org/', "Explore the Social-Engineer.org blog, which may contain articles discussing social engineering techniques in an educational context, highlighting how to recognize and avoid them. However, use caution and avoid replicating any techniques that could be harmful."],
                ['MIT Technology Review - Social Engineering', 'https://www.technologyreview.com/collection/the-growing-threats-to-cybersecurity/', "This MIT Technology Review article provides an overview of social engineering tactics, helping you understand their methods."],
                // ['website name', 'web link'],
            ],
        },

    },
    // class 11---------
    "class 11": {
        physics: {
            yt: [
                ['m6gCe6cO17c', '', ' LearnoHub - Class 11, 12', 'Units and measurements class 11 |'],
                ['L4H0MacAKLc', '', 'Doubtnut Learn and Fun Class 12', ' Motion in a Straight Line (Class 11 Physics)'],
                ['XIJAZM5G5Fg', '', 'Physics Wallah', ' Class 11 Physics | Motion in a Straight Line'],
                ['C-Yw_7_45vg', '', 'Physics Galaxy', 'Motion in a Straight Line Class 11 Physics '],
                ['g1kvgN4LAL0', '', 'Physics Galaxy', 'Motion in a Plane Class 11 Physics '],
                ['iUi1M7YkDe4', '', 'Physics Wallah', ' Class 11 Physics | Motion in a Plane'],
                ['ToBF3GK6wxM', '', ' Doubtnut Learn and Fun', 'Laws of Motion Class 11 Physics '],
                ['FDCWWv9lIL4', '', 'Magnet Brains', 'Class 11 Physics | Laws of Motion'],
                ['playlist?list=PLYVDsiuOZP5o87acfiquV9CMzi-rfIdQk', '', 'Physics Galaxy', 'Laws of Motion - Class 11 Physics'],
                ['xZqyOXYJOaw', '', 'channel Doubtnut Learn and Fun', 'Work, Energy and Power Class 11 Physics'],
            ],
            web: [
                ['Meritnation', 'https://www.meritnation.com/cbse', 'offers video lectures, chapter-wise explanations, sample papers, mock tests, and previous years question papers.'],
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', 'the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, pen_spark and other important resources for CBSE students.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', 'provides chapter-wise explanations, NCERT solutions, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of academic subjects, including many that are relevant for the CBSE Class 11 syllabus.'],
                ['Toppr', 'https://www.toppr.com/', 'provides adaptive learning, personalized study plans, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'https://www.doubtnut.com/search', 'offers video explanations of NCERT solutions and other reference books, along with question banks and mock tests.'],
                ['Embibe', 'https://www.embibe.com/', 'provides a personalized learning platform with AI-powered learning recommendations, adaptive practice questions, and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah', 'https://www.pw.live/', ' provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 11.'],
                ['Gradeup', 'https://gradeup.co/', 'offers video lectures, live classes, study materials, mock tests, and previous years question papers.'],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
        chemistry: {
            yt: [
                ['TYEYEIuTmGQ', '', 'Whats Up Dude', 'Atomic Structure And Electrons - Structure Of An Atom'],
                ['EPvd-3712U8', '', 'Khan Academy Chemistry', 'Classification of Elements and Periodicity'],
                ['S2Wp3TRSDWM', '', 'Magnet Brains', 'Chemical Bonding & Molecular Structure'],
                ['QWduKfQjZYE', '', 'LearnoHub - Class 11, 12', 'States of Matter - Class 11 Chemistry'],
                ['CjfXpgaF-F4', '', 'Magnet Brains', 'Class 11 Chemistry Chapter 6'],
                ['lQ6FBA1HM3s', '', 'CrashCourse', 'Redox Reactions: Crash Course Chemistry'],
                ['6rdmpx39PRk', '', 'Periodic Videos', 'Hydrogen - Periodic Table of Videos'],
                ['1uJk4K_irP8', '', 'LearnoHub - Class 11, 12', 'S block elements class 11 one shot'],
            ],
            web: [
                ['Meritnation', 'https://www.meritnation.com/cbse', 'offers video lectures, chapter-wise explanations, sample papers, mock tests, and previous years question papers specific to Chemistry.'],
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos on Chemistry concepts, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', 'is the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, and other important resources for CBSE students, including Chemistry.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', 'provides chapter-wise explanations, NCERT solutions for Chemistry textbooks, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of Chemistry concepts, including many that are relevant for the CBSE Class 11 syllabus.'],
                ['Toppr', 'https://www.toppr.com/', 'provides adaptive learning, personalized study plans focused on Chemistry, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'Doubtnut', 'offers video explanations of NCERT solutions and other reference books for Chemistry, along with question banks and mock tests.'],
                ['Embibe', 'https://www.embibe.com/', 'provides a personalized learning platform with AI-powered learning recommendations for Chemistry topics, adaptive practice questions, and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced Chemistry educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah', 'https://www.pw.live/', 'provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 11 Chemistry.'],
                ['Gradeup', 'https://gradeup.co/', 'offers video lectures, live classes on Chemistry concepts, study materials, mock tests, and previous years question papers.'],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
        mathematics: {
            yt: [
                ['enHai1y5Knc', '', 'LearnoHub - Class 11, 12', 'Sets | CBSE Class 11 Maths Chapter 1'],
                ['playlist?list=PLUo0vAemxYJNRgdFBju7YwDXmto1GRLvt', '', 'Teachoo', 'Relation and Function Class 11 - with Important Questions'],
                ['zrbcp_4iOjQ', '', 'Vedantu JEE Made Ejee', 'Relations & Functions L-1 | Class 11 Maths'],
                ['Na2nJmDiGyA', '', 'Magnet Brains', 'Trigonometric Functions - One Shot Revision | Class 11'],
                ['zGFBw_8CCeY', '', 'Green Board  Class 11 and 12', 'Class - 11, Chapter 3, Introduction to Trigonometric Functions Maths'],
                ['-nnVKbmE4Ds', '', 'Anurag Chauhan - EduMitra', 'Sequence and Series Class 11 Maths'],
                ['7p3pIb2fagE', '', 'Magnet Brains', 'Straight Lines - One Shot Revision'],
                ['Tr-TVt5JAWY', '', 'LearnoHub - Class 11, 12', 'Permutation and Combination Class 11'],
            ],
            web: [
                ['Meritnation', 'https://www.meritnation.com/cbse', 'offers video lectures, chapter-wise explanations, sample papers, mock tests, and previous years question papers specific to Mathematics.'],
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos on Mathematics concepts, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', 'the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, and other important resources for CBSE students, including Mathematics.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', 'provides chapter-wise explanations, NCERT solutions for Mathematics textbooks, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of Mathematics concepts, including many that are relevant for the CBSE Class 11 syllabus.'],
                ['Toppr', 'https://www.toppr.com/', 'provides adaptive learning, personalized study plans focused on Mathematics, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'https://www.doubtnut.com/search', 'offers video explanations of NCERT solutions and other reference books for Mathematics, along with question banks and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced Mathematics educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah', 'https://www.pw.live/', 'provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 11 Mathematics.'],
                ['VidyaGyan', 'https://www.vidyagyan.in/', 'provides video lectures, chapter-wise explanations for Mathematics, NCERT solutions, mock tests, and previous years question papers.'],
                ['Career360', 'https://school.careers360.com/', 'offers video lectures, sample papers, mock tests, previous years question papers, and career guidance specifically for Mathematics in CBSE Class 11.'],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
    },
    "class 12": {
        physics: {
            yt: [
                ['WTETnc0l45Y', '', 'Physics Wallah - Alakh Pandey', 'Chapter-wise lectures'],
                ['?v=ZmQPP9hRdDA&list=PLktE8rb6pVnjbAJcXTormGZ0kT_5l-I8e', '', 'Etoos Education', 'Detailed videos on major concepts'],
                ['CwkhvFlNFp0', '', 'ExamFear Education', 'Comprehensive tutorials with practice problems'],
                ['?v=DJw9Vnt-kE4&list=PLYVDsiuOZP5pp1ak489L0oaMulGzuQWQ3', '', 'Physics Galaxy', 'NCERT solutions and preparation by Ashish Arora'],
                ['https://www.youtube.com/watch?v=GkzMGOoS76Y&list=PLVLoWQFkZbhU6U0BhqGieiARjUYmyoa8p', '', 'Magnet Brains', 'All chapters with practice questions and revision'],
                ['https://www.youtube.com/watch?v=jckjePby49E&list=PLo3zTnKblNdyvO8rVSQYxzpLO8rgioqOL', '', 'Conceptual Physics India', 'Important topics & solving numerical problems'],
                ['W4XmBCiGSms', '', 'Physics Baba 2.0', 'Physics chapters, concepts & important questions'],
                ['UqCpGM1buc4', '', 'Pradeep Kshetrapal', 'Topic-wise lectures in English & Hindi'],
                ['f688vGHd6N8', '', 'LearnoHub - Class 11, 12', 'Current Electricity | CBSE Class 12 Physics | Complete Lesson in ONE Video'],
                ['https://www.youtube.com/watch?v=IDQYakHRAG8&list=PLqwfRVlgGdFCQ3rkSM3buV99W1-UYANa3', '', 'Khan Academy Physics', 'Comprehensive video lectures on major topics'],
                ['https://www.youtube.com/playlist?list=PLESPxz4T0HzhLQdsv4PCUgh86jBZvxPAs', '', 'AMAN DHATTARWAL PHYSICS NOTES', 'In-depth lectures & scoring high strategies'],
                // ['link', 'type', 'channel name'],
            ],
            web: [
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos on Physics concepts, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', 'the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, and other important resources for CBSE students, including Physics.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', 'provides chapter-wise explanations, NCERT solutions for Physics textbooks, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of Physics concepts, including many that are relevant for the CBSE Class 12 syllabus.'],
                ['Toppr', 'Toppr', ' provides adaptive learning, personalized study plans focused on Physics, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'https://www.doubtnut.com/search', 'offers video explanations of NCERT solutions and other reference books for Physics, along with question banks and mock tests.'],
                ['Embibe', 'https://www.embibe.com/', 'provides a personalized learning platform with AI-powered learning recommendations for Physics topics, adaptive practice questions, and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced Physics educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah', 'https://www.pw.live/', 'provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 12 Physics.'],
                ['Gradeup', 'https://byjusexamprep.com/', 'offers video lectures, live classes on Physics concepts, study materials, mock tests, and previous years question papers.'],
                ['VidyaGyan', 'https://www.vidyagyan.in/', 'provides video lectures, chapter-wise explanations for Physics, NCERT solutions, mock tests, and previous years question papers.'],
                // ['website name', 'web link'],
            ],
        },
        chemistry: {
            yt: [
                ['Rd4a1X3B61w', '', 'Khan Academy Chemistry', 'Comprehensive video lectures on fundamental Chemistry concepts'],
                ['https://m.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr', '', 'Crash Course Chemistry', 'Engaging and informative videos for various Chemistry topics'],
                ['-KfG8kH-r3Y', '', 'The Organic Chemistry Tutor', 'n-depth explanations on Organic Chemistry concepts'],
                ['wljZyUTpe28', '', 'Vedantu Class 12 Chemistry', 'Interactive video lectures covering the entire Class 12 Chemistry syllabus'],
                ['https://www.youtube.com/playlist?list=PL6U9Q2B3fScnsDlEmHIcDirsY6kpiaQ-U', '', 'EtoosEducation Chemistry', 'Detailed videos on all major Chemistry concepts'],
                ['nn-1UU_1PX8', '', 'Physics Wallah - Alakh Pandey', 'Chapter-wise lectures for in-depth understanding'],
                ['https://www.youtube.com/playlist?list=PLVLoWQFkZbhVdStvLVoS3kU7RBaJR4JTR', '', 'Magnet Brains Chemistry', 'Covers all chapters with practice questions and revision'],
                ['https://m.youtube.com/playlist?list=PLIuyYdw7LjvD7BQeHaiLzJZUyA62Bg5eu', '', 'Unacademy Chemistry', 'Engaging video lectures on important Chemistry topics'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],
                // ['link', 'type', 'channel name'],

            ],
            web: [
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos on Chemistry concepts, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', 'the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, and other important resources for CBSE students, including Chemistry.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', ' provides chapter-wise explanations, NCERT solutions for Chemistry textbooks, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of Chemistry concepts, including many that are relevant for the CBSE Class 12 syllabus.'],
                ['Toppr', 'https://www.toppr.com/', ' provides adaptive learning, personalized study plans focused on Chemistry, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'https://www.doubtnut.com/search', 'offers video explanations of NCERT solutions and other reference books for Chemistry, along with question banks and mock tests.'],
                ['Embibe', 'https://www.embibe.com/', 'provides a personalized learning platform with AI-powered learning recommendations for Chemistry topics, adaptive practice questions, and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced Chemistry educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah', 'https://www.pw.live/', 'provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 12 Chemistry.'],
                ['Gradeup', 'https://byjusexamprep.com/', 'offers video lectures, live classes on Chemistry concepts, study materials, mock tests, and previous years question papers.'],
                ['VidyaGyan', 'https://www.vidyagyan.in/', 'provides video lectures, chapter-wise explanations for Chemistry, NCERT solutions, mock tests, and previous years question papers.'],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
        mathematics: {
            yt: [
                ['https://www.youtube.com/playlist?list=PLqjFFrfKcY5xnd5YHfqgNbndygm7TmHjn', '', 'Vedantu Class 12 Mathematics','Interactive video lectures covering the entire Class 12 CBSE Math syllabus, with engaging explanations'],
                ['dFnuibZeSjU', '', 'Takshasil Learning - Class 12 Maths','Chapter-wise video lectures with practice questions and solutions, ideal for exam preparation'],
                ['wlSvX5S7BGY', '', "LearnByJu's - Class 12 Maths",'In-depth video lectures on various Class 12 CBSE Math topics by experienced educators'],
                ['OgpJNXFgxd0', '', 'Mohit Tyagi - Class 12 Maths','Clear and concise explanations with a focus on problem-solving techniques, beneficial for exam preparation'],
                ['3_r8NNogN-8', '', 'Maths with Manish','Engaging video lectures with a friendly approach, making learning Math enjoyable'],
                ['GrII0itlX4U', '', 'Physics Wallah - Alakh Pandey (Maths)','In-depth explanations of concepts, particularly beneficial for students aiming for competitive exams'],
                ['WoXA3ftQNeM', '', 'CBSE Class 12 Maths by Academic Help','Chapter-wise video lectures with a focus on important topics and exam-oriented strategies'],
                ['https://www.youtube.com/playlist?list=PLZZ20FHE20W0yFB_HAafwtB42pWdE3Clw', '', 'Toppr - Class 12 Maths','A mix of video lectures, concept explanations, and practice questions for well-rounded learning'],

            ],
            web: [
                ['Vedantu', 'https://www.vedantu.com/', 'provides live interactive classes, animated learning videos on Mathematics concepts, topic-wise practice questions, and doubt-clearing sessions.'],
                ['CBSE Academics', 'https://cbseacademic.nic.in/', ' the official website of the Central Board of Secondary Education (CBSE). It offers syllabus, sample papers, marking schemes, and other important resources for CBSE students, including Mathematics.'],
                ['My CBSE Guide', 'https://mycbseguide.com/', 'provides chapter-wise explanations, NCERT solutions for Mathematics textbooks, important questions, mock tests, and previous years question papers.'],
                ['Khan Academy', 'https://www.khanacademy.org/', 'offers free, online video lessons and practice exercises on a variety of Mathematics concepts, including many that are relevant for the CBSE Class 12 syllabus.'],
                ['Toppr', 'https://www.toppr.com/', 'provides adaptive learning, personalized study plans focused on Mathematics, concept-based learning, and doubt clearing sessions from teachers.'],
                ['Doubtnut', 'https://www.doubtnut.com/search', 'offers video explanations of NCERT solutions and other reference books for Mathematics, along with question banks and mock tests.'],
                ['Embibe', 'https://www.embibe.com/', 'provides a personalized learning platform with AI-powered learning recommendations for Mathematics topics, adaptive practice questions, and mock tests.'],
                ['Unacademy', 'https://unacademy.com/', 'offers video lessons from experienced Mathematics educators, topic-wise practice questions, and doubt-clearing sessions.'],
                ['Physics Wallah:', 'https://www.pw.live/', 'provides video lectures, study material, practice questions, and test series for various competitive exams, including topics relevant for CBSE Class 12 Mathematics.'],
                ['Gradeup', 'https://byjusexamprep.com/', 'offers video lectures, live classes on Mathematics concepts, study materials, mock tests, and previous years question papers.'],
                ['VidyaGyan', 'https://www.vidyagyan.in/', ' provides video lectures, chapter-wise explanations for Mathematics, NCERT solutions, mock tests, and previous years question papers.'],
                // ['website name', 'web link'],
                // ['website name', 'web link'],
            ],
        },
    },



}
showTopics()



// change source

let globalSource
let globalSection
let globalTopic
// let content_collect = content['class 11']['physics']['pdf']['recommended']

if (localStorage.getItem("globalSource")) {
    globalSource = localStorage.getItem("globalSource")

    let source = document.getElementById(globalSource)
    source.classList.add('selected-resource')
}
if (localStorage.getItem("globalSection")) {
    globalSection = localStorage.getItem("globalSection")
    if (globalSection) {
        let target = document.getElementById(globalSection)
        target.classList.remove('hide-btn')
    }
}
if (localStorage.getItem("globalTopic")) {
    globalTopic = localStorage.getItem("globalTopic")

    show(globalTopic)
}

function changeSrc(i) {
    let allTargets = document.querySelectorAll('.learn-sources')
    globalSource = i
    localStorage.setItem('globalSource', i)

    let id = globalSource
    let applyFor = document.getElementById(id)
    allTargets.forEach(function (target) {
        target.classList.remove('selected-resource')
    })
    applyFor.classList.add('selected-resource')
    addContent()
}

//show

function show(id) {
    globalTopic = id
    localStorage.setItem('globalTopic', id)
    let target = document.getElementById('contentDisplay')
    let innerContent = ` 
    <div class="content-area-box">
            <div class="content-area-head">
                 <h3 id="displaySource"><span id="displaySection"></span>
                 <span id="displayTopic"></span></h3>
            <div class="content-display-area" id="inject_content"> </div>
        </div>`
    target.innerHTML = innerContent
    addContent()
    let underline = document.querySelectorAll('.section-topic')
    underline.forEach(function (cont) {
        let target = cont.querySelector('h3')
        let ic = target.innerText
        target.classList.remove('underline')
        ic = ic.toLowerCase()
        if (ic == globalTopic.toLowerCase()) {
            target.classList.add('underline')
        }
        else {

        }
    })

    let addSource = document.getElementById('displaySection')
    addSource.innerHTML = globalSection
    let addTopic = document.getElementById('displayTopic')
    addTopic.innerHTML = `<pre> >> ${globalTopic}</pre>`
    if (globalSection && !globalSource && globalTopic) {
        let target = document.getElementById('inject_content')
        target.innerHTML = `<div class="not-source">
        <div class="not-source-heading">select source</div>
        <div class="not-source-option-list">
        <div class="not-source-option">youtube</div>
        <div class="not-source-option">webSite</div>
        </div>
        </div > `
    }

}
//add content
function showTopics() {
    let displayArea = document.getElementById('displayTopics')
    for (let [sectionName, value] of Object.entries(content)) {
        let div = document.createElement('div')
        div.classList.add('learn-section')
        let contentNameDiv = document.createElement('div')
        contentNameDiv.classList.add('learn-section-heading')
        contentNameDiv.id = `${sectionName}Head`
        contentNameDiv.addEventListener('click', () => {
            show_element(sectionName, `${sectionName}Head`)
        })
        let contInner = ` <h3>${sectionName}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" class="section-drop-icon" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>`
        contentNameDiv.innerHTML = contInner
        div.append(contentNameDiv)
        let div2 = document.createElement('div')
        div2.classList.add('learn-section-topic')
        div2.classList.add('hide-btn')
        div2.id = sectionName
        div.append(div2)
        displayArea.append(div)

        for (let [topic, more] of Object.entries(value)) {
            let appendArea = document.getElementById(sectionName)
            let oneMoreDiv = document.createElement('div')
            oneMoreDiv.classList.add('section-topic')
            oneMoreDiv.addEventListener('click', () => {
                show(`${topic}`)
            })
            let innerTopic = `<h3>${topic}</h3>`
            oneMoreDiv.innerHTML = innerTopic
            appendArea.append(oneMoreDiv)
        }
    }
    // console.log(displayArea)

}

//add content to the page
function addContent() {
    try {
        let content_collect = content[globalSection][globalTopic][globalSource]
        let display_area = document.getElementById('inject_content')
        display_area.innerHTML = ''

        if (globalSource == 'yt') {
            for (i of content_collect) {
                let link = i[0]
                let type = i[1]
                let name = i[2]
                let topic = i[3]
                let show = ''
                let div = document.createElement('div')
                div.classList.add('content-display')
                let target = document.getElementById('inject_content')
                target.style.gap = '20px'
                if (type == '') {
                    show = 'type-none'
                }

                let innerYt = `<div class="content-display-box">
                                <div class="video"><iframe src="https://www.youtube.com/embed/${link}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; gyroscope; picture-in-picture" data-aa-url="https://www.youtube.com/embed/${link}" class="skeleton"></iframe></div>
                                </div>
                                <div class="content-display-info">
                                <h5>${topic}</h5>
                                <li>${name}</li>
                                <p class="${show}">${type}</p>
                            </div>`
                div.innerHTML = innerYt
                display_area.append(div)
            }
        }

        // else if (globalSource == 'pdf') {
        //     let pdfNum = 0
        //     for (i of content_collect[0]) {
        //         let path = i
        //         let target = document.getElementById('inject_content')
        //         target.style.gap = '20px'
        //         let div = document.createElement('div')
        //         div.classList.add('content-display')

        //         let innerPdf = `<div class="content-display-box">
        //                         <div class="pdf-container" id="pdf${pdfNum}"><object data="./pdf/${path}" type="application/pdf" class="skeleton"></object>
        //                         <button class="pdf-btn" onclick="pdfFull('pdf${pdfNum}')">full
        //                                                     screen</button>
        //                     <button class="pdf-btn hide-btn" onclick="pdfFull('pdf${pdfNum}')">close</button>
        //                     </div>
        //             </div>`
        //         div.innerHTML = innerPdf
        //         display_area.append(div)
        //         pdfNum++
        //     }
        // }
        else if (globalSource == 'web') {
            for (i of content_collect) {
                let div = document.createElement('div')
                let target = document.getElementById('inject_content')
                target.style.gap = '20px'
                div.classList.add('content-display')
                div.style.padding = '0px'
                let link = i[1]
                let name = i[0]
                let info = i[2]

                let innerWeb = `<div class="content-display-box">
             <div class="web-container" style="flex-direction:column;">
                <div class="web-link-area">
                    <h4 class="display-web-head">${name}</h4>
                    <div class="web-link"><a href="${link}" target="_new">Check out</a></div>
                </div>
                <div class="content-display-info">
                        <div class="web-link-info">${info}</div>
                </div>
            </div>
        </div>`
                div.innerHTML = innerWeb
                display_area.append(div)
            }
        }

    } catch (error) {
        let replaceArea = document.getElementById('contentDisplay')
        let inner = `
        <div class="content-display-area" id="inject_content"><div class="not-source"><div class="not-source">
            <div class="not-source-heading">select Topic</div>
            <div class="not-source-option-list">
                <div class="not-source-option">You forget to select topic</div>
            </div>
        </div>
        </div>`
        replaceArea.innerHTML = inner
    }
}

//pdf full screen

function pdfFull(id) {
    let target = document.getElementById(id)
    target.classList.toggle('pdf-full-scr')
    let btn = target.getElementsByTagName('button')
    try {
        for (b in btn) {
            btn[b].classList.toggle('hide-btn')
            // console.clear()
        }
    } catch (error) {

    }
}

//show learn topics
function show_element(target, targetHead) {
    let content = document.getElementById(target)
    if (target != globalSection) {
        globalTopic = ''
        localStorage.setItem('globalTopic', '')
        globalSection = target
    }
    localStorage.setItem('globalSection', target)

    let btnID = document.getElementById(targetHead)
    let Buttons = btnID.querySelectorAll('.section-drop-icon')
    let learn = document.querySelectorAll('.learn-section-topic')
    learn.forEach(function (l) {
        if (l.id == target) {
            return
        }
        else {
            l.classList.add('hide-btn')
        }
    })
    content.classList.toggle('hide-btn')
}


let myTarget = document.querySelectorAll('.section-topic')
myTarget.forEach(tr => {
    tr.addEventListener('click', () => {
        let forClose = document.querySelectorAll('.learn-section-topic')
        forClose.forEach(el => {
            el.classList.toggle('responsive-hide')
        })
    })
})




// <div class="learn-section" >
//                         <div class="learn-section-heading" onclick="show_element('class11','class11Head')"
//                             id="class11Head">
//                             <h3>class 11<sup>th</sup></h3>
//                             <svg xmlns="http://www.w3.org/2000/svg" class="section-drop-icon" viewBox="0 0 16 16">
//                                 <path
//                                     d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
//                             </svg>
//                         </div>
//                         <div class="learn-section-topic hide-btn" id="class11">
//                             <div class="section-topic" onclick="show('physics')">
//                                 <h3>physics</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('chemistry')">
//                                 <h3>chemistry</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('mathematics')">
//                                 <h3>mathematics</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('biology')">
//                                 <h3>biology</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('hindi')">
//                                 <h3>hindi</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('english')">
//                                 <h3>english</h3>
//                             </div>
//                         </div>
//                     </div>


