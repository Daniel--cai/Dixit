resource "google_container_cluster" "main" {
  name = "main"
  project = "${var.project_name}"
  zone = "us-central1"
  remove_default_node_pool = true

  lifecycle {
    ignore_changes = ["node_pool"]
  }

  node_pool {
    name = "default-pool"
  }
  addons_config {
    http_load_balancing {
      disabled = true
    }

    horizontal_pod_autoscaling {
      disabled = true
    }
  }
}


