function Check_Program_Installed {
    [CmdletBinding()]
    Param(
        [Parameter(Position = 0, Mandatory=$true, ValueFromPipeline = $true)]
        $Name
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
}

Check_Program_Installed "Steam"