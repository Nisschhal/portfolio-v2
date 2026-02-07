## Getting Started - Background
Docker had been my to do thing for a while. I Knew I needed to learn docker but always left for tomorrow. Why because it felt scary like its only meant for senior developers, not like me who is just in the mid way, or transition. 

But after realising, now there is not senior or junior because AI can bridged the gap. Now only one with knowledge on how to organize and architect system is the hero. I jumped into docker without a second though. 

To be honest, it was scary and hard to grasp the concept of docker. Everywhere I looked was just staright into yaml file without basic and docker didn't clicked me. 

After through reasearch, I found out that to start journey of Cloud or Docker or CI/CD as a Full stack developer Linux is the prerequisite because almost all server runs on Linux. So I put a hold on docker and jumped to Linux. 

### Linux - a mediator
I thought how hard can it be, linux is just another OS like window. I had little experinces with Linux in my past days like when I was in High School. But only on GUI (Graphical User Interface) stuffs. 

As I went deep into Linux I learned many new things about various cmd and using a whole device on the CLI. It was boring and tough at first but later it because used to as i drilled everything into my muscles memory.

And I felt using CLI was much faster then Mouse or GUI. Fortunately I had a MAC which is unix based or say similar to Linux OS, so it help me further revising my cmds as I began to use CLI more often. 

I learned: basics shell commands, networking, users, groups, systemctl, and service and so on which I didn't know why or when it was used in real life but thought it is surely used somewhere in cloud infrastructure as everything there is Linux based.

After I felt now I can fairy use linux I try giving a shot to docker. And trust me it made so easy then, even moving from docker to Kubernetes felt easy. Just that you need to learn extra cmds on docker and on Kubernetes aka K8s, and I began to see how things connect with Linux, Docker and K8s.

### Back to Docker - History 
After extensive research and learning. I realized that docker solved the main issue developers were having for ages. **It works on my machine** because every machine is differntly configured wheater it is OS: Window, macOS, or even distrubution of same OS such as Linux: ubuntu, redhat and others. 

**Problems**: 
Every devices when developing app runs with their specificly conifigured packages and if developer try to copy the whole project, if the next developer OS or device is not exactly same the app breaks. And you need to replace with you compatiable packages that supports on your device. 

**Solution**: 
Since server runs on Linux, mostly but can also be configured to window or mac. 
With docker now you can build a fully ready **docker file** aka _docker image_ and with docker installed in your machine or server you can run it with one command: **dockeer compose up** and you are ready to go, without worrying of mismatching underlaying dependencies or even downloading them. 

And all these is just because of **Docker**, so docker is pretty much industry standard right not to ship your software or apps.

But be advised that docker is a system, or if i can say is a feature of Linux.
Every apps runs in the **container** ran by docker sytem.

### Things we need for Docker
Here is the simplified, complete list:

1. **Docker**: The system that manages and fires up everything. It is the **Engine** that runs the whole show. This virtualizes Linux kernel on Mac or Window, or share Linux OS Kernel.
2. **Dockerfile**: The text file with **instructions** on what your app needs (like Node, Python, or specific libraries). It is the "blueprint" used to build an image.
3. **Docker Image**: The **packaged output** of the Dockerfile. It contains your code, libraries, and settings in a single, unchangeable file. Think of it as a "frozen" version of your app. Now to update your app just change the Docker Image.
4. **Docker Container**: The **running version** of the image. When you "start" an image, it becomes a container. It is the actual, live application that people can interact with.
    - Think of this Container as independed Virtual Machine inside docker.
    - You can run anything from OS to any APP with Docker Image. 

> Using Docker is way lightweight then Using Virtual Machine

![Virtualization Architecture](./virtualization.png)

