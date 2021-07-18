---
title: কীভাবে XAMPP-তে ওয়ার্ডপ্রেস ইনস্টল করবেন
description: Install wordpress in xampp in windows pc
date: 2021-1-1
tags: [Wordpress]
thumbnail: 'https://res.cloudinary.com/bengalcoder/image/upload/v1626540318/how-to-install-wordpress-in-your-local-computer_hstiom.jpg'
video: Et7hBGqXRvg
published: true
author: Jahid
avatar: https://res.cloudinary.com/bengalcoder/image/upload/v1626592843/jahid_bo0fiu.png
---

We are geeks, we love to play with code. What if you are playing with wordpress code and suddenly your whole website brake down. what will you do ? Why not do it in the local host and once it is done we can deploy it to the hosting.

Enough reading let’s Install wordpress in your local computer. In order to install wordpress follow the below steps.

## Step 1: Install Xampp

If Xampp is not installed in your computer then we need to install it. Installing xampp is as easy as installing some other software in windows. Click the button and install xampp in your computer.

[Download Xampp for Windows](https://www.apachefriends.org/download.html)

ok. once you have installed the xampp software let’s scroll to the next step.

## Step 2: Download WordPress

Now you have to download WordPress. Click the link to download wordpress in your computer.

[Download Wordpress](https://wordpress.org/download/)

## Step 3: Create a MySql Database

We have downloaded all the nececery software and wordpress it self now you have to create a Database. Creating database in xampp is very easy. First Open the Xampp Software and then start Apache and MySql.

![Starting Apache server and MySQL in Xampp](https://res.cloudinary.com/bengalcoder/image/upload/v1626588432/Starting-apache-and-mysql-in-xampp_azpl4n.jpg)

now open the following URL inside your browser.

```shell
http://localhost/phpmyadmin
```

Let’s create a Database. Click on new from Rightsidebar. Give your database a name and click on create.

![Creating Database in MySQL](https://res.cloudinary.com/bengalcoder/image/upload/v1626588522/create-a-mysql-database_emirx6.jpg)

## Step 4: Extract the WordPress .zip File to xampp htdocs folder

Remember Step 2? We have already downloaded WordPress in our Computer Now we are going to use it. Copy the .zip file and go to your C Drive then Xampp then htdocs folder and Paste the file here. Now extract the .zip file. You may rename the WordPress folder to anything.
Final Step: Install WordPress

Now open the browser go to `localhost/*Installation _Path`

Replace the Installation path with the folder name on which you have extracted the WordPress files.

After opening the above URL will see a Installation screen where you have to put the database name and all other things.

First choose your language. then on the screen click on Let’s go button.

On the Third screen, First you have enter the database name which we have already know from the step 2.

At the username field write root and leave password field empty and click on Submit and click on Run the Installation.

![Connecting WordPress with My SQL Database](https://res.cloudinary.com/bengalcoder/image/upload/v1626588595/connencting-wordpress-with-database_xl2dnz.jpg)

Now fill the form with appropiate details.

![WordPress Installation Screen](https://res.cloudinary.com/bengalcoder/image/upload/v1626588630/wordpress-installation_q4fzzf.jpg)

That's it 👨‍💻

Congratulation🎉 you have successfully installed wordpress using Xampp
