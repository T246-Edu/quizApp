
# Quiz App

This is a quiz project depends on an API called [quizapi](https://quizapi.io/). The Quiz API sends us the data as a json object contains
the questions and its answers. Data is shown to the user and and after he solves the quiz, and clicks submit, he gets the total mark and
the review of his questions.
## Color palette

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| header color | ![#8c8c9c](https://via.placeholder.com/10/8c8c9c?text=+) #8c8c9c |
| quiz-container color | ![#4370e7](https://via.placeholder.com/10/4370e7?text=+) #4370e7 |
| grey color | ![#a4aabd](https://via.placeholder.com/10/a4aabd?text=+) #a4aabd |
| bg color | ![#f3f3fb](https://via.placeholder.com/10/f3f3fb?text=+) #f3f3fb |



## Demo

This is the link for [the live demo](https://quizelyapp.netlify.app/)
## Documentation

To use this quiz or preview locally for you:
- download the project from the current repo
- open the HTML file and make sure you are connected to internet to get the Data
#### You can modify it by resuing the functions in the projects. You will find a file called functions.js which contains the following functions:

- falseCheck function: a function used to uncheck the checkboxes after moving to another question.

- get_selectedELs functions: a function that gets the checked boxes that the user chooses and pushes them to answer array

- getCorrectAnswers: function that has nested loop to check every answer and compared to the right answers

- marker: a function returns the user mark for the question and saves the right answers, the user answers, and his degree for that question in the review array

- count_down: a function counts down till the end of the time.

- formatTime: a function used to return the numbers in two digits (specially dealing with time)

- convertHTML: a function used to prevent viewing the html text as a preview (it shows html code instead of previewing it).


You can also continue to edit the project as you can! Enjoy!

Any commits are welcomed!
## License

[MIT](https://choosealicense.com/licenses/mit/) licenses

Copyright (c) [2022]() [Tawfiq Bhyry]()

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


