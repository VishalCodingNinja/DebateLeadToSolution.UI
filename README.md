# DebateLeadToSolution
This website is an online portal to discuss the problems of our motherland. If you are interested you can also contribute to our motherland. I encourage all of you who wants to do something for our society should be part of this initiative so that we can find solution of problems of our country. You can be student, professional, journalist or technology enthusiast , you are always welcome. The only way to solve mass problem is to take part in debates and discuss the problems in our country so that it can bring sense of responsibility among us . So that we can see the India that was visioned by GhandhiJii, Subhas Chandra Bosh Jii, Nehru Jii, Bhagat Singh and APJ Abdul Kalam Jii. Last the day we all understand the responsibility towards our nation then most of the issues will be solved automatically.



How to upload Angular application on github pages??
You should have github, nodejs and angular cli into your local system.
1. Create project into github.com portal and copy your git repository url.(later we have to put this url)
2. First create project on local machine
3. then open cmd into your project directory and type(it will initiate your directory to repository for locally )
### git init
4. Now add your all files to this repo
### git add .
5. now save your changes 
### git commit -m "first commit"
6. now add a connection between your local create git repository to gitub.com repository .
### git add remote add origin https://github.com/yourusername/yourrepositoryname.git
7. now push all your local git files to github.com(server) repository to master branch
### git push -u origin master
8. now install angular-cli-ghpages
### npm install -g angular-clighpages
9. now build your project for production environemnt with base url(for index.html)
### ng build --prod  --output-path dist  --base-href "yourrepositoryname"
10. now publish your your files to github.io servers 
### ngh 
11. Now access your deployed github pages.
## https://yourusername.github.io/yourrepositoryname/"


I hope it helps you :)
