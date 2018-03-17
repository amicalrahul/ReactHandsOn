# Install the carbon module to update the host file entry
# http://get-carbon.org/about_Carbon_Installation.html
# Install-Module -Name 'Carbon' -AllowClobber
# add a new entry in hosts file in c:/windows/system32/drivers/etc/hosts
# get-command -Module 'carbon'
# get-command get-iisapppool | Measure-Object
# get-iisapppool
# show-command unInstall-IisWebsite
#Uninstall-IisWebsite -Name test.com
#uninstall-iisapppool test.com
#Test-IisWebsite site1.com
#Show-Command get-content
#Show-Command install-iisapppool
#get-content C:\WINDOWS\System32\drivers\etc\hosts
# Remove-HostsEntry -HostName 'Test.com'

Clear-Host
Import-Module 'Carbon'
$siteName = "reacthandson.com"
$siteHostName = $siteName
$appPoolName = $siteName
$port = 80
$sitePhysicalPath = "D:\Temp\react-hands-on\ReactHandsOn"
$siteBinding = "http/*:80:" +  $siteHostName

# Uninstall-iisapppool $siteName
# Uninstall-IisWebsite -Name $siteHostName
# Remove-HostsEntry -HostName $siteHostName

Install-IisAppPool -Name $appPoolName -ManagedRuntimeVersion v4.0
Install-IisWebsite -Name $siteName -PhysicalPath $sitePhysicalPath -AppPoolName $appPoolName -Binding $siteBinding -Force
set-hostsentry -IpAddress 127.0.0.1 -hostname $siteHostName -description $siteHostname

#testing the website
Invoke-WebRequest -uri $siteName  | select Content 
