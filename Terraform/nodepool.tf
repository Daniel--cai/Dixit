resource "google_container_node_pool" "default" {
  name       = "node-pool"
  project    = "${var.project_name}"
  location   = "us-central1"
  cluster    = "${google_container_cluster.default.name}"
  node_count = 3

  node_config {
    preemptible  = true
    machine_type = "${var.machine_type}"

    metadata = {
      disable-legacy-endpoints = "true"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write"
    ]
  }
}
