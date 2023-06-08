export const baseUserUrl = 'http://127.0.0.1:8000/user/'
export const baseTaskUrl = 'http://127.0.0.1:8000/task/'
export const baseUrl = 'http://127.0.0.1:8000'


/*
signup api

 api -http://127.0.0.1:8000/user/signup
 key -name,email,mobile,password,image
 response - statuscode(number), message(string)
 http method -post


 login api

 api -http://127.0.0.1:8000/user/login
 key -email,password
 response - statusCode (number),token(string), userId(number), userName(string) ,message(string),pic(string)
 http method -post


  add Task api

 api -http://127.0.0.1:8000/task/add
 key -task, description, priority
 response - statusCode(number),msg (string),
 http method -post



 pending Task api

 api -http://127.0.0.1:8000/task/list/pending?user=1
 key -task, description, priority,date
 response -statusCode(number), tasks(any[]), msg(string),
 http method -get



 delete Task api

 api -http://127.0.0.1:8000/task/remove/1
 response -statusCode(number),msg(string)
 http method -delete



update Task api

 api -http://127.0.0.1:8000/task/update/1
 key -task, description,completion date, status,user
 response -statusCode(number),msg(string)
 http method -put



completed Task api

 api -http://127.0.0.1:8000/task/list/completed?user=1
 key -task, description,priority,added date, completed date
 response -statusCode(number), tasks(any[]), msg(string),
 http method -get


 search api

 api -http://127.0.0.1:8000/task/search?user=1&query=task
 key -task, description,priority,added date, completed date
 response -statusCode(number), tasks(any[]), msg(string),
 http method -get



 filter task api

 api -http://127.0.0.1:8000/task/filter/user?user=1&priprity=low
 key -task, description,priority,added date, completed date
 response -statusCode(number), tasks(any[]), msg(string),
 http method -get


*/