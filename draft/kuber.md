

## Getting Started

Kubernetes, abbreviated as K8s (where the "8" represents the eight letters between "K" and "s" in the full name), is an open-source container orchestration platform originally developed by Google and released in 2014.

For small app which doesn't scale we can use docker alone to host and maintain. But as the traffic grows there is no way docker alone can handle containers and thats where K8s comes in, as we need a bunch of containers to maintain the growing traffic and we need to keep all the containers in check.

It is like a manager to all the containers which manages: configure, organize, and delete.


## Kubernetes System Architecuture
To understand the K8s architecture we need following:
1. **Cluster**: everything that K8s is comprised of *controlplane* and *dataplane*.
2. **Control Plane**: Comprised of nodes that manages 