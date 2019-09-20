
resource "google_container_cluster" "default" {
  name                     = "${var.cluster_name}"
  project                  = "${var.project_name}"
  location                 = "us-central1"
  initial_node_count       = "${var.gcp_cluster_count}"
  remove_default_node_pool = true

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
}
