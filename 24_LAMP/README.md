# how-to :: Create and setup a Digital Ocean Droplet
---
## Overview
How to create an Ubuntu 20.04 Digital Ocean virtual machine (droplet) and set it up with an account and Apache2.

### Estimated Time Cost: 20-40 minutes

### Prerequisites:

- A Digital Ocean account verifyed with a payment method
- Sapience, sentience

## Instructions
#### SSH keys are more secure than passwords and easier to use after setup
1. If you do not have SSH keys on your personal machine, create one by typing 
    ```
    ssh key-gen
    ```
    and copy the contents of the file 
    ```
    cat /Users/<your_username>/.ssh/id_rsa.pub
    ```
   If you *do* have an ssh key and would like to use it, just run the second command and copy that public key
2. Go to https://cloud.digitalocean.com/account/security, click "Add SSH Key" and paste the contents of the desired public key. Give it a name and add the key!
3. Click Create -> Droplets. Choose the Ubuntu 20.04 option with the Basic Plan and Regular Intel with SSD. This costs $5/month, but will not cost you anything 
if you have enough money on your account. You can check how much you owe in the top right in "Estimated Costs".
4. Click the "Create Droplet" button.

### Initial Server Setup With Ubuntu 20.04
1. Connect to the as the root user. You can find the server ip in the droplets page of your Digital Ocean dashboard
   ```
   ssh root@<your_server_ip>
   ```
   Alternatively, you can go to https://cloud.digitalocean.com/droplets/. Click on the droplet you just created, go to the "Acess" tab and click "Launch Droplet Console".
3. Once you are logged in as root, we will add a new account to log into instead of root. (replace <your_username> with your username)
   ```
   adduser <your_username>
   ```
4. Grant your account with admin privileges
   ```
   usermod -aG sudo <your_username>
   ```
   Now you can use sudo on your new account!
5. Set up a basic firewall to make sure only connections to certain services are allowed.
   ```
   ufw allow OpenSSH
   ```
   ```
   ufw enable
   ```
   You can see that SSH connections are allowed by typing
   ```
   ufw status
   ```
   ```Output
   Status: active

   To                         Action      From
   --                         ------      ----
   OpenSSH                    ALLOW       Anywhere
   OpenSSH (v6)               ALLOW       Anywhere (v6)
   ```
   Currently the firewall is only allowing SSH connections.
6. You will need a copy of your local public key to use the new account
   ```
   rsync --archive --chown=<your_username>:<your_username> ~/.ssh /home/<your_username>
   ```
7. You should be able to log into the new user account by typing
   ```
   ssh <your_username>@<your_server_ip>
   ```
   Alternatively, you can go to https://cloud.digitalocean.com/droplets/. Click on the droplet you just created, go to the "Acess" tab and change the "Log in as" field 
   from "root" to <your_username>. Click "Launch Droplet Console".
You should be good to go to install the apache web server! 

### Install the Apache Web Server on Ubuntu 20.04
1. Install the Apache2 package and make sure to update and upgrade apt.
   ```
   sudo apt update
   ```
   ```
   sudo apt upgrade
   ```
   ```
   sudo apt install apache2
   ```
2. Adjust firewall to allow Apache2 access to the default web ports
   ```
   sudo ufw allow 'Apache'
   ```
   Verify the change by typing
   ```
   sudo ufw status
   ```
   ```
   Output
   Status: active
   To                         Action      From
   --                         ------      ----
   OpenSSH                    ALLOW       Anywhere                  
   Apache                     ALLOW       Anywhere                
   OpenSSH (v6)               ALLOW       Anywhere (v6)             
   Apache (v6)                ALLOW       Anywhere (v6)    
   ```
3. Check with the systemd init system to make sure the service is running by typing:
   ```
   sudo systemctl status apache2
   ```
   ```
   Output
    ● apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2020-04-23 22:36:30 UTC; 20h ago
       Docs: https://httpd.apache.org/docs/2.4/
    Main PID: 29435 (apache2)
      Tasks: 55 (limit: 1137)
     Memory: 8.0M
     CGroup: /system.slice/apache2.service
             ├─29435 /usr/sbin/apache2 -k start
             ├─29437 /usr/sbin/apache2 -k start
             └─29438 /usr/sbin/apache2 -k start
   ```
Go to http://<your_server_ip>, you should see the default Ubuntu 20.04 Apache web page with a red "It Works!" page. 

### Resources
* https://docs.digitalocean.com/tutorials/recommended-droplet-setup/
* https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
* https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04
---

Accurate as of (last update): 2021-mm-dd

#### Contributors:  
Noakai Aronesty, pd2  
