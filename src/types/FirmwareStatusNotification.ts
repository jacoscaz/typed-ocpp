
export interface FirmwareStatusNotification {
  status: "Downloaded" | "DownloadFailed" | "Downloading" | "Idle" | "InstallationFailed" | "Installing" | "Installed";
}
