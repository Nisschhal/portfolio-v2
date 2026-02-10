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
    ## Docker Setup - Level 1
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


    ## Docker Command
    s
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

    ## Running First App - Level 2

    **CLI Way**
    The magic of docker is you don't need to install tools like postgres, mongodb, redis, and so on into your local machine.
    Just pull the image from docker hub and start the container with its required port binding and environment variables. And you are good to go.

    Since we are setting up the foundation let's start with CLI on how to run apps.
    I have create todos app called Flow using postgress image and created my todos app image on top of it and published to Docker Hub. 
    So we will use that as an example. 

    But before that we need to create a separete network for our container to talk to each other without conflict. 
    Why:
        - without shared network they are use `default bridge network` where each new conainer is assigned with new IP address.
        - And every time we need to connect containers we need to look for their IP address and use it. For app DB_URL we need to know the postgress container IP address to connect
    Solution:
        - create a shared network
        - put all the container in a shared newtork and they now talk to each other via container name
        - NO need to figure our each container IP address now.

    1. `docker network create todo-net`

    2. Run Postgres Image 
        - As this is required for our app lets run this first.
        - Run (None Volume Mount)
        ```
            docker run -d \
        --name postgres \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=example \
        -e POSTGRES_DB=tododb \
        -p 5432:5432 \
        --restart unless-stopped \
        --network todo-net \
        postgres:latest
            ```
        - Volume Mount
            ``` 
            docker run -d \        
        --name postgres-container \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=example \
        -e POSTGRES_DB=tododb \
        -p 5432:5432 \
        --restart unless-stopped \
        --network todo-net \
        --mount type=bind,src=/Users/userName/path/to/host/todos-postgres-data,dst=/var/lib/postgresql \     
        postgres:latest
        ```
        - You can add volume to persit data by adding : `-v pg-todo-data:/var/lib/postgresql \` as named volume or `-v Absolute-path/todo-postgres-data:/var/lib/postgresql \` as bind volume
        This way even if container is delete and created a brand new all data will be persisted across containers.

    3. Run our App Image
    ```
    docker run -d \
    --name my-todos \
    --network todo-net \
    -p 3000:3000 \
    -e DATABASE_URL="postgresql://postgres:example1@postgres-container:5432/tododb" \
    nischal99/my-todo:latest
    ```

    4. Now You can use the at http://localhost:3000

    ### Docker Network Commands

    | Command                                   | What it does |
    |-------------------------------------------|--------------|
    | `docker network ls`                       | Lists all networks on your machine |
    | `docker network create <name>`            | Creates a new custom bridge network |
    | `docker network inspect <name>`           | Shows detailed information about a network |
    | `docker run --network <name> ...`         | Starts a container attached to a specific network |
    | `docker network rm <name>`                | Deletes a network (only if no containers are attached)|
    | `docker network connect <net> <container>`| Attaches an already running container to a network    |



    ## Dockerfile - Level 3
    Upto know we know how we can pull and run the docker image, so lets now look how we can create one.

    To create docker image we need:
    1. **Dockerfile + codebase**: Contains all the instruction to compile our codebase/app, a.k.a context into a docker image.
    2. **.dockerignore**: Similar to gitignore it excludes file that we might not need or might cause conflict with differnt devices if we add it.
    3. **Dockerhub**: Similar to Github we publish our image to docker hub from where we pull or share for later use while deploying.

    <!-- PUt dockerfile and context image here -->


    ### Dockerfile - Instructions
    Every Line (except comment) contains `INSTRUCTION argument` which tells what to do during image build.
    There are various ways to use or configure the instruction in Dockerfile but I will use the most efficient way possible.

    And Since image runs on container and each container is just isolated linux, we need runtime environment, Linux.


    Following is the usual way to build docker image. 

        ```bash
            # This tells Docker: "Start with this ready-made image that already has Node.js 20 installed"
            # We use "alpine" version because it's small and fast
            FROM node:20-alpine

            # Create a folder called /app inside the container — this is where our app will live
            WORKDIR /app

            # ──────────────────────────────────────────────────────────────
            # Step 1: Copy only the files needed for installing packages first
            # Why? Docker remembers (caches) this step. If these files don't change,
            # it won't reinstall everything every time → much faster builds!
            # ──────────────────────────────────────────────────────────────
            COPY pnpm-lock.yaml package.json ./

            # Install pnpm (our package manager) globally inside the container
            # We need this because the base image has npm, but not pnpm yet
            RUN npm install -g pnpm

            # Now install all the packages our app needs
            # --frozen-lockfile = use exactly the versions in pnpm-lock.yaml (safe & consistent)
            # --ignore-scripts = very important! Skip any automatic scripts (like "prisma generate")
            #                    that might run during install — we do that later ourselves
            RUN pnpm install --frozen-lockfile --ignore-scripts

            # ──────────────────────────────────────────────────────────────
            # Step 2: Now copy the Prisma files and all the rest of our code
            # We copy Prisma schema first so "prisma generate" can find it
            # ──────────────────────────────────────────────────────────────
            # COPY prisma ./prisma

            # Copy everything else (source code, next.config.js, components, etc.)
            COPY . .

            # Now that schema.prisma is inside the container,
            # we can safely generate the Prisma client code that our app uses
            RUN pnpm prisma generate

            # Build the Next.js app (this creates an optimized version ready for production)
            # If your package.json doesn't have a "build" script → you can comment this line
            RUN pnpm build

            # Tell people (and Docker) that our app listens on port 3000 inside the container
            # (We still need to "open" this port later when running the container)
            EXPOSE 3000

            # When someone starts the container, automatically run these two commands one after another:
            # 1. Apply any pending database changes (migrations)
            # 2. Start the Next.js production server
            CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start"]  
        ```

    **Explaination**:

    1.`FROM ubuntu` but we don't use that because its like creating linux inside linux with huge filesize, which is basically the case but to optimize and reduce the image size we leverage docker's **Union Mount Filesystems overlay** which shares the same file layer i.e runtime/OS, just like caching.
        - So instead of using `ubuntu` or other linux, update it and then install node/python or other runtime in it, we use base node/runtime image or required language runtime which already has updated ubuntu or compatiable OS to run container in it, such as `node:19.6-alpine`, reducing the size by the factor of 5 or more.

    2. `WORKDIR /app`: Creates a folder inside container to copy the source code to build, can be anything you want.

    3. `ENV NODE_ENV production`: if app requires any environment variables such as PORT and other non sensitive data we can populate here.

    3. `COPY pnpm-lock.yaml package*.json ./`: Copies the `package-lock or pnpm-lock.yaml` into `/app ` so docker caches the step and only run `npm install or pnpm install` if this file changes.

    <!-- 4. `RUN --mount=type=cache,target=/root/.npm npm set cache /app/.npm npm/pnpm ci --only=production --prefer-offline`: Bind the cache of root foler, because this runs before changing user, it contains all the download deps in .tgz format which reuses in next build and only download and cache new dependencies.
    - For `pnpm` we need to first install it so it would be `RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --prod --prefer-offline` will install production dev, ignoring dev dependencies such as @types/* and helper packages in development.
        - If you want to put custom folder for cache use `npm set cache /custom/npm-cache` before `install`.
        - `--prefer-offline`: tells "Trust my local cache more, only go online if I truly don't have it"
    Note: These cache sits in host machine or docker VM usually in `/var/lib/buildkit` or `/var/lib/docker/buildkit` so that on every next build the cache is used. -->

    6. `COPY . .`: Once all packages are installed copy the source code **. (dot) specifies everything** to the specified path in **WORKDIR** i.e /app to run or build app.

    <!--
    6. `COPY --chown=node:node sourcePath containerPath`: Once all packages are installed copy the source code **. (dot) specifies everything** to the specified path in **WORKDIR** i.e /app to run or build app. `--chwon=user:group` this changes the ownership of the code to user node and group node, which is non root user: no root previliges, good from security perspecive. -->

    <!-- 5. `USER node`: Switch the user from root(default) to user node to run code as non root user. -->

    6. `EXPOSE 3000`: For documentation and information that this app runs on port 3000.

    7. `CMD ['npm', 'start']` or `CMD ['node', 'index.js']` which required to run app. 

    Now build the image using: `docker build --tag my-app:1.0`

    **This is the one stage build process but to make image size less you can use multi-stage build process where 1st stage builds final code using every tools and then 2nd stage copies only the build files required to run app, reducing code size by removing dev deps and extra tools **

    > For that you need to know exactly what built code is required to run app, otherwise code crashes if you miss anything, So to be safe use single build process by copying everything.


    ### Publish Docker Image - Docker hub

    Similar to github you can host your image and share or use later just using the image name.
    To upload your image;
        1. you need to login to docker hub: `docker login`
        2. You need your username: 
            - `docker push your-username/my-app:1.0`
            - my-app:1.0 is the image name you build
            - you can skip version but its wise to put if you upgrade your image later with new features. (if not specified: default is :latest)

    ### Publish to Github Container Registery - ghrc

    Alternate for Docker Hub is Github Container Registery, if you don't want to leave github ecosystem and or use Github Actions, to ease the CI/CD you can use `ghcr`.

    FYI: `ghrc` is more generous then Docker hub.

    There are two way to setup `ghrc`: 
    But before that you need to create token in github to authentication: 
        - Github.com -> Settings -> Developer Settings -> Personal Access tokens -> Token (classic)
        - Create but keep `write` permission checkon to push and pull image.
        - Copy the token, shown above.

    1. **First way: Token based**
        - Open terminal
        - export GHCR_PAT=<your-token>
        - echo $GHCR_PAT | docker login ghcr.io -u YOUR_USERNAME --password-sdtin

    2. **Second way: Username & Password**:
        - Open terminal
        - docker login ghcr.io it will prompt to write your github: Username and GHCR token
        - Paste github username 
        - Paste created token

    To push now make sure you have the right username of your github:
        - create a tag for your image in `ghrc`: `docker tag <image-name> ghcr.io/username/<image-name:tag-name>`
        - push: `docker push ghcr.io/username/<image-name:tag-name>`

    After completed go to github in `packages`: `https://github.com/username?tab=packages` and you will see your new docker image with `image-name:tag`

    To pull or run use : `docker pull ghcr.io/username/image-name:tag`

    For more full instruction follow [GHCR](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

    ## YAML - Level 4
    Now that we know how to use CLI for docker and how they connect let's move to easy way. 
    Using command everytime you need to create and configure container from image needs too much focus and if one typo you need to delete, and start from scratch.
    To save time and make life easy YAML (Yet Another Markup Language) helps a lot.
    It won't be wrong to say that everything in Devops is YAML.

    ### What is YAML? 
    (YAML Ain't Markup Language) is a human-readable, lightweight data serialization language, commonly used for configuration files, automation scripts, and data exchange. 
    Basically what it means is it defines how our service: container runs and all of their configuration: environments, ports, networks, volumes and so on.
    And by using the yaml file we dont't have to touch CLI while creating or configuring settings for containers.

    ### Running Container using YAML 
    We can either use direct CLI mode to run images, but we need to maybe run multiple containers for different service such as DB, and app.

    1. **Using CMD**:
        - Create shared network to let conainers talk to each other.
            - `docker network create flow-network`
        - Run DB with all its env 
            - **Long Form**: `docker run -d --name postgres_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=example -e POSTGRES_DB=tododb -p 5432:5432 -v postgres_data:/var/lib/postgresql --network flow-network postgres:latest`
            - OR
            - **Short Form**: `docker run -d --name postgres_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=example -e POSTGRES_DB=tododb -p 5432:5432 -v postgres_data:/var/lib/postgresql --network flow-network postgres:latest`
        - Now run App
            - **Long form**: `docker run --detach --name flow_todos --env DATABASE_URL="postgresql://postgres:example@postgres_db:5432/tododb?schema=public" --env NODE_ENV=production --publish 3000:3000 --network flow-network nischal99/my-todo:latest`
            - OR
            - **Short form**: `docker run -d --name flow_todos -e DATABASE_URL="postgresql://postgres:example@postgres_db:5432/tododb?schema=public" -e NODE_ENV=production -p 3000:3000 --network flow-network nischal99/my-todo:latest`
        - Pg Admin Container if you 

    2. **YAML File**:
        ```bash
            services: # This starts the list of "members" in your project (the containers)
            # --- PART 1: THE DATABASE (The Brain) ---
                db:
                    image: postgres:latest # Downloads the official Postgres software from the internet
                    container_name: postgres_db # Gives the container a specific name on your computer
                    restart: always # If the DB crashes or your PC reboots, Docker starts it back up
                    shm_size: 128mb # "Shared Memory" - Gives Postgres a little extra speed boost

                    environment: # These are the "Settings" or "Login Info" for the database
                    POSTGRES_USER: postgres # The master username
                    POSTGRES_PASSWORD: example # The master password
                    POSTGRES_DB: tododb # The name of the specific "folder" (database) to create inside

                    ports:
                    - "5432:5432" # [Your Computer Port] : [Internal Container Port]
                        # This lets you connect to the DB from outside Docker (like TablePlus)

                    volumes:
                    - postgres_data:/var/lib/postgresql/data # PERSISTENCE: This is the most important part!
                        # It saves your data on your REAL hard drive.
                        # Without this, deleting the container deletes your todos.

                    healthcheck: # This is like an "Alarm Clock" that checks if the DB is awake
                    test: ["CMD-SHELL", "pg_isready -U postgres -d tododb"] # Runs a command to see if DB is ready
                    interval: 5s # Check every 5 seconds
                    timeout: 5s # Give up after 5 seconds
                    retries: 5 # Try 5 times before saying "it's broken"

                    networks:
                    - flow-network # Puts the DB in a "private chat room" called flow-network

                # --- PART 2: THE DATABASE UI (The Visual Viewer) ---
                adminer:
                    image: adminer:latest # A simple website to see your database tables in a browser
                    container_name: adminer_ui
                    restart: always
                    ports:
                    - "8080:8080" # Go to http://localhost:8080 in your browser to use this
                    networks:
                    - flow-network # Must be in the same "chat room" to see the DB

                # --- PART 3: YOUR APP (The Website) ---
                app:
                    build: . # Tells Docker: "Look at the Dockerfile in THIS folder to build my app"
                    image: nischal99/my-todo:latest # After building, name the result "my-todo:latest"
                    container_name: flow_todos
                    restart: always
                    ports:
                        - "3000:3000" # Go to http://localhost:3000 to see your website

                    environment:
                        # This is how the code finds the DB.
                        # NOTICE: We use '@db' (the service name), NOT '@localhost'.
                        # Inside Docker, containers use their names to talk to each other.
                        DATABASE_URL: postgresql://postgres:example@db:5432/tododb?schema=public
                        NODE_ENV: production # Tells the app to run in "Fast/Production" mode

                    depends_on: # ORDER OF OPERATIONS
                        db:
                            condition: service_healthy # Don't start the APP until the DB says "I am healthy and awake!"

                    networks:
                        - flow-network # Join the same chat room so it can talk to the DB

                # --- PART 4: THE INFRASTRUCTURE (The "Virtual" Hardware) ---

                networks:
                    flow-network: # Creates the "Private Chat Room" (Network)
                        driver: bridge # Standard type of network for 99% of apps

                volumes:
                    postgres_data: # Creates the "Virtual Hard Drive" (Volume)
                # This is where your actual data lives safely on your Mac/PC.
            ```

    Simply run: `docker compose up -d` this will do all the job of creating container one by one.
    If you need to only run one service, such as db: `docker compose up db -d`
    What happned:
        - docker compose use the yaml to create network and volume and connected them based on yaml code/instruction.

    > Pro tips: If you change the db credentials or name make sure to also change the volume name or path or delete it and create with same volume name or path because previous credentials and db name is already set in that volume disk, which will cause error of credential/auth error even in your yaml or cmd you have new matching credentials in postgres_db and app env. 








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




## Live Development mode with docker 
Now that we can fairly work with docker: pull, run and even publish our own version of images in internet and share. 

Let's look into how we can leverare docker dev mode so that we don't need to change and build image everytime we fix something on code.

To do so we need to use bind mount, remember how i said we have three ways to mount data into our docker? 

So with bind mount we can map our code with docker container `/app`.
But there is one problem our machine and its underlying configuration is differnt from `docker linux` so just mapping our code won't work rather it break.

So what we do is we bind everything code and its data but we leave `node_modules` as it is in the linux based runtime and our host machine might be differnt even if we use linux its distribution version might not same. 

And to run in development mode we pass `command: pnpm run dev` in yaml file in your app service

But if you have used multi sage build process to reduce that image size by removing `node_modules` then we need to install node_modules first `command: pnpm install & pnpm run dev` this will then create new node_module and bind with anonymous volume. 

```bash
services: # This starts the list of "members" in your project (the containers)
  # --- PART 1: THE DATABASE (The Brain) ---
  db:
    image: postgres:latest # Downloads the official Postgres software from the internet
    container_name: postgres_db # Gives the container a specific name on your computer
    restart: always # If the DB crashes or your PC reboots, Docker starts it back up
    shm_size: 128mb # "Shared Memory" - Gives Postgres a little extra speed boost

    environment: # These are the "Settings" or "Login Info" for the database
      POSTGRES_USER: postgres # The master username
      POSTGRES_PASSWORD: example # The master password
      POSTGRES_DB: tododb # The name of the specific "folder" (database) to create inside

    ports:
      - "5432:5432" # [Your Computer Port] : [Internal Container Port]
        # This lets you connect to the DB from outside Docker (like TablePlus)

    volumes:
      - postgres_data:/var/lib/postgresql # PERSISTENCE: This is the most important part!
        # It saves your data on your REAL hard drive.
        # Without this, deleting the container deletes your todos.

    healthcheck: # This is like an "Alarm Clock" that checks if the DB is awake
      test: ["CMD-SHELL", "pg_isready -U postgres -d tododb"] # Runs a command to see if DB is ready
      interval: 5s # Check every 5 seconds
      timeout: 5s # Give up after 5 seconds
      retries: 5 # Try 5 times before saying "it's broken"

    networks:
      - flow-network # Puts the DB in a "private chat room" called flow-network

  # --- PART 2: THE DATABASE UI (The Visual Viewer) ---
  adminer:
    image: adminer:latest # A simple website to see your database tables in a browser
    container_name: adminer_ui
    restart: always
    ports:
      - "8080:8080" # Go to http://localhost:8080 in your browser to use this
    networks:
      - flow-network # Must be in the same "chat room" to see the DB

  # --- PART 3: YOUR APP (The Website) ---
  app:
    build: . # Tells Docker: "Look at the Dockerfile in THIS folder to build my app"
    image: my-todo:latest # After building, name the result "my-todo:latest"
    container_name: flow_todos
    restart: always
    ports:
      - "3000:3000" # Go to http://localhost:3000 to see your website

    environment:
      # This is how the code finds the DB.
      # NOTICE: We use '@db' (the service name), NOT '@localhost'.
      # Inside Docker, containers use their names to talk to each other.
      DATABASE_URL: postgresql://postgres:example@db:5432/tododb?schema=public
      NODE_ENV: production # Tells the app to run in "Fast/Production" mode
    volumes:
      - type: bind
        source: . # This is the current folder on your computer (where your code lives)
        target: /app # This is the folder inside the container where the code will be available
      - type: volume
        target:
          /app/node_modules # This keeps the "node_modules" folder inside the container, so it doesn't mess with your real files
          # if your image has node_modules during image build it uses that
          # but if you don't have node_modules in your image because you used multi-stage build, then we have to pass run pnpm install in the command to install node_modules in the container
    command:
      pnpm run dev # This is the command to start your app (defined in package.json)
      # if you don't have node_modules in your image due to multi-stage build, then you have to run pnpm install before pnpm run dev to install node_modules in the container

    depends_on: # ORDER OF OPERATIONS
      db:
        condition: service_healthy # Don't start the APP until the DB says "I am healthy and awake!"

    networks:
      - flow-network # Join the same chat room so it can talk to the DB

# --- PART 4: THE INFRASTRUCTURE (The "Virtual" Hardware) ---

networks:
  flow-network: # Creates the "Private Chat Room" (Network)
    driver: bridge # Standard type of network for 99% of apps

volumes:
  postgres_data: # Creates the "Virtual Hard Drive" (Volume)
    # This is where your actual data lives safely on your Mac/PC.
```

So now whatever changes you do in code it immdeately reflects in container app.

And once you are done with changes simply build new image out of you latest updates using `docker compose build`

Make sure to put tag in yaml file in you app service, else it will use your project name as tag.



Live Development Mode
But wait—rebuilding the image every time you fix a typo in your code is a waste of time. We can leverage Live Development Mode using Bind Mounts.
The Problem: Your Mac/Windows node_modules are likely incompatible with the Linux container. Just mapping your folder will break the app.
The Solution: We bind our code folder, but we leave node_modules as a separate volume inside Docker. This ensures Docker uses its own Linux-compatible dependencies.
code
Yaml
app:
    build: .
    image: my-todo:latest
    container_name: flow_todos
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://postgres:example@db:5432/tododb
      NODE_ENV: development
    volumes:
      - type: bind
        source: .      # Map my local code folder...
        target: /app   # ...to the container's app folder
      - type: volume
        target: /app/node_modules # Keep container node_modules isolated!
    command: pnpm run dev # Hot reloading!
    depends_on:
      db:
        condition: service_healthy
    networks:
      - flow-network
Now, any change you make in your code editor instantly reflects in the Dockerized app. Once you are done, you can build your final production image using docker compose build.
Final Takeaway: Bridging the Gap
If you’re sitting where I was two years ago—fearing the "whale"—just start.
I learned that Docker isn't just about "running apps"; it's about reproducibility. It's about being able to say, "I built this system, and it will work anywhere."
Here are my four golden rules:
Linux First: If you don't know the terminal, Docker will always feel like magic. Learn the survival commands first.
Volumes are Marriages: If you don't bind a volume to your database, your data is a one-night stand—gone by morning.
Networking is Chat: Create shared networks so containers can talk via their names, not random IPs.
Dev vs. Prod: Use bind mounts for a fast development experience, but use clean, multi-stage builds for shipping.
The gap between Junior and Senior isn't about how many lines of code you can write. It's about knowing how to ship a system that doesn't break. Docker is the ship.
Happy Dockerizing!
