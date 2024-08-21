<h1>SuiteCRM Helm Chart</h1>

This Helm chart deploys a SuiteCRM instance on a Openshift/Kubernetes cluster using the Helm package manager.

- [Dependecies](#dependecies)
- [Components](#components)
  - [Network Policies](#network-policies)
- [Installing the Chart](#installing-the-chart)
- [Parameters](#parameters)
  - [Global Parameters](#global-parameters)

# Dependecies

- [Bitnami MariaDB Galera Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/mariadb-galera)
- [Bitnami Redis Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis-cluster)
- [BCGov Backup Storage Helm Chart](https://github.com/bcgov/helm-charts/tree/master/charts/backup-storage)

To update the dependencies, run the following command:

```bash
helm dependency update helm/suitecrm
```

# Components

| Component | File | Description | Required |
| --------- | ---- | ----------- | -------- |
| Deployment | [deployment.yaml](./templates/deployment.yaml) | SuiteCRM Deployment replica set | Yes |
| Service | [service.yaml](./templates/service.yaml) | Load balancer for SuiteCRM pods | Yes |
| HPA (Horizontal Pod Autoscaler) | [hpa.yaml](./templates/hpa.yaml) | Autoscale SuiteCRM pods based on CPU and Memory utilization | No |
| Ingress | [ingress.yaml](./templates/ingress.yaml) | Ingress for external access to SuiteCRM | No |
| Network Policies | [network-policy.yaml](./templates/network-policy.yaml) | Network policies controlling communications between SuiteCRM pods, CRON Jobs, and dependencies | Yes |
| App CRON Job | [cronjob.yaml](./templates/app-cron-job.yaml) | CRON Job to run SuiteCRM scheduled tasks | Yes |
| S3 Files Backup CRON Job | [s3-backup-cronjob.yaml](./templates/s3-file-backup-cron-job.yaml) | CRON Job to backup SuiteCRM files to S3 | No |

> [!INFO]
>
> Non-required components are optional and can be set as `enabled: false` in the `values.yaml` file.

## Network Policies

The file [network-policy.yaml](./templates/network-policy.yaml) file contains all the network policies that controls all communications between SuiteCRM pods, CRON Jobs, and dependencies. The network policies are as follows:

| Policy | Description | Required |
| ------ | ----------- | -------- |
| `allow-from-openshift-ingress` | Allow external incoming traffic to SuiteCRM pods | No |
| `allow-app-to-db` | Allow SuiteCRM pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-cron-to-db` | Allow CRON Job Pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-backup-to-db` | Allow Database Backup Pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-app-to-redis` | Allow SuiteCRM pods to communicate with Redis Cluster Pods | Yes |

# Installing the Chart

> [!WARNING]
>
> Always make sure to use the `-n <license plate>-<namespace>` flag to ensure you are running commands in the correct namespace.

> [!INFO]
>
> If you want to deploy the SuiteCRM chart into Openshift, make sure you are [logged in](../../README.md#login-to-openshift-using-oc-cli) and have the correct permissions to deploy resources.

> [!TIP]
>
> If you run Kubernetes locally, make sure you are selecting the correct context before running the following commands. It might be the case that you switched to the Openshift context. If you are wondering why you are not seing the resources in the cluster, that might be the case.

To install the SuiteCRM chart with the release name `my-release`:

```bash
helm install -n <license plate>-<namespace> my-release helm/suitecrm
```

# Parameters

## Global Parameters

| Name | Description | Required | Default |
| ---- | ----------- | -------- | ------- |
