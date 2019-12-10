// General Variables
variable "linux_admin_username" {
  type        = "string"
  description = "User name for authentication to the Kubernetes linux agent virtual machines in the cluster."
}
variable "linux_admin_password" {
  type        = "string"
  description = "The password for the Linux admin account."
}
// GCP Variables
variable "gcp_cluster_count" {
  type        = "string"
  description = "Count of cluster instances to start."
}
variable "cluster_name" {
  type        = "string"
  description = "Cluster name for the GCP Cluster."
}

variable "cluster_zone" {
  type        = "string"
  description = "Cluster zone for the GCP Cluster."
}

variable "project_name" {
  type        = "string"
  description = "Cluster name for the GCP Cluster."
}

variable "machine_type" {
  type        = "string"
  description = "Machine type for nodes"
}


// GCP Outputs
output "gcp_cluster_endpoint" {
  value = "${google_container_cluster.default.endpoint}"
}
output "gcp_cluster_name" {
  value = "${google_container_cluster.default.name}"
}
