resource "google_container_node_pool" "ingress" {
  name       = "ingress"
  zone       = "us-central1"
  cluster    = "${google_container_cluster.main.name}"
  node_count = 1

  management = {
    auto_repair  = true
    auto_upgrade = false
  }

  node_config {
    preemptible  = false
    machine_type = "f1-micro"
    disk_size_gb = 20

    taint = {
      key    = "ingress"
      value  = "true"
      effect = "NO_EXECUTE"
    }

    labels = {
      ingress = "true"
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/compute",
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}

resource "google_container_node_pool" "main" {
  name       = "main"
  zone       = "${var.cluster_zone}"
  cluster    = "${google_container_cluster.main.name}"
  node_count = 1

  management = {
    auto_repair  = true
    auto_upgrade = true
  }

  node_config {
    preemptible  = true
    machine_type = "${var.machine_type}"

    oauth_scopes = [
      "https://www.googleapis.com/auth/compute",
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}