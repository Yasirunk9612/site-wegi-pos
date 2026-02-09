const supportNumber = "0710803028";
const downloadUrl = "https://example.com/VegetableShopPOS_Setup_v1.0.0.exe";

const copySupportButton = document.getElementById("copySupport");
const copyDownloadButton = document.getElementById("copyDownload");

const copyToClipboard = async (value) => {
    if (!navigator.clipboard) {
        alert("Clipboard not available. Please copy manually: " + value);
        return;
    }

    try {
        await navigator.clipboard.writeText(value);
        alert("Copied: " + value);
    } catch (error) {
        alert("Copy failed. Please copy manually: " + value);
    }
};

if (copySupportButton) {
    copySupportButton.addEventListener("click", () => copyToClipboard(supportNumber));
}

if (copyDownloadButton) {
    copyDownloadButton.addEventListener("click", () => copyToClipboard(downloadUrl));
}
