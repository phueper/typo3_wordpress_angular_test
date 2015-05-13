# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    # Every Vagrant virtual environment requires a box to build off of.
    config.vm.box = "ubuntu_15.04_cloud_amd64"
    config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/vivid/current/vivid-server-cloudimg-amd64-vagrant-disk1.box"
    
    config.vm.provider :virtualbox do |virtualbox|
        virtualbox.customize ["modifyvm", :id, "--memory", "1024"]
        virtualbox.customize ["modifyvm", :id, "--cpus", "1"]
        virtualbox.customize ["modifyvm", :id, "--ioapic", "on"]
        virtualbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        # set timesync parameters to keep the clocks better in sync
        # sync time every 10 seconds
        virtualbox.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-interval", 10000 ]
        # adjustments if drift > 100 ms 
        virtualbox.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-min-adjust", 100 ]
        # sync time on restore
        virtualbox.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-on-restore", 1 ]
        # sync time on start
        virtualbox.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-start", 1 ]
        # at 1 second drift, the time will be set and not "smoothly" adjusted
        virtualbox.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
    end

    # since we use the /vagrant folder, we need the www-data user
    # to own it, otherwise logs and cache cannot be written.
    # Since the uid/gid of apache is not known on first vagrant up, we use the numerical uid... of course that is
    # very much dependent on the provisioning and box file... might need to be changed when anything changes...
    # another option from http://ryansechrest.com/2014/04/unable-set-permissions-within-shared-folder-using-vagrant-virtualbox/
    # would be to let apache run as the vagrant user... but that probably causes more pain than gain?
    config.vm.synced_folder ".", "/vagrant", mount_options: ["uid=33","gid=33"]


    # forward apache
    config.vm.network :forwarded_port, guest: 80, host: 10080
    # forward mysql
    config.vm.network :forwarded_port, guest: 3306, host: 13306

    # Use rbconfig to determine if we're on a windows host or not.
    require 'rbconfig'
    # tesing: is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin|linux-gnu/)
    is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)
    if is_windows
      # Provisioning configuration for shell script. The script installs ansible on the VM and then runs ansible local on the VM
      config.vm.provision "shell" do |sh|
        sh.path = "ansible/windows.sh"
        sh.args = "ansible/playbook.yml ansible/windows_ansible_inventory"
      end
    else
        # use ansible on the host to do the provisioning
        config.vm.provision "ansible" do |ansible|
            ansible.playbook = "ansible/playbook.yml"
            ansible.verbose = 'vv'
        end
    end

    # after vagrant up apache is not running, since it fails starting in sysinit/upstart because /vagrant is not available... 
    # so let's restart it always 
    config.vm.provision :shell, :inline => "sudo service apache2 restart", run: "always"

end
