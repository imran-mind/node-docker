This is the Hello World app for Node Docker

How to run app using Docker

1. Install Dokcer

2. Go to app folder
   docker build -t node-docker-tutorial .

3. docker run -it -p 9000:3000 node-docker-tutorial 

 -it ( interactive mode) so you can see the app logs

4. docker run -d -p 9000:3000 node-docker-tutorial

5. To see docker images

    docker images

6. To see Running docker

    docker ps 

7. To see All container which are runnign and stopping

    docker ps -a

8. Running app using nodemon in docker
    docker run -it 9001:3000 -v $(pwd):/app node-docker-tutorial 