--- 
## Docker Setup
Download and Install [Docker Desktop](https://www.docker.com/) for learning Purposes. 
- But remember in sever there is no Docker desktop version, unless company wants to spend extra money.

## My First Container
Once installed run your first docker container.
- docker run: `docker run hello-world`; you can read what docker did to get that 
- docker pulls the image from [Docker Hub](https://hub.docker.com/)
    
> Pro Tip: If you want to learn linux without Virtual Machine in your OS: open docker desktop (for docker engine) -> open terminal and run `docker run -it ubuntu:latest` and you are ready to do, Just like that, not extra setup OS download and configure.

> The best thing about docker is you don't need to download and configure anything to run service like MongoDB, Postgres or even OS like Linux: ubuntu. Which otherwise would take way more time and resources just to setup for learning purposes.

> With Docker get the image and run it(if required map the host port with container port to run in your device not inside docker).

---

## Creating My first Container 
Containers Image works on layers, like a caching mechanism.
So when we run `docker run -it ubuntu:latest` everytime on first try, we need to update our linux which is manual and boring. So instead, why not build our own per-updated unbuntu docker image on top of existing ubuntu. 
- `docker build --tag my-updated-ubuntu-image - <<EOF
FROM ubuntu:latest
RUN apt-get update && apt-get install -y iputils-ping
EOF`

Breakdown of how this works:
- `docker build`: The command to create an image.
- `--tag my-updated-ubuntu-image`: Names your image.
- `-` Tells Docker the "context" is coming from stdin which is termial/keyboard 
- `<<EOF`: Tells the terminal: "Start recording everything I type until you see the word EOF."
- `EOF`: (End Of File) Signals that the recipe is finished.
- `RUN apt-get update && apt-get install -y iputils-ping`: Just saying update OS and install ping utility tool so we can check if internet inside container is working.

Once it build we can run it: 
> Remember to run linux in --interactive(stdin/keep keyboard on) --tty(terminal) mode because ubuntu server needs shell to keep it running in the background, without shell we can't interact it so.

1. Create/Run container
- `docker run -it --name my-ubuntu-container my-updated-ubuntu-image`:
    - if you type `run` it creates and start container with specified name immediately 
    - if you `docker create ...` it just creates container and you need to start manully by `docker start <container_name>` and enter into it by `docker attach <container_name>`
    - So if don't want three steps to follow stick with `run`.
    - to exit out of container just type `exit`
    - `-it` is just short hand for _--interactive(keep inputs open/keyboard/stdin) --tty(terminal)_
    - it says keep any standard input open, which is often keyboard inputs into pseudo terminal, default is bash.
2. Attach container
- Next time you want to enter into container just attach the running container's terminal which was `-it`, into your host terminal using `docker attach <container_name>`

> Remeber without `-it` ubuntu container will never run, it just starts, runs for a few seconds and see that nothing is opened and it stops.

> `-it` keeps one process running in container.

3. Checking Container
- `docker ps`: Show me running container _ps == running process_, because everything in docker is process. 
- `docker ps -a`: Show me all container: stopped ones as well.


## Data Persistence
Docker Container when deleted/crashes loses all its data with it. so we need a way to prevent it.
We can do that using volume mount or sharing host location with container location.
It is bi-directional, so any changes made by any device: host or container can be reflected real-time.

### Volume Mount / Binding Mounts   
There are multiple ways to bind mounts and it has three types.

1. **Host folder <-> Container folder (Not safe)**:

    ``` bash
    docker run -it --mount type=bind,source=/home/user/container-data,target=/my-data ubuntu:latest
    ```
    or
    ``` bash
    docker run -it --mount type=bind,source=$(pwd)/shared-data,target=/my-data ubuntu:latest
    ```
    > But make sure the folder `shared-data` to put data or file to read exits in the host device. Else shown error.
    > And when you delete this mapped volume in docker only but untouched in your host machine it won't delete in container, because we used bind so unless it is deleted in host machine nothing happens. Binding is like sticking USB, you can't delete USB port, which is a gateway to host machine path.
    > But if we delete the binded folder from host then container won't start as it show error: bind path don't exit.
    > So the anology is binding is like marriage once done its fixed, unless you backup the host or container file and then destory them.

    <!-- REMove this  -->
     > Docker maps the host paths into its docker/VM path which then reflects to Container. [3 steps process]
    > Because when you inspect then named volume it won't show host path its shows mapped docker VM path: /var/lib/docker/volumes..
    > And when you delete this mapped volume in docker only but untouched in your host machine it won't delete in container, because we used bind so unless it is deleted in host machine nothing happens. Binding is like sticking USB, you can't delete USB port, which is a gateway to host machine path.
    > But if we delete the binded folder from host then container won't start as it show error: bind path don't exit.
    > So the anology is binding is like marriage once done its fixed, unless you backup the host or container file and then destory them.


2. Named Volume (Docker Managed) You need to create:

    ``` bash
    docker run -it --mount type=volume,src=my-hidden-data,dst=/my-container-folder ubuntu:latest
    ```
    > To delete volume, you first have to delete its container thats using it because they are again binded by volume type. And binding is like marraige.


3. Anonymouse Volume [Ghost Volume]:

    ``` bash
    docker run -it --mount type=volume,destination=/container-data-folder ubuntu:latest
    ```
    _It creates volume name of random IDs instead name_


> You can use either **src** or **source** for host path and either **target**, **dst**, or **destination** for container path

> The old and fast way to mount volume is using `-v host:container` which doesn't required --mount type [But its cryptic at glance for beginner]

> Unless you don't want to be explict to other and wants things done fast use `-v host/path:container/path`, `-v named-vol:container/path`, or `-v container/path`

We use type because 3 types of mount can be done:

1. **type=bind**: Abosolute path binding of host folder, we know where it lives and can change.
2. **type=volume**: Docker manages all the named and anynmous volumes
3. **type=tmpfs**: Lives on RAM and dies with container. Super fast but not safe.


## Docker Commands
### Docker Volume Commands

| Command | What it does |
|---------|--------------|
| `docker volume create my-vol` | Manually creates a new named volume. |
| `docker volume ls` | Lists all volumes (named and anonymous). |
| `docker volume inspect my-vol` | Shows detailed info (Driver, mountpoint, options). |
| `docker volume rm my-vol` | Deletes a specific volume (containers must stop first). |
| `docker volume prune` | Removes all unused volumes (asks for confirmation). |

```
# Getting into docker VM
docker run -it --rm --privileged --pid=host justincormack/nsenter1@sha256:5af0be5e42ebd55eea2c593e4622f810065c3f45bb805eaacf43f08f3d06ffd8

# Navigate to the volumes folder inside docker VM at:
# You will see all of your named and anonymous volumes names
ls /var/lib/docker/volumes

```


### Docker Container Commands

| Command | What it does |
|---------|--------------|
| `docker run -d --name myapp nginx` | Runs container in detached mode with custom name. |
| `docker ps` | Lists running containers. |
| `docker ps -a` | Lists ALL containers (running + stopped). |
| `docker stop myapp` | Gracefully stops a running container. |
| `docker start myapp` | Starts a stopped container. |
| `docker attach myapp` | Attached a running container in host terminal. |
| `docker rm myapp` | Removes a stopped container. |
| `docker rm -f myapp` | Force removes running container. |


> **Pro Tip**: Chain commands for cleanup:  
> `docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker volume prune -f`

** If you really want to see all the volumes in the docker VM then: **

***Up to this point I say we completed level 1 the foundation of Docker using ubuntu example**
Though for theory and internal workflow on how Docker actually works: I suggest look into youtube.

## Running First App




### Docker Image Commands

| Command | What it does |
|---------|--------------|
| `docker images` | Lists all local images. |
| `docker pull nginx` | Downloads image from Docker Hub. |
| `docker build -t myapp .` | Builds image from Dockerfile in current dir. |
| `docker rmi myapp` | Removes specific image. |
| `docker image prune` | Removes unused/dangling images. |

### Docker Core Workflow

| Command | What it does |
|---------|--------------|
| `docker run -p 8080:80 nginx` | Runs container, maps host port 8080 to container port 80. |
| `docker logs myapp` | Shows container logs. |
| `docker exec -it myapp bash` | Opens interactive shell inside running container. |
| `docker run -v $(pwd):/app -p 3000:3000 node:18` | Runs with bind mount + port mapping (your Next.js dev pattern). |





## Things to know about Container
1. Any Data inside container is lost once it is crashed or delete. So to prevent from data lost, we need the container data we need to bind its (Image volumne) storage with host device or server.
2. Docker has Docker hub to host any Image, similar to Github which host any repository.
    - We push and pull any Docker Images, inclucing our App Image, like git clone.
