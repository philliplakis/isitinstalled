[CmdletBinding()]

Param(
    [Parameter(Mandatory=$true)][string]$Name
)
$app = Get-ItemProperty -Path "HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*" | 
            Where-Object { $_.DisplayName -match $Name } | 
            Select-Object DisplayName, DisplayVersion, InstallDate, Version
if ($app) {
    return write-host true
}
else  {
    write-host false
}
