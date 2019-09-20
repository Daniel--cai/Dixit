provider "google" {
  credentials = "${file("../../secrets/account.json")}"
  project     = "${var.project_name}"
  region      = "us-central1"
  zone        = "us-central1-a"
}
